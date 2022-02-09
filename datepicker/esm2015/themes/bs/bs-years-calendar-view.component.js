import { Component, EventEmitter, Input, Output } from '@angular/core';
import { yearsPerCalendar } from '../../engine/format-years-calendar';
import { BsNavigationDirection } from '../../models';
import * as i0 from "@angular/core";
import * as i1 from "./bs-calendar-layout.component";
import * as i2 from "./bs-datepicker-navigation-view.component";
import * as i3 from "@angular/common";
function BsYearsCalendarViewComponent_tr_4_td_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 4);
    i0.ɵɵlistener("click", function BsYearsCalendarViewComponent_tr_4_td_1_Template_td_click_0_listener() { i0.ɵɵrestoreView(_r5); const year_r3 = ctx.$implicit; const ctx_r4 = i0.ɵɵnextContext(2); return ctx_r4.viewYear(year_r3); })("mouseenter", function BsYearsCalendarViewComponent_tr_4_td_1_Template_td_mouseenter_0_listener() { i0.ɵɵrestoreView(_r5); const year_r3 = ctx.$implicit; const ctx_r6 = i0.ɵɵnextContext(2); return ctx_r6.hoverYear(year_r3, true); })("mouseleave", function BsYearsCalendarViewComponent_tr_4_td_1_Template_td_mouseleave_0_listener() { i0.ɵɵrestoreView(_r5); const year_r3 = ctx.$implicit; const ctx_r7 = i0.ɵɵnextContext(2); return ctx_r7.hoverYear(year_r3, false); });
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const year_r3 = ctx.$implicit;
    i0.ɵɵclassProp("disabled", year_r3.isDisabled)("is-highlighted", year_r3.isHovered);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("selected", year_r3.isSelected);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(year_r3.label);
} }
function BsYearsCalendarViewComponent_tr_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵtemplate(1, BsYearsCalendarViewComponent_tr_4_td_1_Template, 3, 7, "td", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r1 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", row_r1);
} }
export class BsYearsCalendarViewComponent {
    constructor() {
        this.onNavigate = new EventEmitter();
        this.onViewMode = new EventEmitter();
        this.onSelect = new EventEmitter();
        this.onHover = new EventEmitter();
    }
    navigateTo(event) {
        const step = BsNavigationDirection.DOWN === event ? -1 : 1;
        this.onNavigate.emit({ step: { year: step * yearsPerCalendar } });
    }
    viewYear(year) {
        this.onSelect.emit(year);
    }
    hoverYear(cell, isHovered) {
        this.onHover.emit({ cell, isHovered });
    }
    changeViewMode(event) {
        this.onViewMode.emit(event);
    }
}
BsYearsCalendarViewComponent.ɵfac = function BsYearsCalendarViewComponent_Factory(t) { return new (t || BsYearsCalendarViewComponent)(); };
BsYearsCalendarViewComponent.ɵcmp = i0.ɵɵdefineComponent({ type: BsYearsCalendarViewComponent, selectors: [["bs-years-calendar-view"]], inputs: { calendar: "calendar" }, outputs: { onNavigate: "onNavigate", onViewMode: "onViewMode", onSelect: "onSelect", onHover: "onHover" }, decls: 5, vars: 2, consts: [[3, "calendar", "onNavigate", "onViewMode"], ["role", "grid", 1, "years"], [4, "ngFor", "ngForOf"], ["role", "gridcell", 3, "disabled", "is-highlighted", "click", "mouseenter", "mouseleave", 4, "ngFor", "ngForOf"], ["role", "gridcell", 3, "click", "mouseenter", "mouseleave"]], template: function BsYearsCalendarViewComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "bs-calendar-layout");
        i0.ɵɵelementStart(1, "bs-datepicker-navigation-view", 0);
        i0.ɵɵlistener("onNavigate", function BsYearsCalendarViewComponent_Template_bs_datepicker_navigation_view_onNavigate_1_listener($event) { return ctx.navigateTo($event); })("onViewMode", function BsYearsCalendarViewComponent_Template_bs_datepicker_navigation_view_onViewMode_1_listener($event) { return ctx.changeViewMode($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "table", 1);
        i0.ɵɵelementStart(3, "tbody");
        i0.ɵɵtemplate(4, BsYearsCalendarViewComponent_tr_4_Template, 2, 1, "tr", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("calendar", ctx.calendar);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx.calendar == null ? null : ctx.calendar.years);
    } }, directives: [i1.BsCalendarLayoutComponent, i2.BsDatepickerNavigationViewComponent, i3.NgForOf], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BsYearsCalendarViewComponent, [{
        type: Component,
        args: [{
                selector: 'bs-years-calendar-view',
                template: `
    <bs-calendar-layout>
      <bs-datepicker-navigation-view
        [calendar]="calendar"
        (onNavigate)="navigateTo($event)"
        (onViewMode)="changeViewMode($event)"
      ></bs-datepicker-navigation-view>

      <table role="grid" class="years">
        <tbody>
        <tr *ngFor="let row of calendar?.years">
          <td *ngFor="let year of row" role="gridcell"
              (click)="viewYear(year)"
              (mouseenter)="hoverYear(year, true)"
              (mouseleave)="hoverYear(year, false)"
              [class.disabled]="year.isDisabled"
              [class.is-highlighted]="year.isHovered">
            <span [class.selected]="year.isSelected">{{ year.label }}</span>
          </td>
        </tr>
        </tbody>
      </table>
    </bs-calendar-layout>
  `
            }]
    }], null, { calendar: [{
            type: Input
        }], onNavigate: [{
            type: Output
        }], onViewMode: [{
            type: Output
        }], onSelect: [{
            type: Output
        }], onHover: [{
            type: Output
        }] }); })();
//# sourceMappingURL=bs-years-calendar-view.component.js.map