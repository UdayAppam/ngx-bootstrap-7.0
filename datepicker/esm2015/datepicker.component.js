import { Component, EventEmitter, forwardRef, Input, Output, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DatePickerInnerComponent } from './datepicker-inner.component';
import { DatepickerConfig } from './datepicker.config';
import * as i0 from "@angular/core";
import * as i1 from "./datepicker.config";
import * as i2 from "./datepicker-inner.component";
import * as i3 from "./daypicker.component";
import * as i4 from "./monthpicker.component";
import * as i5 from "./yearpicker.component";
export const DATEPICKER_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DatePickerComponent),
    multi: true
};
export class DatePickerComponent {
    constructor(config) {
        /** sets datepicker mode, supports: `day`, `month`, `year` */
        this.datepickerMode = 'day';
        /** if false week numbers will be hidden */
        this.showWeeks = true;
        /** number of months displayed in a single row of month picker */
        this.monthColLimit = 3;
        /** number of years displayed in a single row of year picker */
        this.yearColLimit = 5;
        this.selectionDone = new EventEmitter(undefined);
        /** callback to invoke when the activeDate is changed. */
        this.activeDateChange = new EventEmitter(undefined);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.onChange = Function.prototype;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.onTouched = Function.prototype;
        this._now = new Date();
        this.config = config;
        this.configureOptions();
    }
    /** currently active date */
    get activeDate() {
        return this._activeDate || this._now;
    }
    set activeDate(value) {
        this._activeDate = value;
    }
    configureOptions() {
        Object.assign(this, this.config);
    }
    onUpdate(event) {
        this.activeDate = event;
        this.onChange(event);
    }
    onSelectionDone(event) {
        this.selectionDone.emit(event);
    }
    onActiveDateChange(event) {
        this.activeDateChange.emit(event);
    }
    // todo: support null value
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    writeValue(value) {
        var _a, _b;
        if (((_a = this._datePicker) === null || _a === void 0 ? void 0 : _a.compare(value, this._activeDate)) === 0) {
            return;
        }
        if (value && value instanceof Date) {
            this.activeDate = value;
            (_b = this._datePicker) === null || _b === void 0 ? void 0 : _b.select(value, false);
            return;
        }
        this.activeDate = value ? new Date(value) : void 0;
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
}
DatePickerComponent.??fac = function DatePickerComponent_Factory(t) { return new (t || DatePickerComponent)(i0.????directiveInject(i1.DatepickerConfig)); };
DatePickerComponent.??cmp = i0.????defineComponent({ type: DatePickerComponent, selectors: [["datepicker"]], viewQuery: function DatePickerComponent_Query(rf, ctx) { if (rf & 1) {
        i0.????viewQuery(DatePickerInnerComponent, 3);
    } if (rf & 2) {
        let _t;
        i0.????queryRefresh(_t = i0.????loadQuery()) && (ctx._datePicker = _t.first);
    } }, inputs: { datepickerMode: "datepickerMode", initDate: "initDate", minDate: "minDate", maxDate: "maxDate", minMode: "minMode", maxMode: "maxMode", showWeeks: "showWeeks", formatDay: "formatDay", formatMonth: "formatMonth", formatYear: "formatYear", formatDayHeader: "formatDayHeader", formatDayTitle: "formatDayTitle", formatMonthTitle: "formatMonthTitle", startingDay: "startingDay", yearRange: "yearRange", onlyCurrentMonth: "onlyCurrentMonth", shortcutPropagation: "shortcutPropagation", monthColLimit: "monthColLimit", yearColLimit: "yearColLimit", customClass: "customClass", dateDisabled: "dateDisabled", dayDisabled: "dayDisabled", activeDate: "activeDate" }, outputs: { selectionDone: "selectionDone", activeDateChange: "activeDateChange" }, features: [i0.????ProvidersFeature([DATEPICKER_CONTROL_VALUE_ACCESSOR])], decls: 4, vars: 24, consts: [[3, "activeDate", "locale", "datepickerMode", "initDate", "minDate", "maxDate", "minMode", "maxMode", "showWeeks", "formatDay", "formatMonth", "formatYear", "formatDayHeader", "formatDayTitle", "formatMonthTitle", "startingDay", "yearRange", "customClass", "dateDisabled", "dayDisabled", "onlyCurrentMonth", "shortcutPropagation", "monthColLimit", "yearColLimit", "update", "selectionDone", "activeDateChange"], ["tabindex", "0"]], template: function DatePickerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.????elementStart(0, "datepicker-inner", 0);
        i0.????listener("update", function DatePickerComponent_Template_datepicker_inner_update_0_listener($event) { return ctx.onUpdate($event); })("selectionDone", function DatePickerComponent_Template_datepicker_inner_selectionDone_0_listener($event) { return ctx.onSelectionDone($event); })("activeDateChange", function DatePickerComponent_Template_datepicker_inner_activeDateChange_0_listener($event) { return ctx.onActiveDateChange($event); });
        i0.????element(1, "daypicker", 1);
        i0.????element(2, "monthpicker", 1);
        i0.????element(3, "yearpicker", 1);
        i0.????elementEnd();
    } if (rf & 2) {
        i0.????property("activeDate", ctx.activeDate)("locale", ctx.config.locale)("datepickerMode", ctx.datepickerMode)("initDate", ctx.initDate)("minDate", ctx.minDate)("maxDate", ctx.maxDate)("minMode", ctx.minMode)("maxMode", ctx.maxMode)("showWeeks", ctx.showWeeks)("formatDay", ctx.formatDay)("formatMonth", ctx.formatMonth)("formatYear", ctx.formatYear)("formatDayHeader", ctx.formatDayHeader)("formatDayTitle", ctx.formatDayTitle)("formatMonthTitle", ctx.formatMonthTitle)("startingDay", ctx.startingDay)("yearRange", ctx.yearRange)("customClass", ctx.customClass)("dateDisabled", ctx.dateDisabled)("dayDisabled", ctx.dayDisabled)("onlyCurrentMonth", ctx.onlyCurrentMonth)("shortcutPropagation", ctx.shortcutPropagation)("monthColLimit", ctx.monthColLimit)("yearColLimit", ctx.yearColLimit);
    } }, directives: [i2.DatePickerInnerComponent, i3.DayPickerComponent, i4.MonthPickerComponent, i5.YearPickerComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.??setClassMetadata(DatePickerComponent, [{
        type: Component,
        args: [{
                selector: 'datepicker',
                template: `
    <datepicker-inner [activeDate]="activeDate"
                      (update)="onUpdate($event)"
                      [locale]="config.locale"
                      [datepickerMode]="datepickerMode"
                      [initDate]="initDate"
                      [minDate]="minDate"
                      [maxDate]="maxDate"
                      [minMode]="minMode"
                      [maxMode]="maxMode"
                      [showWeeks]="showWeeks"
                      [formatDay]="formatDay"
                      [formatMonth]="formatMonth"
                      [formatYear]="formatYear"
                      [formatDayHeader]="formatDayHeader"
                      [formatDayTitle]="formatDayTitle"
                      [formatMonthTitle]="formatMonthTitle"
                      [startingDay]="startingDay"
                      [yearRange]="yearRange"
                      [customClass]="customClass"
                      [dateDisabled]="dateDisabled"
                      [dayDisabled]="dayDisabled"
                      [onlyCurrentMonth]="onlyCurrentMonth"
                      [shortcutPropagation]="shortcutPropagation"
                      [monthColLimit]="monthColLimit"
                      [yearColLimit]="yearColLimit"
                      (selectionDone)="onSelectionDone($event)"
                      (activeDateChange)="onActiveDateChange($event)">
      <daypicker tabindex="0"></daypicker>
      <monthpicker tabindex="0"></monthpicker>
      <yearpicker tabindex="0"></yearpicker>
    </datepicker-inner>
    `,
                providers: [DATEPICKER_CONTROL_VALUE_ACCESSOR]
            }]
    }], function () { return [{ type: i1.DatepickerConfig }]; }, { datepickerMode: [{
            type: Input
        }], initDate: [{
            type: Input
        }], minDate: [{
            type: Input
        }], maxDate: [{
            type: Input
        }], minMode: [{
            type: Input
        }], maxMode: [{
            type: Input
        }], showWeeks: [{
            type: Input
        }], formatDay: [{
            type: Input
        }], formatMonth: [{
            type: Input
        }], formatYear: [{
            type: Input
        }], formatDayHeader: [{
            type: Input
        }], formatDayTitle: [{
            type: Input
        }], formatMonthTitle: [{
            type: Input
        }], startingDay: [{
            type: Input
        }], yearRange: [{
            type: Input
        }], onlyCurrentMonth: [{
            type: Input
        }], shortcutPropagation: [{
            type: Input
        }], monthColLimit: [{
            type: Input
        }], yearColLimit: [{
            type: Input
        }], customClass: [{
            type: Input
        }], dateDisabled: [{
            type: Input
        }], dayDisabled: [{
            type: Input
        }], activeDate: [{
            type: Input
        }], selectionDone: [{
            type: Output
        }], activeDateChange: [{
            type: Output
        }], _datePicker: [{
            type: ViewChild,
            args: [DatePickerInnerComponent, { static: true }]
        }] }); })();
//# sourceMappingURL=datepicker.component.js.map