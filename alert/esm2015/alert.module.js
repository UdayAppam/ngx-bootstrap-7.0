import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlertComponent } from './alert.component';
import * as i0 from "@angular/core";
export class AlertModule {
    static forRoot() {
        return { ngModule: AlertModule, providers: [] };
    }
}
AlertModule.ɵmod = i0.ɵɵdefineNgModule({ type: AlertModule });
AlertModule.ɵinj = i0.ɵɵdefineInjector({ factory: function AlertModule_Factory(t) { return new (t || AlertModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AlertModule, { declarations: [AlertComponent], imports: [CommonModule], exports: [AlertComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AlertModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: [AlertComponent],
                exports: [AlertComponent],
                entryComponents: [AlertComponent]
            }]
    }], null, null); })();
//# sourceMappingURL=alert.module.js.map