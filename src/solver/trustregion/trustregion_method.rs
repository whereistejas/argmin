// Copyright 2018 Stefan Kroboth
//
// Licensed under the Apache License, Version 2.0 <LICENSE-APACHE or
// http://apache.org/licenses/LICENSE-2.0> or the MIT license <LICENSE-MIT or
// http://opensource.org/licenses/MIT>, at your option. This file may not be
// copied, modified, or distributed except according to those terms.

//! # References:
//!
//! [0] Jorge Nocedal and Stephen J. Wright (2006). Numerical Optimization.
//! Springer. ISBN 0-387-30303-0.

use crate::prelude::*;
use crate::solver::trustregion::reduction_ratio;
use serde::{Deserialize, Serialize};

/// The trust region method approximates the cost function within a certain region around the
/// current point in parameter space. Depending on the quality of this approximation, the region is
/// either expanded or contracted.
///
/// The calculation of the actual step length and direction is done by one of the following
/// methods:
///
/// * [Cauchy point](../cauchypoint/struct.CauchyPoint.html)
/// * [Dogleg method](../dogleg/struct.Dogleg.html)
/// * [Steihaug method](../steihaug/struct.Steihaug.html)
///
/// This subproblem can be set via `set_subproblem(...)`. If this is not provided, it will default
/// to the Steihaug method.
///
/// # Example
///
/// ```
/// extern crate argmin;
/// extern crate ndarray;
/// use argmin::prelude::*;
/// use argmin::solver::trustregion::{CauchyPoint, Dogleg, Steihaug, TrustRegion};
/// use argmin::testfunctions::{rosenbrock_2d, rosenbrock_2d_derivative, rosenbrock_2d_hessian};
/// use ndarray::{Array, Array1, Array2};
/// # use serde::{Deserialize, Serialize};
///
/// # #[derive(Clone, Default, Serialize, Deserialize)]
/// # struct MyProblem {}
/// #
/// # impl ArgminOp for MyProblem {
/// #     type Param = Array1<f64>;
/// #     type Output = f64;
/// #     type Hessian = Array2<f64>;
/// #
/// #     fn apply(&self, p: &Self::Param) -> Result<Self::Output, Error> {
/// #         Ok(rosenbrock_2d(&p.to_vec(), 1.0, 100.0))
/// #     }
/// #
/// #     fn gradient(&self, p: &Self::Param) -> Result<Self::Param, Error> {
/// #         Ok(Array1::from_vec(rosenbrock_2d_derivative(
/// #             &p.to_vec(),
/// #             1.0,
/// #             100.0,
/// #         )))
/// #     }
/// #
/// #     fn hessian(&self, p: &Self::Param) -> Result<Self::Hessian, Error> {
/// #         let h = rosenbrock_2d_hessian(&p.to_vec(), 1.0, 100.0);
/// #         Ok(Array::from_shape_vec((2, 2), h)?)
/// #     }
/// # }
/// #
/// # fn run() -> Result<(), Error> {
/// // Define cost function
/// let cost = MyProblem {};
///
/// // Define inital parameter vector
/// // easy case
/// // let init_param: Array1<f64> = Array1::from_vec(vec![1.2, 1.2]);
/// // tough case
/// let init_param: Array1<f64> = Array1::from_vec(vec![-1.2, 1.0]);
///
/// // Set up the subproblem
/// let mut subproblem = Steihaug::new(cost.clone());
/// // let mut subproblem = CauchyPoint::new(cost.clone());
/// // let mut subproblem = Dogleg::new(cost.clone());
/// subproblem.set_max_iters(2);
///
/// // Set up the subproblem
/// let mut subproblem = Steihaug::new(cost.clone());
/// // let mut subproblem = CauchyPoint::new(cost.clone());
/// // let mut subproblem = Dogleg::new(cost.clone());
/// subproblem.set_max_iters(2);
///
/// // Set up solver
/// let mut solver = TrustRegion::new(cost, init_param, subproblem);
///
/// // Set the maximum number of iterations
/// solver.set_max_iters(2_000);
///
/// // Attach a logger
/// solver.add_logger(ArgminSlogLogger::term());
///
/// // Run solver
/// solver.run()?;
///
/// // Wait a second (lets the logger flush everything before printing again)
/// std::thread::sleep(std::time::Duration::from_secs(1));
///
/// // Print result
/// println!("{:?}", solver.result());
/// #     Ok(())
/// # }
/// #
/// # fn main() {
/// #     if let Err(ref e) = run() {
/// #         println!("{} {}", e.as_fail(), e.backtrace());
/// #         std::process::exit(1);
/// #     }
/// # }
/// ```
///
/// # References:
///
/// [0] Jorge Nocedal and Stephen J. Wright (2006). Numerical Optimization.
/// Springer. ISBN 0-387-30303-0.
#[derive(ArgminSolver, Serialize, Deserialize)]
pub struct TrustRegion<O, R>
where
    O: ArgminOp<Output = f64>,
    O::Param: ArgminMul<f64, O::Param>
        + ArgminWeightedDot<O::Param, f64, O::Hessian>
        + ArgminNorm<f64>
        + ArgminDot<O::Param, f64>
        + ArgminAdd<O::Param, O::Param>
        + ArgminSub<O::Param, O::Param>
        + ArgminZero
        + ArgminMul<f64, O::Param>,
    O::Hessian: ArgminDot<O::Param, O::Param>,
    R: ArgminTrustRegion<Param = O::Param, Output = f64, Hessian = O::Hessian>,
{
    /// Radius
    radius: f64,
    /// Maximum Radius
    max_radius: f64,
    /// eta \in [0, 1/4)
    eta: f64,
    /// subproblem
    subproblem: Box<R>,
    /// f(xk)
    fxk: f64,
    /// mk(0)
    mk0: f64,
    /// base
    base: ArgminBase<O>,
}

