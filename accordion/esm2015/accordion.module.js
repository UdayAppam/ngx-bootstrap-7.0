import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AccordionComponent } from './accordion.component';
import { AccordionPanelComponent } from './accordion-group.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import * as i0 from "@angular/core";
export class AccordionModule {
    static forRoot() {
        return { ngModule: AccordionModule, providers: [] };
    }
}
AccordionModule.ɵmod = i0.ɵɵdefineNgModule({ type: AccordionModule });
AccordionModule.ɵinj = i0.ɵɵdefineInjector({ factory: function AccordionModule_Factory(t) { return new (t || AccordionModule)(); }, imports: [[CommonModule, CollapseModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AccordionModule, { declarations: [AccordionComponent, AccordionPanelComponent], imports: [CommonModule, CollapseModule], exports: [AccordionComponent, AccordionPanelComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AccordionModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, CollapseModule],
                declarations: [AccordionComponent, AccordionPanelComponent],
                exports: [AccordionComponent, AccordionPanelComponent]
            }]
    }], null, null); })();
//# sourceMappingURL=accordion.module.js.map