import { ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2 } from '@angular/core';
import { BsDatepickerConfig } from '../../bs-datepicker.config';
import * as i0 from "@angular/core";
import * as i1 from "../../bs-datepicker.config";
const _c0 = ["bsDatepickerDayDecorator", ""];
export class BsDatepickerDayDecoratorComponent {
    constructor(_config, _elRef, _renderer) {
        this._config = _config;
        this._elRef = _elRef;
        this._renderer = _renderer;
        this.day = { date: new Date(), label: '' };
    }
    ngOnInit() {
        var _a, _b, _c;
        if (((_a = this.day) === null || _a === void 0 ? void 0 : _a.isToday) && this._config && this._config.customTodayClass) {
            this._renderer.addClass(this._elRef.nativeElement, this._config.customTodayClass);
        }
        if (typeof ((_b = this.day) === null || _b === void 0 ? void 0 : _b.customClasses) === 'string') {
            (_c = this.day) === null || _c === void 0 ? void 0 : _c.customClasses.split(' ').filter((className) => className).forEach((className) => {
                this._renderer.addClass(this._elRef.nativeElement, className);
            });
        }
    }
}
BsDatepickerDayDecoratorComponent.ɵfac = function BsDatepickerDayDecoratorComponent_Factory(t) { return new (t || BsDatepickerDayDecoratorComponent)(i0.ɵɵdirectiveInject(i1.BsDatepickerConfig), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
BsDatepickerDayDecoratorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: BsDatepickerDayDecoratorComponent, selectors: [["", "bsDatepickerDayDecorator", ""]], hostVars: 16, hostBindings: function BsDatepickerDayDecoratorComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("disabled", ctx.day.isDisabled)("is-highlighted", ctx.day.isHovered)("is-other-month", ctx.day.isOtherMonth)("is-active-other-month", ctx.day.isOtherMonthHovered)("in-range", ctx.day.isInRange)("select-start", ctx.day.isSelectionStart)("select-end", ctx.day.isSelectionEnd)("selected", ctx.day.isSelected);
    } }, inputs: { day: "day" }, attrs: _c0, decls: 1, vars: 1, template: function BsDatepickerDayDecoratorComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtext(0);
    } if (rf & 2) {
        i0.ɵɵtextInterpolate(ctx.day && ctx.day.label || "");
    } }, encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BsDatepickerDayDecoratorComponent, [{
        type: Component,
        args: [{
                selector: '[bsDatepickerDayDecorator]',
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    '[class.disabled]': 'day.isDisabled',
                    '[class.is-highlighted]': 'day.isHovered',
                    '[class.is-other-month]': 'day.isOtherMonth',
                    '[class.is-active-other-month]': 'day.isOtherMonthHovered',
                    '[class.in-range]': 'day.isInRange',
                    '[class.select-start]': 'day.isSelectionStart',
                    '[class.select-end]': 'day.isSelectionEnd',
                    '[class.selected]': 'day.isSelected'
                },
                template: `{{ day && day.label || '' }}`
            }]
    }], function () { return [{ type: i1.BsDatepickerConfig }, { type: i0.ElementRef }, { type: i0.Renderer2 }]; }, { day: [{
            type: Input
        }] }); })();
//# sourceMappingURL=bs-datepicker-day-decorator.directive.js.map