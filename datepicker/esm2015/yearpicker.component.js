// @deprecated
import { Component } from '@angular/core';
import { isBs3 } from 'ngx-bootstrap/utils';
import { DatePickerInnerComponent } from './datepicker-inner.component';
import * as i0 from "@angular/core";
import * as i1 from "./datepicker-inner.component";
import * as i2 from "@angular/common";
const _c0 = function (a0, a1, a2, a3) { return { "btn-link": a0, "btn-info": a1, disabled: a2, active: a3 }; };
const _c1 = function (a0, a1) { return { "text-success": a0, "text-info": a1 }; };
function YearPickerComponent_table_0_tr_14_td_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 7);
    i0.ɵɵelementStart(1, "button", 8);
    i0.ɵɵlistener("click", function YearPickerComponent_table_0_tr_14_td_1_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r6); const dtz_r4 = ctx.$implicit; const ctx_r5 = i0.ɵɵnextContext(3); return ctx_r5.datePicker.select(dtz_r4.date); });
    i0.ɵɵelementStart(2, "span", 9);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const dtz_r4 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext(3);
    i0.ɵɵattribute("id", dtz_r4.uid);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction4(5, _c0, ctx_r3.isBs4 && !dtz_r4.selected && !ctx_r3.datePicker.isActive(dtz_r4), dtz_r4.selected || ctx_r3.isBs4 && !dtz_r4.selected && ctx_r3.datePicker.isActive(dtz_r4), dtz_r4.disabled, !ctx_r3.isBs4 && ctx_r3.datePicker.isActive(dtz_r4)))("disabled", dtz_r4.disabled);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(10, _c1, ctx_r3.isBs4 && dtz_r4.current, !ctx_r3.isBs4 && dtz_r4.current));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(dtz_r4.label);
} }
function YearPickerComponent_table_0_tr_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵtemplate(1, YearPickerComponent_table_0_tr_14_td_1_Template, 4, 13, "td", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const rowz_r2 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", rowz_r2);
} }
const _c2 = function (a0) { return { disabled: a0 }; };
function YearPickerComponent_table_0_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "table", 1);
    i0.ɵɵelementStart(1, "thead");
    i0.ɵɵelementStart(2, "tr");
    i0.ɵɵelementStart(3, "th");
    i0.ɵɵelementStart(4, "button", 2);
    i0.ɵɵlistener("click", function YearPickerComponent_table_0_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.datePicker.move(-1); });
    i0.ɵɵtext(5, "\u2039 ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "th");
    i0.ɵɵelementStart(7, "button", 3);
    i0.ɵɵlistener("click", function YearPickerComponent_table_0_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r8); const ctx_r9 = i0.ɵɵnextContext(); return ctx_r9.datePicker.toggleMode(0); });
    i0.ɵɵelementStart(8, "strong");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "th");
    i0.ɵɵelementStart(11, "button", 4);
    i0.ɵɵlistener("click", function YearPickerComponent_table_0_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r8); const ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.datePicker.move(1); });
    i0.ɵɵtext(12, "\u203A ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "tbody");
    i0.ɵɵtemplate(14, YearPickerComponent_table_0_tr_14_Template, 2, 1, "tr", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵattribute("colspan", ctx_r0.datePicker.yearColLimit - 2 <= 0 ? 1 : ctx_r0.datePicker.yearColLimit - 2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("id", ctx_r0.datePicker.uniqueId + "-title")("disabled", ctx_r0.datePicker.datepickerMode === ctx_r0.datePicker.maxMode)("ngClass", i0.ɵɵpureFunction1(6, _c2, ctx_r0.datePicker.datepickerMode === ctx_r0.datePicker.maxMode));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.title);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", ctx_r0.rows);
} }
export class YearPickerComponent {
    constructor(datePicker) {
        this.rows = [];
        this.datePicker = datePicker;
    }
    get isBs4() {
        return !isBs3();
    }
    ngOnInit() {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const self = this;
        this.datePicker.stepYear = { years: this.datePicker.yearRange };
        this.datePicker.setRefreshViewHandler(function () {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            const that = this;
            const years = new Array(that.yearRange);
            let date;
            const start = self.getStartingYear(that.activeDate.getFullYear()) || 0;
            for (let i = 0; i < that.yearRange; i++) {
                date = new Date(start + i, 0, 1);
                date = that.fixTimeZone(date);
                years[i] = that.createDateObject(date, that.formatYear);
                years[i].uid = that.uniqueId + '-' + i;
            }
            self.title = [years[0].label, years[that.yearRange - 1].label].join(' - ');
            self.rows = that.split(years, self.datePicker.yearColLimit);
        }, 'year');
        this.datePicker.setCompareHandler(function (date1, date2) {
            return date1.getFullYear() - date2.getFullYear();
        }, 'year');
        this.datePicker.refreshView();
    }
    getStartingYear(year) {
        // todo: parseInt
        if (this.datePicker && this.datePicker.yearRange) {
            return ((year - 1) / this.datePicker.yearRange * this.datePicker.yearRange + 1);
        }
        return undefined;
    }
}
YearPickerComponent.ɵfac = function YearPickerComponent_Factory(t) { return new (t || YearPickerComponent)(i0.ɵɵdirectiveInject(i1.DatePickerInnerComponent)); };
YearPickerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: YearPickerComponent, selectors: [["yearpicker"]], decls: 1, vars: 1, consts: [["role", "grid", 4, "ngIf"], ["role", "grid"], ["type", "button", "tabindex", "-1", 1, "btn", "btn-default", "btn-sm", "pull-left", "float-left", 3, "click"], ["role", "heading", "type", "button", "tabindex", "-1", 1, "btn", "btn-default", "btn-sm", 2, "width", "100%", 3, "id", "disabled", "ngClass", "click"], ["type", "button", "tabindex", "-1", 1, "btn", "btn-default", "btn-sm", "pull-right", "float-right", 3, "click"], [4, "ngFor", "ngForOf"], ["class", "text-center", "role", "gridcell", 4, "ngFor", "ngForOf"], ["role", "gridcell", 1, "text-center"], ["type", "button", "tabindex", "-1", 1, "btn", "btn-default", 2, "min-width", "100%", 3, "ngClass", "disabled", "click"], [3, "ngClass"]], template: function YearPickerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, YearPickerComponent_table_0_Template, 15, 8, "table", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.datePicker.datepickerMode === "year");
    } }, directives: [i2.NgIf, i2.NgClass, i2.NgForOf], styles: ["[_nghost-%COMP%]   .btn-info[_ngcontent-%COMP%]   .text-success[_ngcontent-%COMP%] {\n        color: #fff !important;\n      }"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(YearPickerComponent, [{
        type: Component,
        args: [{
                selector: 'yearpicker',
                template: `
    <table *ngIf="datePicker.datepickerMode==='year'" role='grid'>
      <thead>
      <tr>
        <th>
          <button type='button' class='btn btn-default btn-sm pull-left float-left'
                  (click)='datePicker.move(-1)' tabindex='-1'>‹
          </button>
        </th>
        <th [attr.colspan]='((datePicker.yearColLimit - 2) <= 0) ? 1 : datePicker.yearColLimit - 2'>
          <button [id]="datePicker.uniqueId + '-title'" role='heading'
                  type='button' class='btn btn-default btn-sm'
                  (click)='datePicker.toggleMode(0)'
                  [disabled]='datePicker.datepickerMode === datePicker.maxMode'
                  [ngClass]='{disabled: datePicker.datepickerMode === datePicker.maxMode}' tabindex='-1'
                  style='width:100%;'>
            <strong>{{ title }}</strong>
          </button>
        </th>
        <th>
          <button type='button' class='btn btn-default btn-sm pull-right float-right'
                  (click)='datePicker.move(1)' tabindex='-1'>›
          </button>
        </th>
      </tr>
      </thead>
      <tbody>
      <tr *ngFor='let rowz of rows'>
        <td *ngFor='let dtz of rowz' class='text-center' role='gridcell' [attr.id]='dtz.uid'>
          <button type='button' style='min-width:100%;' class='btn btn-default'
                  [ngClass]="{'btn-link': isBs4 && !dtz.selected && !datePicker.isActive(dtz), 'btn-info': dtz.selected || (isBs4 && !dtz.selected && datePicker.isActive(dtz)), disabled: dtz.disabled, active: !isBs4 && datePicker.isActive(dtz)}"
                  [disabled]='dtz.disabled'
                  (click)='datePicker.select(dtz.date)' tabindex='-1'>
            <span
              [ngClass]="{'text-success': isBs4 && dtz.current, 'text-info': !isBs4 && dtz.current}">{{ dtz.label }}</span>
          </button>
        </td>
      </tr>
      </tbody>
    </table>
  `,
                styles: [
                    `
      :host .btn-info .text-success {
        color: #fff !important;
      }
    `
                ]
            }]
    }], function () { return [{ type: i1.DatePickerInnerComponent }]; }, null); })();
//# sourceMappingURL=yearpicker.component.js.map