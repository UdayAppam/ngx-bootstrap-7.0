import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { BsNavigationDirection } from '../../models';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function BsDatepickerNavigationViewComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1, " \u200B ");
    i0.ɵɵelementStart(2, "button", 2);
    i0.ɵɵlistener("click", function BsDatepickerNavigationViewComponent_ng_container_3_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r2); const ctx_r1 = i0.ɵɵnextContext(); return ctx_r1.view("month"); });
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r0.calendar.monthTitle);
} }
export class BsDatepickerNavigationViewComponent {
    constructor() {
        this.onNavigate = new EventEmitter();
        this.onViewMode = new EventEmitter();
    }
    navTo(down) {
        this.onNavigate.emit(down ? BsNavigationDirection.DOWN : BsNavigationDirection.UP);
    }
    view(viewMode) {
        this.onViewMode.emit(viewMode);
    }
}
BsDatepickerNavigationViewComponent.ɵfac = function BsDatepickerNavigationViewComponent_Factory(t) { return new (t || BsDatepickerNavigationViewComponent)(); };
BsDatepickerNavigationViewComponent.ɵcmp = i0.ɵɵdefineComponent({ type: BsDatepickerNavigationViewComponent, selectors: [["bs-datepicker-navigation-view"]], inputs: { calendar: "calendar" }, outputs: { onNavigate: "onNavigate", onViewMode: "onViewMode" }, decls: 12, vars: 8, consts: [["type", "button", 1, "previous", 3, "disabled", "click"], [4, "ngIf"], ["type", "button", 1, "current", 3, "click"], ["type", "button", 1, "next", 3, "disabled", "click"]], template: function BsDatepickerNavigationViewComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "button", 0);
        i0.ɵɵlistener("click", function BsDatepickerNavigationViewComponent_Template_button_click_0_listener() { return ctx.navTo(true); });
        i0.ɵɵelementStart(1, "span");
        i0.ɵɵtext(2, "\u2039");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(3, BsDatepickerNavigationViewComponent_ng_container_3_Template, 5, 1, "ng-container", 1);
        i0.ɵɵtext(4, " \u200B ");
        i0.ɵɵelementStart(5, "button", 2);
        i0.ɵɵlistener("click", function BsDatepickerNavigationViewComponent_Template_button_click_5_listener() { return ctx.view("year"); });
        i0.ɵɵelementStart(6, "span");
        i0.ɵɵtext(7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtext(8, " \u200B ");
        i0.ɵɵelementStart(9, "button", 3);
        i0.ɵɵlistener("click", function BsDatepickerNavigationViewComponent_Template_button_click_9_listener() { return ctx.navTo(false); });
        i0.ɵɵelementStart(10, "span");
        i0.ɵɵtext(11, "\u203A");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵstyleProp("visibility", ctx.calendar.hideLeftArrow ? "hidden" : "visible");
        i0.ɵɵproperty("disabled", ctx.calendar.disableLeftArrow);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.calendar && ctx.calendar.monthTitle);
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate(ctx.calendar.yearTitle);
        i0.ɵɵadvance(2);
        i0.ɵɵstyleProp("visibility", ctx.calendar.hideRightArrow ? "hidden" : "visible");
        i0.ɵɵproperty("disabled", ctx.calendar.disableRightArrow);
    } }, directives: [i1.NgIf], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BsDatepickerNavigationViewComponent, [{
        type: Component,
        args: [{
                selector: 'bs-datepicker-navigation-view',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <button class="previous"
            [disabled]="calendar.disableLeftArrow"
            [style.visibility]="calendar.hideLeftArrow ? 'hidden' : 'visible'"
            type="button"
            (click)="navTo(true)">
      <span>&lsaquo;</span>
    </button>

    <ng-container *ngIf="calendar && calendar.monthTitle">
      &#8203;  <!-- zero-width space needed for correct alignment
                  with preserveWhitespaces: false in Angular -->

      <button class="current"
            type="button"
            (click)="view('month')"
      ><span>{{ calendar.monthTitle }}</span>
      </button>
    </ng-container>

    &#8203;  <!-- zero-width space needed for correct alignment
                  with preserveWhitespaces: false in Angular -->

    <button class="current" (click)="view('year')" type="button">
      <span>{{ calendar.yearTitle }}</span>
    </button>

    &#8203;  <!-- zero-width space needed for correct alignment
                  with preserveWhitespaces: false in Angular -->

    <button class="next"
            [disabled]="calendar.disableRightArrow"
            [style.visibility]="calendar.hideRightArrow ? 'hidden' : 'visible'"
            type="button"
            (click)="navTo(false)"><span>&rsaquo;</span>
    </button>
  `
            }]
    }], null, { calendar: [{
            type: Input
        }], onNavigate: [{
            type: Output
        }], onViewMode: [{
            type: Output
        }] }); })();
//# sourceMappingURL=bs-datepicker-navigation-view.component.js.map