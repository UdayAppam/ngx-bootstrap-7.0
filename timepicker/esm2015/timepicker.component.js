import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, forwardRef, Input, Output, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { TimepickerActions } from './reducer/timepicker.actions';
import { TimepickerStore } from './reducer/timepicker.store';
import { getControlsValue } from './timepicker-controls.util';
import { TimepickerConfig } from './timepicker.config';
import { isHourInputValid, isInputLimitValid, isInputValid, isMinuteInputValid, isSecondInputValid, isValidDate, padNumber, parseTime } from './timepicker.utils';
import * as i0 from "@angular/core";
import * as i1 from "./timepicker.config";
import * as i2 from "./reducer/timepicker.store";
import * as i3 from "./reducer/timepicker.actions";
import * as i4 from "@angular/common";
function TimepickerComponent_td_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵtext(1, "\u00A0\u00A0\u00A0");
    i0.ɵɵelementEnd();
} }
function TimepickerComponent_td_7_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵelementStart(1, "a", 1);
    i0.ɵɵlistener("click", function TimepickerComponent_td_7_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r19); const ctx_r18 = i0.ɵɵnextContext(); return ctx_r18.changeMinutes(ctx_r18.minuteStep); });
    i0.ɵɵelement(2, "span", 2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("disabled", !ctx_r1.canIncrementMinutes || !ctx_r1.isEditable);
} }
function TimepickerComponent_td_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵtext(1, "\u00A0");
    i0.ɵɵelementEnd();
} }
function TimepickerComponent_td_9_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵelementStart(1, "a", 1);
    i0.ɵɵlistener("click", function TimepickerComponent_td_9_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r21); const ctx_r20 = i0.ɵɵnextContext(); return ctx_r20.changeSeconds(ctx_r20.secondsStep); });
    i0.ɵɵelement(2, "span", 2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("disabled", !ctx_r3.canIncrementSeconds || !ctx_r3.isEditable);
} }
function TimepickerComponent_td_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵtext(1, "\u00A0\u00A0\u00A0");
    i0.ɵɵelementEnd();
} }
function TimepickerComponent_td_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "td");
} }
function TimepickerComponent_td_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵtext(1, "\u00A0:\u00A0");
    i0.ɵɵelementEnd();
} }
function TimepickerComponent_td_16_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 4);
    i0.ɵɵelementStart(1, "input", 5);
    i0.ɵɵlistener("wheel", function TimepickerComponent_td_16_Template_input_wheel_1_listener($event) { i0.ɵɵrestoreView(_r23); const ctx_r22 = i0.ɵɵnextContext(); ctx_r22.prevDef($event); return ctx_r22.changeMinutes(ctx_r22.minuteStep * ctx_r22.wheelSign($event), "wheel"); })("keydown.ArrowUp", function TimepickerComponent_td_16_Template_input_keydown_ArrowUp_1_listener() { i0.ɵɵrestoreView(_r23); const ctx_r24 = i0.ɵɵnextContext(); return ctx_r24.changeMinutes(ctx_r24.minuteStep, "key"); })("keydown.ArrowDown", function TimepickerComponent_td_16_Template_input_keydown_ArrowDown_1_listener() { i0.ɵɵrestoreView(_r23); const ctx_r25 = i0.ɵɵnextContext(); return ctx_r25.changeMinutes(-ctx_r25.minuteStep, "key"); })("change", function TimepickerComponent_td_16_Template_input_change_1_listener($event) { i0.ɵɵrestoreView(_r23); const ctx_r26 = i0.ɵɵnextContext(); return ctx_r26.updateMinutes($event.target); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("has-error", ctx_r7.invalidMinutes);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("is-invalid", ctx_r7.invalidMinutes);
    i0.ɵɵproperty("placeholder", ctx_r7.minutesPlaceholder)("readonly", ctx_r7.readonlyInput)("disabled", ctx_r7.disabled)("value", ctx_r7.minutes);
    i0.ɵɵattribute("aria-label", ctx_r7.labelMinutes);
} }
function TimepickerComponent_td_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵtext(1, "\u00A0:\u00A0");
    i0.ɵɵelementEnd();
} }
function TimepickerComponent_td_18_Template(rf, ctx) { if (rf & 1) {
    const _r28 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 4);
    i0.ɵɵelementStart(1, "input", 5);
    i0.ɵɵlistener("wheel", function TimepickerComponent_td_18_Template_input_wheel_1_listener($event) { i0.ɵɵrestoreView(_r28); const ctx_r27 = i0.ɵɵnextContext(); ctx_r27.prevDef($event); return ctx_r27.changeSeconds(ctx_r27.secondsStep * ctx_r27.wheelSign($event), "wheel"); })("keydown.ArrowUp", function TimepickerComponent_td_18_Template_input_keydown_ArrowUp_1_listener() { i0.ɵɵrestoreView(_r28); const ctx_r29 = i0.ɵɵnextContext(); return ctx_r29.changeSeconds(ctx_r29.secondsStep, "key"); })("keydown.ArrowDown", function TimepickerComponent_td_18_Template_input_keydown_ArrowDown_1_listener() { i0.ɵɵrestoreView(_r28); const ctx_r30 = i0.ɵɵnextContext(); return ctx_r30.changeSeconds(-ctx_r30.secondsStep, "key"); })("change", function TimepickerComponent_td_18_Template_input_change_1_listener($event) { i0.ɵɵrestoreView(_r28); const ctx_r31 = i0.ɵɵnextContext(); return ctx_r31.updateSeconds($event.target); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("has-error", ctx_r9.invalidSeconds);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("is-invalid", ctx_r9.invalidSeconds);
    i0.ɵɵproperty("placeholder", ctx_r9.secondsPlaceholder)("readonly", ctx_r9.readonlyInput)("disabled", ctx_r9.disabled)("value", ctx_r9.seconds);
    i0.ɵɵattribute("aria-label", ctx_r9.labelSeconds);
} }
function TimepickerComponent_td_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵtext(1, "\u00A0\u00A0\u00A0");
    i0.ɵɵelementEnd();
} }
function TimepickerComponent_td_20_Template(rf, ctx) { if (rf & 1) {
    const _r33 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵelementStart(1, "button", 8);
    i0.ɵɵlistener("click", function TimepickerComponent_td_20_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r33); const ctx_r32 = i0.ɵɵnextContext(); return ctx_r32.toggleMeridian(); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r11 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("disabled", !ctx_r11.isEditable || !ctx_r11.canToggleMeridian);
    i0.ɵɵproperty("disabled", !ctx_r11.isEditable || !ctx_r11.canToggleMeridian);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", ctx_r11.meridian, " ");
} }
function TimepickerComponent_td_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵtext(1, "\u00A0\u00A0\u00A0");
    i0.ɵɵelementEnd();
} }
function TimepickerComponent_td_26_Template(rf, ctx) { if (rf & 1) {
    const _r35 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵelementStart(1, "a", 1);
    i0.ɵɵlistener("click", function TimepickerComponent_td_26_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r35); const ctx_r34 = i0.ɵɵnextContext(); return ctx_r34.changeMinutes(-ctx_r34.minuteStep); });
    i0.ɵɵelement(2, "span", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r13 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("disabled", !ctx_r13.canDecrementMinutes || !ctx_r13.isEditable);
} }
function TimepickerComponent_td_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵtext(1, "\u00A0");
    i0.ɵɵelementEnd();
} }
function TimepickerComponent_td_28_Template(rf, ctx) { if (rf & 1) {
    const _r37 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵelementStart(1, "a", 1);
    i0.ɵɵlistener("click", function TimepickerComponent_td_28_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r37); const ctx_r36 = i0.ɵɵnextContext(); return ctx_r36.changeSeconds(-ctx_r36.secondsStep); });
    i0.ɵɵelement(2, "span", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r15 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("disabled", !ctx_r15.canDecrementSeconds || !ctx_r15.isEditable);
} }
function TimepickerComponent_td_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵtext(1, "\u00A0\u00A0\u00A0");
    i0.ɵɵelementEnd();
} }
function TimepickerComponent_td_30_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "td");
} }
export const TIMEPICKER_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TimepickerComponent),
    multi: true
};
export class TimepickerComponent {
    constructor(_config, _cd, _store, _timepickerActions) {
        this._cd = _cd;
        this._store = _store;
        this._timepickerActions = _timepickerActions;
        /** hours change step */
        this.hourStep = 1;
        /** minutes change step */
        this.minuteStep = 5;
        /** seconds change step */
        this.secondsStep = 10;
        /** if true hours and minutes fields will be readonly */
        this.readonlyInput = false;
        /** if true hours and minutes fields will be disabled */
        this.disabled = false;
        /** if true scroll inside hours and minutes inputs will change time */
        this.mousewheel = true;
        /** if true the values of hours and minutes can be changed using the up/down arrow keys on the keyboard */
        this.arrowkeys = true;
        /** if true spinner arrows above and below the inputs will be shown */
        this.showSpinners = true;
        /** if true meridian button will be shown */
        this.showMeridian = true;
        /** show minutes in timepicker */
        this.showMinutes = true;
        /** show seconds in timepicker */
        this.showSeconds = false;
        /** meridian labels based on locale */
        this.meridians = ['AM', 'PM'];
        /** placeholder for hours field in timepicker */
        this.hoursPlaceholder = 'HH';
        /** placeholder for minutes field in timepicker */
        this.minutesPlaceholder = 'MM';
        /** placeholder for seconds field in timepicker */
        this.secondsPlaceholder = 'SS';
        /** emits true if value is a valid date */
        this.isValid = new EventEmitter();
        // ui variables
        this.hours = '';
        this.minutes = '';
        this.seconds = '';
        this.meridian = '';
        // min\max validation for input fields
        this.invalidHours = false;
        this.invalidMinutes = false;
        this.invalidSeconds = false;
        // aria-label variables
        this.labelHours = 'hours';
        this.labelMinutes = 'minutes';
        this.labelSeconds = 'seconds';
        // time picker controls state
        this.canIncrementHours = true;
        this.canIncrementMinutes = true;
        this.canIncrementSeconds = true;
        this.canDecrementHours = true;
        this.canDecrementMinutes = true;
        this.canDecrementSeconds = true;
        this.canToggleMeridian = true;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.onChange = Function.prototype;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.onTouched = Function.prototype;
        Object.assign(this, _config);
        this.timepickerSub = _store
            .select(state => state.value)
            .subscribe((value) => {
            // update UI values if date changed
            this._renderTime(value);
            this.onChange(value);
            this._store.dispatch(this._timepickerActions.updateControls(getControlsValue(this)));
        });
        _store
            .select(state => state.controls)
            .subscribe((controlsState) => {
            this.isValid.emit(isInputValid(this.hours, this.minutes, this.seconds, this.isPM()));
            Object.assign(this, controlsState);
            _cd.markForCheck();
        });
    }
    /** @deprecated - please use `isEditable` instead */
    get isSpinnersVisible() {
        return this.showSpinners && !this.readonlyInput;
    }
    get isEditable() {
        return !(this.readonlyInput || this.disabled);
    }
    resetValidation() {
        this.invalidHours = false;
        this.invalidMinutes = false;
        this.invalidSeconds = false;
    }
    isPM() {
        return this.showMeridian && this.meridian === this.meridians[1];
    }
    prevDef($event) {
        $event.preventDefault();
    }
    wheelSign($event) {
        return Math.sign($event.deltaY || 0) * -1;
    }
    ngOnChanges() {
        this._store.dispatch(this._timepickerActions.updateControls(getControlsValue(this)));
    }
    changeHours(step, source = '') {
        this.resetValidation();
        this._store.dispatch(this._timepickerActions.changeHours({ step, source }));
    }
    changeMinutes(step, source = '') {
        this.resetValidation();
        this._store.dispatch(this._timepickerActions.changeMinutes({ step, source }));
    }
    changeSeconds(step, source = '') {
        this.resetValidation();
        this._store.dispatch(this._timepickerActions.changeSeconds({ step, source }));
    }
    updateHours(target) {
        this.resetValidation();
        this.hours = target.value;
        const isValid = isHourInputValid(this.hours, this.isPM()) && this.isValidLimit();
        if (!isValid) {
            this.invalidHours = true;
            this.isValid.emit(false);
            this.onChange(null);
            return;
        }
        this._updateTime();
    }
    updateMinutes(target) {
        this.resetValidation();
        this.minutes = target.value;
        const isValid = isMinuteInputValid(this.minutes) && this.isValidLimit();
        if (!isValid) {
            this.invalidMinutes = true;
            this.isValid.emit(false);
            this.onChange(null);
            return;
        }
        this._updateTime();
    }
    updateSeconds(target) {
        this.resetValidation();
        this.seconds = target.value;
        const isValid = isSecondInputValid(this.seconds) && this.isValidLimit();
        if (!isValid) {
            this.invalidSeconds = true;
            this.isValid.emit(false);
            this.onChange(null);
            return;
        }
        this._updateTime();
    }
    isValidLimit() {
        return isInputLimitValid({
            hour: this.hours,
            minute: this.minutes,
            seconds: this.seconds,
            isPM: this.isPM()
        }, this.max, this.min);
    }
    _updateTime() {
        const _seconds = this.showSeconds ? this.seconds : void 0;
        const _minutes = this.showMinutes ? this.minutes : void 0;
        if (!isInputValid(this.hours, _minutes, _seconds, this.isPM())) {
            this.isValid.emit(false);
            this.onChange(null);
            return;
        }
        this._store.dispatch(this._timepickerActions.setTime({
            hour: this.hours,
            minute: this.minutes,
            seconds: this.seconds,
            isPM: this.isPM()
        }));
    }
    toggleMeridian() {
        if (!this.showMeridian || !this.isEditable) {
            return;
        }
        const _hoursPerDayHalf = 12;
        this._store.dispatch(this._timepickerActions.changeHours({
            step: _hoursPerDayHalf,
            source: ''
        }));
    }
    /**
     * Write a new value to the element.
     */
    writeValue(obj) {
        if (isValidDate(obj)) {
            this._store.dispatch(this._timepickerActions.writeValue(parseTime(obj)));
        }
        else if (obj == null) {
            this._store.dispatch(this._timepickerActions.writeValue());
        }
    }
    /**
     * Set the function to be called when the control receives a change event.
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * Set the function to be called when the control receives a touch event.
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * This function is called when the control status changes to or from "disabled".
     * Depending on the value, it will enable or disable the appropriate DOM element.
     *
     * @param isDisabled
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
        this._cd.markForCheck();
    }
    ngOnDestroy() {
        this.timepickerSub.unsubscribe();
    }
    _renderTime(value) {
        if (!value || !isValidDate(value)) {
            this.hours = '';
            this.minutes = '';
            this.seconds = '';
            this.meridian = this.meridians[0];
            return;
        }
        const _value = parseTime(value);
        if (!_value) {
            return;
        }
        const _hoursPerDayHalf = 12;
        let _hours = _value.getHours();
        if (this.showMeridian) {
            this.meridian = this.meridians[_hours >= _hoursPerDayHalf ? 1 : 0];
            _hours = _hours % _hoursPerDayHalf;
            // should be 12 PM, not 00 PM
            if (_hours === 0) {
                _hours = _hoursPerDayHalf;
            }
        }
        this.hours = padNumber(_hours);
        this.minutes = padNumber(_value.getMinutes());
        this.seconds = padNumber(_value.getUTCSeconds());
    }
}
TimepickerComponent.ɵfac = function TimepickerComponent_Factory(t) { return new (t || TimepickerComponent)(i0.ɵɵdirectiveInject(i1.TimepickerConfig), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2.TimepickerStore), i0.ɵɵdirectiveInject(i3.TimepickerActions)); };
TimepickerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TimepickerComponent, selectors: [["timepicker"]], inputs: { hourStep: "hourStep", minuteStep: "minuteStep", secondsStep: "secondsStep", readonlyInput: "readonlyInput", disabled: "disabled", mousewheel: "mousewheel", arrowkeys: "arrowkeys", showSpinners: "showSpinners", showMeridian: "showMeridian", showMinutes: "showMinutes", showSeconds: "showSeconds", meridians: "meridians", min: "min", max: "max", hoursPlaceholder: "hoursPlaceholder", minutesPlaceholder: "minutesPlaceholder", secondsPlaceholder: "secondsPlaceholder" }, outputs: { isValid: "isValid" }, features: [i0.ɵɵProvidersFeature([TIMEPICKER_CONTROL_VALUE_ACCESSOR, TimepickerStore]), i0.ɵɵNgOnChangesFeature], decls: 31, vars: 33, consts: [[1, "text-center", 3, "hidden"], [1, "btn", "btn-link", 3, "click"], [1, "bs-chevron", "bs-chevron-up"], [4, "ngIf"], [1, "form-group"], ["type", "text", "maxlength", "2", 1, "form-control", "text-center", "bs-timepicker-field", 3, "placeholder", "readonly", "disabled", "value", "wheel", "keydown.ArrowUp", "keydown.ArrowDown", "change"], ["class", "form-group", 3, "has-error", 4, "ngIf"], [1, "bs-chevron", "bs-chevron-down"], ["type", "button", 1, "btn", "btn-default", "text-center", 3, "disabled", "click"]], template: function TimepickerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "table");
        i0.ɵɵelementStart(1, "tbody");
        i0.ɵɵelementStart(2, "tr", 0);
        i0.ɵɵelementStart(3, "td");
        i0.ɵɵelementStart(4, "a", 1);
        i0.ɵɵlistener("click", function TimepickerComponent_Template_a_click_4_listener() { return ctx.changeHours(ctx.hourStep); });
        i0.ɵɵelement(5, "span", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(6, TimepickerComponent_td_6_Template, 2, 0, "td", 3);
        i0.ɵɵtemplate(7, TimepickerComponent_td_7_Template, 3, 2, "td", 3);
        i0.ɵɵtemplate(8, TimepickerComponent_td_8_Template, 2, 0, "td", 3);
        i0.ɵɵtemplate(9, TimepickerComponent_td_9_Template, 3, 2, "td", 3);
        i0.ɵɵtemplate(10, TimepickerComponent_td_10_Template, 2, 0, "td", 3);
        i0.ɵɵtemplate(11, TimepickerComponent_td_11_Template, 1, 0, "td", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "tr");
        i0.ɵɵelementStart(13, "td", 4);
        i0.ɵɵelementStart(14, "input", 5);
        i0.ɵɵlistener("wheel", function TimepickerComponent_Template_input_wheel_14_listener($event) { ctx.prevDef($event); return ctx.changeHours(ctx.hourStep * ctx.wheelSign($event), "wheel"); })("keydown.ArrowUp", function TimepickerComponent_Template_input_keydown_ArrowUp_14_listener() { return ctx.changeHours(ctx.hourStep, "key"); })("keydown.ArrowDown", function TimepickerComponent_Template_input_keydown_ArrowDown_14_listener() { return ctx.changeHours(-ctx.hourStep, "key"); })("change", function TimepickerComponent_Template_input_change_14_listener($event) { return ctx.updateHours($event.target); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(15, TimepickerComponent_td_15_Template, 2, 0, "td", 3);
        i0.ɵɵtemplate(16, TimepickerComponent_td_16_Template, 2, 9, "td", 6);
        i0.ɵɵtemplate(17, TimepickerComponent_td_17_Template, 2, 0, "td", 3);
        i0.ɵɵtemplate(18, TimepickerComponent_td_18_Template, 2, 9, "td", 6);
        i0.ɵɵtemplate(19, TimepickerComponent_td_19_Template, 2, 0, "td", 3);
        i0.ɵɵtemplate(20, TimepickerComponent_td_20_Template, 3, 4, "td", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(21, "tr", 0);
        i0.ɵɵelementStart(22, "td");
        i0.ɵɵelementStart(23, "a", 1);
        i0.ɵɵlistener("click", function TimepickerComponent_Template_a_click_23_listener() { return ctx.changeHours(-ctx.hourStep); });
        i0.ɵɵelement(24, "span", 7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(25, TimepickerComponent_td_25_Template, 2, 0, "td", 3);
        i0.ɵɵtemplate(26, TimepickerComponent_td_26_Template, 3, 2, "td", 3);
        i0.ɵɵtemplate(27, TimepickerComponent_td_27_Template, 2, 0, "td", 3);
        i0.ɵɵtemplate(28, TimepickerComponent_td_28_Template, 3, 2, "td", 3);
        i0.ɵɵtemplate(29, TimepickerComponent_td_29_Template, 2, 0, "td", 3);
        i0.ɵɵtemplate(30, TimepickerComponent_td_30_Template, 1, 0, "td", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("hidden", !ctx.showSpinners);
        i0.ɵɵadvance(2);
        i0.ɵɵclassProp("disabled", !ctx.canIncrementHours || !ctx.isEditable);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.showMinutes);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showMinutes);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showSeconds);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showSeconds);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showMeridian);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showMeridian);
        i0.ɵɵadvance(2);
        i0.ɵɵclassProp("has-error", ctx.invalidHours);
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("is-invalid", ctx.invalidHours);
        i0.ɵɵproperty("placeholder", ctx.hoursPlaceholder)("readonly", ctx.readonlyInput)("disabled", ctx.disabled)("value", ctx.hours);
        i0.ɵɵattribute("aria-label", ctx.labelHours);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showMinutes);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showMinutes);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showSeconds);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showSeconds);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showMeridian);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showMeridian);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("hidden", !ctx.showSpinners);
        i0.ɵɵadvance(2);
        i0.ɵɵclassProp("disabled", !ctx.canDecrementHours || !ctx.isEditable);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.showMinutes);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showMinutes);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showSeconds);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showSeconds);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showMeridian);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showMeridian);
    } }, directives: [i4.NgIf], styles: ["\n    .bs-chevron {\n      border-style: solid;\n      display: block;\n      width: 9px;\n      height: 9px;\n      position: relative;\n      border-width: 3px 0px 0 3px;\n    }\n\n    .bs-chevron-up {\n      -webkit-transform: rotate(45deg);\n      transform: rotate(45deg);\n      top: 2px;\n    }\n\n    .bs-chevron-down {\n      -webkit-transform: rotate(-135deg);\n      transform: rotate(-135deg);\n      top: -2px;\n    }\n\n    .bs-timepicker-field {\n      width: 50px;\n      padding: .375rem .55rem;\n    }\n  "], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TimepickerComponent, [{
        type: Component,
        args: [{
                selector: 'timepicker',
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [TIMEPICKER_CONTROL_VALUE_ACCESSOR, TimepickerStore],
                templateUrl: './timepicker.component.html',
                styles: [`
    .bs-chevron {
      border-style: solid;
      display: block;
      width: 9px;
      height: 9px;
      position: relative;
      border-width: 3px 0px 0 3px;
    }

    .bs-chevron-up {
      -webkit-transform: rotate(45deg);
      transform: rotate(45deg);
      top: 2px;
    }

    .bs-chevron-down {
      -webkit-transform: rotate(-135deg);
      transform: rotate(-135deg);
      top: -2px;
    }

    .bs-timepicker-field {
      width: 50px;
      padding: .375rem .55rem;
    }
  `],
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: i1.TimepickerConfig }, { type: i0.ChangeDetectorRef }, { type: i2.TimepickerStore }, { type: i3.TimepickerActions }]; }, { hourStep: [{
            type: Input
        }], minuteStep: [{
            type: Input
        }], secondsStep: [{
            type: Input
        }], readonlyInput: [{
            type: Input
        }], disabled: [{
            type: Input
        }], mousewheel: [{
            type: Input
        }], arrowkeys: [{
            type: Input
        }], showSpinners: [{
            type: Input
        }], showMeridian: [{
            type: Input
        }], showMinutes: [{
            type: Input
        }], showSeconds: [{
            type: Input
        }], meridians: [{
            type: Input
        }], min: [{
            type: Input
        }], max: [{
            type: Input
        }], hoursPlaceholder: [{
            type: Input
        }], minutesPlaceholder: [{
            type: Input
        }], secondsPlaceholder: [{
            type: Input
        }], isValid: [{
            type: Output
        }] }); })();
//# sourceMappingURL=timepicker.component.js.map