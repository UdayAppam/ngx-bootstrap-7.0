import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TooltipContainerComponent } from './tooltip-container.component';
import { TooltipDirective } from './tooltip.directive';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { PositioningService } from 'ngx-bootstrap/positioning';
import * as i0 from "@angular/core";
export class TooltipModule {
    static forRoot() {
        return {
            ngModule: TooltipModule,
            providers: [ComponentLoaderFactory, PositioningService]
        };
    }
}
TooltipModule.ɵmod = i0.ɵɵdefineNgModule({ type: TooltipModule });
TooltipModule.ɵinj = i0.ɵɵdefineInjector({ factory: function TooltipModule_Factory(t) { return new (t || TooltipModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(TooltipModule, { declarations: [TooltipDirective, TooltipContainerComponent], imports: [CommonModule], exports: [TooltipDirective] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TooltipModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: [TooltipDirective, TooltipContainerComponent],
                exports: [TooltipDirective],
                entryComponents: [TooltipContainerComponent]
            }]
    }], null, null); })();
//# sourceMappingURL=tooltip.module.js.map