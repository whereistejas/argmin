(function() {var implementors = {};
implementors["argmin"] = [{text:"impl&lt;T, O&gt; <a class=\"trait\" href=\"argmin/prelude/trait.ArgminSolver.html\" title=\"trait argmin::prelude::ArgminSolver\">ArgminSolver</a> for <a class=\"struct\" href=\"argmin/solver/conjugategradient/cg/struct.ConjugateGradient.html\" title=\"struct argmin::solver::conjugategradient::cg::ConjugateGradient\">ConjugateGradient</a>&lt;T, O&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + <a class=\"trait\" href=\"argmin/prelude/trait.ArgminSub.html\" title=\"trait argmin::prelude::ArgminSub\">ArgminSub</a>&lt;T, T&gt; + <a class=\"trait\" href=\"argmin/prelude/trait.ArgminAdd.html\" title=\"trait argmin::prelude::ArgminAdd\">ArgminAdd</a>&lt;T, T&gt; + <a class=\"trait\" href=\"argmin/prelude/trait.ArgminMul.html\" title=\"trait argmin::prelude::ArgminMul\">ArgminMul</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f64.html\">f64</a>, T&gt; + <a class=\"trait\" href=\"argmin/prelude/trait.ArgminDot.html\" title=\"trait argmin::prelude::ArgminDot\">ArgminDot</a>&lt;T, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f64.html\">f64</a>&gt; + <a class=\"trait\" href=\"argmin/prelude/trait.ArgminScaledAdd.html\" title=\"trait argmin::prelude::ArgminScaledAdd\">ArgminScaledAdd</a>&lt;T, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f64.html\">f64</a>, T&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;O: <a class=\"trait\" href=\"argmin/prelude/trait.ArgminOperator.html\" title=\"trait argmin::prelude::ArgminOperator\">ArgminOperator</a>&lt;Parameters = T, OperatorOutput = T, Hessian = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>&gt;,&nbsp;</span>",synthetic:false,types:["argmin::solver::conjugategradient::cg::ConjugateGradient"]},{text:"impl&lt;'a, T, O&gt; <a class=\"trait\" href=\"argmin/prelude/trait.ArgminSolver.html\" title=\"trait argmin::prelude::ArgminSolver\">ArgminSolver</a> for <a class=\"struct\" href=\"argmin/solver/conjugategradient/nonlinear_cg/struct.NonlinearConjugateGradient.html\" title=\"struct argmin::solver::conjugategradient::nonlinear_cg::NonlinearConjugateGradient\">NonlinearConjugateGradient</a>&lt;'a, T, O&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: 'a + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + <a class=\"trait\" href=\"argmin/prelude/trait.ArgminSub.html\" title=\"trait argmin::prelude::ArgminSub\">ArgminSub</a>&lt;T, T&gt; + <a class=\"trait\" href=\"argmin/prelude/trait.ArgminAdd.html\" title=\"trait argmin::prelude::ArgminAdd\">ArgminAdd</a>&lt;T, T&gt; + <a class=\"trait\" href=\"argmin/prelude/trait.ArgminMul.html\" title=\"trait argmin::prelude::ArgminMul\">ArgminMul</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f64.html\">f64</a>, T&gt; + <a class=\"trait\" href=\"argmin/prelude/trait.ArgminNorm.html\" title=\"trait argmin::prelude::ArgminNorm\">ArgminNorm</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f64.html\">f64</a>&gt; + <a class=\"trait\" href=\"argmin/prelude/trait.ArgminDot.html\" title=\"trait argmin::prelude::ArgminDot\">ArgminDot</a>&lt;T, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f64.html\">f64</a>&gt; + <a class=\"trait\" href=\"argmin/prelude/trait.ArgminScaledAdd.html\" title=\"trait argmin::prelude::ArgminScaledAdd\">ArgminScaledAdd</a>&lt;T, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f64.html\">f64</a>, T&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;O: <a class=\"trait\" href=\"argmin/prelude/trait.ArgminOperator.html\" title=\"trait argmin::prelude::ArgminOperator\">ArgminOperator</a>&lt;Parameters = T, OperatorOutput = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f64.html\">f64</a>, Hessian = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>&gt;,&nbsp;</span>",synthetic:false,types:["argmin::solver::conjugategradient::nonlinear_cg::NonlinearConjugateGradient"]},{text:"impl&lt;'a, T, H, O&gt; <a class=\"trait\" href=\"argmin/prelude/trait.ArgminSolver.html\" title=\"trait argmin::prelude::ArgminSolver\">ArgminSolver</a> for <a class=\"struct\" href=\"argmin/solver/gradientdescent/steepestdescent/struct.SteepestDescent.html\" title=\"struct argmin::solver::gradientdescent::steepestdescent::SteepestDescent\">SteepestDescent</a>&lt;'a, T, H, O&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: 'a + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"argmin/prelude/trait.ArgminMul.html\" title=\"trait argmin::prelude::ArgminMul\">ArgminMul</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f64.html\">f64</a>, T&gt; + <a class=\"trait\" href=\"argmin/prelude/trait.ArgminSub.html\" title=\"trait argmin::prelude::ArgminSub\">ArgminSub</a>&lt;T, T&gt; + <a class=\"trait\" href=\"argmin/prelude/trait.ArgminNorm.html\" title=\"trait argmin::prelude::ArgminNorm\">ArgminNorm</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f64.html\">f64</a>&gt; + <a class=\"trait\" href=\"argmin/prelude/trait.ArgminDot.html\" title=\"trait argmin::prelude::ArgminDot\">ArgminDot</a>&lt;T, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f64.html\">f64</a>&gt; + <a class=\"trait\" href=\"argmin/prelude/trait.ArgminScaledAdd.html\" title=\"trait argmin::prelude::ArgminScaledAdd\">ArgminScaledAdd</a>&lt;T, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f64.html\">f64</a>, T&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;H: 'a + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;O: 'a + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"argmin/prelude/trait.ArgminOperator.html\" title=\"trait argmin::prelude::ArgminOperator\">ArgminOperator</a>&lt;Parameters = T, OperatorOutput = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f64.html\">f64</a>, Hessian = H&gt;,&nbsp;</span>",synthetic:false,types:["argmin::solver::gradientdescent::steepestdescent::SteepestDescent"]},{text:"impl&lt;T, O&gt; <a class=\"trait\" href=\"argmin/prelude/trait.ArgminSolver.html\" title=\"trait argmin::prelude::ArgminSolver\">ArgminSolver</a> for <a class=\"struct\" href=\"argmin/solver/landweber/struct.Landweber.html\" title=\"struct argmin::solver::landweber::Landweber\">Landweber</a>&lt;T, O&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + <a class=\"trait\" href=\"argmin/prelude/trait.ArgminScaledSub.html\" title=\"trait argmin::prelude::ArgminScaledSub\">ArgminScaledSub</a>&lt;T, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f64.html\">f64</a>, T&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;O: <a class=\"trait\" href=\"argmin/prelude/trait.ArgminOperator.html\" title=\"trait argmin::prelude::ArgminOperator\">ArgminOperator</a>&lt;Parameters = T, OperatorOutput = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f64.html\">f64</a>, Hessian = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>&gt;,&nbsp;</span>",synthetic:false,types:["argmin::solver::landweber::Landweber"]},{text:"impl&lt;T, H, O&gt; <a class=\"trait\" href=\"argmin/prelude/trait.ArgminSolver.html\" title=\"trait argmin::prelude::ArgminSolver\">ArgminSolver</a> for <a class=\"struct\" href=\"argmin/solver/linesearch/backtracking/struct.BacktrackingLineSearch.html\" title=\"struct argmin::solver::linesearch::backtracking::BacktrackingLineSearch\">BacktrackingLineSearch</a>&lt;T, H, O&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"argmin/prelude/trait.ArgminSub.html\" title=\"trait argmin::prelude::ArgminSub\">ArgminSub</a>&lt;T, T&gt; + <a class=\"trait\" href=\"argmin/prelude/trait.ArgminDot.html\" title=\"trait argmin::prelude::ArgminDot\">ArgminDot</a>&lt;T, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f64.html\">f64</a>&gt; + <a class=\"trait\" href=\"argmin/prelude/trait.ArgminScaledAdd.html\" title=\"trait argmin::prelude::ArgminScaledAdd\">ArgminScaledAdd</a>&lt;T, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f64.html\">f64</a>, T&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;H: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;O: <a class=\"trait\" href=\"argmin/prelude/trait.ArgminOperator.html\" title=\"trait argmin::prelude::ArgminOperator\">ArgminOperator</a>&lt;Parameters = T, OperatorOutput = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f64.html\">f64</a>, Hessian = H&gt;,&nbsp;</span>",synthetic:false,types:["argmin::solver::linesearch::backtracking::BacktrackingLineSearch"]},{text:"impl&lt;T, H, O&gt; <a class=\"trait\" href=\"argmin/prelude/trait.ArgminSolver.html\" title=\"trait argmin::prelude::ArgminSolver\">ArgminSolver</a> for <a class=\"struct\" href=\"argmin/solver/linesearch/hagerzhang/struct.HagerZhangLineSearch.html\" title=\"struct argmin::solver::linesearch::hagerzhang::HagerZhangLineSearch\">HagerZhangLineSearch</a>&lt;T, H, O&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"argmin/prelude/trait.ArgminSub.html\" title=\"trait argmin::prelude::ArgminSub\">ArgminSub</a>&lt;T, T&gt; + <a class=\"trait\" href=\"argmin/prelude/trait.ArgminDot.html\" title=\"trait argmin::prelude::ArgminDot\">ArgminDot</a>&lt;T, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f64.html\">f64</a>&gt; + <a class=\"trait\" href=\"argmin/prelude/trait.ArgminScaledAdd.html\" title=\"trait argmin::prelude::ArgminScaledAdd\">ArgminScaledAdd</a>&lt;T, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f64.html\">f64</a>, T&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;H: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;O: <a class=\"trait\" href=\"argmin/prelude/trait.ArgminOperator.html\" title=\"trait argmin::prelude::ArgminOperator\">ArgminOperator</a>&lt;Parameters = T, OperatorOutput = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f64.html\">f64</a>, Hessian = H&gt;,&nbsp;</span>",synthetic:false,types:["argmin::solver::linesearch::hagerzhang::HagerZhangLineSearch"]},{text:"impl&lt;T, H, O&gt; <a class=\"trait\" href=\"argmin/prelude/trait.ArgminSolver.html\" title=\"trait argmin::prelude::ArgminSolver\">ArgminSolver</a> for <a class=\"struct\" href=\"argmin/solver/linesearch/morethuente/struct.MoreThuenteLineSearch.html\" title=\"struct argmin::solver::linesearch::morethuente::MoreThuenteLineSearch\">MoreThuenteLineSearch</a>&lt;T, H, O&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"argmin/prelude/trait.ArgminSub.html\" title=\"trait argmin::prelude::ArgminSub\">ArgminSub</a>&lt;T, T&gt; + <a class=\"trait\" href=\"argmin/prelude/trait.ArgminDot.html\" title=\"trait argmin::prelude::ArgminDot\">ArgminDot</a>&lt;T, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f64.html\">f64</a>&gt; + <a class=\"trait\" href=\"argmin/prelude/trait.ArgminScaledAdd.html\" title=\"trait argmin::prelude::ArgminScaledAdd\">ArgminScaledAdd</a>&lt;T, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f64.html\">f64</a>, T&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;H: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;O: <a class=\"trait\" href=\"argmin/prelude/trait.ArgminOperator.html\" title=\"trait argmin::prelude::ArgminOperator\">ArgminOperator</a>&lt;Parameters = T, OperatorOutput = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f64.html\">f64</a>, Hessian = H&gt;,&nbsp;</span>",synthetic:false,types:["argmin::solver::linesearch::morethuente::MoreThuenteLineSearch"]},{text:"impl&lt;'a, T, H, O&gt; <a class=\"trait\" href=\"argmin/prelude/trait.ArgminSolver.html\" title=\"trait argmin::prelude::ArgminSolver\">ArgminSolver</a> for <a class=\"struct\" href=\"argmin/solver/newton/newton_cg/struct.NewtonCG.html\" title=\"struct argmin::solver::newton::newton_cg::NewtonCG\">NewtonCG</a>&lt;'a, T, H, O&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: 'a + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"argmin/prelude/trait.ArgminScaledAdd.html\" title=\"trait argmin::prelude::ArgminScaledAdd\">ArgminScaledAdd</a>&lt;T, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f64.html\">f64</a>, T&gt; + <a class=\"trait\" href=\"argmin/prelude/trait.ArgminDot.html\" title=\"trait argmin::prelude::ArgminDot\">ArgminDot</a>&lt;T, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f64.html\">f64</a>&gt; + <a class=\"trait\" href=\"argmin/prelude/trait.ArgminAdd.html\" title=\"trait argmin::prelude::ArgminAdd\">ArgminAdd</a>&lt;T, T&gt; + <a class=\"trait\" href=\"argmin/prelude/trait.ArgminSub.html\" title=\"trait argmin::prelude::ArgminSub\">ArgminSub</a>&lt;T, T&gt; + <a class=\"trait\" href=\"argmin/prelude/trait.ArgminZero.html\" title=\"trait argmin::prelude::ArgminZero\">ArgminZero</a> + <a class=\"trait\" href=\"argmin/prelude/trait.ArgminNorm.html\" title=\"trait argmin::prelude::ArgminNorm\">ArgminNorm</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f64.html\">f64</a>&gt; + <a class=\"trait\" href=\"argmin/prelude/trait.ArgminMul.html\" title=\"trait argmin::prelude::ArgminMul\">ArgminMul</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f64.html\">f64</a>, T&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;H: 'a + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + <a class=\"trait\" href=\"argmin/prelude/trait.ArgminInv.html\" title=\"trait argmin::prelude::ArgminInv\">ArgminInv</a>&lt;H&gt; + <a class=\"trait\" href=\"argmin/prelude/trait.ArgminDot.html\" title=\"trait argmin::prelude::ArgminDot\">ArgminDot</a>&lt;T, T&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;O: 'a + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"argmin/prelude/trait.ArgminOperator.html\" title=\"trait argmin::prelude::ArgminOperator\">ArgminOperator</a>&lt;Parameters = T, OperatorOutput = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f64.html\">f64</a>, Hessian = H&gt;,&nbsp;</span>",synthetic:false,types:["argmin::solver::newton::newton_cg::NewtonCG"]},{text:"impl&lt;T, H, O&gt; <a class=\"trait\" href=\"argmin/prelude/trait.ArgminSolver.html\" title=\"trait argmin::prelude::ArgminSolver\">ArgminSolver</a> for <a class=\"struct\" href=\"argmin/solver/newton/newton_method/struct.Newton.html\" title=\"struct argmin::solver::newton::newton_method::Newton\">Newton</a>&lt;T, H, O&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + <a class=\"trait\" href=\"argmin/prelude/trait.ArgminScaledSub.html\" title=\"trait argmin::prelude::ArgminScaledSub\">ArgminScaledSub</a>&lt;T, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f64.html\">f64</a>, T&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;H: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + <a class=\"trait\" href=\"argmin/prelude/trait.ArgminInv.html\" title=\"trait argmin::prelude::ArgminInv\">ArgminInv</a>&lt;H&gt; + <a class=\"trait\" href=\"argmin/prelude/trait.ArgminDot.html\" title=\"trait argmin::prelude::ArgminDot\">ArgminDot</a>&lt;T, T&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;O: <a class=\"trait\" href=\"argmin/prelude/trait.ArgminOperator.html\" title=\"trait argmin::prelude::ArgminOperator\">ArgminOperator</a>&lt;Parameters = T, OperatorOutput = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f64.html\">f64</a>, Hessian = H&gt;,&nbsp;</span>",synthetic:false,types:["argmin::solver::newton::newton_method::Newton"]},{text:"impl&lt;'a, T, H, O&gt; <a class=\"trait\" href=\"argmin/prelude/trait.ArgminSolver.html\" title=\"trait argmin::prelude::ArgminSolver\">ArgminSolver</a> for <a class=\"struct\" href=\"argmin/solver/quasinewton/bfgs/struct.BFGS.html\" title=\"struct argmin::solver::quasinewton::bfgs::BFGS\">BFGS</a>&lt;'a, T, H, O&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: 'a + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"argmin/prelude/trait.ArgminDot.html\" title=\"trait argmin::prelude::ArgminDot\">ArgminDot</a>&lt;T, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f64.html\">f64</a>&gt; + <a class=\"trait\" href=\"argmin/prelude/trait.ArgminDot.html\" title=\"trait argmin::prelude::ArgminDot\">ArgminDot</a>&lt;T, H&gt; + <a class=\"trait\" href=\"argmin/prelude/trait.ArgminNorm.html\" title=\"trait argmin::prelude::ArgminNorm\">ArgminNorm</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f64.html\">f64</a>&gt; + <a class=\"trait\" href=\"argmin/prelude/trait.ArgminMul.html\" title=\"trait argmin::prelude::ArgminMul\">ArgminMul</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f64.html\">f64</a>, T&gt; + <a class=\"trait\" href=\"argmin/prelude/trait.ArgminScaledAdd.html\" title=\"trait argmin::prelude::ArgminScaledAdd\">ArgminScaledAdd</a>&lt;T, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f64.html\">f64</a>, T&gt; + <a class=\"trait\" href=\"argmin/prelude/trait.ArgminSub.html\" title=\"trait argmin::prelude::ArgminSub\">ArgminSub</a>&lt;T, T&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;H: 'a + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"argmin/prelude/trait.ArgminDot.html\" title=\"trait argmin::prelude::ArgminDot\">ArgminDot</a>&lt;T, T&gt; + <a class=\"trait\" href=\"argmin/prelude/trait.ArgminDot.html\" title=\"trait argmin::prelude::ArgminDot\">ArgminDot</a>&lt;H, H&gt; + <a class=\"trait\" href=\"argmin/prelude/trait.ArgminTranspose.html\" title=\"trait argmin::prelude::ArgminTranspose\">ArgminTranspose</a> + <a class=\"trait\" href=\"argmin/prelude/trait.ArgminEye.html\" title=\"trait argmin::prelude::ArgminEye\">ArgminEye</a> + <a class=\"trait\" href=\"argmin/prelude/trait.ArgminSub.html\" title=\"trait argmin::prelude::ArgminSub\">ArgminSub</a>&lt;H, H&gt; + <a class=\"trait\" href=\"argmin/prelude/trait.ArgminAdd.html\" title=\"trait argmin::prelude::ArgminAdd\">ArgminAdd</a>&lt;H, H&gt; + <a class=\"trait\" href=\"argmin/prelude/trait.ArgminMul.html\" title=\"trait argmin::prelude::ArgminMul\">ArgminMul</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f64.html\">f64</a>, H&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;O: 'a + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"argmin/prelude/trait.ArgminOperator.html\" title=\"trait argmin::prelude::ArgminOperator\">ArgminOperator</a>&lt;Parameters = T, OperatorOutput = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f64.html\">f64</a>, Hessian = H&gt;,&nbsp;</span>",synthetic:false,types:["argmin::solver::quasinewton::bfgs::BFGS"]},{text:"impl&lt;T, O&gt; <a class=\"trait\" href=\"argmin/prelude/trait.ArgminSolver.html\" title=\"trait argmin::prelude::ArgminSolver\">ArgminSolver</a> for <a class=\"struct\" href=\"argmin/solver/simulatedannealing/struct.SimulatedAnnealing.html\" title=\"struct argmin::solver::simulatedannealing::SimulatedAnnealing\">SimulatedAnnealing</a>&lt;T, O&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;O: <a class=\"trait\" href=\"argmin/prelude/trait.ArgminOperator.html\" title=\"trait argmin::prelude::ArgminOperator\">ArgminOperator</a>&lt;Parameters = T, OperatorOutput = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f64.html\">f64</a>, Hessian = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>&gt;,&nbsp;</span>",synthetic:false,types:["argmin::solver::simulatedannealing::SimulatedAnnealing"]},{text:"impl&lt;T, H, O&gt; <a class=\"trait\" href=\"argmin/prelude/trait.ArgminSolver.html\" title=\"trait argmin::prelude::ArgminSolver\">ArgminSolver</a> for <a class=\"struct\" href=\"argmin/solver/trustregion/cauchypoint/struct.CauchyPoint.html\" title=\"struct argmin::solver::trustregion::cauchypoint::CauchyPoint\">CauchyPoint</a>&lt;T, H, O&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"argmin/prelude/trait.ArgminWeightedDot.html\" title=\"trait argmin::prelude::ArgminWeightedDot\">ArgminWeightedDot</a>&lt;T, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f64.html\">f64</a>, H&gt; + <a class=\"trait\" href=\"argmin/prelude/trait.ArgminNorm.html\" title=\"trait argmin::prelude::ArgminNorm\">ArgminNorm</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f64.html\">f64</a>&gt; + <a class=\"trait\" href=\"argmin/prelude/trait.ArgminMul.html\" title=\"trait argmin::prelude::ArgminMul\">ArgminMul</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f64.html\">f64</a>, T&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;H: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;O: <a class=\"trait\" href=\"argmin/prelude/trait.ArgminOperator.html\" title=\"trait argmin::prelude::ArgminOperator\">ArgminOperator</a>&lt;Parameters = T, OperatorOutput = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f64.html\">f64</a>, Hessian = H&gt;,&nbsp;</span>",synthetic:false,types:["argmin::solver::trustregion::cauchypoint::CauchyPoint"]},{text:"impl&lt;T, H, O&gt; <a class=\"trait\" href=\"argmin/prelude/trait.ArgminSolver.html\" title=\"trait argmin::prelude::ArgminSolver\">ArgminSolver</a> for <a class=\"struct\" href=\"argmin/solver/trustregion/dogleg/struct.Dogleg.html\" title=\"struct argmin::solver::trustregion::dogleg::Dogleg\">Dogleg</a>&lt;T, H, O&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"argmin/prelude/trait.ArgminWeightedDot.html\" title=\"trait argmin::prelude::ArgminWeightedDot\">ArgminWeightedDot</a>&lt;T, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f64.html\">f64</a>, H&gt; + <a class=\"trait\" href=\"argmin/prelude/trait.ArgminDot.html\" title=\"trait argmin::prelude::ArgminDot\">ArgminDot</a>&lt;T, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f64.html\">f64</a>&gt; + <a class=\"trait\" href=\"argmin/prelude/trait.ArgminAdd.html\" title=\"trait argmin::prelude::ArgminAdd\">ArgminAdd</a>&lt;T, T&gt; + <a class=\"trait\" href=\"argmin/prelude/trait.ArgminSub.html\" title=\"trait argmin::prelude::ArgminSub\">ArgminSub</a>&lt;T, T&gt; + <a class=\"trait\" href=\"argmin/prelude/trait.ArgminNorm.html\" title=\"trait argmin::prelude::ArgminNorm\">ArgminNorm</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f64.html\">f64</a>&gt; + <a class=\"trait\" href=\"argmin/prelude/trait.ArgminMul.html\" title=\"trait argmin::prelude::ArgminMul\">ArgminMul</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f64.html\">f64</a>, T&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;H: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + <a class=\"trait\" href=\"argmin/prelude/trait.ArgminInv.html\" title=\"trait argmin::prelude::ArgminInv\">ArgminInv</a>&lt;H&gt; + <a class=\"trait\" href=\"argmin/prelude/trait.ArgminDot.html\" title=\"trait argmin::prelude::ArgminDot\">ArgminDot</a>&lt;T, T&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;O: <a class=\"trait\" href=\"argmin/prelude/trait.ArgminOperator.html\" title=\"trait argmin::prelude::ArgminOperator\">ArgminOperator</a>&lt;Parameters = T, OperatorOutput = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f64.html\">f64</a>, Hessian = H&gt;,&nbsp;</span>",synthetic:false,types:["argmin::solver::trustregion::dogleg::Dogleg"]},{text:"impl&lt;T, H, O&gt; <a class=\"trait\" href=\"argmin/prelude/trait.ArgminSolver.html\" title=\"trait argmin::prelude::ArgminSolver\">ArgminSolver</a> for <a class=\"struct\" href=\"argmin/solver/trustregion/steihaug/struct.Steihaug.html\" title=\"struct argmin::solver::trustregion::steihaug::Steihaug\">Steihaug</a>&lt;T, H, O&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"argmin/prelude/trait.ArgminWeightedDot.html\" title=\"trait argmin::prelude::ArgminWeightedDot\">ArgminWeightedDot</a>&lt;T, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f64.html\">f64</a>, H&gt; + <a class=\"trait\" href=\"argmin/prelude/trait.ArgminDot.html\" title=\"trait argmin::prelude::ArgminDot\">ArgminDot</a>&lt;T, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f64.html\">f64</a>&gt; + <a class=\"trait\" href=\"argmin/prelude/trait.ArgminAdd.html\" title=\"trait argmin::prelude::ArgminAdd\">ArgminAdd</a>&lt;T, T&gt; + <a class=\"trait\" href=\"argmin/prelude/trait.ArgminSub.html\" title=\"trait argmin::prelude::ArgminSub\">ArgminSub</a>&lt;T, T&gt; + <a class=\"trait\" href=\"argmin/prelude/trait.ArgminNorm.html\" title=\"trait argmin::prelude::ArgminNorm\">ArgminNorm</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f64.html\">f64</a>&gt; + <a class=\"trait\" href=\"argmin/prelude/trait.ArgminZero.html\" title=\"trait argmin::prelude::ArgminZero\">ArgminZero</a> + <a class=\"trait\" href=\"argmin/prelude/trait.ArgminMul.html\" title=\"trait argmin::prelude::ArgminMul\">ArgminMul</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f64.html\">f64</a>, T&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;H: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + <a class=\"trait\" href=\"argmin/prelude/trait.ArgminDot.html\" title=\"trait argmin::prelude::ArgminDot\">ArgminDot</a>&lt;T, T&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;O: <a class=\"trait\" href=\"argmin/prelude/trait.ArgminOperator.html\" title=\"trait argmin::prelude::ArgminOperator\">ArgminOperator</a>&lt;Parameters = T, OperatorOutput = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f64.html\">f64</a>, Hessian = H&gt;,&nbsp;</span>",synthetic:false,types:["argmin::solver::trustregion::steihaug::Steihaug"]},{text:"impl&lt;'a, T, H, O&gt; <a class=\"trait\" href=\"argmin/prelude/trait.ArgminSolver.html\" title=\"trait argmin::prelude::ArgminSolver\">ArgminSolver</a> for <a class=\"struct\" href=\"argmin/solver/trustregion/trustregion_method/struct.TrustRegion.html\" title=\"struct argmin::solver::trustregion::trustregion_method::TrustRegion\">TrustRegion</a>&lt;'a, T, H, O&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"argmin/prelude/trait.ArgminWeightedDot.html\" title=\"trait argmin::prelude::ArgminWeightedDot\">ArgminWeightedDot</a>&lt;T, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f64.html\">f64</a>, H&gt; + <a class=\"trait\" href=\"argmin/prelude/trait.ArgminDot.html\" title=\"trait argmin::prelude::ArgminDot\">ArgminDot</a>&lt;T, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f64.html\">f64</a>&gt; + <a class=\"trait\" href=\"argmin/prelude/trait.ArgminNorm.html\" title=\"trait argmin::prelude::ArgminNorm\">ArgminNorm</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f64.html\">f64</a>&gt; + <a class=\"trait\" href=\"argmin/prelude/trait.ArgminAdd.html\" title=\"trait argmin::prelude::ArgminAdd\">ArgminAdd</a>&lt;T, T&gt; + <a class=\"trait\" href=\"argmin/prelude/trait.ArgminSub.html\" title=\"trait argmin::prelude::ArgminSub\">ArgminSub</a>&lt;T, T&gt; + <a class=\"trait\" href=\"argmin/prelude/trait.ArgminZero.html\" title=\"trait argmin::prelude::ArgminZero\">ArgminZero</a> + <a class=\"trait\" href=\"argmin/prelude/trait.ArgminMul.html\" title=\"trait argmin::prelude::ArgminMul\">ArgminMul</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f64.html\">f64</a>, T&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;H: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + <a class=\"trait\" href=\"argmin/prelude/trait.ArgminDot.html\" title=\"trait argmin::prelude::ArgminDot\">ArgminDot</a>&lt;T, T&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;O: 'a + <a class=\"trait\" href=\"argmin/prelude/trait.ArgminOperator.html\" title=\"trait argmin::prelude::ArgminOperator\">ArgminOperator</a>&lt;Parameters = T, OperatorOutput = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f64.html\">f64</a>, Hessian = H&gt;,&nbsp;</span>",synthetic:false,types:["argmin::solver::trustregion::trustregion_method::TrustRegion"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()