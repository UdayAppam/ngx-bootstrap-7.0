import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { PositioningService } from 'ngx-bootstrap/positioning';
import { PopoverDirective } from './popover.directive';
import { PopoverContainerComponent } from './popover-container.component';
import * as i0 from "@angular/core";
export class PopoverModule {
    static forRoot() {
        return {
            ngModule: PopoverModule,
            providers: [ComponentLoaderFactory, PositioningService]
        };
    }
}
PopoverModule.ɵmod = i0.ɵɵdefineNgModule({ type: PopoverModule });
PopoverModule.ɵinj = i0.ɵɵdefineInjector({ factory: function PopoverModule_Factory(t) { return new (t || PopoverModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PopoverModule, { declarations: [PopoverDirective, PopoverContainerComponent], imports: [CommonModule], exports: [PopoverDirective] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PopoverModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: [PopoverDirective, PopoverContainerComponent],
                exports: [PopoverDirective],
                entryComponents: [PopoverContainerComponent]
            }]
    }], null, null); })();
//# sourceMappingURL=popover.module.js.map