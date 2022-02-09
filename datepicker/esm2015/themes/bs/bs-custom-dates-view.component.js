import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function BsCustomDatesViewComponent_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 2);
    i0.ɵɵlistener("click", function BsCustomDatesViewComponent_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r3); const range_r1 = ctx.$implicit; const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.selectFromRanges(range_r1); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const range_r1 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("selected", range_r1.value === ctx_r0.selectedRange);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", range_r1.label, " ");
} }
export class BsCustomDatesViewComponent {
    constructor() {
        this.onSelect = new EventEmitter();
    }
    selectFromRanges(range) {
        this.onSelect.emit(range);
    }
}
BsCustomDatesViewComponent.ɵfac = function BsCustomDatesViewComponent_Factory(t) { return new (t || BsCustomDatesViewComponent)(); };
BsCustomDatesViewComponent.ɵcmp = i0.ɵɵdefineComponent({ type: BsCustomDatesViewComponent, selectors: [["bs-custom-date-view"]], inputs: { ranges: "ranges", selectedRange: "selectedRange", customRangeLabel: "customRangeLabel" }, outputs: { onSelect: "onSelect" }, decls: 2, vars: 1, consts: [[1, "bs-datepicker-predefined-btns"], ["type", "button", "class", "btn", 3, "selected", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", 3, "click"]], template: function BsCustomDatesViewComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, BsCustomDatesViewComponent_button_1_Template, 2, 3, "button", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.ranges);
    } }, directives: [i1.NgForOf], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BsCustomDatesViewComponent, [{
        type: Component,
        args: [{
                selector: 'bs-custom-date-view',
                template: `
    <div class="bs-datepicker-predefined-btns">
      <button *ngFor="let range of ranges"
        type="button"
        class="btn"
        (click)="selectFromRanges(range)"
        [class.selected]="range.value === selectedRange">
        {{ range.label }}
      </button>
    </div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], null, { ranges: [{
            type: Input
        }], selectedRange: [{
            type: Input
        }], customRangeLabel: [{
            type: Input
        }], onSelect: [{
            type: Output
        }] }); })();
//# sourceMappingURL=bs-custom-dates-view.component.js.map