impl<O, R> TrustRegion<O, R>
where
    O: ArgminOp<Output = f64>,
    O::Param: ArgminMul<f64, O::Param>
        + ArgminWeightedDot<O::Param, f64, O::Hessian>
        + ArgminNorm<f64>
        + ArgminDot<O::Param, f64>
        + ArgminAdd<O::Param, O::Param>
        + ArgminSub<O::Param, O::Param>
        + ArgminZero
        + ArgminMul<f64, O::Param>,
    O::Hessian: ArgminDot<O::Param, O::Param>,
    R: ArgminTrustRegion<Param = O::Param, Output = f64, Hessian = O::Hessian>,
{
    /// Constructor
    ///
    /// Parameters:
    ///
    /// `operator`: operator
    pub fn new(operator: O, param: O::Param, subproblem: R) -> Self {
        let base = ArgminBase::new(operator, param);
        TrustRegion {
            radius: 1.0,
            max_radius: 100.0,
            eta: 0.125,
            subproblem: Box::new(subproblem),
            fxk: std::f64::NAN,
            mk0: std::f64::NAN,
            base,
        }
    }

    /// set radius
    pub fn set_radius(&mut self, radius: f64) -> &mut Self {
        self.radius = radius;
        self
    }

    /// Set maximum radius
    pub fn set_max_radius(&mut self, max_radius: f64) -> &mut Self {
        self.max_radius = max_radius;
        self
    }

    /// Set eta
    pub fn set_eta(&mut self, eta: f64) -> Result<&mut Self, Error> {
        if eta >= 0.25 || eta < 0.0 {
            return Err(ArgminError::InvalidParameter {
                text: "TrustRegion: eta must be in [0, 1/4).".to_string(),
            }
            .into());
        }
        self.eta = eta;
        Ok(self)
    }

    fn m(&self, p: &O::Param) -> f64 {
        self.fxk + p.dot(&self.cur_grad()) + 0.5 * p.weighted_dot(&self.cur_hessian(), &p)
    }
}

impl<O, R> ArgminIter for TrustRegion<O, R>
where
    O: ArgminOp<Output = f64>,
    O::Param: ArgminMul<f64, O::Param>
        + ArgminWeightedDot<O::Param, f64, O::Hessian>
        + ArgminNorm<f64>
        + ArgminDot<O::Param, f64>
        + ArgminAdd<O::Param, O::Param>
        + ArgminSub<O::Param, O::Param>
        + ArgminZero
        + ArgminMul<f64, O::Param>,
    O::Hessian: ArgminDot<O::Param, O::Param>,
    R: ArgminTrustRegion<Param = O::Param, Output = f64, Hessian = O::Hessian>,
{
    type Param = O::Param;
    type Output = f64;
    type Hessian = O::Hessian;

    fn init(&mut self) -> Result<(), Error> {
        let param = self.cur_param();
        let grad = self.gradient(&param)?;
        self.set_cur_grad(grad);
        let hessian = self.hessian(&param)?;
        self.set_cur_hessian(hessian);
        self.fxk = self.apply(&param)?;
        self.mk0 = self.fxk;
        Ok(())
    }

    fn next_iter(&mut self) -> Result<ArgminIterData<Self::Param>, Error> {
        let g = self.cur_grad();
        let h = self.cur_hessian();
        self.subproblem.set_grad(g);
        self.subproblem.set_hessian(h);
        self.subproblem.set_radius(self.radius);
        let pk = self.subproblem.run_fast()?.param;
        let new_param = pk.add(&self.cur_param());
        let fxkpk = self.apply(&new_param)?;
        let mkpk = self.m(&pk);
        let rho = reduction_ratio(self.fxk, fxkpk, self.mk0, mkpk);

        let pk_norm = pk.norm();

        let cur_radius = self.radius;
        self.radius = if rho < 0.25 {
            0.25 * pk_norm
        } else if rho > 0.75 && (pk_norm - self.radius).abs() <= 10.0 * std::f64::EPSILON {
            self.max_radius.min(2.0 * self.radius)
        } else {
            self.radius
        };

        let mut out = if rho > self.eta {
            self.fxk = fxkpk;
            self.mk0 = fxkpk;
            let grad = self.gradient(&new_param)?;
            self.set_cur_grad(grad);
            let hessian = self.hessian(&new_param)?;
            self.set_cur_hessian(hessian);
            ArgminIterData::new(new_param, fxkpk)
        } else {
            ArgminIterData::new(self.cur_param(), self.fxk)
        };
        let kv = make_kv!("radius" => cur_radius;);
        out.add_kv(kv);

        Ok(out)
    }
}