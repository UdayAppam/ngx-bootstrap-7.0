// @deprecated
import { Component } from '@angular/core';
import { isBs3 } from 'ngx-bootstrap/utils';
import { DatePickerInnerComponent } from './datepicker-inner.component';
import * as i0 from "@angular/core";
import * as i1 from "./datepicker-inner.component";
import * as i2 from "@angular/common";
function DayPickerComponent_table_0_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 8);
    i0.ɵɵlistener("click", function DayPickerComponent_table_0_button_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(2); return ctx_r8.datePicker.move(-1); });
    i0.ɵɵtext(1, "\u2039");
    i0.ɵɵelementEnd();
} }
function DayPickerComponent_table_0_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 8);
    i0.ɵɵlistener("click", function DayPickerComponent_table_0_button_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r11); const ctx_r10 = i0.ɵɵnextContext(2); return ctx_r10.datePicker.move(-1); });
    i0.ɵɵtext(1, "<");
    i0.ɵɵelementEnd();
} }
function DayPickerComponent_table_0_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 9);
    i0.ɵɵlistener("click", function DayPickerComponent_table_0_button_11_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r13); const ctx_r12 = i0.ɵɵnextContext(2); return ctx_r12.datePicker.move(1); });
    i0.ɵɵtext(1, "\u203A");
    i0.ɵɵelementEnd();
} }
function DayPickerComponent_table_0_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 9);
    i0.ɵɵlistener("click", function DayPickerComponent_table_0_button_12_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r15); const ctx_r14 = i0.ɵɵnextContext(2); return ctx_r14.datePicker.move(1); });
    i0.ɵɵtext(1, "> ");
    i0.ɵɵelementEnd();
} }
function DayPickerComponent_table_0_th_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "th");
} }
function DayPickerComponent_table_0_th_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 10);
    i0.ɵɵelementStart(1, "small", 11);
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const labelz_r16 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(labelz_r16.abbr);
} }
function DayPickerComponent_table_0_ng_template_17_tr_0_td_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 10);
    i0.ɵɵelementStart(1, "em");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const index_r18 = i0.ɵɵnextContext(2).index;
    const ctx_r20 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r20.weekNumbers[index_r18]);
} }
const _c0 = function (a0, a1, a2, a3, a4) { return { "btn-secondary": a0, "btn-info": a1, disabled: a2, active: a3, "btn-default": a4 }; };
const _c1 = function (a0, a1) { return { "text-muted": a0, "text-info": a1 }; };
function DayPickerComponent_table_0_ng_template_17_tr_0_td_2_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r27 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 16);
    i0.ɵɵlistener("click", function DayPickerComponent_table_0_ng_template_17_tr_0_td_2_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r27); const dtz_r23 = i0.ɵɵnextContext().$implicit; const ctx_r25 = i0.ɵɵnextContext(4); return ctx_r25.datePicker.select(dtz_r23.date); });
    i0.ɵɵelementStart(1, "span", 17);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const dtz_r23 = i0.ɵɵnextContext().$implicit;
    const ctx_r24 = i0.ɵɵnextContext(4);
    i0.ɵɵclassMapInterpolate1("btn btn-sm ", dtz_r23.customClass, "");
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction5(7, _c0, ctx_r24.isBs4 && !dtz_r23.selected && !ctx_r24.datePicker.isActive(dtz_r23), dtz_r23.selected, dtz_r23.disabled, !ctx_r24.isBs4 && ctx_r24.datePicker.isActive(dtz_r23), !ctx_r24.isBs4))("disabled", dtz_r23.disabled);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(13, _c1, dtz_r23.secondary || dtz_r23.current, !ctx_r24.isBs4 && dtz_r23.current));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(dtz_r23.label);
} }
function DayPickerComponent_table_0_ng_template_17_tr_0_td_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 14);
    i0.ɵɵtemplate(1, DayPickerComponent_table_0_ng_template_17_tr_0_td_2_button_1_Template, 3, 16, "button", 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const dtz_r23 = ctx.$implicit;
    const ctx_r21 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("id", dtz_r23.uid);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !(ctx_r21.datePicker.onlyCurrentMonth && dtz_r23.secondary));
} }
function DayPickerComponent_table_0_ng_template_17_tr_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵtemplate(1, DayPickerComponent_table_0_ng_template_17_tr_0_td_1_Template, 3, 1, "td", 12);
    i0.ɵɵtemplate(2, DayPickerComponent_table_0_ng_template_17_tr_0_td_2_Template, 2, 2, "td", 13);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const rowz_r17 = i0.ɵɵnextContext().$implicit;
    const ctx_r19 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r19.datePicker.showWeeks);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", rowz_r17);
} }
function DayPickerComponent_table_0_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, DayPickerComponent_table_0_ng_template_17_tr_0_Template, 3, 2, "tr", 5);
} if (rf & 2) {
    const rowz_r17 = ctx.$implicit;
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngIf", !(ctx_r7.datePicker.onlyCurrentMonth && rowz_r17[0].secondary && rowz_r17[6].secondary));
} }
const _c2 = function (a0) { return { disabled: a0 }; };
function DayPickerComponent_table_0_Template(rf, ctx) { if (rf & 1) {
    const _r31 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "table", 1);
    i0.ɵɵelementStart(1, "thead");
    i0.ɵɵelementStart(2, "tr");
    i0.ɵɵelementStart(3, "th");
    i0.ɵɵtemplate(4, DayPickerComponent_table_0_button_4_Template, 2, 0, "button", 2);
    i0.ɵɵtemplate(5, DayPickerComponent_table_0_button_5_Template, 2, 0, "button", 2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "th");
    i0.ɵɵelementStart(7, "button", 3);
    i0.ɵɵlistener("click", function DayPickerComponent_table_0_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r31); const ctx_r30 = i0.ɵɵnextContext(); return ctx_r30.datePicker.toggleMode(0); });
    i0.ɵɵelementStart(8, "strong");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "th");
    i0.ɵɵtemplate(11, DayPickerComponent_table_0_button_11_Template, 2, 0, "button", 4);
    i0.ɵɵtemplate(12, DayPickerComponent_table_0_button_12_Template, 2, 0, "button", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "tr");
    i0.ɵɵtemplate(14, DayPickerComponent_table_0_th_14_Template, 1, 0, "th", 5);
    i0.ɵɵtemplate(15, DayPickerComponent_table_0_th_15_Template, 4, 1, "th", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "tbody");
    i0.ɵɵtemplate(17, DayPickerComponent_table_0_ng_template_17_Template, 1, 1, "ng-template", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵattribute("aria-labelledby", ctx_r0.datePicker.uniqueId + "-title");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", !ctx_r0.isBs4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.isBs4);
    i0.ɵɵadvance(1);
    i0.ɵɵattribute("colspan", 5 + (ctx_r0.datePicker.showWeeks ? 1 : 0));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("id", ctx_r0.datePicker.uniqueId + "-title")("disabled", ctx_r0.datePicker.datepickerMode === ctx_r0.datePicker.maxMode)("ngClass", i0.ɵɵpureFunction1(13, _c2, ctx_r0.datePicker.datepickerMode === ctx_r0.datePicker.maxMode));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.title);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r0.isBs4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.isBs4);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.datePicker.showWeeks);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r0.labels);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r0.rows);
} }
export class DayPickerComponent {
    constructor(datePicker) {
        this.labels = [];
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.rows = [];
        this.weekNumbers = [];
        this.datePicker = datePicker;
    }
    get isBs4() {
        return !isBs3();
    }
    /*protected getDaysInMonth(year:number, month:number) {
     return ((month === 1) && (year % 4 === 0) &&
     ((year % 100 !== 0) || (year % 400 === 0))) ? 29 : DAYS_IN_MONTH[month];
     }*/
    ngOnInit() {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const self = this;
        this.datePicker.stepDay = { months: 1 };
        // todo valorkin fix
        this.datePicker.setRefreshViewHandler(function () {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            const that = this;
            const year = that.activeDate.getFullYear();
            const month = that.activeDate.getMonth();
            const firstDayOfMonth = new Date(year, month, 1);
            const difference = that.startingDay - firstDayOfMonth.getDay();
            const numDisplayedFromPreviousMonth = difference > 0 ? 7 - difference : -difference;
            const firstDate = new Date(firstDayOfMonth.getTime());
            if (numDisplayedFromPreviousMonth > 0) {
                firstDate.setDate(-numDisplayedFromPreviousMonth + 1);
            }
            // 42 is the number of days on a six-week calendar
            const _days = self.getDates(firstDate, 42);
            const days = [];
            for (let i = 0; i < 42; i++) {
                const _dateObject = that.createDateObject(_days[i], that.formatDay);
                _dateObject.secondary = _days[i].getMonth() !== month;
                _dateObject.uid = that.uniqueId + '-' + i;
                days[i] = _dateObject;
            }
            self.labels = [];
            for (let j = 0; j < 7; j++) {
                self.labels[j] = {};
                self.labels[j].abbr = that.dateFilter(days[j].date, that.formatDayHeader);
                self.labels[j].full = that.dateFilter(days[j].date, 'EEEE');
            }
            self.title = that.dateFilter(that.activeDate, that.formatDayTitle);
            self.rows = that.split(days, 7);
            if (that.showWeeks) {
                self.weekNumbers = [];
                const thursdayIndex = (4 + 7 - that.startingDay) % 7;
                const numWeeks = self.rows.length;
                for (let curWeek = 0; curWeek < numWeeks; curWeek++) {
                    const _date = self.rows[curWeek][thursdayIndex].date;
                    if (_date) {
                        self.weekNumbers.push(self.getISO8601WeekNumber(_date));
                    }
                }
            }
        }, 'day');
        this.datePicker.setCompareHandler(function (date1, date2) {
            const d1 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate());
            const d2 = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate());
            return d1.getTime() - d2.getTime();
        }, 'day');
        this.datePicker.refreshView();
    }
    getDates(startDate, n) {
        const dates = new Array(n);
        let current = new Date(startDate.getTime());
        let i = 0;
        let date;
        while (i < n) {
            date = new Date(current.getTime());
            date = this.datePicker.fixTimeZone(date);
            dates[i++] = date;
            current = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
        }
        return dates;
    }
    getISO8601WeekNumber(date) {
        const checkDate = new Date(date.getTime());
        // Thursday
        checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));
        const time = checkDate.getTime();
        // Compare with Jan 1
        checkDate.setMonth(0);
        checkDate.setDate(1);
        return (Math.floor(Math.round((time - checkDate.getTime()) / 86400000) / 7) + 1);
    }
}
DayPickerComponent.ɵfac = function DayPickerComponent_Factory(t) { return new (t || DayPickerComponent)(i0.ɵɵdirectiveInject(i1.DatePickerInnerComponent)); };
DayPickerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DayPickerComponent, selectors: [["daypicker"]], decls: 1, vars: 1, consts: [["role", "grid", "aria-activedescendant", "activeDateId", 4, "ngIf"], ["role", "grid", "aria-activedescendant", "activeDateId"], ["type", "button", "class", "btn btn-default btn-secondary btn-sm pull-left float-left", "tabindex", "-1", 3, "click", 4, "ngIf"], ["type", "button", "tabindex", "-1", 1, "btn", "btn-default", "btn-secondary", "btn-sm", 2, "width", "100%", 3, "id", "disabled", "ngClass", "click"], ["type", "button", "class", "btn btn-default btn-secondary btn-sm pull-right float-right", "tabindex", "-1", 3, "click", 4, "ngIf"], [4, "ngIf"], ["class", "text-center", 4, "ngFor", "ngForOf"], ["ngFor", "", 3, "ngForOf"], ["type", "button", "tabindex", "-1", 1, "btn", "btn-default", "btn-secondary", "btn-sm", "pull-left", "float-left", 3, "click"], ["type", "button", "tabindex", "-1", 1, "btn", "btn-default", "btn-secondary", "btn-sm", "pull-right", "float-right", 3, "click"], [1, "text-center"], ["aria-label", "labelz.full"], ["class", "h6", "class", "text-center", 4, "ngIf"], ["class", "text-center", "role", "gridcell", 3, "id", 4, "ngFor", "ngForOf"], ["role", "gridcell", 1, "text-center", 3, "id"], ["type", "button", "style", "min-width:100%;", "tabindex", "-1", 3, "class", "ngClass", "disabled", "click", 4, "ngIf"], ["type", "button", "tabindex", "-1", 2, "min-width", "100%", 3, "ngClass", "disabled", "click"], [3, "ngClass"]], template: function DayPickerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, DayPickerComponent_table_0_Template, 18, 15, "table", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.datePicker.datepickerMode === "day");
    } }, directives: [i2.NgIf, i2.NgClass, i2.NgForOf], styles: ["[_nghost-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n      color: #292b2c;\n      background-color: #fff;\n      border-color: #ccc;\n    }\n    [_nghost-%COMP%]   .btn-info[_ngcontent-%COMP%]   .text-muted[_ngcontent-%COMP%] {\n      color: #292b2c !important;\n    }"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DayPickerComponent, [{
        type: Component,
        args: [{
                selector: 'daypicker',
                template: `
<table *ngIf="datePicker.datepickerMode === 'day'" role="grid" [attr.aria-labelledby]="datePicker.uniqueId + '-title'" aria-activedescendant="activeDateId">
  <thead>
    <tr>
      <th>
        <button *ngIf="!isBs4"
                type="button"
                class="btn btn-default btn-secondary btn-sm pull-left float-left"
                (click)="datePicker.move(-1)"
                tabindex="-1">‹</button>
        <button *ngIf="isBs4"
                type="button"
                class="btn btn-default btn-secondary btn-sm pull-left float-left"
                (click)="datePicker.move(-1)"
                tabindex="-1">&lt;</button>
      </th>
      <th [attr.colspan]="5 + (datePicker.showWeeks ? 1 : 0)">
        <button [id]="datePicker.uniqueId + '-title'"
                type="button" class="btn btn-default btn-secondary btn-sm"
                (click)="datePicker.toggleMode(0)"
                [disabled]="datePicker.datepickerMode === datePicker.maxMode"
                [ngClass]="{disabled: datePicker.datepickerMode === datePicker.maxMode}" tabindex="-1" style="width:100%;">
          <strong>{{ title }}</strong>
        </button>
      </th>
      <th>
        <button *ngIf="!isBs4"
                type="button"
                class="btn btn-default btn-secondary btn-sm pull-right float-right"
                (click)="datePicker.move(1)"
                tabindex="-1">›</button>
        <button *ngIf="isBs4"
                type="button"
                class="btn btn-default btn-secondary btn-sm pull-right float-right"
                (click)="datePicker.move(1)"
                tabindex="-1">&gt;
        </button>
      </th>
    </tr>
    <tr>
      <th *ngIf="datePicker.showWeeks"></th>
      <th *ngFor="let labelz of labels" class="text-center">
        <small aria-label="labelz.full"><b>{{ labelz.abbr }}</b></small>
      </th>
    </tr>
  </thead>
  <tbody>
    <ng-template ngFor [ngForOf]="rows" let-rowz="$implicit" let-index="index">
      <tr *ngIf="!(datePicker.onlyCurrentMonth && rowz[0].secondary && rowz[6].secondary)">
        <td *ngIf="datePicker.showWeeks" class="h6" class="text-center">
          <em>{{ weekNumbers[index] }}</em>
        </td>
        <td *ngFor="let dtz of rowz" class="text-center" role="gridcell" [id]="dtz.uid">
          <button type="button" style="min-width:100%;" class="btn btn-sm {{dtz.customClass}}"
                  *ngIf="!(datePicker.onlyCurrentMonth && dtz.secondary)"
                  [ngClass]="{'btn-secondary': isBs4 && !dtz.selected && !datePicker.isActive(dtz), 'btn-info': dtz.selected, disabled: dtz.disabled, active: !isBs4 && datePicker.isActive(dtz), 'btn-default': !isBs4}"
                  [disabled]="dtz.disabled"
                  (click)="datePicker.select(dtz.date)" tabindex="-1">
            <span [ngClass]="{'text-muted': dtz.secondary || dtz.current, 'text-info': !isBs4 && dtz.current}">{{ dtz.label }}</span>
          </button>
        </td>
      </tr>
    </ng-template>
  </tbody>
</table>
  `,
                styles: [
                    `
    :host .btn-secondary {
      color: #292b2c;
      background-color: #fff;
      border-color: #ccc;
    }
    :host .btn-info .text-muted {
      color: #292b2c !important;
    }
  `
                ]
            }]
    }], function () { return [{ type: i1.DatePickerInnerComponent }]; }, null); })();
//# sourceMappingURL=daypicker.component.js.map