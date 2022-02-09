import { ɵɵdirectiveInject, ElementRef, Renderer2, ɵɵdefineComponent, ɵɵattribute, ɵɵstyleProp, ɵɵclassProp, ɵɵNgOnChangesFeature, ɵɵprojectionDef, ɵɵprojection, ɵsetClassMetadata, Component, ChangeDetectionStrategy, Input, ɵɵdefineInjectable, Injectable, ɵɵelementContainer, ɵɵelementStart, ɵɵelementEnd, ɵɵnextContext, ɵɵproperty, ɵɵtext, ɵɵadvance, ɵɵtextInterpolate, ɵɵtemplate, ɵɵtemplateRefExtractor, ɵɵreference, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { isBs3 } from 'ngx-bootstrap/utils';
import { NgIf, NgForOf, CommonModule } from '@angular/common';

const _c0 = ["*"];
class BarComponent {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        /** maximum total value of progress element */
        this.max = 100;
        /** current value of progress bar */
        this.value = 0;
        /** if `true` changing value of progress bar will be animated */
        this.animate = false;
        /** If `true`, striped classes are applied */
        this.striped = false;
        /** provide one of the four supported contextual classes: `success`, `info`, `warning`, `danger` */
        this.type = 'info';
        this.percent = 100;
    }
    get isBs3() {
        return isBs3();
    }
    ngOnChanges(changes) {
        var _a;
        if (changes.value || changes.max) {
            this.percent = 100 * (Number(changes.value.currentValue || 0)
                / Number((((_a = changes.max) === null || _a === void 0 ? void 0 : _a.currentValue) || this.max) || 100));
        }
        if (changes.type) {
            this.applyTypeClasses();
        }
    }
    applyTypeClasses() {
        if (this._prevType) {
            const barTypeClass = `progress-bar-${this._prevType}`;
            const bgClass = `bg-${this._prevType}`;
            this.renderer.removeClass(this.el.nativeElement, barTypeClass);
            this.renderer.removeClass(this.el.nativeElement, bgClass);
            this._prevType = void 0;
        }
        if (this.type) {
            const barTypeClass = `progress-bar-${this.type}`;
            const bgClass = `bg-${this.type}`;
            this.renderer.addClass(this.el.nativeElement, barTypeClass);
            this.renderer.addClass(this.el.nativeElement, bgClass);
            this._prevType = this.type;
        }
    }
}
BarComponent.ɵfac = function BarComponent_Factory(t) { return new (t || BarComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2)); };
BarComponent.ɵcmp = ɵɵdefineComponent({ type: BarComponent, selectors: [["bar"]], hostAttrs: ["role", "progressbar", "aria-valuemin", "0"], hostVars: 15, hostBindings: function BarComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵɵattribute("aria-valuenow", ctx.value)("aria-valuetext", ctx.percent ? ctx.percent.toFixed(0) + "%" : "")("aria-valuemax", ctx.max);
        ɵɵstyleProp("height", "100", "%")("width", ctx.percent, "%");
        ɵɵclassProp("progress-bar", true)("progress-bar-animated", !ctx.isBs3 && ctx.animate)("progress-bar-striped", ctx.striped)("active", ctx.isBs3 && ctx.animate);
    } }, inputs: { max: "max", value: "value", animate: "animate", striped: "striped", type: "type" }, features: [ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function BarComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(BarComponent, [{
        type: Component,
        args: [{
                selector: 'bar',
                templateUrl: './bar.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
                // eslint-disable-next-line @angular-eslint/no-host-metadata-property
                host: {
                    role: 'progressbar',
                    'aria-valuemin': '0',
                    '[class.progress-bar]': 'true',
                    '[class.progress-bar-animated]': '!isBs3 && animate',
                    '[class.progress-bar-striped]': 'striped',
                    '[class.active]': 'isBs3 && animate',
                    '[attr.aria-valuenow]': 'value',
                    '[attr.aria-valuetext]': 'percent ? percent.toFixed(0) + "%" : ""',
                    '[attr.aria-valuemax]': 'max',
                    '[style.height.%]': '"100"',
                    '[style.width.%]': 'percent'
                }
            }]
    }], function () { return [{ type: ElementRef }, { type: Renderer2 }]; }, { max: [{
            type: Input
        }], value: [{
            type: Input
        }], animate: [{
            type: Input
        }], striped: [{
            type: Input
        }], type: [{
            type: Input
        }] }); })();

