/*
@flow
import Elm.Kernel.Scheduler exposing (binding, succeed, fail)
*/

var _Benchmark_getTimeStamp = typeof performance !== 'undefined'
    ? performance.now.bind(performance)
    : Date.now;

type Operation = Fn<any>;
type Time = number;
type Error = { ctor: 'StackOverflow' } | { ctor: 'UnknownError', _0: string };

// sample : Int -> Operation -> Task Error Time
var _Benchmark_sample = F2(function(
    count: number,
    func: Operation
): Task<Error, Time> {
    return __Scheduler_binding(function(callback) {
        var start = _Benchmark_getTimeStamp();

        try {
            for (var i = 0; i < count; i++) {
                func();
            }
        } catch (error) {
            if (error instanceof RangeError) {
                callback(
                    __Scheduler_fail({
                        ctor: 'StackOverflow'
                    })
                );
            } else {
                callback(
                    __Scheduler_fail({
                        ctor: 'UnknownError',
                        _0: error.message
                    })
                );
            }

            return;
        }

        var end = _Benchmark_getTimeStamp();

        callback(__Scheduler_succeed(end - start));
    });
});

// operation : (() -> a) -> Operation
var _Benchmark_operation: Fn1<Fn<any>, Operation> = function(
    thunk: Fn<any>
): Operation {
    return function() {
        thunk();
    };
};

// operation1 : (a -> b) -> a -> Operation
var _Benchmark_operation1 = F2(function<A>(fn: Fn1<A, any>, a: A): Operation {
    return function() {
        fn(a);
    };
});

// operation2 : (a -> b -> c) -> a -> b -> Operation
var _Benchmark_operation2 = F3(function<A, B>(
    fn: Fn2<A, B, any>,
    a: A,
    b: B
): Operation {
    return function() {
        A2(fn, a, b);
    };
});

// operation3 : (a -> b -> c -> d) -> a -> b -> c -> Operation
var _Benchmark_operation3 = F4(function<A, B, C>(
    fn: Fn3<A, B, C, any>,
    a: A,
    b: B,
    c: C
): Operation {
    return function() {
        A3(fn, a, b, c);
    };
});

// operation4 : (a -> b -> c -> d -> e) -> a -> b -> c -> d -> Operation
var _Benchmark_operation4 = F5(function<A, B, C, D>(
    fn: Fn4<A, B, C, D, any>,
    a: A,
    b: B,
    c: C,
    d: D
): Operation {
    return function() {
        A4(fn, a, b, c, d);
    };
});

// operation5 : (a -> b -> c -> d -> e -> f) -> a -> b -> c -> d -> e -> Operation
var _Benchmark_operation5 = F6(function<A, B, C, D, E>(
    fn: Fn5<A, B, C, D, E, any>,
    a: A,
    b: B,
    c: C,
    d: D,
    e: E
): Operation {
    return function() {
        A5(fn, a, b, c, d, e);
    };
});

// operation6 : (a -> b -> c -> d -> e -> f -> g) -> a -> b -> c -> d -> e -> f -> Operation
var _Benchmark_operation6 = F7(function<A, B, C, D, E, F>(
    fn: Fn6<A, B, C, D, E, F, any>,
    a: A,
    b: B,
    c: C,
    d: D,
    e: E,
    f: F
): Operation {
    return function() {
        A6(fn, a, b, c, d, e, f);
    };
});

// operation7 : (a -> b -> c -> d -> e -> f -> g -> h) -> a -> b -> c -> d -> e -> f -> g -> Operation
var _Benchmark_operation7 = F8(function<A, B, C, D, E, F, G>(
    fn: Fn7<A, B, C, D, E, F, G, any>,
    a: A,
    b: B,
    c: C,
    d: D,
    e: E,
    f: F,
    g: G
): Operation {
    return function() {
        A7(fn, a, b, c, d, e, f, g);
    };
});

// operation8 : (a -> b -> c -> d -> e -> f -> g -> h -> i) -> a -> b -> c -> d -> e -> f -> g -> h -> Operation
var _Benchmark_operation8 = F9(function<A, B, C, D, E, F, G, H>(
    fn: Fn8<A, B, C, D, E, F, G, H, any>,
    a: A,
    b: B,
    c: C,
    d: D,
    e: E,
    f: F,
    g: G,
    h: H
): Operation {
    return function() {
        A8(fn, a, b, c, d, e, f, g, h);
    };
});
