import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimepickerComponent } from './timepicker.component';
import { TimepickerActions } from './reducer/timepicker.actions';
import { TimepickerStore } from './reducer/timepicker.store';
import * as i0 from "@angular/core";
export class TimepickerModule {
    static forRoot() {
        return {
            ngModule: TimepickerModule,
            providers: [TimepickerActions, TimepickerStore]
        };
    }
}
TimepickerModule.ɵmod = i0.ɵɵdefineNgModule({ type: TimepickerModule });
TimepickerModule.ɵinj = i0.ɵɵdefineInjector({ factory: function TimepickerModule_Factory(t) { return new (t || TimepickerModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(TimepickerModule, { declarations: [TimepickerComponent], imports: [CommonModule], exports: [TimepickerComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TimepickerModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: [TimepickerComponent],
                exports: [TimepickerComponent]
            }]
    }], null, null); })();
//# sourceMappingURL=timepicker.module.js.map