class ProgressbarConfig {
    constructor() {
        /** if `true` changing value of progress bar will be animated */
        this.animate = false;
        /** maximum total value of progress element */
        this.max = 100;
    }
}
ProgressbarConfig.ɵfac = function ProgressbarConfig_Factory(t) { return new (t || ProgressbarConfig)(); };
ProgressbarConfig.ɵprov = ɵɵdefineInjectable({ token: ProgressbarConfig, factory: ProgressbarConfig.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ProgressbarConfig, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();

function ProgressbarComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function ProgressbarComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "bar", 3);
    ɵɵprojection(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("type", ctx_r2.type)("value", ctx_r2._value)("max", ctx_r2.max)("animate", ctx_r2.animate)("striped", ctx_r2.striped);
} }
function ProgressbarComponent_ng_template_3_bar_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "bar", 3);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const ctx_r5 = ɵɵnextContext(2);
    ɵɵproperty("type", item_r6.type)("value", item_r6.value)("max", item_r6.max)("animate", ctx_r5.animate)("striped", ctx_r5.striped);
    ɵɵadvance(1);
    ɵɵtextInterpolate(item_r6.label);
} }
function ProgressbarComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, ProgressbarComponent_ng_template_3_bar_0_Template, 2, 6, "bar", 4);
} if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    ɵɵproperty("ngForOf", ctx_r4._values);
} }
const _c0$1 = ["*"];
class ProgressbarComponent {
    constructor(config) {
        /** maximum total value of progress element */
        this.max = 100;
        /** if `true` changing value of progress bar will be animated */
        this.animate = false;
        /** If `true`, striped classes are applied */
        this.striped = false;
        this.isStacked = false;
        this._value = 0;
        Object.assign(this, config);
    }
    /** current value of progress bar. Could be a number or array of objects
     * like {"value":15,"type":"info","label":"15 %"}
     */
    set value(value) {
        this.isStacked = Array.isArray(value);
        if (typeof value === 'number') {
            this._value = value;
            this._values = void 0;
        }
        else {
            this._value = void 0;
            this._values = value;
        }
    }
}
ProgressbarComponent.ɵfac = function ProgressbarComponent_Factory(t) { return new (t || ProgressbarComponent)(ɵɵdirectiveInject(ProgressbarConfig)); };
ProgressbarComponent.ɵcmp = ɵɵdefineComponent({ type: ProgressbarComponent, selectors: [["progressbar"]], hostVars: 3, hostBindings: function ProgressbarComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵɵattribute("max", ctx.max);
        ɵɵclassProp("progress", true);
    } }, inputs: { max: "max", animate: "animate", striped: "striped", type: "type", value: "value" }, ngContentSelectors: _c0$1, decls: 5, vars: 3, consts: [[4, "ngIf", "ngIfThen", "ngIfElse"], ["NotStacked", ""], ["Stacked", ""], [3, "type", "value", "max", "animate", "striped"], [3, "type", "value", "max", "animate", "striped", 4, "ngFor", "ngForOf"]], template: function ProgressbarComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵtemplate(0, ProgressbarComponent_ng_container_0_Template, 1, 0, "ng-container", 0);
        ɵɵtemplate(1, ProgressbarComponent_ng_template_1_Template, 2, 5, "ng-template", null, 1, ɵɵtemplateRefExtractor);
        ɵɵtemplate(3, ProgressbarComponent_ng_template_3_Template, 1, 1, "ng-template", null, 2, ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = ɵɵreference(2);
        const _r3 = ɵɵreference(4);
        ɵɵproperty("ngIf", !ctx.isStacked)("ngIfThen", _r1)("ngIfElse", _r3);
    } }, directives: [NgIf, BarComponent, NgForOf], styles: ["[_nghost-%COMP%] {\n      width: 100%;\n      display: flex;\n    }"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ProgressbarComponent, [{
        type: Component,
        args: [{
                selector: 'progressbar',
                templateUrl: './progressbar.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
                // eslint-disable-next-line @angular-eslint/no-host-metadata-property
                host: {
                    '[class.progress]': 'true',
                    '[attr.max]': 'max'
                },
                styles: [`
    :host {
      width: 100%;
      display: flex;
    } `]
            }]
    }], function () { return [{ type: ProgressbarConfig }]; }, { max: [{
            type: Input
        }], animate: [{
            type: Input
        }], striped: [{
            type: Input
        }], type: [{
            type: Input
        }], value: [{
            type: Input
        }] }); })();

class ProgressbarModule {
    static forRoot() {
        return { ngModule: ProgressbarModule, providers: [] };
    }
}
ProgressbarModule.ɵmod = ɵɵdefineNgModule({ type: ProgressbarModule });
ProgressbarModule.ɵinj = ɵɵdefineInjector({ factory: function ProgressbarModule_Factory(t) { return new (t || ProgressbarModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(ProgressbarModule, { declarations: [BarComponent, ProgressbarComponent], imports: [CommonModule], exports: [BarComponent, ProgressbarComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ProgressbarModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: [BarComponent, ProgressbarComponent],
                exports: [BarComponent, ProgressbarComponent]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { BarComponent, ProgressbarComponent, ProgressbarConfig, ProgressbarModule };
//# sourceMappingURL=ngx-bootstrap-progressbar.js.map
