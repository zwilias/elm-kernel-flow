// Lists

declare type __List_Nil = { ctor: '[]' };

declare type List<T> = __List_Nil | { ctor: '::', _0: T, _1: List<T> };
declare function __List_Cons<T>(x: T, xs: List<T>): List<T>;

declare function __List_fromArray<T>(Array<T>): List<T>;
declare function __List_toArray<T>(List<T>): Array<T>;

declare type appendable = string | List<*>;

declare type __Utils_append<T: appendable> = Fn2<T, T, T>;
