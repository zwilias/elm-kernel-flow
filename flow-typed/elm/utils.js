declare function __Utils_eq<T>(x: T, y: T): boolean;
declare type __Utils_equal<T> = Fn2<T, T, boolean>;
declare type __Utils_notEqual<T> = Fn2<T, T, boolean>;

declare type __Utils_LT = -1;
declare type __Utils_EQ = 0;
declare type __Utils_GT = 1;

declare type __Utils_ORD = __Utils_LT | __Utils_EQ | __Utils_GT;

declare function __Utils_cmp<T>(x: T, y: T): __Utils_ORD;
declare type __Utils_lt<T> = Fn2<T, T, boolean>;
declare type __Utils_le<T> = Fn2<T, T, boolean>;
declare type __Utils_ge<T> = Fn2<T, T, boolean>;
declare type __Utils_gt<T> = Fn2<T, T, boolean>;

declare type __Utils_Ord_LT = 'LT';
declare type __Utils_Ord_EQ = 'EQ';
declare type __Utils_Ord_Gt = 'GT';
declare type __Utils_Ord = __Utils_Ord_LT | __Utils_Ord_EQ | __Utils_Ord_GT;

declare type __Utils_compare<T> = Fn2<T, T, __Utils_Ord>;
