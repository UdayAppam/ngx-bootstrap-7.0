import { OnInit } from '@angular/core';
import { DatePickerInnerComponent } from './datepicker-inner.component';
import * as i0 from "@angular/core";
export declare class YearPickerComponent implements OnInit {
    datePicker: DatePickerInnerComponent;
    title?: string;
    rows: never[];
    constructor(datePicker: DatePickerInnerComponent);
    get isBs4(): boolean;
    ngOnInit(): void;
    protected getStartingYear(year: number): number | undefined;
    static ɵfac: i0.ɵɵFactoryDef<YearPickerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<YearPickerComponent, "yearpicker", never, {}, {}, never, never>;
}
//# sourceMappingURL=yearpicker.component.d.ts.map