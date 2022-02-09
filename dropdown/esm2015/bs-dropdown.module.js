import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { PositioningService } from 'ngx-bootstrap/positioning';
import { BsDropdownContainerComponent } from './bs-dropdown-container.component';
import { BsDropdownMenuDirective } from './bs-dropdown-menu.directive';
import { BsDropdownToggleDirective } from './bs-dropdown-toggle.directive';
import { BsDropdownDirective } from './bs-dropdown.directive';
import { BsDropdownState } from './bs-dropdown.state';
import * as i0 from "@angular/core";
export class BsDropdownModule {
    static forRoot() {
        return {
            ngModule: BsDropdownModule,
            providers: [
                ComponentLoaderFactory,
                PositioningService,
                BsDropdownState
            ]
        };
    }
}
BsDropdownModule.ɵmod = i0.ɵɵdefineNgModule({ type: BsDropdownModule });
BsDropdownModule.ɵinj = i0.ɵɵdefineInjector({ factory: function BsDropdownModule_Factory(t) { return new (t || BsDropdownModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(BsDropdownModule, { declarations: [BsDropdownMenuDirective,
        BsDropdownToggleDirective,
        BsDropdownContainerComponent,
        BsDropdownDirective], imports: [CommonModule], exports: [BsDropdownMenuDirective,
        BsDropdownToggleDirective,
        BsDropdownDirective] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BsDropdownModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: [
                    BsDropdownMenuDirective,
                    BsDropdownToggleDirective,
                    BsDropdownContainerComponent,
                    BsDropdownDirective
                ],
                exports: [
                    BsDropdownMenuDirective,
                    BsDropdownToggleDirective,
                    BsDropdownDirective
                ],
                entryComponents: [BsDropdownContainerComponent]
            }]
    }], null, null); })();
//# sourceMappingURL=bs-dropdown.module.js.map