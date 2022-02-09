(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('ngx-bootstrap/utils'), require('@angular/common'), require('rxjs'), require('ngx-bootstrap/component-loader'), require('ngx-bootstrap/positioning')) :
    typeof define === 'function' && define.amd ? define('ngx-bootstrap/popover', ['exports', '@angular/core', 'ngx-bootstrap/utils', '@angular/common', 'rxjs', 'ngx-bootstrap/component-loader', 'ngx-bootstrap/positioning'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['ngx-bootstrap'] = global['ngx-bootstrap'] || {}, global['ngx-bootstrap'].popover = {}), global.ng.core, global.utils, global.ng.common, global.rxjs, global.i2$1, global.i3));
}(this, (function (exports, i0, utils, i2, rxjs, i2$1, i3) { 'use strict';

    /**
     * Configuration service for the Popover directive.
     * You can inject this service, typically in your root component, and customize
     * the values of its properties in order to provide default values for all the
     * popovers used in the application.
     */
    var PopoverConfig = /** @class */ (function () {
        function PopoverConfig() {
            /** sets disable adaptive position */
            this.adaptivePosition = true;
            /**
             * Placement of a popover. Accepts: "top", "bottom", "left", "right", "auto"
             */
            this.placement = 'top';
            /**
             * Specifies events that should trigger. Supports a space separated list of
             * event names.
             */
            this.triggers = 'click';
            this.outsideClick = false;
            /** delay before showing the tooltip */
            this.delay = 0;
        }
        return PopoverConfig;
    }());
    PopoverConfig.ɵfac = function PopoverConfig_Factory(t) { return new (t || PopoverConfig)(); };
    PopoverConfig.ɵprov = i0.ɵɵdefineInjectable({ token: PopoverConfig, factory: PopoverConfig.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PopoverConfig, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], null, null);
    })();

    function PopoverContainerComponent_h3_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "h3", 3);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(ctx_r0.title);
        }
    }
    var _c0 = ["*"];
    var PopoverContainerComponent = /** @class */ (function () {
        function PopoverContainerComponent(config) {
            Object.assign(this, config);
        }
        Object.defineProperty(PopoverContainerComponent.prototype, "isBs3", {
            get: function () {
                return utils.isBs3();
            },
            enumerable: false,
            configurable: true
        });
        return PopoverContainerComponent;
    }());
    PopoverContainerComponent.ɵfac = function PopoverContainerComponent_Factory(t) { return new (t || PopoverContainerComponent)(i0.ɵɵdirectiveInject(PopoverConfig)); };
    PopoverContainerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PopoverContainerComponent, selectors: [["popover-container"]], hostAttrs: ["role", "tooltip", 2, "display", "block"], hostVars: 7, hostBindings: function PopoverContainerComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0.ɵɵattribute("id", ctx.popoverId);
                i0.ɵɵclassMap("popover in popover-" + ctx.placement + " " + "bs-popover-" + ctx.placement + " " + ctx.placement + " " + ctx.containerClass);
                i0.ɵɵclassProp("show", !ctx.isBs3)("bs3", ctx.isBs3);
            }
        }, inputs: { placement: "placement", title: "title" }, ngContentSelectors: _c0, decls: 4, vars: 1, consts: [[1, "popover-arrow", "arrow"], ["class", "popover-title popover-header", 4, "ngIf"], [1, "popover-content", "popover-body"], [1, "popover-title", "popover-header"]], template: function PopoverContainerComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵprojectionDef();
                i0.ɵɵelement(0, "div", 0);
                i0.ɵɵtemplate(1, PopoverContainerComponent_h3_1_Template, 2, 1, "h3", 1);
                i0.ɵɵelementStart(2, "div", 2);
                i0.ɵɵprojection(3);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.title);
            }
        }, directives: [i2.NgIf], styles: [".bs3.popover-top[_nghost-%COMP%] {\n      margin-bottom: 10px;\n    }\n    .bs3.popover.top[_nghost-%COMP%] > .arrow[_ngcontent-%COMP%] {\n      margin-left: -2px;\n    }\n    .bs3.popover.top[_nghost-%COMP%] {\n      margin-bottom: 10px;\n    }\n    .popover.bottom[_nghost-%COMP%] > .arrow[_ngcontent-%COMP%] {\n      margin-left: -4px;\n    }\n    .bs3.bs-popover-left[_nghost-%COMP%] {\n      margin-right: .5rem;\n    }\n    .bs3.bs-popover-right[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%], .bs3.bs-popover-left[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%]{\n      margin: .3rem 0;\n    }"], changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PopoverContainerComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'popover-container',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        // eslint-disable-next-line @angular-eslint/no-host-metadata-property
                        host: {
                            '[attr.id]': 'popoverId',
                            '[class]': '"popover in popover-" + placement + " " + "bs-popover-" + placement + " " + placement + " " + containerClass',
                            '[class.show]': '!isBs3',
                            '[class.bs3]': 'isBs3',
                            role: 'tooltip',
                            style: 'display:block;'
                        },
                        styles: [
                            "\n    :host.bs3.popover-top {\n      margin-bottom: 10px;\n    }\n    :host.bs3.popover.top>.arrow {\n      margin-left: -2px;\n    }\n    :host.bs3.popover.top {\n      margin-bottom: 10px;\n    }\n    :host.popover.bottom>.arrow {\n      margin-left: -4px;\n    }\n    :host.bs3.bs-popover-left {\n      margin-right: .5rem;\n    }\n    :host.bs3.bs-popover-right .arrow, :host.bs3.bs-popover-left .arrow{\n      margin: .3rem 0;\n    }\n    "
                        ],
                        templateUrl: './popover-container.component.html'
                    }]
            }], function () { return [{ type: PopoverConfig }]; }, { placement: [{
                    type: i0.Input
                }], title: [{
                    type: i0.Input
                }] });
    })();

    var id = 0;
    /**
     * A lightweight, extensible directive for fancy popover creation.
     */
    var PopoverDirective = /** @class */ (function () {
        function PopoverDirective(_config, _elementRef, _renderer, _viewContainerRef, cis, _positionService) {
            this._elementRef = _elementRef;
            this._renderer = _renderer;
            this._positionService = _positionService;
            /** unique id popover - use for aria-describedby */
            this.popoverId = id++;
            /** sets disable adaptive position */
            this.adaptivePosition = true;
            /**
             * Placement of a popover. Accepts: "top", "bottom", "left", "right"
             */
            this.placement = 'top';
            /**
             * Close popover on outside click
             */
            this.outsideClick = false;
            /**
             * Specifies events that should trigger. Supports a space separated list of
             * event names.
             */
            this.triggers = 'click';
            /**
             * Css class for popover container
             */
            this.containerClass = '';
            /**
             * Delay before showing the tooltip
             */
            this.delay = 0;
            this._isInited = false;
            this._popover = cis
                .createLoader(_elementRef, _viewContainerRef, _renderer)
                .provide({ provide: PopoverConfig, useValue: _config });
            Object.assign(this, _config);
            this.onShown = this._popover.onShown;
            this.onHidden = this._popover.onHidden;
            // fix: no focus on button on Mac OS #1795
            if (typeof window !== 'undefined') {
                _elementRef.nativeElement.addEventListener('click', function () {
                    try {
                        _elementRef.nativeElement.focus();
                    }
                    catch (err) {
                        return;
                    }
                });
            }
        }
        Object.defineProperty(PopoverDirective.prototype, "isOpen", {
            /**
             * Returns whether or not the popover is currently being shown
             */
            get: function () {
                return this._popover.isShown;
            },
            set: function (value) {
                if (value) {
                    this.show();
                }
                else {
                    this.hide();
                }
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Set attribute aria-describedBy for element directive and
         * set id for the popover
         */
        PopoverDirective.prototype.setAriaDescribedBy = function () {
            this._ariaDescribedby = this.isOpen ? "ngx-popover-" + this.popoverId : void 0;
            if (this._ariaDescribedby) {
                if (this._popover.instance) {
                    this._popover.instance.popoverId = this._ariaDescribedby;
                }
                this._renderer.setAttribute(this._elementRef.nativeElement, 'aria-describedby', this._ariaDescribedby);
            }
            else {
                this._renderer.removeAttribute(this._elementRef.nativeElement, 'aria-describedby');
            }
        };
        /**
         * Opens an element’s popover. This is considered a “manual” triggering of
         * the popover.
         */
        PopoverDirective.prototype.show = function () {
            var _this = this;
            if (this._popover.isShown || !this.popover || this._delayTimeoutId) {
                return;
            }
            this._positionService.setOptions({
                modifiers: {
                    flip: {
                        enabled: this.adaptivePosition
                    },
                    preventOverflow: {
                        enabled: this.adaptivePosition,
                        boundariesElement: this.boundariesElement || 'scrollParent'
                    }
                }
            });
            var showPopover = function () {
                if (_this._delayTimeoutId) {
                    _this._delayTimeoutId = undefined;
                }
                _this._popover
                    .attach(PopoverContainerComponent)
                    .to(_this.container)
                    .position({ attachment: _this.placement })
                    .show({
                    content: _this.popover,
                    context: _this.popoverContext,
                    placement: _this.placement,
                    title: _this.popoverTitle,
                    containerClass: _this.containerClass
                });
                if (!_this.adaptivePosition && _this._popover._componentRef) {
                    _this._positionService.calcPosition();
                    _this._positionService.deletePositionElement(_this._popover._componentRef.location);
                }
                _this.isOpen = true;
                _this.setAriaDescribedBy();
            };
            var cancelDelayedTooltipShowing = function () {
                if (_this._popoverCancelShowFn) {
                    _this._popoverCancelShowFn();
                }
            };
            if (this.delay) {
                var _timer_1 = rxjs.timer(this.delay).subscribe(function () {
                    showPopover();
                    cancelDelayedTooltipShowing();
                });
                if (this.triggers) {
                    utils.parseTriggers(this.triggers)
                        .forEach(function (trigger) {
                        if (!trigger.close) {
                            return;
                        }
                        _this._popoverCancelShowFn = _this._renderer.listen(_this._elementRef.nativeElement, trigger.close, function () {
                            _timer_1.unsubscribe();
                            cancelDelayedTooltipShowing();
                        });
                    });
                }
            }
            else {
                showPopover();
            }
        };
        /**
         * Closes an element’s popover. This is considered a “manual” triggering of
         * the popover.
         */
        PopoverDirective.prototype.hide = function () {
            if (this._delayTimeoutId) {
                clearTimeout(this._delayTimeoutId);
                this._delayTimeoutId = undefined;
            }
            if (this.isOpen) {
                this._popover.hide();
                this.setAriaDescribedBy();
                this.isOpen = false;
            }
        };
        /**
         * Toggles an element’s popover. This is considered a “manual” triggering of
         * the popover.
         */
        PopoverDirective.prototype.toggle = function () {
            if (this.isOpen) {
                return this.hide();
            }
            this.show();
        };
        PopoverDirective.prototype.ngOnInit = function () {
            var _this = this;
            // fix: seems there are an issue with `routerLinkActive`
            // which result in duplicated call ngOnInit without call to ngOnDestroy
            // read more: https://github.com/valor-software/ngx-bootstrap/issues/1885
            if (this._isInited) {
                return;
            }
            this._isInited = true;
            this._popover.listen({
                triggers: this.triggers,
                outsideClick: this.outsideClick,
                show: function () { return _this.show(); },
                hide: function () { return _this.hide(); }
            });
        };
        PopoverDirective.prototype.ngOnDestroy = function () {
            this._popover.dispose();
        };
        return PopoverDirective;
    }());
    PopoverDirective.ɵfac = function PopoverDirective_Factory(t) { return new (t || PopoverDirective)(i0.ɵɵdirectiveInject(PopoverConfig), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i2$1.ComponentLoaderFactory), i0.ɵɵdirectiveInject(i3.PositioningService)); };
    PopoverDirective.ɵdir = i0.ɵɵdefineDirective({ type: PopoverDirective, selectors: [["", "popover", ""]], inputs: { adaptivePosition: "adaptivePosition", boundariesElement: "boundariesElement", popover: "popover", popoverContext: "popoverContext", popoverTitle: "popoverTitle", placement: "placement", outsideClick: "outsideClick", triggers: "triggers", container: "container", containerClass: "containerClass", isOpen: "isOpen", delay: "delay" }, outputs: { onShown: "onShown", onHidden: "onHidden" }, exportAs: ["bs-popover"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PopoverDirective, [{
                type: i0.Directive,
                args: [{ selector: '[popover]', exportAs: 'bs-popover' }]
            }], function () { return [{ type: PopoverConfig }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i2$1.ComponentLoaderFactory }, { type: i3.PositioningService }]; }, { adaptivePosition: [{
                    type: i0.Input
                }], boundariesElement: [{
                    type: i0.Input
                }], popover: [{
                    type: i0.Input
                }], popoverContext: [{
                    type: i0.Input
                }], popoverTitle: [{
                    type: i0.Input
                }], placement: [{
                    type: i0.Input
                }], outsideClick: [{
                    type: i0.Input
                }], triggers: [{
                    type: i0.Input
                }], container: [{
                    type: i0.Input
                }], containerClass: [{
                    type: i0.Input
                }], isOpen: [{
                    type: i0.Input
                }], delay: [{
                    type: i0.Input
                }], onShown: [{
                    type: i0.Output
                }], onHidden: [{
                    type: i0.Output
                }] });
    })();

    var PopoverModule = /** @class */ (function () {
        function PopoverModule() {
        }
        PopoverModule.forRoot = function () {
            return {
                ngModule: PopoverModule,
                providers: [i2$1.ComponentLoaderFactory, i3.PositioningService]
            };
        };
        return PopoverModule;
    }());
    PopoverModule.ɵmod = i0.ɵɵdefineNgModule({ type: PopoverModule });
    PopoverModule.ɵinj = i0.ɵɵdefineInjector({ factory: function PopoverModule_Factory(t) { return new (t || PopoverModule)(); }, imports: [[i2.CommonModule]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PopoverModule, { declarations: [PopoverDirective, PopoverContainerComponent], imports: [i2.CommonModule], exports: [PopoverDirective] }); })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PopoverModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [i2.CommonModule],
                        declarations: [PopoverDirective, PopoverContainerComponent],
                        exports: [PopoverDirective],
                        entryComponents: [PopoverContainerComponent]
                    }]
            }], null, null);
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.PopoverConfig = PopoverConfig;
    exports.PopoverContainerComponent = PopoverContainerComponent;
    exports.PopoverDirective = PopoverDirective;
    exports.PopoverModule = PopoverModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-bootstrap-popover.umd.js.map
