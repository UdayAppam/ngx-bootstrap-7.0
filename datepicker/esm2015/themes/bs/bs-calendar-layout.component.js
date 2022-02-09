import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./bs-current-date-view.component";
import * as i3 from "./bs-timepicker-view.component";
function BsCalendarLayoutComponent_bs_current_date_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "bs-current-date", 4);
} }
function BsCalendarLayoutComponent_bs_timepicker_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "bs-timepicker");
} }
const _c0 = [[["bs-datepicker-navigation-view"]], "*"];
const _c1 = ["bs-datepicker-navigation-view", "*"];
export class BsCalendarLayoutComponent {
}
BsCalendarLayoutComponent.ɵfac = function BsCalendarLayoutComponent_Factory(t) { return new (t || BsCalendarLayoutComponent)(); };
BsCalendarLayoutComponent.ɵcmp = i0.ɵɵdefineComponent({ type: BsCalendarLayoutComponent, selectors: [["bs-calendar-layout"]], ngContentSelectors: _c1, decls: 6, vars: 2, consts: [["title", "hey there", 4, "ngIf"], [1, "bs-datepicker-head"], [1, "bs-datepicker-body"], [4, "ngIf"], ["title", "hey there"]], template: function BsCalendarLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef(_c0);
        i0.ɵɵtemplate(0, BsCalendarLayoutComponent_bs_current_date_0_Template, 1, 0, "bs-current-date", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵprojection(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 2);
        i0.ɵɵprojection(4, 1);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(5, BsCalendarLayoutComponent_bs_timepicker_5_Template, 1, 0, "bs-timepicker", 3);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", false);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngIf", false);
    } }, directives: [i1.NgIf, i2.BsCurrentDateViewComponent, i3.BsTimepickerViewComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BsCalendarLayoutComponent, [{
        type: Component,
        args: [{
                selector: 'bs-calendar-layout',
                template: `
    <!-- current date, will be added in nearest releases -->
    <bs-current-date title="hey there" *ngIf="false"></bs-current-date>

    <!--navigation-->
    <div class="bs-datepicker-head">
      <ng-content select="bs-datepicker-navigation-view"></ng-content>
    </div>

    <div class="bs-datepicker-body">
      <ng-content></ng-content>
    </div>

    <!--timepicker-->
    <bs-timepicker *ngIf="false"></bs-timepicker>
  `
            }]
    }], null, null); })();
//# sourceMappingURL=bs-calendar-layout.component.js.map