/*
@flow
import Foo
 */

var foo = false;

var c: Task<string, string> = __Scheduler_binding(function(callback) {
    var result: Task<string, string>;
    if (foo) {
        result = __Scheduler_fail('nop');
    } else {
        result = __Scheduler_succeed('yep');
    }

    callback(result);
});

var d: Fn2<string, string, string> = F2(function(a: string, b: string): string {
    return 'hi';
});

var partial = function<A, B, C, D>(
    f: Fn3<A, B, C, D>,
    arg: A,
    snd: B
): Fn1<C, D> {
    return A2(f, arg, snd);
};

var manualCurry = function<A, B, D>(
    f: Fn3<A, B, string, D>,
    arg: A,
    snd: B
): D {
    return f(arg)(snd)('foo');
};

var completeCurry = function<A, B, D>(
    f: Fn3<A, B, string, D>,
    arg: A,
    snd: B
): D {
    return A3(f, arg, snd, 'foo');
};
