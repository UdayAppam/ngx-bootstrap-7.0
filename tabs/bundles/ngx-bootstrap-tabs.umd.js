(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ngx-bootstrap/tabs', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['ngx-bootstrap'] = global['ngx-bootstrap'] || {}, global['ngx-bootstrap'].tabs = {}), global.ng.core, global.ng.common));
}(this, (function (exports, i0, i2) { 'use strict';

    var NgTranscludeDirective = /** @class */ (function () {
        function NgTranscludeDirective(viewRef) {
            this.viewRef = viewRef;
        }
        Object.defineProperty(NgTranscludeDirective.prototype, "ngTransclude", {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            get: function () {
                return this._ngTransclude;
            },
            set: function (templateRef) {
                this._ngTransclude = templateRef;
                if (templateRef) {
                    this.viewRef.createEmbeddedView(templateRef);
                }
            },
            enumerable: false,
            configurable: true
        });
        return NgTranscludeDirective;
    }());
    NgTranscludeDirective.ɵfac = function NgTranscludeDirective_Factory(t) { return new (t || NgTranscludeDirective)(i0.ɵɵdirectiveInject(i0.ViewContainerRef)); };
    NgTranscludeDirective.ɵdir = i0.ɵɵdefineDirective({ type: NgTranscludeDirective, selectors: [["", "ngTransclude", ""]], inputs: { ngTransclude: "ngTransclude" } });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgTranscludeDirective, [{
                type: i0.Directive,
                args: [{
                        selector: '[ngTransclude]'
                    }]
            }], function () { return [{ type: i0.ViewContainerRef }]; }, { ngTransclude: [{
                    type: i0.Input
                }] });
    })();

    var TabsetConfig = /** @class */ (function () {
        function TabsetConfig() {
            /** provides default navigation context class: 'tabs' or 'pills' */
            this.type = 'tabs';
            /** provides possibility to set keyNavigations enable or disable, by default is enable */
            this.isKeysAllowed = true;
            /** aria label for tab list */
            this.ariaLabel = 'Tabs';
        }
        return TabsetConfig;
    }());
    TabsetConfig.ɵfac = function TabsetConfig_Factory(t) { return new (t || TabsetConfig)(); };
    TabsetConfig.ɵprov = i0.ɵɵdefineInjectable({ token: TabsetConfig, factory: TabsetConfig.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TabsetConfig, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], null, null);
    })();

    function TabsetComponent_li_1_span_4_Template(rf, ctx) {
        if (rf & 1) {
            var _r6_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "span", 7);
            i0.ɵɵlistener("click", function TabsetComponent_li_1_span_4_Template_span_click_0_listener($event) { i0.ɵɵrestoreView(_r6_1); var tabz_r1 = i0.ɵɵnextContext().$implicit; var ctx_r4 = i0.ɵɵnextContext(); $event.preventDefault(); return ctx_r4.removeTab(tabz_r1); });
            i0.ɵɵtext(1, " \u274C");
            i0.ɵɵelementEnd();
        }
    }
    var _c0 = function (a1) { return ["nav-item", a1]; };
    function TabsetComponent_li_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r8_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "li", 3);
            i0.ɵɵlistener("keydown", function TabsetComponent_li_1_Template_li_keydown_0_listener($event) { i0.ɵɵrestoreView(_r8_1); var i_r2 = ctx.index; var ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.keyNavActions($event, i_r2); });
            i0.ɵɵelementStart(1, "a", 4);
            i0.ɵɵlistener("click", function TabsetComponent_li_1_Template_a_click_1_listener() { var tabz_r1 = ctx.$implicit; return tabz_r1.active = true; });
            i0.ɵɵelementStart(2, "span", 5);
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(4, TabsetComponent_li_1_span_4_Template, 2, 0, "span", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var tabz_r1 = ctx.$implicit;
            i0.ɵɵclassProp("active", tabz_r1.active)("disabled", tabz_r1.disabled);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(15, _c0, tabz_r1.customClass || ""));
            i0.ɵɵadvance(1);
            i0.ɵɵclassProp("active", tabz_r1.active)("disabled", tabz_r1.disabled);
            i0.ɵɵattribute("aria-controls", tabz_r1.id ? tabz_r1.id : "")("aria-selected", !!tabz_r1.active)("id", tabz_r1.id ? tabz_r1.id + "-link" : "");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngTransclude", tabz_r1.headingRef);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(tabz_r1.heading);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", tabz_r1.removable);
        }
    }
    var _c1 = ["*"];
    // todo: add active event to tab
    // todo: fix? mixing static and dynamic tabs position tabs in order of creation
    var TabsetComponent = /** @class */ (function () {
        function TabsetComponent(config, renderer, elementRef) {
            this.renderer = renderer;
            this.elementRef = elementRef;
            this.clazz = true;
            this.tabs = [];
            this.classMap = {};
            /** aria label for tab list */
            this.ariaLabel = 'Tabs';
            this.isDestroyed = false;
            this._vertical = false;
            this._justified = false;
            this._type = 'tabs';
            this._isKeysAllowed = true;
            Object.assign(this, config);
        }
        Object.defineProperty(TabsetComponent.prototype, "vertical", {
            /** if true tabs will be placed vertically */
            get: function () {
                return this._vertical;
            },
            set: function (value) {
                this._vertical = value;
                this.setClassMap();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TabsetComponent.prototype, "justified", {
            /** if true tabs fill the container and have a consistent width */
            get: function () {
                return this._justified;
            },
            set: function (value) {
                this._justified = value;
                this.setClassMap();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TabsetComponent.prototype, "type", {
            /** navigation context class: 'tabs' or 'pills' */
            get: function () {
                return this._type;
            },
            set: function (value) {
                this._type = value;
                this.setClassMap();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TabsetComponent.prototype, "isKeysAllowed", {
            get: function () {
                return this._isKeysAllowed;
            },
            set: function (value) {
                this._isKeysAllowed = value;
            },
            enumerable: false,
            configurable: true
        });
        TabsetComponent.prototype.ngOnDestroy = function () {
            this.isDestroyed = true;
        };
        TabsetComponent.prototype.addTab = function (tab) {
            this.tabs.push(tab);
            tab.active = this.tabs.length === 1 && !tab.active;
        };
        TabsetComponent.prototype.removeTab = function (tab, options) {
            if (options === void 0) { options = { reselect: true, emit: true }; }
            var index = this.tabs.indexOf(tab);
            if (index === -1 || this.isDestroyed) {
                return;
            }
            // Select a new tab if the tab to be removed is selected and not destroyed
            if (options.reselect && tab.active && this.hasAvailableTabs(index)) {
                var newActiveIndex = this.getClosestTabIndex(index);
                this.tabs[newActiveIndex].active = true;
            }
            if (options.emit) {
                tab.removed.emit(tab);
            }
            this.tabs.splice(index, 1);
            if (tab.elementRef.nativeElement.parentNode) {
                this.renderer.removeChild(tab.elementRef.nativeElement.parentNode, tab.elementRef.nativeElement);
            }
        };
        TabsetComponent.prototype.keyNavActions = function (event, index) {
            if (!this.isKeysAllowed) {
                return;
            }
            var list = Array.from(this.elementRef.nativeElement.querySelectorAll('.nav-link'));
            // const activeElList = list.filter((el: HTMLElement) => !el.classList.contains('disabled'));
            if (event.keyCode === 13 || event.key === 'Enter' || event.keyCode === 32 || event.key === 'Space') {
                event.preventDefault();
                var currentTab = list[(index) % list.length];
                currentTab.click();
                return;
            }
            if (event.keyCode === 39 || event.key === 'RightArrow') {
                var nextTab = void 0;
                var shift = 1;
                do {
                    nextTab = list[(index + shift) % list.length];
                    shift++;
                } while (nextTab.classList.contains('disabled'));
                nextTab.focus();
                return;
            }
            if (event.keyCode === 37 || event.key === 'LeftArrow') {
                var previousTab = void 0;
                var shift = 1;
                var i = index;
                do {
                    if ((i - shift) < 0) {
                        i = list.length - 1;
                        previousTab = list[i];
                        shift = 0;
                    }
                    else {
                        previousTab = list[i - shift];
                    }
                    shift++;
                } while (previousTab.classList.contains('disabled'));
                previousTab.focus();
                return;
            }
            if (event.keyCode === 36 || event.key === 'Home') {
                event.preventDefault();
                var firstTab = void 0;
                var shift = 0;
                do {
                    firstTab = list[shift % list.length];
                    shift++;
                } while (firstTab.classList.contains('disabled'));
                firstTab.focus();
                return;
            }
            if (event.keyCode === 35 || event.key === 'End') {
                event.preventDefault();
                var lastTab = void 0;
                var shift = 1;
                var i = index;
                do {
                    if ((i - shift) < 0) {
                        i = list.length - 1;
                        lastTab = list[i];
                        shift = 0;
                    }
                    else {
                        lastTab = list[i - shift];
                    }
                    shift++;
                } while (lastTab.classList.contains('disabled'));
                lastTab.focus();
                return;
            }
            if (event.keyCode === 46 || event.key === 'Delete') {
                if (this.tabs[index].removable) {
                    this.removeTab(this.tabs[index]);
                    if (list[index + 1]) {
                        list[(index + 1) % list.length].focus();
                        return;
                    }
                    if (list[list.length - 1]) {
                        list[0].focus();
                    }
                }
            }
        };
        TabsetComponent.prototype.getClosestTabIndex = function (index) {
            var tabsLength = this.tabs.length;
            if (!tabsLength) {
                return -1;
            }
            for (var step = 1; step <= tabsLength; step += 1) {
                var prevIndex = index - step;
                var nextIndex = index + step;
                if (this.tabs[prevIndex] && !this.tabs[prevIndex].disabled) {
                    return prevIndex;
                }
                if (this.tabs[nextIndex] && !this.tabs[nextIndex].disabled) {
                    return nextIndex;
                }
            }
            return -1;
        };
        TabsetComponent.prototype.hasAvailableTabs = function (index) {
            var tabsLength = this.tabs.length;
            if (!tabsLength) {
                return false;
            }
            for (var i = 0; i < tabsLength; i += 1) {
                if (!this.tabs[i].disabled && i !== index) {
                    return true;
                }
            }
            return false;
        };
        TabsetComponent.prototype.setClassMap = function () {
            var _a;
            this.classMap = (_a = {
                    'nav-stacked': this.vertical,
                    'flex-column': this.vertical,
                    'nav-justified': this.justified
                },
                _a["nav-" + this.type] = true,
                _a);
        };
        return TabsetComponent;
    }());
    TabsetComponent.ɵfac = function TabsetComponent_Factory(t) { return new (t || TabsetComponent)(i0.ɵɵdirectiveInject(TabsetConfig), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    TabsetComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TabsetComponent, selectors: [["tabset"]], hostVars: 2, hostBindings: function TabsetComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0.ɵɵclassProp("tab-container", ctx.clazz);
            }
        }, inputs: { vertical: "vertical", justified: "justified", type: "type" }, ngContentSelectors: _c1, decls: 4, vars: 3, consts: [["role", "tablist", 1, "nav", 3, "ngClass", "click"], [3, "ngClass", "active", "disabled", "keydown", 4, "ngFor", "ngForOf"], [1, "tab-content"], [3, "ngClass", "keydown"], ["href", "javascript:void(0);", "role", "tab", 1, "nav-link", 3, "click"], [3, "ngTransclude"], ["class", "bs-remove-tab", 3, "click", 4, "ngIf"], [1, "bs-remove-tab", 3, "click"]], template: function TabsetComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵprojectionDef();
                i0.ɵɵelementStart(0, "ul", 0);
                i0.ɵɵlistener("click", function TabsetComponent_Template_ul_click_0_listener($event) { return $event.preventDefault(); });
                i0.ɵɵtemplate(1, TabsetComponent_li_1_Template, 5, 17, "li", 1);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(2, "div", 2);
                i0.ɵɵprojection(3);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngClass", ctx.classMap);
                i0.ɵɵattribute("aria-label", ctx.ariaLabel);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngForOf", ctx.tabs);
            }
        }, directives: [i2.NgClass, i2.NgForOf, NgTranscludeDirective, i2.NgIf], styles: ["[_nghost-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-item.disabled[_ngcontent-%COMP%]   a.disabled[_ngcontent-%COMP%]{cursor:default}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TabsetComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'tabset',
                        templateUrl: './tabset.component.html',
                        styleUrls: ['./tabs.scss']
                    }]
            }], function () { return [{ type: TabsetConfig }, { type: i0.Renderer2 }, { type: i0.ElementRef }]; }, { vertical: [{
                    type: i0.Input
                }], justified: [{
                    type: i0.Input
                }], type: [{
                    type: i0.Input
                }], clazz: [{
                    type: i0.HostBinding,
                    args: ['class.tab-container']
                }] });
    })();

    var TabDirective = /** @class */ (function () {
        function TabDirective(tabset, elementRef, renderer) {
            this.elementRef = elementRef;
            this.renderer = renderer;
            /** if true tab can not be activated */
            this.disabled = false;
            /** if true tab can be removable, additional button will appear */
            this.removable = false;
            /** fired when tab became active, $event:Tab equals to selected instance of Tab component */
            this.selectTab = new i0.EventEmitter();
            /** fired when tab became inactive, $event:Tab equals to deselected instance of Tab component */
            this.deselect = new i0.EventEmitter();
            /** fired before tab will be removed, $event:Tab equals to instance of removed tab */
            this.removed = new i0.EventEmitter();
            this.addClass = true;
            this.role = 'tabpanel';
            this._active = false;
            this._customClass = '';
            this.tabset = tabset;
            this.tabset.addTab(this);
        }
        Object.defineProperty(TabDirective.prototype, "customClass", {
            /** if set, will be added to the tab's class attribute. Multiple classes are supported. */
            get: function () {
                return this._customClass;
            },
            set: function (customClass) {
                var _this = this;
                if (this.customClass) {
                    this.customClass.split(' ').forEach(function (cssClass) {
                        _this.renderer.removeClass(_this.elementRef.nativeElement, cssClass);
                    });
                }
                this._customClass = customClass ? customClass.trim() : '';
                if (this.customClass) {
                    this.customClass.split(' ').forEach(function (cssClass) {
                        _this.renderer.addClass(_this.elementRef.nativeElement, cssClass);
                    });
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TabDirective.prototype, "active", {
            /** tab active state toggle */
            get: function () {
                return this._active;
            },
            set: function (active) {
                var _this = this;
                if (this._active === active) {
                    return;
                }
                if ((this.disabled && active) || !active) {
                    if (this._active && !active) {
                        this.deselect.emit(this);
                        this._active = active;
                    }
                    return;
                }
                this._active = active;
                this.selectTab.emit(this);
                this.tabset.tabs.forEach(function (tab) {
                    if (tab !== _this) {
                        tab.active = false;
                    }
                });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TabDirective.prototype, "ariaLabelledby", {
            get: function () {
                return this.id ? this.id + "-link" : '';
            },
            enumerable: false,
            configurable: true
        });
        TabDirective.prototype.ngOnInit = function () {
            this.removable = !!this.removable;
        };
        TabDirective.prototype.ngOnDestroy = function () {
            this.tabset.removeTab(this, { reselect: false, emit: false });
        };
        return TabDirective;
    }());
    TabDirective.ɵfac = function TabDirective_Factory(t) { return new (t || TabDirective)(i0.ɵɵdirectiveInject(TabsetComponent), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
    TabDirective.ɵdir = i0.ɵɵdefineDirective({ type: TabDirective, selectors: [["tab"], ["", "tab", ""]], hostVars: 7, hostBindings: function TabDirective_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0.ɵɵattribute("id", ctx.id)("role", ctx.role)("aria-labelledby", ctx.ariaLabelledby);
                i0.ɵɵclassProp("active", ctx.active)("tab-pane", ctx.addClass);
            }
        }, inputs: { heading: "heading", id: "id", disabled: "disabled", removable: "removable", customClass: "customClass", active: "active" }, outputs: { selectTab: "selectTab", deselect: "deselect", removed: "removed" }, exportAs: ["tab"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TabDirective, [{
                type: i0.Directive,
                args: [{ selector: 'tab, [tab]', exportAs: 'tab' }]
            }], function () { return [{ type: TabsetComponent }, { type: i0.ElementRef }, { type: i0.Renderer2 }]; }, { heading: [{
                    type: i0.Input
                }], id: [{
                    type: i0.HostBinding,
                    args: ['attr.id']
                }, {
                    type: i0.Input
                }], disabled: [{
                    type: i0.Input
                }], removable: [{
                    type: i0.Input
                }], customClass: [{
                    type: i0.Input
                }], active: [{
                    type: i0.HostBinding,
                    args: ['class.active']
                }, {
                    type: i0.Input
                }], selectTab: [{
                    type: i0.Output
                }], deselect: [{
                    type: i0.Output
                }], removed: [{
                    type: i0.Output
                }], addClass: [{
                    type: i0.HostBinding,
                    args: ['class.tab-pane']
                }], role: [{
                    type: i0.HostBinding,
                    args: ['attr.role']
                }], ariaLabelledby: [{
                    type: i0.HostBinding,
                    args: ['attr.aria-labelledby']
                }] });
    })();

    /** Should be used to mark <ng-template> element as a template for tab heading */
    var TabHeadingDirective = /** @class */ (function () {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        function TabHeadingDirective(templateRef, tab) {
            tab.headingRef = templateRef;
        }
        return TabHeadingDirective;
    }());
    TabHeadingDirective.ɵfac = function TabHeadingDirective_Factory(t) { return new (t || TabHeadingDirective)(i0.ɵɵdirectiveInject(i0.TemplateRef), i0.ɵɵdirectiveInject(TabDirective)); };
    TabHeadingDirective.ɵdir = i0.ɵɵdefineDirective({ type: TabHeadingDirective, selectors: [["", "tabHeading", ""]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TabHeadingDirective, [{
                type: i0.Directive,
                args: [{ selector: '[tabHeading]' }]
            }], function () { return [{ type: i0.TemplateRef }, { type: TabDirective }]; }, null);
    })();

    var TabsModule = /** @class */ (function () {
        function TabsModule() {
        }
        TabsModule.forRoot = function () {
            return {
                ngModule: TabsModule,
                providers: []
            };
        };
        return TabsModule;
    }());
    TabsModule.ɵmod = i0.ɵɵdefineNgModule({ type: TabsModule });
    TabsModule.ɵinj = i0.ɵɵdefineInjector({ factory: function TabsModule_Factory(t) { return new (t || TabsModule)(); }, imports: [[i2.CommonModule]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(TabsModule, { declarations: [NgTranscludeDirective,
                TabDirective,
                TabsetComponent,
                TabHeadingDirective], imports: [i2.CommonModule], exports: [TabDirective,
                TabsetComponent,
                TabHeadingDirective,
                NgTranscludeDirective] });
    })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TabsModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [i2.CommonModule],
                        declarations: [
                            NgTranscludeDirective,
                            TabDirective,
                            TabsetComponent,
                            TabHeadingDirective
                        ],
                        exports: [
                            TabDirective,
                            TabsetComponent,
                            TabHeadingDirective,
                            NgTranscludeDirective
                        ]
                    }]
            }], null, null);
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.NgTranscludeDirective = NgTranscludeDirective;
    exports.TabDirective = TabDirective;
    exports.TabHeadingDirective = TabHeadingDirective;
    exports.TabsModule = TabsModule;
    exports.TabsetComponent = TabsetComponent;
    exports.TabsetConfig = TabsetConfig;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-bootstrap-tabs.umd.js.map
