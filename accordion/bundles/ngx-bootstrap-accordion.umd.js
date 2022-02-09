(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('ngx-bootstrap/utils'), require('@angular/common'), require('ngx-bootstrap/collapse')) :
    typeof define === 'function' && define.amd ? define('ngx-bootstrap/accordion', ['exports', '@angular/core', 'ngx-bootstrap/utils', '@angular/common', 'ngx-bootstrap/collapse'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['ngx-bootstrap'] = global['ngx-bootstrap'] || {}, global['ngx-bootstrap'].accordion = {}), global.ng.core, global.utils, global.ng.common, global.i3));
}(this, (function (exports, i0, utils, i2, i3) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
            to[j] = from[i];
        return to;
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    /**
     * Configuration service, provides default values for the AccordionComponent.
     */
    var AccordionConfig = /** @class */ (function () {
        function AccordionConfig() {
            /** Whether the other panels should be closed when a panel is opened */
            this.closeOthers = false;
            /** turn on/off animation */
            this.isAnimated = false;
        }
        return AccordionConfig;
    }());
    AccordionConfig.ɵfac = function AccordionConfig_Factory(t) { return new (t || AccordionConfig)(); };
    AccordionConfig.ɵprov = i0.ɵɵdefineInjectable({ token: AccordionConfig, factory: AccordionConfig.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AccordionConfig, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], null, null);
    })();

    var _c0 = ["*"];
    /** Displays collapsible content panels for presenting information in a limited amount of space. */
    var AccordionComponent = /** @class */ (function () {
        function AccordionComponent(config) {
            /** turn on/off animation */
            this.isAnimated = false;
            /** if `true` expanding one item will close all others */
            this.closeOthers = false;
            this.groups = [];
            Object.assign(this, config);
        }
        AccordionComponent.prototype.closeOtherPanels = function (openGroup) {
            if (!this.closeOthers) {
                return;
            }
            this.groups.forEach(function (group) {
                if (group !== openGroup) {
                    group.isOpen = false;
                }
            });
        };
        AccordionComponent.prototype.addGroup = function (group) {
            group.isAnimated = this.isAnimated;
            this.groups.push(group);
        };
        AccordionComponent.prototype.removeGroup = function (group) {
            var index = this.groups.indexOf(group);
            if (index !== -1) {
                this.groups.splice(index, 1);
            }
        };
        return AccordionComponent;
    }());
    AccordionComponent.ɵfac = function AccordionComponent_Factory(t) { return new (t || AccordionComponent)(i0.ɵɵdirectiveInject(AccordionConfig)); };
    AccordionComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AccordionComponent, selectors: [["accordion"]], hostAttrs: ["role", "tablist", 1, "panel-group", 2, "display", "block"], hostVars: 1, hostBindings: function AccordionComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0.ɵɵattribute("aria-multiselectable", ctx.closeOthers);
            }
        }, inputs: { isAnimated: "isAnimated", closeOthers: "closeOthers" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function AccordionComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵprojectionDef();
                i0.ɵɵprojection(0);
            }
        }, encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AccordionComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'accordion',
                        template: "<ng-content></ng-content>",
                        // eslint-disable-next-line @angular-eslint/no-host-metadata-property
                        host: {
                            '[attr.aria-multiselectable]': 'closeOthers',
                            role: 'tablist',
                            class: 'panel-group',
                            style: 'display: block'
                        }
                    }]
            }], function () { return [{ type: AccordionConfig }]; }, { isAnimated: [{
                    type: i0.Input
                }], closeOthers: [{
                    type: i0.Input
                }] });
    })();

    var _c0$1 = function (a0) { return { "text-muted": a0 }; };
    function AccordionPanelComponent_button_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "button", 7);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(2, _c0$1, ctx_r0.isDisabled));
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", ctx_r0.heading, " ");
        }
    }
    var _c1 = [[["", "accordion-heading", ""]], "*"];
    var _c2 = ["[accordion-heading]", "*"];
    /**
     * ### Accordion heading
     * Instead of using `heading` attribute on the `accordion-group`, you can use
     * an `accordion-heading` attribute on `any` element inside of a group that
     * will be used as group's header template.
     */
    var AccordionPanelComponent = /** @class */ (function () {
        function AccordionPanelComponent(accordion) {
            /** turn on/off animation */
            this.isAnimated = false;
            /** Provides an ability to use Bootstrap's contextual panel classes
             * (`panel-primary`, `panel-success`, `panel-info`, etc...).
             * List of all available classes [available here]
             * (https://getbootstrap.com/docs/3.3/components/#panels-alternatives)
             */
            this.panelClass = 'panel-default';
            /** if <code>true</code> — disables accordion group */
            this.isDisabled = false;
            /** Emits when the opened state changes */
            this.isOpenChange = new i0.EventEmitter();
            this._isOpen = false;
            this.accordion = accordion;
        }
        Object.defineProperty(AccordionPanelComponent.prototype, "isOpen", {
            // Questionable, maybe .panel-open should be on child div.panel element?
            /** Is accordion group open or closed. This property supports two-way binding */
            get: function () {
                return this._isOpen;
            },
            set: function (value) {
                var _this = this;
                if (value !== this.isOpen) {
                    if (value) {
                        this.accordion.closeOtherPanels(this);
                    }
                    this._isOpen = value;
                    (function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, Promise.resolve()];
                                case 1:
                                    _a.sent();
                                    this.isOpenChange.emit(value);
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AccordionPanelComponent.prototype, "isBs3", {
            get: function () {
                return utils.isBs3();
            },
            enumerable: false,
            configurable: true
        });
        AccordionPanelComponent.prototype.ngOnInit = function () {
            this.accordion.addGroup(this);
        };
        AccordionPanelComponent.prototype.ngOnDestroy = function () {
            this.accordion.removeGroup(this);
        };
        AccordionPanelComponent.prototype.toggleOpen = function () {
            if (!this.isDisabled) {
                this.isOpen = !this.isOpen;
            }
        };
        return AccordionPanelComponent;
    }());
    AccordionPanelComponent.ɵfac = function AccordionPanelComponent_Factory(t) { return new (t || AccordionPanelComponent)(i0.ɵɵdirectiveInject(AccordionComponent)); };
    AccordionPanelComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AccordionPanelComponent, selectors: [["accordion-group"], ["accordion-panel"]], hostAttrs: [1, "panel", 2, "display", "block"], hostVars: 2, hostBindings: function AccordionPanelComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0.ɵɵclassProp("panel-open", ctx.isOpen);
            }
        }, inputs: { heading: "heading", panelClass: "panelClass", isDisabled: "isDisabled", isOpen: "isOpen" }, outputs: { isOpenChange: "isOpenChange" }, ngContentSelectors: _c2, decls: 9, vars: 6, consts: [[1, "panel", "card", 3, "ngClass"], ["role", "tab", 1, "panel-heading", "card-header", 3, "ngClass", "click"], [1, "panel-title"], ["role", "button", 1, "accordion-toggle"], ["class", "btn btn-link", "type", "button", 3, "ngClass", 4, "ngIf"], ["role", "tabpanel", 1, "panel-collapse", "collapse", 3, "collapse", "isAnimated"], [1, "panel-body", "card-block", "card-body"], ["type", "button", 1, "btn", "btn-link", 3, "ngClass"]], template: function AccordionPanelComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵprojectionDef(_c1);
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "div", 1);
                i0.ɵɵlistener("click", function AccordionPanelComponent_Template_div_click_1_listener() { return ctx.toggleOpen(); });
                i0.ɵɵelementStart(2, "div", 2);
                i0.ɵɵelementStart(3, "div", 3);
                i0.ɵɵtemplate(4, AccordionPanelComponent_button_4_Template, 2, 4, "button", 4);
                i0.ɵɵprojection(5);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(6, "div", 5);
                i0.ɵɵelementStart(7, "div", 6);
                i0.ɵɵprojection(8, 1);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngClass", ctx.panelClass);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngClass", ctx.isDisabled ? "panel-disabled" : "panel-enabled");
                i0.ɵɵadvance(2);
                i0.ɵɵattribute("aria-expanded", ctx.isOpen);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.heading);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("collapse", !ctx.isOpen)("isAnimated", ctx.isAnimated);
            }
        }, directives: [i2.NgClass, i2.NgIf, i3.CollapseDirective], styles: ["[_nghost-%COMP%]   .card-header.panel-enabled[_ngcontent-%COMP%]{cursor:pointer}[_nghost-%COMP%]   .card-header.panel-disabled[_ngcontent-%COMP%]   .btn.btn-link[_ngcontent-%COMP%]{cursor:default;text-decoration:none}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AccordionPanelComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'accordion-group, accordion-panel',
                        templateUrl: './accordion-group.component.html',
                        // eslint-disable-next-line @angular-eslint/no-host-metadata-property
                        host: {
                            class: 'panel',
                            style: 'display: block'
                        },
                        styleUrls: ['./accordion.scss']
                    }]
            }], function () {
            return [{ type: AccordionComponent, decorators: [{
                            type: i0.Inject,
                            args: [AccordionComponent]
                        }] }];
        }, { heading: [{
                    type: i0.Input
                }], panelClass: [{
                    type: i0.Input
                }], isDisabled: [{
                    type: i0.Input
                }], isOpenChange: [{
                    type: i0.Output
                }], isOpen: [{
                    type: i0.HostBinding,
                    args: ['class.panel-open']
                }, {
                    type: i0.Input
                }] });
    })();

    var AccordionModule = /** @class */ (function () {
        function AccordionModule() {
        }
        AccordionModule.forRoot = function () {
            return { ngModule: AccordionModule, providers: [] };
        };
        return AccordionModule;
    }());
    AccordionModule.ɵmod = i0.ɵɵdefineNgModule({ type: AccordionModule });
    AccordionModule.ɵinj = i0.ɵɵdefineInjector({ factory: function AccordionModule_Factory(t) { return new (t || AccordionModule)(); }, imports: [[i2.CommonModule, i3.CollapseModule]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AccordionModule, { declarations: [AccordionComponent, AccordionPanelComponent], imports: [i2.CommonModule, i3.CollapseModule], exports: [AccordionComponent, AccordionPanelComponent] }); })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AccordionModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [i2.CommonModule, i3.CollapseModule],
                        declarations: [AccordionComponent, AccordionPanelComponent],
                        exports: [AccordionComponent, AccordionPanelComponent]
                    }]
            }], null, null);
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.AccordionComponent = AccordionComponent;
    exports.AccordionConfig = AccordionConfig;
    exports.AccordionModule = AccordionModule;
    exports.AccordionPanelComponent = AccordionPanelComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-bootstrap-accordion.umd.js.map
