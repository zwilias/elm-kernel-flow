declare type __Task_Success<T> = { ctor: 'success', value: T };
declare type __Task_Fail<T> = { ctor: 'fail', value: T };

declare type Task<E, A> = __Task_Success<A> | __Task_Fail<E>;

// Scheduler
declare function __Scheduler_fail<T>(T): __Task_Fail<T>;
declare function __Scheduler_succeed<T>(T): __Task_Success<T>;

declare type InnerCallback<T> = (T) => void;
declare type Callback<T> = (InnerCallback<T>) => void;

declare function __Scheduler_binding<E, A>(Callback<Task<E, A>>): Task<E, A>;
