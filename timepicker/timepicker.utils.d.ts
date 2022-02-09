import { Time, TimepickerComponentState } from './timepicker.models';
export declare function isValidDate(value?: string | Date): boolean;
export declare function isValidLimit(controls: TimepickerComponentState, newDate: Date): boolean;
export declare function toNumber(value?: string | number): number;
export declare function isNumber(value: string | number): value is number;
export declare function parseHours(value?: string | number, isPM?: boolean): number;
export declare function parseMinutes(value?: string | number): number;
export declare function parseSeconds(value?: string | number): number;
export declare function parseTime(value?: string | Date): Date | undefined;
export declare function changeTime(value?: Date, diff?: Time): Date;
export declare function setTime(value: Date | undefined, opts: Time): Date | undefined;
export declare function createDate(value: Date, hours: number, minutes: number, seconds: number): Date;
export declare function padNumber(value: number): string;
export declare function isHourInputValid(hours: string, isPM: boolean): boolean;
export declare function isMinuteInputValid(minutes: string): boolean;
export declare function isSecondInputValid(seconds: string): boolean;
export declare function isInputLimitValid(diff: Time, max?: Date, min?: Date): boolean;
export declare function isInputValid(hours: string, minutes: string | undefined, seconds: string | undefined, isPM: boolean): boolean;
//# sourceMappingURL=timepicker.utils.d.ts.map