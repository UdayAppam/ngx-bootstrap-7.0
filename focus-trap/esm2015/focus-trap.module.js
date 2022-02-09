import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FocusTrapManager } from './focus-trap-manager';
import { InteractivityChecker } from './interactivity-checker';
import { FocusTrapDirective } from './focus-trap';
import { Platform } from './platform';
import * as i0 from "@angular/core";
export class FocusTrapModule {
    static forRoot() {
        return {
            ngModule: FocusTrapModule,
            providers: [
                FocusTrapManager,
                Platform,
                InteractivityChecker
            ]
        };
    }
}
FocusTrapModule.ɵmod = i0.ɵɵdefineNgModule({ type: FocusTrapModule });
FocusTrapModule.ɵinj = i0.ɵɵdefineInjector({ factory: function FocusTrapModule_Factory(t) { return new (t || FocusTrapModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FocusTrapModule, { declarations: [FocusTrapDirective], imports: [CommonModule], exports: [FocusTrapDirective] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FocusTrapModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: [FocusTrapDirective],
                exports: [FocusTrapDirective]
            }]
    }], null, null); })();
//# sourceMappingURL=focus-trap.module.js.map