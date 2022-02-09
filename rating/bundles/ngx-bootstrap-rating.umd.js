(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ngx-bootstrap/rating', ['exports', '@angular/core', '@angular/forms', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['ngx-bootstrap'] = global['ngx-bootstrap'] || {}, global['ngx-bootstrap'].rating = {}), global.ng.core, global.ng.forms, global.ng.common));
}(this, (function (exports, i0, forms, i2) { 'use strict';

    /** Default values provider for rating */
    var RatingConfig = /** @class */ (function () {
        function RatingConfig() {
            /** aria label for rating */
            this.ariaLabel = 'rating';
        }
        return RatingConfig;
    }());
    RatingConfig.ɵfac = function RatingConfig_Factory(t) { return new (t || RatingConfig)(); };
    RatingConfig.ɵprov = i0.ɵɵdefineInjectable({ token: RatingConfig, factory: RatingConfig.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RatingConfig, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], null, null);
    })();

    function RatingComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtext(0);
        }
        if (rf & 2) {
            var value_r3 = ctx.value;
            var index_r4 = ctx.index;
            i0.ɵɵtextInterpolate(index_r4 < value_r3 ? "\u2605" : "\u2606");
        }
    }
    function RatingComponent_ng_template_3_ng_template_3_Template(rf, ctx) { }
    var _c0 = function (a0, a1) { return { index: a0, value: a1 }; };
    function RatingComponent_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
            var _r9_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "span", 3);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "span", 4);
            i0.ɵɵlistener("mouseenter", function RatingComponent_ng_template_3_Template_span_mouseenter_2_listener() { i0.ɵɵrestoreView(_r9_1); var index_r6 = ctx.index; var ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.enter(index_r6 + 1); })("click", function RatingComponent_ng_template_3_Template_span_click_2_listener() { i0.ɵɵrestoreView(_r9_1); var index_r6 = ctx.index; var ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.rate(index_r6 + 1); });
            i0.ɵɵtemplate(3, RatingComponent_ng_template_3_ng_template_3_Template, 0, 0, "ng-template", 5);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var r_r5 = ctx.$implicit;
            var index_r6 = ctx.index;
            var ctx_r2 = i0.ɵɵnextContext();
            var _r0 = i0.ɵɵreference(2);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1("(", index_r6 < ctx_r2.value ? "*" : " ", ")");
            i0.ɵɵadvance(1);
            i0.ɵɵstyleProp("cursor", ctx_r2.readonly ? "default" : "pointer");
            i0.ɵɵclassProp("active", index_r6 < ctx_r2.value);
            i0.ɵɵproperty("title", r_r5.title);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngTemplateOutlet", ctx_r2.customTemplate || _r0)("ngTemplateOutletContext", i0.ɵɵpureFunction2(8, _c0, index_r6, ctx_r2.value));
        }
    }
    var RATING_CONTROL_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        useExisting: i0.forwardRef(function () { return RatingComponent; }),
        multi: true
    };
    var RatingComponent = /** @class */ (function () {
        function RatingComponent(changeDetection, config) {
            this.changeDetection = changeDetection;
            /** number of icons */
            this.max = 5;
            /** if true will not react on any user events */
            this.readonly = false;
            /** array of icons titles, default: (["one", "two", "three", "four", "five"]) */
            this.titles = [];
            /** fired when icon selected, $event:number equals to selected rating */
            this.onHover = new i0.EventEmitter();
            /** fired when icon selected, $event:number equals to previous rating value */
            this.onLeave = new i0.EventEmitter();
            this.onChange = Function.prototype;
            this.onTouched = Function.prototype;
            /** aria label for rating */
            this.ariaLabel = 'rating';
            this.range = [];
            this.value = 0;
            Object.assign(this, config);
        }
        RatingComponent.prototype.onKeydown = function (event) {
            if ([37, 38, 39, 40].indexOf(event.which) === -1) {
                return;
            }
            event.preventDefault();
            event.stopPropagation();
            var sign = event.which === 38 || event.which === 39 ? 1 : -1;
            this.rate(this.value + sign);
        };
        RatingComponent.prototype.ngOnInit = function () {
            this.max = this.max || 5;
            this.titles =
                typeof this.titles !== 'undefined' && this.titles.length > 0
                    ? this.titles
                    : [];
            this.range = this.buildTemplateObjects(this.max);
        };
        // model -> view
        RatingComponent.prototype.writeValue = function (value) {
            if (value % 1 !== value) {
                this.value = Math.round(value);
                this.preValue = value;
                this.changeDetection.markForCheck();
                return;
            }
            this.preValue = value;
            this.value = value;
            this.changeDetection.markForCheck();
        };
        RatingComponent.prototype.enter = function (value) {
            if (!this.readonly) {
                this.value = value;
                this.changeDetection.markForCheck();
                this.onHover.emit(value);
            }
        };
        RatingComponent.prototype.reset = function () {
            if (typeof this.preValue === 'number') {
                this.value = Math.round(this.preValue);
                this.changeDetection.markForCheck();
                this.onLeave.emit(this.value);
            }
        };
        RatingComponent.prototype.registerOnChange = function (fn) {
            this.onChange = fn;
        };
        RatingComponent.prototype.registerOnTouched = function (fn) {
            this.onTouched = fn;
        };
        RatingComponent.prototype.rate = function (value) {
            if (!this.readonly && this.range
                && value >= 0 && value <= this.range.length) {
                this.writeValue(value);
                this.onChange(value);
            }
        };
        RatingComponent.prototype.buildTemplateObjects = function (max) {
            var result = [];
            for (var i = 0; i < max; i++) {
                result.push({
                    index: i,
                    title: this.titles[i] || i + 1
                });
            }
            return result;
        };
        return RatingComponent;
    }());
    RatingComponent.ɵfac = function RatingComponent_Factory(t) { return new (t || RatingComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(RatingConfig)); };
    RatingComponent.ɵcmp = i0.ɵɵdefineComponent({ type: RatingComponent, selectors: [["rating"]], hostBindings: function RatingComponent_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵlistener("keydown", function RatingComponent_keydown_HostBindingHandler($event) { return ctx.onKeydown($event); });
            }
        }, inputs: { max: "max", readonly: "readonly", titles: "titles", customTemplate: "customTemplate" }, outputs: { onHover: "onHover", onLeave: "onLeave" }, features: [i0.ɵɵProvidersFeature([RATING_CONTROL_VALUE_ACCESSOR])], decls: 4, vars: 4, consts: [["tabindex", "0", "role", "slider", "aria-valuemin", "0", 3, "mouseleave", "keydown"], ["star", ""], ["ngFor", "", 3, "ngForOf"], [1, "sr-only"], [1, "bs-rating-star", 3, "title", "mouseenter", "click"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function RatingComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "span", 0);
                i0.ɵɵlistener("mouseleave", function RatingComponent_Template_span_mouseleave_0_listener() { return ctx.reset(); })("keydown", function RatingComponent_Template_span_keydown_0_listener($event) { return ctx.onKeydown($event); });
                i0.ɵɵtemplate(1, RatingComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵtemplate(3, RatingComponent_ng_template_3_Template, 4, 11, "ng-template", 2);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵattribute("aria-label", ctx.ariaLabel)("aria-valuemax", ctx.range.length)("aria-valuenow", ctx.value);
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("ngForOf", ctx.range);
            }
        }, directives: [i2.NgForOf, i2.NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RatingComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'rating',
                        templateUrl: './rating.component.html',
                        providers: [RATING_CONTROL_VALUE_ACCESSOR],
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }], function () { return [{ type: i0.ChangeDetectorRef }, { type: RatingConfig }]; }, { max: [{
                    type: i0.Input
                }], readonly: [{
                    type: i0.Input
                }], titles: [{
                    type: i0.Input
                }], customTemplate: [{
                    type: i0.Input
                }], onHover: [{
                    type: i0.Output
                }], onLeave: [{
                    type: i0.Output
                }], onKeydown: [{
                    type: i0.HostListener,
                    args: ['keydown', ['$event']]
                }] });
    })();

    var RatingModule = /** @class */ (function () {
        function RatingModule() {
        }
        RatingModule.forRoot = function () {
            return {
                ngModule: RatingModule,
                providers: []
            };
        };
        return RatingModule;
    }());
    RatingModule.ɵmod = i0.ɵɵdefineNgModule({ type: RatingModule });
    RatingModule.ɵinj = i0.ɵɵdefineInjector({ factory: function RatingModule_Factory(t) { return new (t || RatingModule)(); }, imports: [[i2.CommonModule]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(RatingModule, { declarations: [RatingComponent], imports: [i2.CommonModule], exports: [RatingComponent] }); })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RatingModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [i2.CommonModule],
                        declarations: [RatingComponent],
                        exports: [RatingComponent]
                    }]
            }], null, null);
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.RatingComponent = RatingComponent;
    exports.RatingConfig = RatingConfig;
    exports.RatingModule = RatingModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-bootstrap-rating.umd.js.map
