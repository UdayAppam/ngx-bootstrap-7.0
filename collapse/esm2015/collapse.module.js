import { NgModule } from '@angular/core';
import { CollapseDirective } from './collapse.directive';
import * as i0 from "@angular/core";
export class CollapseModule {
    static forRoot() {
        return { ngModule: CollapseModule, providers: [] };
    }
}
CollapseModule.ɵmod = i0.ɵɵdefineNgModule({ type: CollapseModule });
CollapseModule.ɵinj = i0.ɵɵdefineInjector({ factory: function CollapseModule_Factory(t) { return new (t || CollapseModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CollapseModule, { declarations: [CollapseDirective], exports: [CollapseDirective] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CollapseModule, [{
        type: NgModule,
        args: [{
                declarations: [CollapseDirective],
                exports: [CollapseDirective]
            }]
    }], null, null); })();
//# sourceMappingURL=collapse.module.js.map