(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('ngx-bootstrap/utils'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ngx-bootstrap/progressbar', ['exports', '@angular/core', 'ngx-bootstrap/utils', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['ngx-bootstrap'] = global['ngx-bootstrap'] || {}, global['ngx-bootstrap'].progressbar = {}), global.ng.core, global.utils, global.ng.common));
}(this, (function (exports, i0, utils, i2) { 'use strict';

    var _c0 = ["*"];
    var BarComponent = /** @class */ (function () {
        function BarComponent(el, renderer) {
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
        Object.defineProperty(BarComponent.prototype, "isBs3", {
            get: function () {
                return utils.isBs3();
            },
            enumerable: false,
            configurable: true
        });
        BarComponent.prototype.ngOnChanges = function (changes) {
            var _a;
            if (changes.value || changes.max) {
                this.percent = 100 * (Number(changes.value.currentValue || 0)
                    / Number((((_a = changes.max) === null || _a === void 0 ? void 0 : _a.currentValue) || this.max) || 100));
            }
            if (changes.type) {
                this.applyTypeClasses();
            }
        };
        BarComponent.prototype.applyTypeClasses = function () {
            if (this._prevType) {
                var barTypeClass = "progress-bar-" + this._prevType;
                var bgClass = "bg-" + this._prevType;
                this.renderer.removeClass(this.el.nativeElement, barTypeClass);
                this.renderer.removeClass(this.el.nativeElement, bgClass);
                this._prevType = void 0;
            }
            if (this.type) {
                var barTypeClass = "progress-bar-" + this.type;
                var bgClass = "bg-" + this.type;
                this.renderer.addClass(this.el.nativeElement, barTypeClass);
                this.renderer.addClass(this.el.nativeElement, bgClass);
                this._prevType = this.type;
            }
        };
        return BarComponent;
    }());
    BarComponent.ɵfac = function BarComponent_Factory(t) { return new (t || BarComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
    BarComponent.ɵcmp = i0.ɵɵdefineComponent({ type: BarComponent, selectors: [["bar"]], hostAttrs: ["role", "progressbar", "aria-valuemin", "0"], hostVars: 15, hostBindings: function BarComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0.ɵɵattribute("aria-valuenow", ctx.value)("aria-valuetext", ctx.percent ? ctx.percent.toFixed(0) + "%" : "")("aria-valuemax", ctx.max);
                i0.ɵɵstyleProp("height", "100", "%")("width", ctx.percent, "%");
                i0.ɵɵclassProp("progress-bar", true)("progress-bar-animated", !ctx.isBs3 && ctx.animate)("progress-bar-striped", ctx.striped)("active", ctx.isBs3 && ctx.animate);
            }
        }, inputs: { max: "max", value: "value", animate: "animate", striped: "striped", type: "type" }, features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function BarComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵprojectionDef();
                i0.ɵɵprojection(0);
            }
        }, encapsulation: 2, changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BarComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'bar',
                        templateUrl: './bar.component.html',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
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
            }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, { max: [{
                    type: i0.Input
                }], value: [{
                    type: i0.Input
                }], animate: [{
                    type: i0.Input
                }], striped: [{
                    type: i0.Input
                }], type: [{
                    type: i0.Input
                }] });
    })();

    var ProgressbarConfig = /** @class */ (function () {
        function ProgressbarConfig() {
            /** if `true` changing value of progress bar will be animated */
            this.animate = false;
            /** maximum total value of progress element */
            this.max = 100;
        }
        return ProgressbarConfig;
    }());
    ProgressbarConfig.ɵfac = function ProgressbarConfig_Factory(t) { return new (t || ProgressbarConfig)(); };
    ProgressbarConfig.ɵprov = i0.ɵɵdefineInjectable({ token: ProgressbarConfig, factory: ProgressbarConfig.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProgressbarConfig, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], null, null);
    })();

    function ProgressbarComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainer(0);
        }
    }
    function ProgressbarComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "bar", 3);
            i0.ɵɵprojection(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0.ɵɵnextContext();
            i0.ɵɵproperty("type", ctx_r2.type)("value", ctx_r2._value)("max", ctx_r2.max)("animate", ctx_r2.animate)("striped", ctx_r2.striped);
        }
    }
    function ProgressbarComponent_ng_template_3_bar_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "bar", 3);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var item_r6 = ctx.$implicit;
            var ctx_r5 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("type", item_r6.type)("value", item_r6.value)("max", item_r6.max)("animate", ctx_r5.animate)("striped", ctx_r5.striped);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(item_r6.label);
        }
    }
    function ProgressbarComponent_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtemplate(0, ProgressbarComponent_ng_template_3_bar_0_Template, 2, 6, "bar", 4);
        }
        if (rf & 2) {
            var ctx_r4 = i0.ɵɵnextContext();
            i0.ɵɵproperty("ngForOf", ctx_r4._values);
        }
    }
    var _c0$1 = ["*"];
    var ProgressbarComponent = /** @class */ (function () {
        function ProgressbarComponent(config) {
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
        Object.defineProperty(ProgressbarComponent.prototype, "value", {
            /** current value of progress bar. Could be a number or array of objects
             * like {"value":15,"type":"info","label":"15 %"}
             */
            set: function (value) {
                this.isStacked = Array.isArray(value);
                if (typeof value === 'number') {
                    this._value = value;
                    this._values = void 0;
                }
                else {
                    this._value = void 0;
                    this._values = value;
                }
            },
            enumerable: false,
            configurable: true
        });
        return ProgressbarComponent;
    }());
    ProgressbarComponent.ɵfac = function ProgressbarComponent_Factory(t) { return new (t || ProgressbarComponent)(i0.ɵɵdirectiveInject(ProgressbarConfig)); };
    ProgressbarComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ProgressbarComponent, selectors: [["progressbar"]], hostVars: 3, hostBindings: function ProgressbarComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0.ɵɵattribute("max", ctx.max);
                i0.ɵɵclassProp("progress", true);
            }
        }, inputs: { max: "max", animate: "animate", striped: "striped", type: "type", value: "value" }, ngContentSelectors: _c0$1, decls: 5, vars: 3, consts: [[4, "ngIf", "ngIfThen", "ngIfElse"], ["NotStacked", ""], ["Stacked", ""], [3, "type", "value", "max", "animate", "striped"], [3, "type", "value", "max", "animate", "striped", 4, "ngFor", "ngForOf"]], template: function ProgressbarComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵprojectionDef();
                i0.ɵɵtemplate(0, ProgressbarComponent_ng_container_0_Template, 1, 0, "ng-container", 0);
                i0.ɵɵtemplate(1, ProgressbarComponent_ng_template_1_Template, 2, 5, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵtemplate(3, ProgressbarComponent_ng_template_3_Template, 1, 1, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
            }
            if (rf & 2) {
                var _r1 = i0.ɵɵreference(2);
                var _r3 = i0.ɵɵreference(4);
                i0.ɵɵproperty("ngIf", !ctx.isStacked)("ngIfThen", _r1)("ngIfElse", _r3);
            }
        }, directives: [i2.NgIf, BarComponent, i2.NgForOf], styles: ["[_nghost-%COMP%] {\n      width: 100%;\n      display: flex;\n    }"], changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProgressbarComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'progressbar',
                        templateUrl: './progressbar.component.html',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        // eslint-disable-next-line @angular-eslint/no-host-metadata-property
                        host: {
                            '[class.progress]': 'true',
                            '[attr.max]': 'max'
                        },
                        styles: ["\n    :host {\n      width: 100%;\n      display: flex;\n    } "]
                    }]
            }], function () { return [{ type: ProgressbarConfig }]; }, { max: [{
                    type: i0.Input
                }], animate: [{
                    type: i0.Input
                }], striped: [{
                    type: i0.Input
                }], type: [{
                    type: i0.Input
                }], value: [{
                    type: i0.Input
                }] });
    })();

    var ProgressbarModule = /** @class */ (function () {
        function ProgressbarModule() {
        }
        ProgressbarModule.forRoot = function () {
            return { ngModule: ProgressbarModule, providers: [] };
        };
        return ProgressbarModule;
    }());
    ProgressbarModule.ɵmod = i0.ɵɵdefineNgModule({ type: ProgressbarModule });
    ProgressbarModule.ɵinj = i0.ɵɵdefineInjector({ factory: function ProgressbarModule_Factory(t) { return new (t || ProgressbarModule)(); }, imports: [[i2.CommonModule]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ProgressbarModule, { declarations: [BarComponent, ProgressbarComponent], imports: [i2.CommonModule], exports: [BarComponent, ProgressbarComponent] }); })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProgressbarModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [i2.CommonModule],
                        declarations: [BarComponent, ProgressbarComponent],
                        exports: [BarComponent, ProgressbarComponent]
                    }]
            }], null, null);
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.BarComponent = BarComponent;
    exports.ProgressbarComponent = ProgressbarComponent;
    exports.ProgressbarConfig = ProgressbarConfig;
    exports.ProgressbarModule = ProgressbarModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-bootstrap-progressbar.umd.js.map
