export declare function isString(str: any): str is string;
export declare function isDate(value: any): value is Date;
export declare function isBoolean(value: any): value is boolean;
export declare function isDateValid(date: Date): boolean;
export declare function isFunction(fn: any): fn is Function;
export declare function isNumber(value?: any): value is number;
export declare function isArray<T>(input?: any): input is T[];
export declare function hasOwnProp<T>(a: T, b: string): b is Extract<keyof T, string>;
export declare function isObject<T>(input: any): input is T;
export declare function isObjectEmpty(obj: any): boolean;
export declare function isUndefined(input: any): boolean;
export declare function toInt<T>(argumentForCoercion: string | number | T): number;
//# sourceMappingURL=type-checks.d.ts.map