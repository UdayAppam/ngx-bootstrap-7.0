import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePickerInnerComponent } from './datepicker-inner.component';
import { DatePickerComponent } from './datepicker.component';
import { DatepickerConfig } from './datepicker.config';
import { DayPickerComponent } from './daypicker.component';
import { MonthPickerComponent } from './monthpicker.component';
import { YearPickerComponent } from './yearpicker.component';
import * as i0 from "@angular/core";
export class DatepickerModule {
    static forRoot() {
        return { ngModule: DatepickerModule, providers: [DatepickerConfig] };
    }
}
DatepickerModule.ɵmod = i0.ɵɵdefineNgModule({ type: DatepickerModule });
DatepickerModule.ɵinj = i0.ɵɵdefineInjector({ factory: function DatepickerModule_Factory(t) { return new (t || DatepickerModule)(); }, imports: [[CommonModule, FormsModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(DatepickerModule, { declarations: [DatePickerComponent,
        DatePickerInnerComponent,
        DayPickerComponent,
        MonthPickerComponent,
        YearPickerComponent], imports: [CommonModule, FormsModule], exports: [DatePickerComponent,
        DatePickerInnerComponent,
        DayPickerComponent,
        MonthPickerComponent,
        YearPickerComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DatepickerModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, FormsModule],
                declarations: [
                    DatePickerComponent,
                    DatePickerInnerComponent,
                    DayPickerComponent,
                    MonthPickerComponent,
                    YearPickerComponent
                ],
                exports: [
                    DatePickerComponent,
                    DatePickerInnerComponent,
                    DayPickerComponent,
                    MonthPickerComponent,
                    YearPickerComponent
                ],
                entryComponents: [DatePickerComponent]
            }]
    }], null, null); })();
//# sourceMappingURL=datepicker.module.js.map