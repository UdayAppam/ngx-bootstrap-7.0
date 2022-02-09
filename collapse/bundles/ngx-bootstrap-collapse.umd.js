(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/animations')) :
    typeof define === 'function' && define.amd ? define('ngx-bootstrap/collapse', ['exports', '@angular/core', '@angular/animations'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['ngx-bootstrap'] = global['ngx-bootstrap'] || {}, global['ngx-bootstrap'].collapse = {}), global.ng.core, global.ng.animations));
}(this, (function (exports, i0, i1) { 'use strict';

    var COLLAPSE_ANIMATION_TIMING = '400ms cubic-bezier(0.4,0.0,0.2,1)';
    var expandAnimation = [
        i1.style({ height: 0, visibility: 'hidden' }),
        i1.animate(COLLAPSE_ANIMATION_TIMING, i1.style({ height: '*', visibility: 'visible' }))
    ];
    var collapseAnimation = [
        i1.style({ height: '*', visibility: 'visible' }),
        i1.animate(COLLAPSE_ANIMATION_TIMING, i1.style({ height: 0, visibility: 'hidden' }))
    ];

    var CollapseDirective = /** @class */ (function () {
        function CollapseDirective(_el, _renderer, _builder) {
            this._el = _el;
            this._renderer = _renderer;
            /** This event fires as soon as content collapses */
            this.collapsed = new i0.EventEmitter();
            /** This event fires when collapsing is started */
            this.collapses = new i0.EventEmitter();
            /** This event fires as soon as content becomes visible */
            this.expanded = new i0.EventEmitter();
            /** This event fires when expansion is started */
            this.expands = new i0.EventEmitter();
            // shown
            this.isExpanded = true;
            this.collapseNewValue = true;
            // hidden
            this.isCollapsed = false;
            // stale state
            this.isCollapse = true;
            // animation state
            this.isCollapsing = false;
            /** turn on/off animation */
            this.isAnimated = false;
            this._display = 'block';
            this._stylesLoaded = false;
            this._COLLAPSE_ACTION_NAME = 'collapse';
            this._EXPAND_ACTION_NAME = 'expand';
            this._factoryCollapseAnimation = _builder.build(collapseAnimation);
            this._factoryExpandAnimation = _builder.build(expandAnimation);
        }
        Object.defineProperty(CollapseDirective.prototype, "display", {
            set: function (value) {
                if (!this.isAnimated) {
                    this._renderer.setStyle(this._el.nativeElement, 'display', value);
                    return;
                }
                this._display = value;
                if (value === 'none') {
                    this.hide();
                    return;
                }
                this.show();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CollapseDirective.prototype, "collapse", {
            get: function () {
                return this.isExpanded;
            },
            /** A flag indicating visibility of content (shown or hidden) */
            set: function (value) {
                this.collapseNewValue = value;
                if (!this._player || this._isAnimationDone) {
                    this.isExpanded = value;
                    this.toggle();
                }
            },
            enumerable: false,
            configurable: true
        });
        CollapseDirective.prototype.ngAfterViewChecked = function () {
            this._stylesLoaded = true;
            if (!this._player || !this._isAnimationDone) {
                return;
            }
            this._player.reset();
            this._renderer.setStyle(this._el.nativeElement, 'height', '*');
        };
        /** allows to manually toggle content visibility */
        CollapseDirective.prototype.toggle = function () {
            if (this.isExpanded) {
                this.hide();
            }
            else {
                this.show();
            }
        };
        /** allows to manually hide content */
        CollapseDirective.prototype.hide = function () {
            var _this = this;
            this.isCollapsing = true;
            this.isExpanded = false;
            this.isCollapsed = true;
            this.isCollapsing = false;
            this.collapses.emit(this);
            this._isAnimationDone = false;
            this.animationRun(this.isAnimated, this._COLLAPSE_ACTION_NAME)(function () {
                _this._isAnimationDone = true;
                if (_this.collapseNewValue !== _this.isCollapsed && _this.isAnimated) {
                    _this.show();
                    return;
                }
                _this.collapsed.emit(_this);
                _this._renderer.setStyle(_this._el.nativeElement, 'display', 'none');
            });
        };
        /** allows to manually show collapsed content */
        CollapseDirective.prototype.show = function () {
            var _this = this;
            this._renderer.setStyle(this._el.nativeElement, 'display', this._display);
            this.isCollapsing = true;
            this.isExpanded = true;
            this.isCollapsed = false;
            this.isCollapsing = false;
            this.expands.emit(this);
            this._isAnimationDone = false;
            this.animationRun(this.isAnimated, this._EXPAND_ACTION_NAME)(function () {
                _this._isAnimationDone = true;
                if (_this.collapseNewValue !== _this.isCollapsed && _this.isAnimated) {
                    _this.hide();
                    return;
                }
                _this.expanded.emit(_this);
                _this._renderer.removeStyle(_this._el.nativeElement, 'overflow');
            });
        };
        CollapseDirective.prototype.animationRun = function (isAnimated, action) {
            var _this = this;
            if (!isAnimated || !this._stylesLoaded) {
                return function (callback) { return callback(); };
            }
            this._renderer.setStyle(this._el.nativeElement, 'overflow', 'hidden');
            this._renderer.addClass(this._el.nativeElement, 'collapse');
            var factoryAnimation = (action === this._EXPAND_ACTION_NAME)
                ? this._factoryExpandAnimation
                : this._factoryCollapseAnimation;
            if (this._player) {
                this._player.destroy();
            }
            this._player = factoryAnimation.create(this._el.nativeElement);
            this._player.play();
            return function (callback) { var _a; return (_a = _this._player) === null || _a === void 0 ? void 0 : _a.onDone(callback); };
        };
        return CollapseDirective;
    }());
    CollapseDirective.ɵfac = function CollapseDirective_Factory(t) { return new (t || CollapseDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i1.AnimationBuilder)); };
    CollapseDirective.ɵdir = i0.ɵɵdefineDirective({ type: CollapseDirective, selectors: [["", "collapse", ""]], hostVars: 10, hostBindings: function CollapseDirective_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0.ɵɵattribute("aria-expanded", ctx.isExpanded)("aria-hidden", ctx.isCollapsed);
                i0.ɵɵclassProp("collapse", ctx.isCollapse)("in", ctx.isExpanded)("show", ctx.isExpanded)("collapsing", ctx.isCollapsing);
            }
        }, inputs: { display: "display", isAnimated: "isAnimated", collapse: "collapse" }, outputs: { collapsed: "collapsed", collapses: "collapses", expanded: "expanded", expands: "expands" }, exportAs: ["bs-collapse"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CollapseDirective, [{
                type: i0.Directive,
                args: [{
                        selector: '[collapse]',
                        exportAs: 'bs-collapse',
                        // eslint-disable-next-line @angular-eslint/no-host-metadata-property
                        host: {
                            '[class.collapse]': 'true'
                        }
                    }]
            }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i1.AnimationBuilder }]; }, { collapsed: [{
                    type: i0.Output
                }], collapses: [{
                    type: i0.Output
                }], expanded: [{
                    type: i0.Output
                }], expands: [{
                    type: i0.Output
                }], isExpanded: [{
                    type: i0.HostBinding,
                    args: ['class.in']
                }, {
                    type: i0.HostBinding,
                    args: ['class.show']
                }, {
                    type: i0.HostBinding,
                    args: ['attr.aria-expanded']
                }], isCollapsed: [{
                    type: i0.HostBinding,
                    args: ['attr.aria-hidden']
                }], isCollapse: [{
                    type: i0.HostBinding,
                    args: ['class.collapse']
                }], isCollapsing: [{
                    type: i0.HostBinding,
                    args: ['class.collapsing']
                }], display: [{
                    type: i0.Input
                }], isAnimated: [{
                    type: i0.Input
                }], collapse: [{
                    type: i0.Input
                }] });
    })();

    var CollapseModule = /** @class */ (function () {
        function CollapseModule() {
        }
        CollapseModule.forRoot = function () {
            return { ngModule: CollapseModule, providers: [] };
        };
        return CollapseModule;
    }());
    CollapseModule.ɵmod = i0.ɵɵdefineNgModule({ type: CollapseModule });
    CollapseModule.ɵinj = i0.ɵɵdefineInjector({ factory: function CollapseModule_Factory(t) { return new (t || CollapseModule)(); } });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CollapseModule, { declarations: [CollapseDirective], exports: [CollapseDirective] }); })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CollapseModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [CollapseDirective],
                        exports: [CollapseDirective]
                    }]
            }], null, null);
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.CollapseDirective = CollapseDirective;
    exports.CollapseModule = CollapseModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-bootstrap-collapse.umd.js.map
