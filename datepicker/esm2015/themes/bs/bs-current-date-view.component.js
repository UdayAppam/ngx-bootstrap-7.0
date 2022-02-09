import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class BsCurrentDateViewComponent {
}
BsCurrentDateViewComponent.ɵfac = function BsCurrentDateViewComponent_Factory(t) { return new (t || BsCurrentDateViewComponent)(); };
BsCurrentDateViewComponent.ɵcmp = i0.ɵɵdefineComponent({ type: BsCurrentDateViewComponent, selectors: [["bs-current-date"]], inputs: { title: "title" }, decls: 3, vars: 1, consts: [[1, "current-timedate"]], template: function BsCurrentDateViewComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "span");
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.title);
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BsCurrentDateViewComponent, [{
        type: Component,
        args: [{
                selector: 'bs-current-date',
                template: `<div class="current-timedate"><span>{{ title }}</span></div>`
            }]
    }], null, { title: [{
            type: Input
        }] }); })();
//# sourceMappingURL=bs-current-date-view.component.js.map