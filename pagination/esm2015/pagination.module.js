import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PagerComponent } from './pager.component';
import { PaginationComponent } from './pagination.component';
import * as i0 from "@angular/core";
export class PaginationModule {
    static forRoot() {
        return { ngModule: PaginationModule, providers: [] };
    }
}
PaginationModule.ɵmod = i0.ɵɵdefineNgModule({ type: PaginationModule });
PaginationModule.ɵinj = i0.ɵɵdefineInjector({ factory: function PaginationModule_Factory(t) { return new (t || PaginationModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PaginationModule, { declarations: [PagerComponent, PaginationComponent], imports: [CommonModule], exports: [PagerComponent, PaginationComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PaginationModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: [PagerComponent, PaginationComponent],
                exports: [PagerComponent, PaginationComponent]
            }]
    }], null, null); })();
//# sourceMappingURL=pagination.module.js.map