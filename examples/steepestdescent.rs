// Copyright 2018 Stefan Kroboth
//
// Licensed under the Apache License, Version 2.0 <LICENSE-APACHE or
// http://apache.org/licenses/LICENSE-2.0> or the MIT license <LICENSE-MIT or
// http://opensource.org/licenses/MIT>, at your option. This file may not be
// copied, modified, or distributed except according to those terms.

#![feature(custom_attribute)]
#![feature(unrestricted_attribute_tokens)]
#![allow(unused_attributes)]

extern crate argmin;
#[macro_use]
extern crate argmin_codegen;
use argmin::prelude::*;
use argmin::solver::gradientdescent::*;
// use argmin::solver::linesearch::BacktrackingLineSearch;
use argmin::solver::linesearch::HagerZhangLineSearch;
// use argmin::solver::linesearch::MoreThuenteLineSearch;
use argmin::testfunctions::{rosenbrock_2d, rosenbrock_2d_derivative};

fn rosenbrock(x: &Vec<f64>) -> f64 {
    rosenbrock_2d(x, 1.0, 100.0)
}

fn rosenbrock_gradient(x: &Vec<f64>) -> Vec<f64> {
    rosenbrock_2d_derivative(x, 1.0, 100.0)
}

#[derive(Clone, ArgminOperator)]
#[output_type(f64)]
#[parameters_type(Vec<f64>)]
#[hessian_type(())]
#[cost_function(rosenbrock)]
#[gradient(rosenbrock_gradient)]
struct MyProblem {}

fn run() -> Result<(), Error> {
    // Define cost function
    let cost = MyProblem {};

    // Define inital parameter vector
    let init_param: Vec<f64> = vec![1.2, 1.2];
    // let init_param: Vec<f64> = vec![-1.2, 1.0];

    // let mut linesearch = MoreThuenteLineSearch::new(&cost);
    let mut linesearch = HagerZhangLineSearch::new(&cost);
    // let mut linesearch = BacktrackingLineSearch::new(&cost);
    // linesearch.set_initial_alpha(1.0)?;
    // linesearch.set_initial_alpha(10.0)?;
    linesearch.set_max_iters(200);
    // linesearch.set_rho(0.5);

    let iters = 10000;
    let mut solver = SteepestDescent::new(&cost, init_param)?;
    // solver.set_linesearch(Box::new(linesearch));
    solver.set_max_iters(iters);
    solver.add_logger(ArgminSlogLogger::term_noblock());

    solver.run()?;

    // Wait a second (lets the logger flush everything before printing to screen again)
    std::thread::sleep(std::time::Duration::from_secs(1));
    println!("{:?}", solver.result());
    Ok(())
}

fn main() {
    if let Err(ref e) = run() {
        println!("{} {}", e.as_fail(), e.backtrace());
        std::process::exit(1);
    }
}
