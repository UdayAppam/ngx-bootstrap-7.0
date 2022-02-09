import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BarComponent } from './bar.component';
import { ProgressbarComponent } from './progressbar.component';
import * as i0 from "@angular/core";
export class ProgressbarModule {
    static forRoot() {
        return { ngModule: ProgressbarModule, providers: [] };
    }
}
ProgressbarModule.ɵmod = i0.ɵɵdefineNgModule({ type: ProgressbarModule });
ProgressbarModule.ɵinj = i0.ɵɵdefineInjector({ factory: function ProgressbarModule_Factory(t) { return new (t || ProgressbarModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ProgressbarModule, { declarations: [BarComponent, ProgressbarComponent], imports: [CommonModule], exports: [BarComponent, ProgressbarComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProgressbarModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: [BarComponent, ProgressbarComponent],
                exports: [BarComponent, ProgressbarComponent]
            }]
    }], null, null); })();
//# sourceMappingURL=progressbar.module.js.map