// Function types
declare type Fn<T> = () => T;
declare type Fn1<T1, T2> = (T1) => T2;
declare type Fn2<T1, T2, T3> = (T1) => T2 => T3;
declare type Fn3<T1, T2, T3, T4> = (T1) => T2 => T3 => T4;
declare type Fn4<T1, T2, T3, T4, T5> = (T1) => T2 => T3 => T4 => T5;
declare type Fn5<T1, T2, T3, T4, T5, T6> = (T1) => T2 => T3 => T4 => T5 => T6;
declare type Fn6<T1, T2, T3, T4, T5, T6, T7> = (
    T1
) => T2 => T3 => T4 => T5 => T6 => T7;
declare type Fn7<T1, T2, T3, T4, T5, T6, T7, T8> = (
    T1
) => T2 => T3 => T4 => T5 => T6 => T7 => T8;
declare type Fn8<T1, T2, T3, T4, T5, T6, T7, T8, T9> = (
    T1
) => T2 => T3 => T4 => T5 => T6 => T7 => T8 => T9;
declare type Fn9<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10> = (
    T1
) => T2 => T3 => T4 => T5 => T6 => T7 => T8 => T9 => T10;

// Curried function declarations
declare function F2<T1, T2, T3>((T1, T2) => T3): Fn2<T1, T2, T3>;
declare function F3<T1, T2, T3, T4>((T1, T2, T3) => T4): Fn3<T1, T2, T3, T4>;
declare function F4<T1, T2, T3, T4, T5>(
    (T1, T2, T3, T4) => T5
): Fn4<T1, T2, T3, T4, T5>;
declare function F5<T1, T2, T3, T4, T5, T6>(
    (T1, T2, T3, T4, T5) => T6
): Fn5<T1, T2, T3, T4, T5, T6>;
declare function F6<T1, T2, T3, T4, T5, T6, T7>(
    (T1, T2, T3, T4, T5, T6) => T7
): Fn6<T1, T2, T3, T4, T5, T6, T7>;
declare function F7<T1, T2, T3, T4, T5, T6, T7, T8>(
    (T1, T2, T3, T4, T5, T6, T7) => T8
): Fn7<T1, T2, T3, T4, T5, T6, T7, T8>;
declare function F8<T1, T2, T3, T4, T5, T6, T7, T8, T9>(
    (T1, T2, T3, T4, T5, T6, T7, T8) => T9
): Fn8<T1, T2, T3, T4, T5, T6, T7, T8, T9>;
declare function F9<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(
    (T1, T2, T3, T4, T5, T6, T7, T8, T9) => T10
): Fn9<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>;

// Partial application of curried functions
declare function A2<T1, T2, T3>(Fn2<T1, T2, T3>, T1, T2): T3;
declare function A3<T1, T2, T3, T4>(Fn3<T1, T2, T3, T4>, T1, T2, T3): T4;
declare function A4<T1, T2, T3, T4, T5>(
    Fn4<T1, T2, T3, T4, T5>,
    T1,
    T2,
    T3,
    T4
): T5;
declare function A5<T1, T2, T3, T4, T5, T6>(
    Fn5<T1, T2, T3, T4, T5, T6>,
    T1,
    T2,
    T3,
    T4,
    T5
): T6;
declare function A6<T1, T2, T3, T4, T5, T6, T7>(
    Fn6<T1, T2, T3, T4, T5, T6, T7>,
    T1,
    T2,
    T3,
    T4,
    T5,
    T6
): T7;
declare function A7<T1, T2, T3, T4, T5, T6, T7, T8>(
    Fn7<T1, T2, T3, T4, T5, T6, T7, T8>,
    T1,
    T2,
    T3,
    T4,
    T5,
    T6,
    T7
): T8;
declare function A8<T1, T2, T3, T4, T5, T6, T7, T8, T9>(
    Fn8<T1, T2, T3, T4, T5, T6, T7, T8, T9>,
    T1,
    T2,
    T3,
    T4,
    T5,
    T6,
    T7,
    T8
): T9;
declare function A9<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(
    Fn9<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>,
    T1,
    T2,
    T3,
    T4,
    T5,
    T6,
    T7,
    T8,
    T9
): T10;
