import { Component, ElementRef, EventEmitter, Renderer2 } from '@angular/core';
import { take } from 'rxjs/operators';
import { getFullYear, getMonth } from 'ngx-bootstrap/chronos';
import { PositioningService } from 'ngx-bootstrap/positioning';
import { datepickerAnimation } from '../../datepicker-animations';
import { BsDatepickerAbstractComponent } from '../../base/bs-datepicker-container';
import { BsDatepickerConfig } from '../../bs-datepicker.config';
import { BsDatepickerActions } from '../../reducer/bs-datepicker.actions';
import { BsDatepickerEffects } from '../../reducer/bs-datepicker.effects';
import { BsDatepickerStore } from '../../reducer/bs-datepicker.store';
import * as i0 from "@angular/core";
import * as i1 from "../../bs-datepicker.config";
import * as i2 from "../../reducer/bs-datepicker.store";
import * as i3 from "../../reducer/bs-datepicker.actions";
import * as i4 from "../../reducer/bs-datepicker.effects";
import * as i5 from "ngx-bootstrap/positioning";
import * as i6 from "@angular/common";
import * as i7 from "./bs-days-calendar-view.component";
import * as i8 from "./bs-months-calendar-view.component";
import * as i9 from "./bs-years-calendar-view.component";
import * as i10 from "./bs-custom-dates-view.component";
function BsDatepickerContainerComponent_div_0_div_4_bs_days_calendar_view_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "bs-days-calendar-view", 9);
    i0.ɵɵlistener("onNavigate", function BsDatepickerContainerComponent_div_0_div_4_bs_days_calendar_view_1_Template_bs_days_calendar_view_onNavigate_0_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r9 = i0.ɵɵnextContext(3); return ctx_r9.navigateTo($event); })("onViewMode", function BsDatepickerContainerComponent_div_0_div_4_bs_days_calendar_view_1_Template_bs_days_calendar_view_onViewMode_0_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r11 = i0.ɵɵnextContext(3); return ctx_r11.setViewMode($event); })("onHover", function BsDatepickerContainerComponent_div_0_div_4_bs_days_calendar_view_1_Template_bs_days_calendar_view_onHover_0_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r12 = i0.ɵɵnextContext(3); return ctx_r12.dayHoverHandler($event); })("onHoverWeek", function BsDatepickerContainerComponent_div_0_div_4_bs_days_calendar_view_1_Template_bs_days_calendar_view_onHoverWeek_0_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r13 = i0.ɵɵnextContext(3); return ctx_r13.weekHoverHandler($event); })("onSelect", function BsDatepickerContainerComponent_div_0_div_4_bs_days_calendar_view_1_Template_bs_days_calendar_view_onSelect_0_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r14 = i0.ɵɵnextContext(3); return ctx_r14.daySelectHandler($event); });
    i0.ɵɵpipe(1, "async");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const calendar_r8 = ctx.$implicit;
    const ctx_r7 = i0.ɵɵnextContext(3);
    i0.ɵɵclassProp("bs-datepicker-multiple", ctx_r7.multipleCalendars);
    i0.ɵɵproperty("calendar", calendar_r8)("options", i0.ɵɵpipeBind1(1, 4, ctx_r7.options$));
} }
function BsDatepickerContainerComponent_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵtemplate(1, BsDatepickerContainerComponent_div_0_div_4_bs_days_calendar_view_1_Template, 2, 6, "bs-days-calendar-view", 8);
    i0.ɵɵpipe(2, "async");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(2, 1, ctx_r1.daysCalendar$));
} }
function BsDatepickerContainerComponent_div_0_div_5_bs_month_calendar_view_1_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "bs-month-calendar-view", 11);
    i0.ɵɵlistener("onNavigate", function BsDatepickerContainerComponent_div_0_div_5_bs_month_calendar_view_1_Template_bs_month_calendar_view_onNavigate_0_listener($event) { i0.ɵɵrestoreView(_r18); const ctx_r17 = i0.ɵɵnextContext(3); return ctx_r17.navigateTo($event); })("onViewMode", function BsDatepickerContainerComponent_div_0_div_5_bs_month_calendar_view_1_Template_bs_month_calendar_view_onViewMode_0_listener($event) { i0.ɵɵrestoreView(_r18); const ctx_r19 = i0.ɵɵnextContext(3); return ctx_r19.setViewMode($event); })("onHover", function BsDatepickerContainerComponent_div_0_div_5_bs_month_calendar_view_1_Template_bs_month_calendar_view_onHover_0_listener($event) { i0.ɵɵrestoreView(_r18); const ctx_r20 = i0.ɵɵnextContext(3); return ctx_r20.monthHoverHandler($event); })("onSelect", function BsDatepickerContainerComponent_div_0_div_5_bs_month_calendar_view_1_Template_bs_month_calendar_view_onSelect_0_listener($event) { i0.ɵɵrestoreView(_r18); const ctx_r21 = i0.ɵɵnextContext(3); return ctx_r21.monthSelectHandler($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const calendar_r16 = ctx.$implicit;
    const ctx_r15 = i0.ɵɵnextContext(3);
    i0.ɵɵclassProp("bs-datepicker-multiple", ctx_r15.multipleCalendars);
    i0.ɵɵproperty("calendar", calendar_r16);
} }
function BsDatepickerContainerComponent_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵtemplate(1, BsDatepickerContainerComponent_div_0_div_5_bs_month_calendar_view_1_Template, 1, 3, "bs-month-calendar-view", 10);
    i0.ɵɵpipe(2, "async");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(2, 1, ctx_r2.monthsCalendar));
} }
function BsDatepickerContainerComponent_div_0_div_6_bs_years_calendar_view_1_Template(rf, ctx) { if (rf & 1) {
    const _r25 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "bs-years-calendar-view", 11);
    i0.ɵɵlistener("onNavigate", function BsDatepickerContainerComponent_div_0_div_6_bs_years_calendar_view_1_Template_bs_years_calendar_view_onNavigate_0_listener($event) { i0.ɵɵrestoreView(_r25); const ctx_r24 = i0.ɵɵnextContext(3); return ctx_r24.navigateTo($event); })("onViewMode", function BsDatepickerContainerComponent_div_0_div_6_bs_years_calendar_view_1_Template_bs_years_calendar_view_onViewMode_0_listener($event) { i0.ɵɵrestoreView(_r25); const ctx_r26 = i0.ɵɵnextContext(3); return ctx_r26.setViewMode($event); })("onHover", function BsDatepickerContainerComponent_div_0_div_6_bs_years_calendar_view_1_Template_bs_years_calendar_view_onHover_0_listener($event) { i0.ɵɵrestoreView(_r25); const ctx_r27 = i0.ɵɵnextContext(3); return ctx_r27.yearHoverHandler($event); })("onSelect", function BsDatepickerContainerComponent_div_0_div_6_bs_years_calendar_view_1_Template_bs_years_calendar_view_onSelect_0_listener($event) { i0.ɵɵrestoreView(_r25); const ctx_r28 = i0.ɵɵnextContext(3); return ctx_r28.yearSelectHandler($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const calendar_r23 = ctx.$implicit;
    const ctx_r22 = i0.ɵɵnextContext(3);
    i0.ɵɵclassProp("bs-datepicker-multiple", ctx_r22.multipleCalendars);
    i0.ɵɵproperty("calendar", calendar_r23);
} }
function BsDatepickerContainerComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵtemplate(1, BsDatepickerContainerComponent_div_0_div_6_bs_years_calendar_view_1_Template, 1, 3, "bs-years-calendar-view", 10);
    i0.ɵɵpipe(2, "async");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(2, 1, ctx_r3.yearsCalendar));
} }
function BsDatepickerContainerComponent_div_0_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12);
    i0.ɵɵelementStart(1, "button", 13);
    i0.ɵɵtext(2, "Apply");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 14);
    i0.ɵɵtext(4, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function BsDatepickerContainerComponent_div_0_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r32 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵelementStart(1, "button", 18);
    i0.ɵɵlistener("click", function BsDatepickerContainerComponent_div_0_div_8_div_1_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r32); const ctx_r31 = i0.ɵɵnextContext(3); return ctx_r31.setToday(); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r29 = i0.ɵɵnextContext(3);
    i0.ɵɵclassProp("today-left", ctx_r29.todayPos === "left")("today-right", ctx_r29.todayPos === "right")("today-center", ctx_r29.todayPos === "center");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r29.todayBtnLbl);
} }
function BsDatepickerContainerComponent_div_0_div_8_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r34 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 19);
    i0.ɵɵelementStart(1, "button", 18);
    i0.ɵɵlistener("click", function BsDatepickerContainerComponent_div_0_div_8_div_2_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r34); const ctx_r33 = i0.ɵɵnextContext(3); return ctx_r33.clearDate(); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r30 = i0.ɵɵnextContext(3);
    i0.ɵɵclassProp("clear-left", ctx_r30.clearPos === "left")("clear-right", ctx_r30.clearPos === "right")("clear-center", ctx_r30.clearPos === "center");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r30.clearBtnLbl);
} }
function BsDatepickerContainerComponent_div_0_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12);
    i0.ɵɵtemplate(1, BsDatepickerContainerComponent_div_0_div_8_div_1_Template, 3, 7, "div", 15);
    i0.ɵɵtemplate(2, BsDatepickerContainerComponent_div_0_div_8_div_2_Template, 3, 7, "div", 16);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.showTodayBtn);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.showClearBtn);
} }
function BsDatepickerContainerComponent_div_0_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r36 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵelementStart(1, "bs-custom-date-view", 21);
    i0.ɵɵlistener("onSelect", function BsDatepickerContainerComponent_div_0_div_9_Template_bs_custom_date_view_onSelect_1_listener($event) { i0.ɵɵrestoreView(_r36); const ctx_r35 = i0.ɵɵnextContext(2); return ctx_r35.setRangeOnCalendar($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("selectedRange", ctx_r6.chosenRange)("ranges", ctx_r6.customRanges)("customRangeLabel", ctx_r6.customRangeBtnLbl);
} }
function BsDatepickerContainerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r38 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵelementStart(1, "div", 2);
    i0.ɵɵlistener("@datepickerAnimation.done", function BsDatepickerContainerComponent_div_0_Template_div_animation_datepickerAnimation_done_1_listener() { i0.ɵɵrestoreView(_r38); const ctx_r37 = i0.ɵɵnextContext(); return ctx_r37.positionServiceEnable(); });
    i0.ɵɵelementStart(2, "div", 3);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵtemplate(4, BsDatepickerContainerComponent_div_0_div_4_Template, 3, 3, "div", 4);
    i0.ɵɵtemplate(5, BsDatepickerContainerComponent_div_0_div_5_Template, 3, 3, "div", 4);
    i0.ɵɵtemplate(6, BsDatepickerContainerComponent_div_0_div_6_Template, 3, 3, "div", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, BsDatepickerContainerComponent_div_0_div_7_Template, 5, 0, "div", 5);
    i0.ɵɵtemplate(8, BsDatepickerContainerComponent_div_0_div_8_Template, 3, 2, "div", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, BsDatepickerContainerComponent_div_0_div_9_Template, 2, 3, "div", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r0.containerClass);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("@datepickerAnimation", ctx_r0.animationState);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitch", i0.ɵɵpipeBind1(3, 9, ctx_r0.viewMode));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngSwitchCase", "day");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "month");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "year");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", false);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.showTodayBtn || ctx_r0.showClearBtn);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.customRanges && ctx_r0.customRanges.length > 0);
} }
export class BsDatepickerContainerComponent extends BsDatepickerAbstractComponent {
    constructor(_renderer, _config, _store, _element, _actions, _effects, _positionService) {
        super();
        this._config = _config;
        this._store = _store;
        this._element = _element;
        this._actions = _actions;
        this._positionService = _positionService;
        this.valueChange = new EventEmitter();
        this.animationState = 'void';
        this._subs = [];
        this._effects = _effects;
        _renderer.setStyle(_element.nativeElement, 'display', 'block');
        _renderer.setStyle(_element.nativeElement, 'position', 'absolute');
    }
    set value(value) {
        var _a;
        (_a = this._effects) === null || _a === void 0 ? void 0 : _a.setValue(value);
    }
    ngOnInit() {
        var _a, _b;
        this._positionService.setOptions({
            modifiers: { flip: { enabled: this._config.adaptivePosition } },
            allowedPositions: ['top', 'bottom']
        });
        (_a = this._positionService.event$) === null || _a === void 0 ? void 0 : _a.pipe(take(1)).subscribe(() => {
            this._positionService.disable();
            if (this._config.isAnimated) {
                this.animationState = this.isTopPosition ? 'animated-up' : 'animated-down';
                return;
            }
            this.animationState = 'unanimated';
        });
        this.isOtherMonthsActive = this._config.selectFromOtherMonth;
        this.containerClass = this._config.containerClass;
        this.showTodayBtn = this._config.showTodayButton;
        this.todayBtnLbl = this._config.todayButtonLabel;
        this.todayPos = this._config.todayPosition;
        this.showClearBtn = this._config.showClearButton;
        this.clearBtnLbl = this._config.clearButtonLabel;
        this.clearPos = this._config.clearPosition;
        this.customRangeBtnLbl = this._config.customRangeButtonLabel;
        (_b = this._effects) === null || _b === void 0 ? void 0 : _b.init(this._store).setOptions(this._config).setBindings(this).setEventHandlers(this).registerDatepickerSideEffects();
        // todo: move it somewhere else
        // on selected date change
        this._subs.push(this._store
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .select((state) => state.selectedDate)
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .subscribe((date) => this.valueChange.emit(date)));
        this._store.dispatch(this._actions.changeViewMode(this._config.startView));
    }
    get isTopPosition() {
        return this._element.nativeElement.classList.contains('top');
    }
    positionServiceEnable() {
        this._positionService.enable();
    }
    daySelectHandler(day) {
        if (!day) {
            return;
        }
        const isDisabled = this.isOtherMonthsActive ? day.isDisabled : (day.isOtherMonth || day.isDisabled);
        if (isDisabled) {
            return;
        }
        this._store.dispatch(this._actions.select(day.date));
    }
    monthSelectHandler(day) {
        if (!day || day.isDisabled) {
            return;
        }
        this._store.dispatch(this._actions.navigateTo({
            unit: {
                month: getMonth(day.date),
                year: getFullYear(day.date)
            },
            viewMode: 'day'
        }));
    }
    yearSelectHandler(day) {
        if (!day || day.isDisabled) {
            return;
        }
        this._store.dispatch(this._actions.navigateTo({
            unit: {
                year: getFullYear(day.date)
            },
            viewMode: 'month'
        }));
    }
    setToday() {
        this._store.dispatch(this._actions.select(new Date()));
    }
    clearDate() {
        this._store.dispatch(this._actions.select(undefined));
    }
    ngOnDestroy() {
        var _a;
        for (const sub of this._subs) {
            sub.unsubscribe();
        }
        (_a = this._effects) === null || _a === void 0 ? void 0 : _a.destroy();
    }
}
BsDatepickerContainerComponent.ɵfac = function BsDatepickerContainerComponent_Factory(t) { return new (t || BsDatepickerContainerComponent)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i1.BsDatepickerConfig), i0.ɵɵdirectiveInject(i2.BsDatepickerStore), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i3.BsDatepickerActions), i0.ɵɵdirectiveInject(i4.BsDatepickerEffects), i0.ɵɵdirectiveInject(i5.PositioningService)); };
BsDatepickerContainerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: BsDatepickerContainerComponent, selectors: [["bs-datepicker-container"]], hostAttrs: ["role", "dialog", "aria-label", "calendar", 1, "bottom"], hostBindings: function BsDatepickerContainerComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("click", function BsDatepickerContainerComponent_click_HostBindingHandler($event) { return ctx._stopPropagation($event); });
    } }, features: [i0.ɵɵProvidersFeature([BsDatepickerStore, BsDatepickerEffects]), i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 3, consts: [["class", "bs-datepicker", 3, "ngClass", 4, "ngIf"], [1, "bs-datepicker", 3, "ngClass"], [1, "bs-datepicker-container"], ["role", "application", 1, "bs-calendar-container", 3, "ngSwitch"], ["class", "bs-media-container", 4, "ngSwitchCase"], ["class", "bs-datepicker-buttons", 4, "ngIf"], ["class", "bs-datepicker-custom-range", 4, "ngIf"], [1, "bs-media-container"], [3, "bs-datepicker-multiple", "calendar", "options", "onNavigate", "onViewMode", "onHover", "onHoverWeek", "onSelect", 4, "ngFor", "ngForOf"], [3, "calendar", "options", "onNavigate", "onViewMode", "onHover", "onHoverWeek", "onSelect"], [3, "bs-datepicker-multiple", "calendar", "onNavigate", "onViewMode", "onHover", "onSelect", 4, "ngFor", "ngForOf"], [3, "calendar", "onNavigate", "onViewMode", "onHover", "onSelect"], [1, "bs-datepicker-buttons"], ["type", "button", 1, "btn", "btn-success"], ["type", "button", 1, "btn", "btn-default"], ["class", "btn-today-wrapper", 3, "today-left", "today-right", "today-center", 4, "ngIf"], ["class", "btn-clear-wrapper", 3, "clear-left", "clear-right", "clear-center", 4, "ngIf"], [1, "btn-today-wrapper"], [1, "btn", "btn-success", 3, "click"], [1, "btn-clear-wrapper"], [1, "bs-datepicker-custom-range"], [3, "selectedRange", "ranges", "customRangeLabel", "onSelect"]], template: function BsDatepickerContainerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, BsDatepickerContainerComponent_div_0_Template, 10, 11, "div", 0);
        i0.ɵɵpipe(1, "async");
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 1, ctx.viewMode));
    } }, directives: [i6.NgIf, i6.NgClass, i6.NgSwitch, i6.NgSwitchCase, i6.NgForOf, i7.BsDaysCalendarViewComponent, i8.BsMonthCalendarViewComponent, i9.BsYearsCalendarViewComponent, i10.BsCustomDatesViewComponent], pipes: [i6.AsyncPipe], encapsulation: 2, data: { animation: [datepickerAnimation] } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BsDatepickerContainerComponent, [{
        type: Component,
        args: [{
                selector: 'bs-datepicker-container',
                providers: [BsDatepickerStore, BsDatepickerEffects],
                templateUrl: './bs-datepicker-view.html',
                host: {
                    class: 'bottom',
                    '(click)': '_stopPropagation($event)',
                    role: 'dialog',
                    'aria-label': 'calendar'
                },
                animations: [datepickerAnimation]
            }]
    }], function () { return [{ type: i0.Renderer2 }, { type: i1.BsDatepickerConfig }, { type: i2.BsDatepickerStore }, { type: i0.ElementRef }, { type: i3.BsDatepickerActions }, { type: i4.BsDatepickerEffects }, { type: i5.PositioningService }]; }, null); })();
//# sourceMappingURL=bs-datepicker-container.component.js.map