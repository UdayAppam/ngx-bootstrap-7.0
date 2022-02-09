import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RatingComponent } from './rating.component';
import * as i0 from "@angular/core";
export class RatingModule {
    static forRoot() {
        return {
            ngModule: RatingModule,
            providers: []
        };
    }
}
RatingModule.ɵmod = i0.ɵɵdefineNgModule({ type: RatingModule });
RatingModule.ɵinj = i0.ɵɵdefineInjector({ factory: function RatingModule_Factory(t) { return new (t || RatingModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(RatingModule, { declarations: [RatingComponent], imports: [CommonModule], exports: [RatingComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RatingModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: [RatingComponent],
                exports: [RatingComponent]
            }]
    }], null, null); })();
//# sourceMappingURL=rating.module.js.map