(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs/operators'), require('ngx-bootstrap/chronos'), require('@angular/animations'), require('rxjs'), require('ngx-bootstrap/mini-ngrx'), require('ngx-bootstrap/positioning'), require('@angular/common'), require('ngx-bootstrap/tooltip'), require('ngx-bootstrap/component-loader'), require('@angular/forms'), require('ngx-bootstrap/utils')) :
    typeof define === 'function' && define.amd ? define('ngx-bootstrap/datepicker', ['exports', '@angular/core', 'rxjs/operators', 'ngx-bootstrap/chronos', '@angular/animations', 'rxjs', 'ngx-bootstrap/mini-ngrx', 'ngx-bootstrap/positioning', '@angular/common', 'ngx-bootstrap/tooltip', 'ngx-bootstrap/component-loader', '@angular/forms', 'ngx-bootstrap/utils'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['ngx-bootstrap'] = global['ngx-bootstrap'] || {}, global['ngx-bootstrap'].datepicker = {}), global.ng.core, global.rxjs.operators, global.chronos, global.ng.animations, global.rxjs, global.miniNgrx, global.i5, global.ng.common, global.i6$1, global.i2, global.ng.forms, global.utils));
}(this, (function (exports, i0, operators, chronos, animations, rxjs, miniNgrx, i5, i6, i6$1, i2, forms, utils) { 'use strict';

    /**
     * For date range picker there are `BsDaterangepickerConfig` which inherits all properties,
     * except `displayMonths`, for range picker it default to `2`
     */
    var BsDatepickerConfig = /** @class */ (function () {
        function BsDatepickerConfig() {
            /** sets use adaptive position */
            this.adaptivePosition = false;
            /** sets use UTC date time format */
            this.useUtc = false;
            /** turn on/off animation */
            this.isAnimated = false;
            /**
             * The view that the datepicker should start in
             */
            this.startView = 'day';
            /**
             * If true, returns focus to the datepicker / daterangepicker input after date selection
             */
            this.returnFocusToInput = false;
            /** CSS class which will be applied to datepicker container,
             * usually used to set color theme
             */
            this.containerClass = 'theme-green';
            // DatepickerRenderOptions
            this.displayMonths = 1;
            /**
             * Allows to hide week numbers in datepicker
             */
            this.showWeekNumbers = true;
            this.dateInputFormat = 'L';
            // range picker
            this.rangeSeparator = ' - ';
            /**
             * Date format for date range input field
             */
            this.rangeInputFormat = 'L';
            // DatepickerFormatOptions
            this.monthTitle = 'MMMM';
            this.yearTitle = 'YYYY';
            this.dayLabel = 'D';
            this.monthLabel = 'MMMM';
            this.yearLabel = 'YYYY';
            this.weekNumbers = 'w';
            /**
             * Shows 'today' button
             */
            this.showTodayButton = false;
            /**
             * Shows clear button
             */
            this.showClearButton = false;
            /**
             * Positioning of 'today' button
             */
            this.todayPosition = 'center';
            /**
             * Positioning of 'clear' button
             */
            this.clearPosition = 'right';
            /**
             * Label for 'today' button
             */
            this.todayButtonLabel = 'Today';
            /**
             * Label for 'clear' button
             */
            this.clearButtonLabel = 'Clear';
            /**
             * Label for 'custom range' button
             */
            this.customRangeButtonLabel = 'Custom Range';
        }
        return BsDatepickerConfig;
    }());
    BsDatepickerConfig.ɵfac = function BsDatepickerConfig_Factory(t) { return new (t || BsDatepickerConfig)(); };
    BsDatepickerConfig.ɵprov = i0.ɵɵdefineInjectable({ token: BsDatepickerConfig, factory: BsDatepickerConfig.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BsDatepickerConfig, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], null, null);
    })();

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

    var DATEPICKER_ANIMATION_TIMING = '220ms cubic-bezier(0, 0, 0.2, 1)';
    var datepickerAnimation = animations.trigger('datepickerAnimation', [
        animations.state('animated-down', animations.style({ height: '*', overflow: 'hidden' })),
        animations.transition('* => animated-down', [
            animations.style({ height: 0, overflow: 'hidden' }),
            animations.animate(DATEPICKER_ANIMATION_TIMING)
        ]),
        animations.state('animated-up', animations.style({ height: '*', overflow: 'hidden' })),
        animations.transition('* => animated-up', [
            animations.style({ height: '*', overflow: 'hidden' }),
            animations.animate(DATEPICKER_ANIMATION_TIMING)
        ]),
        animations.transition('* => unanimated', animations.animate('0s'))
    ]);

    var BsDatepickerAbstractComponent = /** @class */ (function () {
        function BsDatepickerAbstractComponent() {
            this.containerClass = '';
            this.customRanges = [];
            this.chosenRange = [];
            this._daysCalendarSub = new rxjs.Subscription();
        }
        Object.defineProperty(BsDatepickerAbstractComponent.prototype, "minDate", {
            set: function (value) {
                var _a;
                (_a = this._effects) === null || _a === void 0 ? void 0 : _a.setMinDate(value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BsDatepickerAbstractComponent.prototype, "maxDate", {
            set: function (value) {
                var _a;
                (_a = this._effects) === null || _a === void 0 ? void 0 : _a.setMaxDate(value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BsDatepickerAbstractComponent.prototype, "daysDisabled", {
            set: function (value) {
                var _a;
                (_a = this._effects) === null || _a === void 0 ? void 0 : _a.setDaysDisabled(value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BsDatepickerAbstractComponent.prototype, "datesDisabled", {
            set: function (value) {
                var _a;
                (_a = this._effects) === null || _a === void 0 ? void 0 : _a.setDatesDisabled(value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BsDatepickerAbstractComponent.prototype, "datesEnabled", {
            set: function (value) {
                var _a;
                (_a = this._effects) === null || _a === void 0 ? void 0 : _a.setDatesEnabled(value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BsDatepickerAbstractComponent.prototype, "isDisabled", {
            set: function (value) {
                var _a;
                (_a = this._effects) === null || _a === void 0 ? void 0 : _a.setDisabled(value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BsDatepickerAbstractComponent.prototype, "dateCustomClasses", {
            set: function (value) {
                var _a;
                (_a = this._effects) === null || _a === void 0 ? void 0 : _a.setDateCustomClasses(value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BsDatepickerAbstractComponent.prototype, "dateTooltipTexts", {
            set: function (value) {
                var _a;
                (_a = this._effects) === null || _a === void 0 ? void 0 : _a.setDateTooltipTexts(value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BsDatepickerAbstractComponent.prototype, "daysCalendar$", {
            get: function () {
                return this._daysCalendar$;
            },
            set: function (value) {
                var _this = this;
                this._daysCalendar$ = value;
                this._daysCalendarSub.unsubscribe();
                this._daysCalendarSub.add(this._daysCalendar$.subscribe(function (value) {
                    _this.multipleCalendars = !!value && value.length > 1;
                }));
            },
            enumerable: false,
            configurable: true
        });
        // todo: valorkin fix
        // eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/no-empty-function
        BsDatepickerAbstractComponent.prototype.setViewMode = function (event) { };
        // eslint-disable-next-line
        BsDatepickerAbstractComponent.prototype.navigateTo = function (event) { };
        // eslint-disable-next-line
        BsDatepickerAbstractComponent.prototype.dayHoverHandler = function (event) { };
        // eslint-disable-next-line
        BsDatepickerAbstractComponent.prototype.weekHoverHandler = function (event) { };
        // eslint-disable-next-line
        BsDatepickerAbstractComponent.prototype.monthHoverHandler = function (event) { };
        // eslint-disable-next-line
        BsDatepickerAbstractComponent.prototype.yearHoverHandler = function (event) { };
        // eslint-disable-next-line
        BsDatepickerAbstractComponent.prototype.daySelectHandler = function (day) { };
        // eslint-disable-next-line
        BsDatepickerAbstractComponent.prototype.monthSelectHandler = function (event) { };
        // eslint-disable-next-line
        BsDatepickerAbstractComponent.prototype.yearSelectHandler = function (event) { };
        // eslint-disable-next-line
        BsDatepickerAbstractComponent.prototype.setRangeOnCalendar = function (dates) { };
        // eslint-disable-next-line
        BsDatepickerAbstractComponent.prototype.setToday = function () { };
        // eslint-disable-next-line
        BsDatepickerAbstractComponent.prototype.clearDate = function () { };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        BsDatepickerAbstractComponent.prototype._stopPropagation = function (event) {
            event.stopPropagation();
        };
        return BsDatepickerAbstractComponent;
    }());

    var BsDatepickerActions = /** @class */ (function () {
        function BsDatepickerActions() {
        }
        BsDatepickerActions.prototype.calculate = function () {
            return { type: BsDatepickerActions.CALCULATE };
        };
        BsDatepickerActions.prototype.format = function () {
            return { type: BsDatepickerActions.FORMAT };
        };
        BsDatepickerActions.prototype.flag = function () {
            return { type: BsDatepickerActions.FLAG };
        };
        BsDatepickerActions.prototype.select = function (date) {
            return {
                type: BsDatepickerActions.SELECT,
                payload: date
            };
        };
        BsDatepickerActions.prototype.changeViewMode = function (event) {
            return {
                type: BsDatepickerActions.CHANGE_VIEWMODE,
                payload: event
            };
        };
        BsDatepickerActions.prototype.navigateTo = function (event) {
            return {
                type: BsDatepickerActions.NAVIGATE_TO,
                payload: event
            };
        };
        BsDatepickerActions.prototype.navigateStep = function (step) {
            return {
                type: BsDatepickerActions.NAVIGATE_OFFSET,
                payload: step
            };
        };
        BsDatepickerActions.prototype.setOptions = function (options) {
            return {
                type: BsDatepickerActions.SET_OPTIONS,
                payload: options
            };
        };
        // date range picker
        BsDatepickerActions.prototype.selectRange = function (value) {
            return {
                type: BsDatepickerActions.SELECT_RANGE,
                payload: value
            };
        };
        BsDatepickerActions.prototype.hoverDay = function (event) {
            return {
                type: BsDatepickerActions.HOVER,
                payload: event.isHovered ? event.cell.date : null
            };
        };
        BsDatepickerActions.prototype.minDate = function (date) {
            return {
                type: BsDatepickerActions.SET_MIN_DATE,
                payload: date
            };
        };
        BsDatepickerActions.prototype.maxDate = function (date) {
            return {
                type: BsDatepickerActions.SET_MAX_DATE,
                payload: date
            };
        };
        BsDatepickerActions.prototype.daysDisabled = function (days) {
            return {
                type: BsDatepickerActions.SET_DAYSDISABLED,
                payload: days
            };
        };
        BsDatepickerActions.prototype.datesDisabled = function (dates) {
            return {
                type: BsDatepickerActions.SET_DATESDISABLED,
                payload: dates
            };
        };
        BsDatepickerActions.prototype.datesEnabled = function (dates) {
            return {
                type: BsDatepickerActions.SET_DATESENABLED,
                payload: dates
            };
        };
        BsDatepickerActions.prototype.isDisabled = function (value) {
            return {
                type: BsDatepickerActions.SET_IS_DISABLED,
                payload: value
            };
        };
        BsDatepickerActions.prototype.setDateCustomClasses = function (value) {
            return {
                type: BsDatepickerActions.SET_DATE_CUSTOM_CLASSES,
                payload: value
            };
        };
        BsDatepickerActions.prototype.setDateTooltipTexts = function (value) {
            return {
                type: BsDatepickerActions.SET_DATE_TOOLTIP_TEXTS,
                payload: value
            };
        };
        BsDatepickerActions.prototype.setLocale = function (locale) {
            return {
                type: BsDatepickerActions.SET_LOCALE,
                payload: locale
            };
        };
        return BsDatepickerActions;
    }());
    BsDatepickerActions.CALCULATE = '[datepicker] calculate dates matrix';
    BsDatepickerActions.FORMAT = '[datepicker] format datepicker values';
    BsDatepickerActions.FLAG = '[datepicker] set flags';
    BsDatepickerActions.SELECT = '[datepicker] select date';
    BsDatepickerActions.NAVIGATE_OFFSET = '[datepicker] shift view date';
    BsDatepickerActions.NAVIGATE_TO = '[datepicker] change view date';
    BsDatepickerActions.SET_OPTIONS = '[datepicker] update render options';
    BsDatepickerActions.HOVER = '[datepicker] hover date';
    BsDatepickerActions.CHANGE_VIEWMODE = '[datepicker] switch view mode';
    BsDatepickerActions.SET_MIN_DATE = '[datepicker] set min date';
    BsDatepickerActions.SET_MAX_DATE = '[datepicker] set max date';
    BsDatepickerActions.SET_DAYSDISABLED = '[datepicker] set days disabled';
    BsDatepickerActions.SET_DATESDISABLED = '[datepicker] set dates disabled';
    BsDatepickerActions.SET_DATESENABLED = '[datepicker] set dates enabled';
    BsDatepickerActions.SET_IS_DISABLED = '[datepicker] set is disabled';
    BsDatepickerActions.SET_DATE_CUSTOM_CLASSES = '[datepicker] set date custom classes';
    BsDatepickerActions.SET_DATE_TOOLTIP_TEXTS = '[datepicker] set date tooltip texts';
    BsDatepickerActions.SET_LOCALE = '[datepicker] set datepicker locale';
    BsDatepickerActions.SELECT_RANGE = '[daterangepicker] select dates range';
    BsDatepickerActions.ɵfac = function BsDatepickerActions_Factory(t) { return new (t || BsDatepickerActions)(); };
    BsDatepickerActions.ɵprov = i0.ɵɵdefineInjectable({ token: BsDatepickerActions, factory: BsDatepickerActions.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BsDatepickerActions, [{
                type: i0.Injectable
            }], null, null);
    })();

    var BsLocaleService = /** @class */ (function () {
        function BsLocaleService() {
            this._defaultLocale = 'en';
            this._locale = new rxjs.BehaviorSubject(this._defaultLocale);
            this._localeChange = this._locale.asObservable();
        }
        Object.defineProperty(BsLocaleService.prototype, "locale", {
            get: function () {
                return this._locale;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BsLocaleService.prototype, "localeChange", {
            get: function () {
                return this._localeChange;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BsLocaleService.prototype, "currentLocale", {
            get: function () {
                return this._locale.getValue();
            },
            enumerable: false,
            configurable: true
        });
        BsLocaleService.prototype.use = function (locale) {
            if (locale === this.currentLocale) {
                return;
            }
            this._locale.next(locale);
        };
        return BsLocaleService;
    }());
    BsLocaleService.ɵfac = function BsLocaleService_Factory(t) { return new (t || BsLocaleService)(); };
    BsLocaleService.ɵprov = i0.ɵɵdefineInjectable({ token: BsLocaleService, factory: BsLocaleService.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BsLocaleService, [{
                type: i0.Injectable
            }], null, null);
    })();

    var BsDatepickerEffects = /** @class */ (function () {
        function BsDatepickerEffects(_actions, _localeService) {
            this._actions = _actions;
            this._localeService = _localeService;
            this._subs = [];
        }
        BsDatepickerEffects.prototype.init = function (_bsDatepickerStore) {
            this._store = _bsDatepickerStore;
            return this;
        };
        /** setters */
        BsDatepickerEffects.prototype.setValue = function (value) {
            var _a;
            (_a = this._store) === null || _a === void 0 ? void 0 : _a.dispatch(this._actions.select(value));
        };
        BsDatepickerEffects.prototype.setRangeValue = function (value) {
            var _a;
            (_a = this._store) === null || _a === void 0 ? void 0 : _a.dispatch(this._actions.selectRange(value));
        };
        BsDatepickerEffects.prototype.setMinDate = function (value) {
            var _a;
            (_a = this._store) === null || _a === void 0 ? void 0 : _a.dispatch(this._actions.minDate(value));
            return this;
        };
        BsDatepickerEffects.prototype.setMaxDate = function (value) {
            var _a;
            (_a = this._store) === null || _a === void 0 ? void 0 : _a.dispatch(this._actions.maxDate(value));
            return this;
        };
        BsDatepickerEffects.prototype.setDaysDisabled = function (value) {
            var _a;
            (_a = this._store) === null || _a === void 0 ? void 0 : _a.dispatch(this._actions.daysDisabled(value));
            return this;
        };
        BsDatepickerEffects.prototype.setDatesDisabled = function (value) {
            var _a;
            (_a = this._store) === null || _a === void 0 ? void 0 : _a.dispatch(this._actions.datesDisabled(value));
            return this;
        };
        BsDatepickerEffects.prototype.setDatesEnabled = function (value) {
            var _a;
            (_a = this._store) === null || _a === void 0 ? void 0 : _a.dispatch(this._actions.datesEnabled(value));
            return this;
        };
        BsDatepickerEffects.prototype.setDisabled = function (value) {
            var _a;
            (_a = this._store) === null || _a === void 0 ? void 0 : _a.dispatch(this._actions.isDisabled(value));
            return this;
        };
        BsDatepickerEffects.prototype.setDateCustomClasses = function (value) {
            var _a;
            (_a = this._store) === null || _a === void 0 ? void 0 : _a.dispatch(this._actions.setDateCustomClasses(value));
            return this;
        };
        BsDatepickerEffects.prototype.setDateTooltipTexts = function (value) {
            var _a;
            (_a = this._store) === null || _a === void 0 ? void 0 : _a.dispatch(this._actions.setDateTooltipTexts(value));
            return this;
        };
        /* Set rendering options */
        BsDatepickerEffects.prototype.setOptions = function (_config) {
            var _a;
            var _options = Object.assign({ locale: this._localeService.currentLocale }, _config);
            (_a = this._store) === null || _a === void 0 ? void 0 : _a.dispatch(this._actions.setOptions(_options));
            return this;
        };
        /** view to mode bindings */
        BsDatepickerEffects.prototype.setBindings = function (container) {
            if (!this._store) {
                return this;
            }
            container.daysCalendar$ = this._store.select(function (state) { return state.flaggedMonths; })
                .pipe(operators.filter(function (months) { return !!months; }));
            // month calendar
            container.monthsCalendar = this._store.select(function (state) { return state.flaggedMonthsCalendar; })
                .pipe(operators.filter(function (months) { return !!months; }));
            // year calendar
            container.yearsCalendar = this._store.select(function (state) { return state.yearsCalendarFlagged; })
                .pipe(operators.filter(function (years) { return !!years; }));
            container.viewMode = this._store.select(function (state) { var _a; return (_a = state.view) === null || _a === void 0 ? void 0 : _a.mode; });
            container.options$ = rxjs.combineLatest([
                this._store.select(function (state) { return state.showWeekNumbers; }),
                this._store.select(function (state) { return state.displayMonths; })
            ])
                .pipe(operators.map(function (latest) { return ({
                showWeekNumbers: latest[0],
                displayMonths: latest[1]
            }); }));
            return this;
        };
        /** event handlers */
        BsDatepickerEffects.prototype.setEventHandlers = function (container) {
            var _this = this;
            container.setViewMode = function (event) {
                var _a;
                (_a = _this._store) === null || _a === void 0 ? void 0 : _a.dispatch(_this._actions.changeViewMode(event));
            };
            container.navigateTo = function (event) {
                var _a;
                (_a = _this._store) === null || _a === void 0 ? void 0 : _a.dispatch(_this._actions.navigateStep(event.step));
            };
            container.dayHoverHandler = function (event) {
                var _a;
                var _cell = event.cell;
                if (_cell.isOtherMonth || _cell.isDisabled) {
                    return;
                }
                (_a = _this._store) === null || _a === void 0 ? void 0 : _a.dispatch(_this._actions.hoverDay(event));
                _cell.isHovered = event.isHovered;
            };
            container.monthHoverHandler = function (event) {
                event.cell.isHovered = event.isHovered;
            };
            container.yearHoverHandler = function (event) {
                event.cell.isHovered = event.isHovered;
            };
            return this;
        };
        BsDatepickerEffects.prototype.registerDatepickerSideEffects = function () {
            var _this = this;
            if (!this._store) {
                return this;
            }
            this._subs.push(this._store.select(function (state) { return state.view; }).subscribe(function () {
                var _a;
                (_a = _this._store) === null || _a === void 0 ? void 0 : _a.dispatch(_this._actions.calculate());
            }));
            // format calendar values on month model change
            this._subs.push(this._store
                .select(function (state) { return state.monthsModel; })
                .pipe(operators.filter(function (monthModel) { return !!monthModel; }))
                .subscribe(function () { var _a; return (_a = _this._store) === null || _a === void 0 ? void 0 : _a.dispatch(_this._actions.format()); }));
            // flag day values
            this._subs.push(this._store
                .select(function (state) { return state.formattedMonths; })
                .pipe(operators.filter(function (month) { return !!month; }))
                .subscribe(function () { var _a; return (_a = _this._store) === null || _a === void 0 ? void 0 : _a.dispatch(_this._actions.flag()); }));
            // flag day values
            this._subs.push(this._store
                .select(function (state) { return state.selectedDate; })
                .pipe(operators.filter(function (selectedDate) { return !!selectedDate; }))
                .subscribe(function () { var _a; return (_a = _this._store) === null || _a === void 0 ? void 0 : _a.dispatch(_this._actions.flag()); }));
            // flag for date range picker
            this._subs.push(this._store
                .select(function (state) { return state.selectedRange; })
                .pipe(operators.filter(function (selectedRange) { return !!selectedRange; }))
                .subscribe(function () { var _a; return (_a = _this._store) === null || _a === void 0 ? void 0 : _a.dispatch(_this._actions.flag()); }));
            // monthsCalendar
            this._subs.push(this._store
                .select(function (state) { return state.monthsCalendar; })
                .subscribe(function () { var _a; return (_a = _this._store) === null || _a === void 0 ? void 0 : _a.dispatch(_this._actions.flag()); }));
            // years calendar
            this._subs.push(this._store
                .select(function (state) { return state.yearsCalendarModel; })
                .pipe(operators.filter(function (state) { return !!state; }))
                .subscribe(function () { var _a; return (_a = _this._store) === null || _a === void 0 ? void 0 : _a.dispatch(_this._actions.flag()); }));
            // on hover
            this._subs.push(this._store
                .select(function (state) { return state.hoveredDate; })
                .pipe(operators.filter(function (hoveredDate) { return !!hoveredDate; }))
                .subscribe(function () { var _a; return (_a = _this._store) === null || _a === void 0 ? void 0 : _a.dispatch(_this._actions.flag()); }));
            // date custom classes
            this._subs.push(this._store
                .select(function (state) { return state.dateCustomClasses; })
                .pipe(operators.filter(function (dateCustomClasses) { return !!dateCustomClasses; }))
                .subscribe(function () { var _a; return (_a = _this._store) === null || _a === void 0 ? void 0 : _a.dispatch(_this._actions.flag()); }));
            // date tooltip texts
            this._subs.push(this._store
                .select(function (state) { return state.dateTooltipTexts; })
                .pipe(operators.filter(function (dateTooltipTexts) { return !!dateTooltipTexts; }))
                .subscribe(function () { var _a; return (_a = _this._store) === null || _a === void 0 ? void 0 : _a.dispatch(_this._actions.flag()); }));
            // on locale change
            this._subs.push(this._localeService.localeChange
                .subscribe(function (locale) { var _a; return (_a = _this._store) === null || _a === void 0 ? void 0 : _a.dispatch(_this._actions.setLocale(locale)); }));
            return this;
        };
        BsDatepickerEffects.prototype.destroy = function () {
            var e_1, _b;
            try {
                for (var _c = __values(this._subs), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var sub = _d.value;
                    sub.unsubscribe();
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                }
                finally { if (e_1) throw e_1.error; }
            }
        };
        return BsDatepickerEffects;
    }());
    BsDatepickerEffects.ɵfac = function BsDatepickerEffects_Factory(t) { return new (t || BsDatepickerEffects)(i0.ɵɵinject(BsDatepickerActions), i0.ɵɵinject(BsLocaleService)); };
    BsDatepickerEffects.ɵprov = i0.ɵɵdefineInjectable({ token: BsDatepickerEffects, factory: BsDatepickerEffects.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BsDatepickerEffects, [{
                type: i0.Injectable
            }], function () { return [{ type: BsDatepickerActions }, { type: BsLocaleService }]; }, null);
    })();

    var defaultMonthOptions = {
        width: 7,
        height: 6
    };
    var dayInMilliseconds = 24 * 60 * 60 * 1000;

    var BsDatepickerState = /** @class */ (function () {
        function BsDatepickerState() {
            // DatepickerRenderOptions
            this.showWeekNumbers = true;
            this.displayMonths = 1;
        }
        return BsDatepickerState;
    }());
    var _initialView = { date: new Date(), mode: 'day' };
    var initialDatepickerState = Object.assign(new BsDatepickerConfig(), {
        locale: 'en',
        view: _initialView,
        selectedRange: [],
        monthViewOptions: defaultMonthOptions
    });

    function getStartingDayOfCalendar(date, options) {
        if (chronos.isFirstDayOfWeek(date, options.firstDayOfWeek)) {
            return date;
        }
        var weekDay = chronos.getDay(date);
        var offset = calculateDateOffset(weekDay, options.firstDayOfWeek);
        return chronos.shiftDate(date, { day: -offset });
    }
    function calculateDateOffset(weekday, startingDayOffset) {
        var _startingDayOffset = Number(startingDayOffset);
        if (isNaN(_startingDayOffset)) {
            return 0;
        }
        if (_startingDayOffset === 0) {
            return weekday;
        }
        var offset = weekday - _startingDayOffset % 7;
        return offset < 0 ? offset + 7 : offset;
    }
    function isMonthDisabled(date, min, max) {
        var minBound = min && chronos.isBefore(chronos.endOf(date, 'month'), min, 'day');
        var maxBound = max && chronos.isAfter(chronos.startOf(date, 'month'), max, 'day');
        return minBound || maxBound || false;
    }
    function isYearDisabled(date, min, max) {
        var minBound = min && chronos.isBefore(chronos.endOf(date, 'year'), min, 'day');
        var maxBound = max && chronos.isAfter(chronos.startOf(date, 'year'), max, 'day');
        return minBound || maxBound || false;
    }
    function isDisabledDate(date, datesDisabled) {
        if (!datesDisabled || !chronos.isArray(datesDisabled) || !datesDisabled.length) {
            return false;
        }
        return datesDisabled.some(function (dateDisabled) { return chronos.isSame(date, dateDisabled, 'date'); });
    }
    function isEnabledDate(date, datesEnabled) {
        if (!datesEnabled || !chronos.isArray(datesEnabled) || !datesEnabled.length) {
            return false;
        }
        return !datesEnabled.some(function (enabledDate) { return chronos.isSame(date, enabledDate, 'date'); });
    }
    function getYearsCalendarInitialDate(state, calendarIndex) {
        if (calendarIndex === void 0) { calendarIndex = 0; }
        var model = state && state.yearsCalendarModel && state.yearsCalendarModel[calendarIndex];
        return (model === null || model === void 0 ? void 0 : model.years[0]) && model.years[0][0] && model.years[0][0].date;
    }
    function checkRangesWithMaxDate(ranges, maxDate) {
        if (!ranges)
            return ranges;
        if (!maxDate)
            return ranges;
        if (!ranges.length && !ranges[0].value)
            return ranges;
        ranges.forEach(function (item) {
            if (!item || !item.value)
                return ranges;
            if (item.value instanceof Date)
                return ranges;
            if (!(item.value instanceof Array && item.value.length))
                return ranges;
            item.value = compareDateWithMaxDateHelper(item.value, maxDate);
            return ranges;
        });
        return ranges;
    }
    function checkBsValue(date, maxDate) {
        if (!date)
            return date;
        if (!maxDate)
            return date;
        if (date instanceof Array && !date.length)
            return date;
        if (date instanceof Date)
            return date;
        return compareDateWithMaxDateHelper(date, maxDate);
    }
    function compareDateWithMaxDateHelper(date, maxDate) {
        if (date instanceof Array) {
            var editedValues = date.map(function (item) {
                if (!item)
                    return item;
                if (chronos.isAfter(item, maxDate, 'date'))
                    item = maxDate;
                return item;
            });
            return editedValues;
        }
        return date;
    }

    function createMatrix(options, fn) {
        var prevValue = options.initialDate;
        var matrix = new Array(options.height);
        for (var i = 0; i < options.height; i++) {
            matrix[i] = new Array(options.width);
            for (var j = 0; j < options.width; j++) {
                matrix[i][j] = fn(prevValue);
                prevValue = chronos.shiftDate(prevValue, options.shift);
            }
        }
        return matrix;
    }

    // user and model input should handle parsing and validating input values
    function calcDaysCalendar(startingDate, options) {
        var firstDay = chronos.getFirstDayOfMonth(startingDate);
        var initialDate = getStartingDayOfCalendar(firstDay, options);
        // todo test
        var matrixOptions = {
            width: options.width || 0,
            height: options.height || 0,
            initialDate: initialDate,
            shift: { day: 1 }
        };
        var daysMatrix = createMatrix(matrixOptions, function (date) { return date; });
        return {
            daysMatrix: daysMatrix,
            month: firstDay
        };
    }

    function formatDaysCalendar(daysCalendar, formatOptions, monthIndex) {
        return {
            month: daysCalendar.month,
            monthTitle: chronos.formatDate(daysCalendar.month, formatOptions.monthTitle, formatOptions.locale),
            yearTitle: chronos.formatDate(daysCalendar.month, formatOptions.yearTitle, formatOptions.locale),
            weekNumbers: getWeekNumbers(daysCalendar.daysMatrix, formatOptions.weekNumbers, formatOptions.locale),
            weekdays: getShiftedWeekdays(formatOptions.locale),
            weeks: daysCalendar.daysMatrix.map(function (week, weekIndex) { return ({
                days: week.map(function (date, dayIndex) { return ({
                    date: date,
                    label: chronos.formatDate(date, formatOptions.dayLabel, formatOptions.locale),
                    monthIndex: monthIndex,
                    weekIndex: weekIndex,
                    dayIndex: dayIndex
                }); })
            }); }),
            hideLeftArrow: false,
            hideRightArrow: false,
            disableLeftArrow: false,
            disableRightArrow: false
        };
    }
    function getWeekNumbers(daysMatrix, format, locale) {
        return daysMatrix.map(function (days) { return (days[0] ? chronos.formatDate(days[0], format, locale) : ''); });
    }
    function getShiftedWeekdays(locale) {
        var _locale = chronos.getLocale(locale);
        var weekdays = _locale.weekdaysShort();
        var firstDayOfWeek = _locale.firstDayOfWeek();
        return __spread(weekdays.slice(firstDayOfWeek), weekdays.slice(0, firstDayOfWeek));
    }

    function flagDaysCalendar(formattedMonth, options) {
        formattedMonth.weeks.forEach(function (week) {
            week.days.forEach(function (day, dayIndex) {
                // datepicker
                var isOtherMonth = !chronos.isSameMonth(day.date, formattedMonth.month);
                var isHovered = !isOtherMonth && chronos.isSameDay(day.date, options.hoveredDate);
                // date range picker
                var isSelectionStart = !isOtherMonth &&
                    options.selectedRange &&
                    chronos.isSameDay(day.date, options.selectedRange[0]);
                var isSelectionEnd = !isOtherMonth &&
                    options.selectedRange &&
                    chronos.isSameDay(day.date, options.selectedRange[1]);
                var isSelected = (!isOtherMonth && chronos.isSameDay(day.date, options.selectedDate)) ||
                    isSelectionStart ||
                    isSelectionEnd;
                var isInRange = !isOtherMonth &&
                    options.selectedRange &&
                    isDateInRange(day.date, options.selectedRange, options.hoveredDate);
                var isDisabled = options.isDisabled ||
                    chronos.isBefore(day.date, options.minDate, 'day') ||
                    chronos.isAfter(day.date, options.maxDate, 'day') ||
                    chronos.isDisabledDay(day.date, options.daysDisabled) ||
                    isDisabledDate(day.date, options.datesDisabled) ||
                    isEnabledDate(day.date, options.datesEnabled);
                var currentDate = new Date();
                var isToday = !isOtherMonth && chronos.isSameDay(day.date, currentDate);
                var customClasses = options.dateCustomClasses && options.dateCustomClasses
                    .map(function (dcc) { return chronos.isSameDay(day.date, dcc.date) ? dcc.classes : []; })
                    .reduce(function (previousValue, currentValue) { return previousValue.concat(currentValue); }, [])
                    .join(' ')
                    || '';
                var tooltipText = options.dateTooltipTexts && options.dateTooltipTexts
                    .map(function (tt) { return chronos.isSameDay(day.date, tt.date) ? tt.tooltipText : ''; })
                    .reduce(function (previousValue, currentValue) {
                    previousValue.push(currentValue);
                    return previousValue;
                }, [])
                    .join(' ')
                    || '';
                // decide update or not
                var newDay = Object.assign({}, day, {
                    isOtherMonth: isOtherMonth,
                    isHovered: isHovered,
                    isSelected: isSelected,
                    isSelectionStart: isSelectionStart,
                    isSelectionEnd: isSelectionEnd,
                    isInRange: isInRange,
                    isDisabled: isDisabled,
                    isToday: isToday,
                    customClasses: customClasses,
                    tooltipText: tooltipText
                });
                if (day.isOtherMonth !== newDay.isOtherMonth ||
                    day.isHovered !== newDay.isHovered ||
                    day.isSelected !== newDay.isSelected ||
                    day.isSelectionStart !== newDay.isSelectionStart ||
                    day.isSelectionEnd !== newDay.isSelectionEnd ||
                    day.isDisabled !== newDay.isDisabled ||
                    day.isInRange !== newDay.isInRange ||
                    day.customClasses !== newDay.customClasses ||
                    day.tooltipText !== newDay.tooltipText) {
                    week.days[dayIndex] = newDay;
                }
            });
        });
        // todo: add check for linked calendars
        formattedMonth.hideLeftArrow =
            options.isDisabled ||
                (!!options.monthIndex && options.monthIndex > 0 && options.monthIndex !== options.displayMonths);
        formattedMonth.hideRightArrow =
            options.isDisabled ||
                ((!!options.monthIndex || options.monthIndex === 0) && !!options.displayMonths && options.monthIndex < options.displayMonths &&
                    options.monthIndex + 1 !== options.displayMonths);
        formattedMonth.disableLeftArrow = isMonthDisabled(chronos.shiftDate(formattedMonth.month, { month: -1 }), options.minDate, options.maxDate);
        formattedMonth.disableRightArrow = isMonthDisabled(chronos.shiftDate(formattedMonth.month, { month: 1 }), options.minDate, options.maxDate);
        return formattedMonth;
    }
    function isDateInRange(date, selectedRange, hoveredDate) {
        if (!date || !selectedRange || !selectedRange[0]) {
            return false;
        }
        if (selectedRange[1]) {
            return date > selectedRange[0] && date <= selectedRange[1];
        }
        if (hoveredDate) {
            return date > selectedRange[0] && date <= hoveredDate;
        }
        return false;
    }

    function canSwitchMode(mode, minMode) {
        return minMode ? mode >= minMode : true;
    }

    var height = 4;
    var width = 3;
    var shift = { month: 1 };
    function formatMonthsCalendar(viewDate, formatOptions) {
        var initialDate = chronos.startOf(viewDate, 'year');
        var matrixOptions = { width: width, height: height, initialDate: initialDate, shift: shift };
        var monthMatrix = createMatrix(matrixOptions, function (date) { return ({
            date: date,
            label: chronos.formatDate(date, formatOptions.monthLabel, formatOptions.locale)
        }); });
        return {
            months: monthMatrix,
            monthTitle: '',
            yearTitle: chronos.formatDate(viewDate, formatOptions.yearTitle, formatOptions.locale),
            hideRightArrow: false,
            hideLeftArrow: false,
            disableRightArrow: false,
            disableLeftArrow: false
        };
    }

    function flagMonthsCalendar(monthCalendar, options) {
        monthCalendar.months.forEach(function (months, rowIndex) {
            months.forEach(function (month, monthIndex) {
                var isSelected;
                var isHovered = chronos.isSameMonth(month.date, options.hoveredMonth);
                var isDisabled = options.isDisabled ||
                    isMonthDisabled(month.date, options.minDate, options.maxDate);
                if (!options.selectedDate && options.selectedRange) {
                    isSelected = chronos.isSameMonth(month.date, options.selectedRange[0]);
                    if (!isSelected) {
                        isSelected = chronos.isSameMonth(month.date, options.selectedRange[1]);
                    }
                }
                else {
                    isSelected = chronos.isSameMonth(month.date, options.selectedDate);
                }
                var newMonth = Object.assign(/*{},*/ month, {
                    isHovered: isHovered,
                    isDisabled: isDisabled,
                    isSelected: isSelected
                });
                if (month.isHovered !== newMonth.isHovered ||
                    month.isDisabled !== newMonth.isDisabled ||
                    month.isSelected !== newMonth.isSelected) {
                    monthCalendar.months[rowIndex][monthIndex] = newMonth;
                }
            });
        });
        // todo: add check for linked calendars
        monthCalendar.hideLeftArrow =
            !!options.monthIndex && options.monthIndex > 0 && options.monthIndex !== options.displayMonths;
        monthCalendar.hideRightArrow =
            (!!options.monthIndex || options.monthIndex === 0)
                && (!!options.displayMonths || options.displayMonths === 0)
                && options.monthIndex < options.displayMonths
                && options.monthIndex + 1 !== options.displayMonths;
        monthCalendar.disableLeftArrow = isYearDisabled(chronos.shiftDate(monthCalendar.months[0][0].date, { year: -1 }), options.minDate, options.maxDate);
        monthCalendar.disableRightArrow = isYearDisabled(chronos.shiftDate(monthCalendar.months[0][0].date, { year: 1 }), options.minDate, options.maxDate);
        return monthCalendar;
    }

    var height$1 = 4;
    var width$1 = 4;
    var yearsPerCalendar = height$1 * width$1;
    var initialYearShift = (Math.floor(yearsPerCalendar / 2) - 1) * -1;
    var shift$1 = { year: 1 };
    function formatYearsCalendar(viewDate, formatOptions, previousInitialDate) {
        var initialDate = calculateInitialDate(viewDate, previousInitialDate);
        var matrixOptions = { width: width$1, height: height$1, initialDate: initialDate, shift: shift$1 };
        var yearsMatrix = createMatrix(matrixOptions, function (date) { return ({
            date: date,
            label: chronos.formatDate(date, formatOptions.yearLabel, formatOptions.locale)
        }); });
        var yearTitle = formatYearRangeTitle(yearsMatrix, formatOptions);
        return {
            years: yearsMatrix,
            monthTitle: '',
            yearTitle: yearTitle,
            hideLeftArrow: false,
            hideRightArrow: false,
            disableLeftArrow: false,
            disableRightArrow: false
        };
    }
    function calculateInitialDate(viewDate, previousInitialDate) {
        if (previousInitialDate
            && viewDate.getFullYear() >= previousInitialDate.getFullYear()
            && viewDate.getFullYear() < previousInitialDate.getFullYear() + yearsPerCalendar) {
            return previousInitialDate;
        }
        return chronos.shiftDate(viewDate, { year: initialYearShift });
    }
    function formatYearRangeTitle(yearsMatrix, formatOptions) {
        var from = chronos.formatDate(yearsMatrix[0][0].date, formatOptions.yearTitle, formatOptions.locale);
        var to = chronos.formatDate(yearsMatrix[height$1 - 1][width$1 - 1].date, formatOptions.yearTitle, formatOptions.locale);
        return from + " - " + to;
    }

    function flagYearsCalendar(yearsCalendar, options) {
        yearsCalendar.years.forEach(function (years, rowIndex) {
            years.forEach(function (year, yearIndex) {
                var isSelected;
                var isHovered = chronos.isSameYear(year.date, options.hoveredYear);
                var isDisabled = options.isDisabled ||
                    isYearDisabled(year.date, options.minDate, options.maxDate);
                if (!options.selectedDate && options.selectedRange) {
                    isSelected = chronos.isSameYear(year.date, options.selectedRange[0]);
                    if (!isSelected) {
                        isSelected = chronos.isSameYear(year.date, options.selectedRange[1]);
                    }
                }
                else {
                    isSelected = chronos.isSameYear(year.date, options.selectedDate);
                }
                var newMonth = Object.assign(/*{},*/ year, { isHovered: isHovered, isDisabled: isDisabled, isSelected: isSelected });
                if (year.isHovered !== newMonth.isHovered ||
                    year.isDisabled !== newMonth.isDisabled ||
                    year.isSelected !== newMonth.isSelected) {
                    yearsCalendar.years[rowIndex][yearIndex] = newMonth;
                }
            });
        });
        // todo: add check for linked calendars
        yearsCalendar.hideLeftArrow =
            !!options.yearIndex && options.yearIndex > 0 && options.yearIndex !== options.displayMonths;
        yearsCalendar.hideRightArrow =
            !!options.yearIndex && !!options.displayMonths &&
                options.yearIndex < options.displayMonths &&
                options.yearIndex + 1 !== options.displayMonths;
        yearsCalendar.disableLeftArrow = isYearDisabled(chronos.shiftDate(yearsCalendar.years[0][0].date, { year: -1 }), options.minDate, options.maxDate);
        var i = yearsCalendar.years.length - 1;
        var j = yearsCalendar.years[i].length - 1;
        yearsCalendar.disableRightArrow = isYearDisabled(chronos.shiftDate(yearsCalendar.years[i][j].date, { year: 1 }), options.minDate, options.maxDate);
        return yearsCalendar;
    }

    function bsDatepickerReducer(state, action) {
        if (state === void 0) { state = initialDatepickerState; }
        switch (action.type) {
            case BsDatepickerActions.CALCULATE: {
                return calculateReducer(state);
            }
            case BsDatepickerActions.FORMAT: {
                return formatReducer(state);
            }
            case BsDatepickerActions.FLAG: {
                return flagReducer(state);
            }
            case BsDatepickerActions.NAVIGATE_OFFSET: {
                return navigateOffsetReducer(state, action);
            }
            case BsDatepickerActions.NAVIGATE_TO: {
                var payload = action.payload;
                if (!state.view || !payload.unit) {
                    return state;
                }
                var date = chronos.setFullDate(state.view.date, payload.unit);
                var newState = void 0;
                var mode = void 0;
                if (canSwitchMode(payload.viewMode, state.minMode)) {
                    mode = payload.viewMode;
                    newState = { view: { date: date, mode: mode } };
                }
                else {
                    mode = state.view.mode;
                    newState = { selectedDate: date, view: { date: date, mode: mode } };
                }
                return Object.assign({}, state, newState);
            }
            case BsDatepickerActions.CHANGE_VIEWMODE: {
                if (!canSwitchMode(action.payload, state.minMode) || !state.view) {
                    return state;
                }
                var date = state.view.date;
                var mode = action.payload;
                var newState = { view: { date: date, mode: mode } };
                return Object.assign({}, state, newState);
            }
            case BsDatepickerActions.HOVER: {
                return Object.assign({}, state, { hoveredDate: action.payload });
            }
            case BsDatepickerActions.SELECT: {
                if (!state.view) {
                    return state;
                }
                var newState = {
                    selectedDate: action.payload,
                    view: state.view
                };
                var mode = state.view.mode;
                var _date = action.payload || state.view.date;
                var date = getViewDate(_date, state.minDate, state.maxDate);
                newState.view = { mode: mode, date: date };
                return Object.assign({}, state, newState);
            }
            case BsDatepickerActions.SET_OPTIONS: {
                if (!state.view) {
                    return state;
                }
                var newState = action.payload;
                // preserve view mode
                var mode = newState.minMode ? newState.minMode : state.view.mode;
                var _viewDate = chronos.isDateValid(newState.value) && newState.value
                    || chronos.isArray(newState.value) && chronos.isDateValid(newState.value[0]) && newState.value[0]
                    || state.view.date;
                var date = getViewDate(_viewDate, newState.minDate, newState.maxDate);
                newState.view = { mode: mode, date: date };
                // update selected value
                if (newState.value) {
                    // if new value is array we work with date range
                    if (chronos.isArray(newState.value)) {
                        newState.selectedRange = newState.value;
                    }
                    // if new value is a date -> datepicker
                    if (newState.value instanceof Date) {
                        newState.selectedDate = newState.value;
                    }
                    // provided value is not supported :)
                    // need to report it somehow
                }
                return Object.assign({}, state, newState);
            }
            // date range picker
            case BsDatepickerActions.SELECT_RANGE: {
                if (!state.view) {
                    return state;
                }
                var newState = {
                    selectedRange: action.payload,
                    view: state.view
                };
                var mode = state.view.mode;
                var _date = action.payload && action.payload[0] || state.view.date;
                var date = getViewDate(_date, state.minDate, state.maxDate);
                newState.view = { mode: mode, date: date };
                return Object.assign({}, state, newState);
            }
            case BsDatepickerActions.SET_MIN_DATE: {
                return Object.assign({}, state, {
                    minDate: action.payload
                });
            }
            case BsDatepickerActions.SET_MAX_DATE: {
                return Object.assign({}, state, {
                    maxDate: action.payload
                });
            }
            case BsDatepickerActions.SET_IS_DISABLED: {
                return Object.assign({}, state, {
                    isDisabled: action.payload
                });
            }
            case BsDatepickerActions.SET_DATE_CUSTOM_CLASSES: {
                return Object.assign({}, state, {
                    dateCustomClasses: action.payload
                });
            }
            case BsDatepickerActions.SET_DATE_TOOLTIP_TEXTS: {
                return Object.assign({}, state, {
                    dateTooltipTexts: action.payload
                });
            }
            default:
                return state;
        }
    }
    function calculateReducer(state) {
        if (!state.view) {
            return state;
        }
        // how many calendars
        var displayMonths;
        if (state.displayOneMonthRange &&
            isDisplayOneMonth(state.view.date, state.minDate, state.maxDate)) {
            displayMonths = 1;
        }
        else {
            displayMonths = state.displayMonths || 1;
        }
        // use selected date on initial rendering if set
        var viewDate = state.view.date;
        if (state.view.mode === 'day' && state.monthViewOptions) {
            if (state.showPreviousMonth && state.selectedRange && state.selectedRange.length === 0) {
                viewDate = chronos.shiftDate(viewDate, { month: -1 });
            }
            state.monthViewOptions.firstDayOfWeek = chronos.getLocale(state.locale).firstDayOfWeek();
            var monthsModel = new Array(displayMonths);
            for (var monthIndex = 0; monthIndex < displayMonths; monthIndex++) {
                // todo: for unlinked calendars it will be harder
                monthsModel[monthIndex] = calcDaysCalendar(viewDate, state.monthViewOptions);
                viewDate = chronos.shiftDate(viewDate, { month: 1 });
            }
            // Check if parameter enabled and check if it's not months navigation event
            if (state.preventChangeToNextMonth && state.flaggedMonths && state.hoveredDate) {
                var viewMonth = calcDaysCalendar(state.view.date, state.monthViewOptions);
                // Check if viewed right month same as in flaggedMonths state, then override months model with flaggedMonths
                if (state.flaggedMonths.length && state.flaggedMonths[1].month.getMonth() === viewMonth.month.getMonth()) {
                    monthsModel = state.flaggedMonths
                        .map(function (item) {
                        if (state.monthViewOptions) {
                            return calcDaysCalendar(item.month, state.monthViewOptions);
                        }
                        return null;
                    })
                        .filter(function (item) { return item !== null; });
                }
            }
            return Object.assign({}, state, { monthsModel: monthsModel });
        }
        if (state.view.mode === 'month') {
            var monthsCalendar = new Array(displayMonths);
            for (var calendarIndex = 0; calendarIndex < displayMonths; calendarIndex++) {
                // todo: for unlinked calendars it will be harder
                monthsCalendar[calendarIndex] = formatMonthsCalendar(viewDate, getFormatOptions(state));
                viewDate = chronos.shiftDate(viewDate, { year: 1 });
            }
            return Object.assign({}, state, { monthsCalendar: monthsCalendar });
        }
        if (state.view.mode === 'year') {
            var yearsCalendarModel = new Array(displayMonths);
            for (var calendarIndex = 0; calendarIndex < displayMonths; calendarIndex++) {
                // todo: for unlinked calendars it will be harder
                yearsCalendarModel[calendarIndex] = formatYearsCalendar(viewDate, getFormatOptions(state), state.minMode === 'year' ? getYearsCalendarInitialDate(state, calendarIndex) : undefined);
                viewDate = chronos.shiftDate(viewDate, { year: yearsPerCalendar });
            }
            return Object.assign({}, state, { yearsCalendarModel: yearsCalendarModel });
        }
        return state;
    }
    function formatReducer(state) {
        if (!state.view) {
            return state;
        }
        if (state.view.mode === 'day' && state.monthsModel) {
            var formattedMonths = state.monthsModel.map(function (month, monthIndex) { return formatDaysCalendar(month, getFormatOptions(state), monthIndex); });
            return Object.assign({}, state, { formattedMonths: formattedMonths });
        }
        // how many calendars
        var displayMonths = state.displayMonths || 1;
        // check initial rendering
        // use selected date on initial rendering if set
        var viewDate = state.view.date;
        if (state.view.mode === 'month') {
            var monthsCalendar = new Array(displayMonths);
            for (var calendarIndex = 0; calendarIndex < displayMonths; calendarIndex++) {
                // todo: for unlinked calendars it will be harder
                monthsCalendar[calendarIndex] = formatMonthsCalendar(viewDate, getFormatOptions(state));
                viewDate = chronos.shiftDate(viewDate, { year: 1 });
            }
            return Object.assign({}, state, { monthsCalendar: monthsCalendar });
        }
        if (state.view.mode === 'year') {
            var yearsCalendarModel = new Array(displayMonths);
            for (var calendarIndex = 0; calendarIndex < displayMonths; calendarIndex++) {
                // todo: for unlinked calendars it will be harder
                yearsCalendarModel[calendarIndex] = formatYearsCalendar(viewDate, getFormatOptions(state));
                viewDate = chronos.shiftDate(viewDate, { year: 16 });
            }
            return Object.assign({}, state, { yearsCalendarModel: yearsCalendarModel });
        }
        return state;
    }
    function flagReducer(state) {
        if (!state.view) {
            return state;
        }
        var displayMonths = isDisplayOneMonth(state.view.date, state.minDate, state.maxDate) ? 1 : state.displayMonths;
        if (state.formattedMonths && state.view.mode === 'day') {
            var flaggedMonths = state.formattedMonths.map(function (formattedMonth, monthIndex) { return flagDaysCalendar(formattedMonth, {
                isDisabled: state.isDisabled,
                minDate: state.minDate,
                maxDate: state.maxDate,
                daysDisabled: state.daysDisabled,
                datesDisabled: state.datesDisabled,
                datesEnabled: state.datesEnabled,
                hoveredDate: state.hoveredDate,
                selectedDate: state.selectedDate,
                selectedRange: state.selectedRange,
                displayMonths: displayMonths,
                dateCustomClasses: state.dateCustomClasses,
                dateTooltipTexts: state.dateTooltipTexts,
                monthIndex: monthIndex
            }); });
            return Object.assign({}, state, { flaggedMonths: flaggedMonths });
        }
        if (state.view.mode === 'month' && state.monthsCalendar) {
            var flaggedMonthsCalendar = state.monthsCalendar.map(function (formattedMonth, monthIndex) { return flagMonthsCalendar(formattedMonth, {
                isDisabled: state.isDisabled,
                minDate: state.minDate,
                maxDate: state.maxDate,
                hoveredMonth: state.hoveredMonth,
                selectedDate: state.selectedDate,
                selectedRange: state.selectedRange,
                displayMonths: displayMonths,
                monthIndex: monthIndex
            }); });
            return Object.assign({}, state, { flaggedMonthsCalendar: flaggedMonthsCalendar });
        }
        if (state.view.mode === 'year' && state.yearsCalendarModel) {
            var yearsCalendarFlagged = state.yearsCalendarModel.map(function (formattedMonth, yearIndex) { return flagYearsCalendar(formattedMonth, {
                isDisabled: state.isDisabled,
                minDate: state.minDate,
                maxDate: state.maxDate,
                hoveredYear: state.hoveredYear,
                selectedDate: state.selectedDate,
                selectedRange: state.selectedRange,
                displayMonths: displayMonths,
                yearIndex: yearIndex
            }); });
            return Object.assign({}, state, { yearsCalendarFlagged: yearsCalendarFlagged });
        }
        return state;
    }
    function navigateOffsetReducer(state, action) {
        if (!state.view) {
            return state;
        }
        var date = shiftViewDate(state, action);
        if (!date) {
            return state;
        }
        var newState = {
            view: {
                mode: state.view.mode,
                date: date
            }
        };
        return Object.assign({}, state, newState);
    }
    function shiftViewDate(state, action) {
        if (!state.view) {
            return undefined;
        }
        if (state.view.mode === 'year' && state.minMode === 'year') {
            var initialDate = getYearsCalendarInitialDate(state, 0);
            if (initialDate) {
                var middleDate = chronos.shiftDate(initialDate, { year: -initialYearShift });
                return chronos.shiftDate(middleDate, action.payload);
            }
        }
        return chronos.shiftDate(chronos.startOf(state.view.date, 'month'), action.payload);
    }
    function getFormatOptions(state) {
        return {
            locale: state.locale,
            monthTitle: state.monthTitle,
            yearTitle: state.yearTitle,
            dayLabel: state.dayLabel,
            monthLabel: state.monthLabel,
            yearLabel: state.yearLabel,
            weekNumbers: state.weekNumbers
        };
    }
    /**
     * if view date is provided (bsValue|ngModel) it should be shown
     * if view date is not provider:
     * if minDate>currentDate (default view value), show minDate
     * if maxDate<currentDate(default view value) show maxDate
     */
    function getViewDate(viewDate, minDate, maxDate) {
        var _date = Array.isArray(viewDate) ? viewDate[0] : viewDate;
        if (minDate && chronos.isAfter(minDate, _date, 'day')) {
            return minDate;
        }
        if (maxDate && chronos.isBefore(maxDate, _date, 'day')) {
            return maxDate;
        }
        return _date;
    }
    function isDisplayOneMonth(viewDate, minDate, maxDate) {
        if (maxDate && chronos.isSame(maxDate, viewDate, 'day')) {
            return true;
        }
        return minDate && maxDate && minDate.getMonth() === maxDate.getMonth();
    }

    var BsDatepickerStore = /** @class */ (function (_super) {
        __extends(BsDatepickerStore, _super);
        function BsDatepickerStore() {
            var _this = this;
            var _dispatcher = new rxjs.BehaviorSubject({
                type: '[datepicker] dispatcher init'
            });
            var state = new miniNgrx.MiniState(initialDatepickerState, _dispatcher, bsDatepickerReducer);
            _this = _super.call(this, _dispatcher, bsDatepickerReducer, state) || this;
            return _this;
        }
        return BsDatepickerStore;
    }(miniNgrx.MiniStore));
    BsDatepickerStore.ɵfac = function BsDatepickerStore_Factory(t) { return new (t || BsDatepickerStore)(); };
    BsDatepickerStore.ɵprov = i0.ɵɵdefineInjectable({ token: BsDatepickerStore, factory: BsDatepickerStore.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BsDatepickerStore, [{
                type: i0.Injectable
            }], function () { return []; }, null);
    })();

    /** *************** */
    // events
    /** *************** */
    var BsNavigationDirection;
    (function (BsNavigationDirection) {
        BsNavigationDirection[BsNavigationDirection["UP"] = 0] = "UP";
        BsNavigationDirection[BsNavigationDirection["DOWN"] = 1] = "DOWN";
    })(BsNavigationDirection || (BsNavigationDirection = {}));

    var BsCurrentDateViewComponent = /** @class */ (function () {
        function BsCurrentDateViewComponent() {
        }
        return BsCurrentDateViewComponent;
    }());
    BsCurrentDateViewComponent.ɵfac = function BsCurrentDateViewComponent_Factory(t) { return new (t || BsCurrentDateViewComponent)(); };
    BsCurrentDateViewComponent.ɵcmp = i0.ɵɵdefineComponent({ type: BsCurrentDateViewComponent, selectors: [["bs-current-date"]], inputs: { title: "title" }, decls: 3, vars: 1, consts: [[1, "current-timedate"]], template: function BsCurrentDateViewComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "span");
                i0.ɵɵtext(2);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(2);
                i0.ɵɵtextInterpolate(ctx.title);
            }
        }, encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BsCurrentDateViewComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'bs-current-date',
                        template: "<div class=\"current-timedate\"><span>{{ title }}</span></div>"
                    }]
            }], null, { title: [{
                    type: i0.Input
                }] });
    })();

    var BsTimepickerViewComponent = /** @class */ (function () {
        function BsTimepickerViewComponent() {
            this.ampm = 'ok';
            this.hours = 0;
            this.minutes = 0;
        }
        return BsTimepickerViewComponent;
    }());
    BsTimepickerViewComponent.ɵfac = function BsTimepickerViewComponent_Factory(t) { return new (t || BsTimepickerViewComponent)(); };
    BsTimepickerViewComponent.ɵcmp = i0.ɵɵdefineComponent({ type: BsTimepickerViewComponent, selectors: [["bs-timepicker"]], decls: 16, vars: 3, consts: [[1, "bs-timepicker-container"], [1, "bs-timepicker-controls"], ["type", "button", 1, "bs-decrease"], ["type", "text", "placeholder", "00", 3, "value"], ["type", "button", 1, "bs-increase"], ["type", "button", 1, "switch-time-format"], ["src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAKCAYAAABi8KSDAAABSElEQVQYV3XQPUvDUBQG4HNuagtVqc6KgouCv6GIuIntYBLB9hcIQpLStCAIV7DYmpTcRWcXqZio3Vwc/UCc/QEqfgyKGbr0I7nS1EiHeqYzPO/h5SD0jaxUZjmSLCB+OFb+UFINFwASAEAdpu9gaGXVyAHHFQBkHpKHc6a9dzECvADyY9sqlAMsK9W0jzxDXqeytr3mhQckxSji27TJJ5/rPmIpwJJq3HrtduriYOurv1a4i1p5HnhkG9OFymi0ReoO05cGwb+ayv4dysVygjeFmsP05f8wpZQ8fsdvfmuY9zjWSNqUtgYFVnOVReILYoBFzdQI5/GGFzNHhGbeZnopDGU29sZbscgldmC99w35VOATTycIMMcBXIfpSVGzZhA6C8hh00conln6VQ9TGgV32OEAKQC4DrBq7CJwd0ggR7Vq/rPrfgB+C3sGypY5DAAAAABJRU5ErkJggg==", "alt", ""]], template: function BsTimepickerViewComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "div", 1);
                i0.ɵɵelementStart(2, "button", 2);
                i0.ɵɵtext(3, "-");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(4, "input", 3);
                i0.ɵɵelementStart(5, "button", 4);
                i0.ɵɵtext(6, "+");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(7, "div", 1);
                i0.ɵɵelementStart(8, "button", 2);
                i0.ɵɵtext(9, "-");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(10, "input", 3);
                i0.ɵɵelementStart(11, "button", 4);
                i0.ɵɵtext(12, "+");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(13, "button", 5);
                i0.ɵɵtext(14);
                i0.ɵɵelement(15, "img", 6);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(4);
                i0.ɵɵproperty("value", ctx.hours);
                i0.ɵɵadvance(6);
                i0.ɵɵproperty("value", ctx.minutes);
                i0.ɵɵadvance(4);
                i0.ɵɵtextInterpolate1("", ctx.ampm, " ");
            }
        }, encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BsTimepickerViewComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'bs-timepicker',
                        template: "\n    <div class=\"bs-timepicker-container\">\n      <div class=\"bs-timepicker-controls\">\n        <button class=\"bs-decrease\" type=\"button\">-</button>\n        <input type=\"text\" [value]=\"hours\" placeholder=\"00\">\n        <button class=\"bs-increase\" type=\"button\">+</button>\n      </div>\n      <div class=\"bs-timepicker-controls\">\n        <button class=\"bs-decrease\" type=\"button\">-</button>\n        <input type=\"text\" [value]=\"minutes\" placeholder=\"00\">\n        <button class=\"bs-increase\" type=\"button\">+</button>\n      </div>\n      <button class=\"switch-time-format\" type=\"button\">{{ ampm }}\n        <img\n          src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAKCAYAAABi8KSDAAABSElEQVQYV3XQPUvDUBQG4HNuagtVqc6KgouCv6GIuIntYBLB9hcIQpLStCAIV7DYmpTcRWcXqZio3Vwc/UCc/QEqfgyKGbr0I7nS1EiHeqYzPO/h5SD0jaxUZjmSLCB+OFb+UFINFwASAEAdpu9gaGXVyAHHFQBkHpKHc6a9dzECvADyY9sqlAMsK9W0jzxDXqeytr3mhQckxSji27TJJ5/rPmIpwJJq3HrtduriYOurv1a4i1p5HnhkG9OFymi0ReoO05cGwb+ayv4dysVygjeFmsP05f8wpZQ8fsdvfmuY9zjWSNqUtgYFVnOVReILYoBFzdQI5/GGFzNHhGbeZnopDGU29sZbscgldmC99w35VOATTycIMMcBXIfpSVGzZhA6C8hh00conln6VQ9TGgV32OEAKQC4DrBq7CJwd0ggR7Vq/rPrfgB+C3sGypY5DAAAAABJRU5ErkJggg==\"\n          alt=\"\">\n      </button>\n    </div>\n  "
                    }]
            }], null, null);
    })();

    function BsCalendarLayoutComponent_bs_current_date_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "bs-current-date", 4);
        }
    }
    function BsCalendarLayoutComponent_bs_timepicker_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "bs-timepicker");
        }
    }
    var _c0 = [[["bs-datepicker-navigation-view"]], "*"];
    var _c1 = ["bs-datepicker-navigation-view", "*"];
    var BsCalendarLayoutComponent = /** @class */ (function () {
        function BsCalendarLayoutComponent() {
        }
        return BsCalendarLayoutComponent;
    }());
    BsCalendarLayoutComponent.ɵfac = function BsCalendarLayoutComponent_Factory(t) { return new (t || BsCalendarLayoutComponent)(); };
    BsCalendarLayoutComponent.ɵcmp = i0.ɵɵdefineComponent({ type: BsCalendarLayoutComponent, selectors: [["bs-calendar-layout"]], ngContentSelectors: _c1, decls: 6, vars: 2, consts: [["title", "hey there", 4, "ngIf"], [1, "bs-datepicker-head"], [1, "bs-datepicker-body"], [4, "ngIf"], ["title", "hey there"]], template: function BsCalendarLayoutComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵprojectionDef(_c0);
                i0.ɵɵtemplate(0, BsCalendarLayoutComponent_bs_current_date_0_Template, 1, 0, "bs-current-date", 0);
                i0.ɵɵelementStart(1, "div", 1);
                i0.ɵɵprojection(2);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(3, "div", 2);
                i0.ɵɵprojection(4, 1);
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(5, BsCalendarLayoutComponent_bs_timepicker_5_Template, 1, 0, "bs-timepicker", 3);
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngIf", false);
                i0.ɵɵadvance(5);
                i0.ɵɵproperty("ngIf", false);
            }
        }, directives: [i6.NgIf, BsCurrentDateViewComponent, BsTimepickerViewComponent], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BsCalendarLayoutComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'bs-calendar-layout',
                        template: "\n    <!-- current date, will be added in nearest releases -->\n    <bs-current-date title=\"hey there\" *ngIf=\"false\"></bs-current-date>\n\n    <!--navigation-->\n    <div class=\"bs-datepicker-head\">\n      <ng-content select=\"bs-datepicker-navigation-view\"></ng-content>\n    </div>\n\n    <div class=\"bs-datepicker-body\">\n      <ng-content></ng-content>\n    </div>\n\n    <!--timepicker-->\n    <bs-timepicker *ngIf=\"false\"></bs-timepicker>\n  "
                    }]
            }], null, null);
    })();

    function BsDatepickerNavigationViewComponent_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
            var _r2_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtext(1, " \u200B ");
            i0.ɵɵelementStart(2, "button", 2);
            i0.ɵɵlistener("click", function BsDatepickerNavigationViewComponent_ng_container_3_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r2_1); var ctx_r1 = i0.ɵɵnextContext(); return ctx_r1.view("month"); });
            i0.ɵɵelementStart(3, "span");
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(ctx_r0.calendar.monthTitle);
        }
    }
    var BsDatepickerNavigationViewComponent = /** @class */ (function () {
        function BsDatepickerNavigationViewComponent() {
            this.onNavigate = new i0.EventEmitter();
            this.onViewMode = new i0.EventEmitter();
        }
        BsDatepickerNavigationViewComponent.prototype.navTo = function (down) {
            this.onNavigate.emit(down ? BsNavigationDirection.DOWN : BsNavigationDirection.UP);
        };
        BsDatepickerNavigationViewComponent.prototype.view = function (viewMode) {
            this.onViewMode.emit(viewMode);
        };
        return BsDatepickerNavigationViewComponent;
    }());
    BsDatepickerNavigationViewComponent.ɵfac = function BsDatepickerNavigationViewComponent_Factory(t) { return new (t || BsDatepickerNavigationViewComponent)(); };
    BsDatepickerNavigationViewComponent.ɵcmp = i0.ɵɵdefineComponent({ type: BsDatepickerNavigationViewComponent, selectors: [["bs-datepicker-navigation-view"]], inputs: { calendar: "calendar" }, outputs: { onNavigate: "onNavigate", onViewMode: "onViewMode" }, decls: 12, vars: 8, consts: [["type", "button", 1, "previous", 3, "disabled", "click"], [4, "ngIf"], ["type", "button", 1, "current", 3, "click"], ["type", "button", 1, "next", 3, "disabled", "click"]], template: function BsDatepickerNavigationViewComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "button", 0);
                i0.ɵɵlistener("click", function BsDatepickerNavigationViewComponent_Template_button_click_0_listener() { return ctx.navTo(true); });
                i0.ɵɵelementStart(1, "span");
                i0.ɵɵtext(2, "\u2039");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(3, BsDatepickerNavigationViewComponent_ng_container_3_Template, 5, 1, "ng-container", 1);
                i0.ɵɵtext(4, " \u200B ");
                i0.ɵɵelementStart(5, "button", 2);
                i0.ɵɵlistener("click", function BsDatepickerNavigationViewComponent_Template_button_click_5_listener() { return ctx.view("year"); });
                i0.ɵɵelementStart(6, "span");
                i0.ɵɵtext(7);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵtext(8, " \u200B ");
                i0.ɵɵelementStart(9, "button", 3);
                i0.ɵɵlistener("click", function BsDatepickerNavigationViewComponent_Template_button_click_9_listener() { return ctx.navTo(false); });
                i0.ɵɵelementStart(10, "span");
                i0.ɵɵtext(11, "\u203A");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵstyleProp("visibility", ctx.calendar.hideLeftArrow ? "hidden" : "visible");
                i0.ɵɵproperty("disabled", ctx.calendar.disableLeftArrow);
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("ngIf", ctx.calendar && ctx.calendar.monthTitle);
                i0.ɵɵadvance(4);
                i0.ɵɵtextInterpolate(ctx.calendar.yearTitle);
                i0.ɵɵadvance(2);
                i0.ɵɵstyleProp("visibility", ctx.calendar.hideRightArrow ? "hidden" : "visible");
                i0.ɵɵproperty("disabled", ctx.calendar.disableRightArrow);
            }
        }, directives: [i6.NgIf], encapsulation: 2, changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BsDatepickerNavigationViewComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'bs-datepicker-navigation-view',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        template: "\n    <button class=\"previous\"\n            [disabled]=\"calendar.disableLeftArrow\"\n            [style.visibility]=\"calendar.hideLeftArrow ? 'hidden' : 'visible'\"\n            type=\"button\"\n            (click)=\"navTo(true)\">\n      <span>&lsaquo;</span>\n    </button>\n\n    <ng-container *ngIf=\"calendar && calendar.monthTitle\">\n      &#8203;  <!-- zero-width space needed for correct alignment\n                  with preserveWhitespaces: false in Angular -->\n\n      <button class=\"current\"\n            type=\"button\"\n            (click)=\"view('month')\"\n      ><span>{{ calendar.monthTitle }}</span>\n      </button>\n    </ng-container>\n\n    &#8203;  <!-- zero-width space needed for correct alignment\n                  with preserveWhitespaces: false in Angular -->\n\n    <button class=\"current\" (click)=\"view('year')\" type=\"button\">\n      <span>{{ calendar.yearTitle }}</span>\n    </button>\n\n    &#8203;  <!-- zero-width space needed for correct alignment\n                  with preserveWhitespaces: false in Angular -->\n\n    <button class=\"next\"\n            [disabled]=\"calendar.disableRightArrow\"\n            [style.visibility]=\"calendar.hideRightArrow ? 'hidden' : 'visible'\"\n            type=\"button\"\n            (click)=\"navTo(false)\"><span>&rsaquo;</span>\n    </button>\n  "
                    }]
            }], null, { calendar: [{
                    type: i0.Input
                }], onNavigate: [{
                    type: i0.Output
                }], onViewMode: [{
                    type: i0.Output
                }] });
    })();

    var _c0$1 = ["bsDatepickerDayDecorator", ""];
    var BsDatepickerDayDecoratorComponent = /** @class */ (function () {
        function BsDatepickerDayDecoratorComponent(_config, _elRef, _renderer) {
            this._config = _config;
            this._elRef = _elRef;
            this._renderer = _renderer;
            this.day = { date: new Date(), label: '' };
        }
        BsDatepickerDayDecoratorComponent.prototype.ngOnInit = function () {
            var _this = this;
            var _a, _b, _c;
            if (((_a = this.day) === null || _a === void 0 ? void 0 : _a.isToday) && this._config && this._config.customTodayClass) {
                this._renderer.addClass(this._elRef.nativeElement, this._config.customTodayClass);
            }
            if (typeof ((_b = this.day) === null || _b === void 0 ? void 0 : _b.customClasses) === 'string') {
                (_c = this.day) === null || _c === void 0 ? void 0 : _c.customClasses.split(' ').filter(function (className) { return className; }).forEach(function (className) {
                    _this._renderer.addClass(_this._elRef.nativeElement, className);
                });
            }
        };
        return BsDatepickerDayDecoratorComponent;
    }());
    BsDatepickerDayDecoratorComponent.ɵfac = function BsDatepickerDayDecoratorComponent_Factory(t) { return new (t || BsDatepickerDayDecoratorComponent)(i0.ɵɵdirectiveInject(BsDatepickerConfig), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
    BsDatepickerDayDecoratorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: BsDatepickerDayDecoratorComponent, selectors: [["", "bsDatepickerDayDecorator", ""]], hostVars: 16, hostBindings: function BsDatepickerDayDecoratorComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0.ɵɵclassProp("disabled", ctx.day.isDisabled)("is-highlighted", ctx.day.isHovered)("is-other-month", ctx.day.isOtherMonth)("is-active-other-month", ctx.day.isOtherMonthHovered)("in-range", ctx.day.isInRange)("select-start", ctx.day.isSelectionStart)("select-end", ctx.day.isSelectionEnd)("selected", ctx.day.isSelected);
            }
        }, inputs: { day: "day" }, attrs: _c0$1, decls: 1, vars: 1, template: function BsDatepickerDayDecoratorComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtext(0);
            }
            if (rf & 2) {
                i0.ɵɵtextInterpolate(ctx.day && ctx.day.label || "");
            }
        }, encapsulation: 2, changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BsDatepickerDayDecoratorComponent, [{
                type: i0.Component,
                args: [{
                        selector: '[bsDatepickerDayDecorator]',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
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
                        template: "{{ day && day.label || '' }}"
                    }]
            }], function () { return [{ type: BsDatepickerConfig }, { type: i0.ElementRef }, { type: i0.Renderer2 }]; }, { day: [{
                    type: i0.Input
                }] });
    })();

    function BsDaysCalendarViewComponent_th_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "th");
        }
    }
    function BsDaysCalendarViewComponent_th_6_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "th", 5);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var i_r4 = ctx.index;
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1("", ctx_r1.calendar.weekdays[i_r4], " ");
        }
    }
    function BsDaysCalendarViewComponent_tr_8_td_1_span_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r13_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "span", 11);
            i0.ɵɵlistener("click", function BsDaysCalendarViewComponent_tr_8_td_1_span_1_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r13_1); var week_r5 = i0.ɵɵnextContext(2).$implicit; var ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.selectWeek(week_r5); });
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var i_r6 = i0.ɵɵnextContext(2).index;
            var ctx_r9 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(ctx_r9.calendar.weekNumbers[i_r6]);
        }
    }
    function BsDaysCalendarViewComponent_tr_8_td_1_span_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r17_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "span", 12);
            i0.ɵɵlistener("click", function BsDaysCalendarViewComponent_tr_8_td_1_span_2_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r17_1); var week_r5 = i0.ɵɵnextContext(2).$implicit; var ctx_r15 = i0.ɵɵnextContext(); return ctx_r15.selectWeek(week_r5); })("mouseenter", function BsDaysCalendarViewComponent_tr_8_td_1_span_2_Template_span_mouseenter_0_listener() { i0.ɵɵrestoreView(_r17_1); var week_r5 = i0.ɵɵnextContext(2).$implicit; var ctx_r18 = i0.ɵɵnextContext(); return ctx_r18.weekHoverHandler(week_r5, true); })("mouseleave", function BsDaysCalendarViewComponent_tr_8_td_1_span_2_Template_span_mouseleave_0_listener() { i0.ɵɵrestoreView(_r17_1); var week_r5 = i0.ɵɵnextContext(2).$implicit; var ctx_r20 = i0.ɵɵnextContext(); return ctx_r20.weekHoverHandler(week_r5, false); });
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var i_r6 = i0.ɵɵnextContext(2).index;
            var ctx_r10 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(ctx_r10.calendar.weekNumbers[i_r6]);
        }
    }
    function BsDaysCalendarViewComponent_tr_8_td_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "td", 8);
            i0.ɵɵtemplate(1, BsDaysCalendarViewComponent_tr_8_td_1_span_1_Template, 2, 1, "span", 9);
            i0.ɵɵtemplate(2, BsDaysCalendarViewComponent_tr_8_td_1_span_2_Template, 2, 1, "span", 10);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r7 = i0.ɵɵnextContext(2);
            i0.ɵɵclassProp("active-week", ctx_r7.isWeekHovered);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r7.isiOS);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx_r7.isiOS);
        }
    }
    function BsDaysCalendarViewComponent_tr_8_td_2_span_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r29_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "span", 17);
            i0.ɵɵlistener("click", function BsDaysCalendarViewComponent_tr_8_td_2_span_1_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r29_1); var day_r23 = i0.ɵɵnextContext().$implicit; var ctx_r27 = i0.ɵɵnextContext(2); return ctx_r27.selectDay(day_r23); })("mouseenter", function BsDaysCalendarViewComponent_tr_8_td_2_span_1_Template_span_mouseenter_0_listener() { i0.ɵɵrestoreView(_r29_1); var day_r23 = i0.ɵɵnextContext().$implicit; var ctx_r30 = i0.ɵɵnextContext(2); return ctx_r30.hoverDay(day_r23, true); })("mouseleave", function BsDaysCalendarViewComponent_tr_8_td_2_span_1_Template_span_mouseleave_0_listener() { i0.ɵɵrestoreView(_r29_1); var day_r23 = i0.ɵɵnextContext().$implicit; var ctx_r32 = i0.ɵɵnextContext(2); return ctx_r32.hoverDay(day_r23, false); });
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var day_r23 = i0.ɵɵnextContext().$implicit;
            i0.ɵɵpropertyInterpolate("tooltip", day_r23.tooltipText);
            i0.ɵɵproperty("day", day_r23);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1("", day_r23.label, " 3");
        }
    }
    function BsDaysCalendarViewComponent_tr_8_td_2_span_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r37_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "span", 18);
            i0.ɵɵlistener("click", function BsDaysCalendarViewComponent_tr_8_td_2_span_2_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r37_1); var day_r23 = i0.ɵɵnextContext().$implicit; var ctx_r35 = i0.ɵɵnextContext(2); return ctx_r35.selectDay(day_r23); })("mouseenter", function BsDaysCalendarViewComponent_tr_8_td_2_span_2_Template_span_mouseenter_0_listener() { i0.ɵɵrestoreView(_r37_1); var day_r23 = i0.ɵɵnextContext().$implicit; var ctx_r38 = i0.ɵɵnextContext(2); return ctx_r38.hoverDay(day_r23, true); })("mouseleave", function BsDaysCalendarViewComponent_tr_8_td_2_span_2_Template_span_mouseleave_0_listener() { i0.ɵɵrestoreView(_r37_1); var day_r23 = i0.ɵɵnextContext().$implicit; var ctx_r40 = i0.ɵɵnextContext(2); return ctx_r40.hoverDay(day_r23, false); });
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var day_r23 = i0.ɵɵnextContext().$implicit;
            i0.ɵɵproperty("day", day_r23);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1("", day_r23.label, " 2");
        }
    }
    function BsDaysCalendarViewComponent_tr_8_td_2_span_3_Template(rf, ctx) {
        if (rf & 1) {
            var _r45_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "span", 19);
            i0.ɵɵlistener("click", function BsDaysCalendarViewComponent_tr_8_td_2_span_3_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r45_1); var day_r23 = i0.ɵɵnextContext().$implicit; var ctx_r43 = i0.ɵɵnextContext(2); return ctx_r43.selectDay(day_r23); });
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var day_r23 = i0.ɵɵnextContext().$implicit;
            i0.ɵɵproperty("day", day_r23);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1("", day_r23.label, " 1");
        }
    }
    function BsDaysCalendarViewComponent_tr_8_td_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "td", 13);
            i0.ɵɵtemplate(1, BsDaysCalendarViewComponent_tr_8_td_2_span_1_Template, 2, 3, "span", 14);
            i0.ɵɵtemplate(2, BsDaysCalendarViewComponent_tr_8_td_2_span_2_Template, 2, 2, "span", 15);
            i0.ɵɵtemplate(3, BsDaysCalendarViewComponent_tr_8_td_2_span_3_Template, 2, 2, "span", 16);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r8 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx_r8.isiOS && ctx_r8.isShowTooltip);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx_r8.isiOS && !ctx_r8.isShowTooltip);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r8.isiOS);
        }
    }
    function BsDaysCalendarViewComponent_tr_8_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "tr");
            i0.ɵɵtemplate(1, BsDaysCalendarViewComponent_tr_8_td_1_Template, 3, 4, "td", 6);
            i0.ɵɵtemplate(2, BsDaysCalendarViewComponent_tr_8_td_2_Template, 4, 3, "td", 7);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var week_r5 = ctx.$implicit;
            var ctx_r2 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r2.options && ctx_r2.options.showWeekNumbers);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", week_r5.days);
        }
    }
    var BsDaysCalendarViewComponent = /** @class */ (function () {
        function BsDaysCalendarViewComponent(_config) {
            this._config = _config;
            this.onNavigate = new i0.EventEmitter();
            this.onViewMode = new i0.EventEmitter();
            this.onSelect = new i0.EventEmitter();
            this.onHover = new i0.EventEmitter();
            this.onHoverWeek = new i0.EventEmitter();
            this.isiOS = (/iPad|iPhone|iPod/.test(navigator.platform) ||
                (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1));
            if (this._config.dateTooltipTexts && this._config.dateTooltipTexts.length > 0) {
                this.isShowTooltip = true;
            }
        }
        BsDaysCalendarViewComponent.prototype.navigateTo = function (event) {
            var step = BsNavigationDirection.DOWN === event ? -1 : 1;
            this.onNavigate.emit({ step: { month: step } });
        };
        BsDaysCalendarViewComponent.prototype.changeViewMode = function (event) {
            this.onViewMode.emit(event);
        };
        BsDaysCalendarViewComponent.prototype.selectDay = function (event) {
            this.onSelect.emit(event);
        };
        BsDaysCalendarViewComponent.prototype.selectWeek = function (week) {
            var _this = this;
            if (!this._config.selectWeek && !this._config.selectWeekDateRange) {
                return;
            }
            if (week.days.length === 0) {
                return;
            }
            if (this._config.selectWeek && week.days[0]
                && !week.days[0].isDisabled
                && this._config.selectFromOtherMonth) {
                this.onSelect.emit(week.days[0]);
                return;
            }
            var selectedDay = week.days.find(function (day) {
                return _this._config.selectFromOtherMonth
                    ? !day.isDisabled
                    : !day.isOtherMonth && !day.isDisabled;
            });
            this.onSelect.emit(selectedDay);
            if (this._config.selectWeekDateRange) {
                var days = week.days.slice(0);
                var lastDayOfRange = days.reverse().find(function (day) {
                    return _this._config.selectFromOtherMonth
                        ? !day.isDisabled
                        : !day.isOtherMonth && !day.isDisabled;
                });
                this.onSelect.emit(lastDayOfRange);
            }
        };
        BsDaysCalendarViewComponent.prototype.weekHoverHandler = function (cell, isHovered) {
            var _this = this;
            if (!this._config.selectWeek && !this._config.selectWeekDateRange) {
                return;
            }
            var hasActiveDays = cell.days.find(function (day) {
                return _this._config.selectFromOtherMonth
                    ? !day.isDisabled
                    : !day.isOtherMonth && !day.isDisabled;
            });
            if (hasActiveDays) {
                cell.isHovered = isHovered;
                this.isWeekHovered = isHovered;
                this.onHoverWeek.emit(cell);
            }
        };
        BsDaysCalendarViewComponent.prototype.hoverDay = function (cell, isHovered) {
            if (this._config.selectFromOtherMonth && cell.isOtherMonth) {
                cell.isOtherMonthHovered = isHovered;
            }
            if (this._config.dateTooltipTexts) {
                cell.tooltipText = '';
                this._config.dateTooltipTexts.forEach(function (dateData) {
                    if (chronos.isSameDay(dateData.date, cell.date)) {
                        cell.tooltipText = dateData.tooltipText;
                        return;
                    }
                });
            }
            this.onHover.emit({ cell: cell, isHovered: isHovered });
        };
        return BsDaysCalendarViewComponent;
    }());
    BsDaysCalendarViewComponent.ɵfac = function BsDaysCalendarViewComponent_Factory(t) { return new (t || BsDaysCalendarViewComponent)(i0.ɵɵdirectiveInject(BsDatepickerConfig)); };
    BsDaysCalendarViewComponent.ɵcmp = i0.ɵɵdefineComponent({ type: BsDaysCalendarViewComponent, selectors: [["bs-days-calendar-view"]], inputs: { calendar: "calendar", options: "options" }, outputs: { onNavigate: "onNavigate", onViewMode: "onViewMode", onSelect: "onSelect", onHover: "onHover", onHoverWeek: "onHoverWeek" }, decls: 9, vars: 4, consts: [[3, "calendar", "onNavigate", "onViewMode"], ["role", "grid", 1, "days", "weeks"], [4, "ngIf"], ["aria-label", "weekday", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], ["aria-label", "weekday"], ["class", "week", 3, "active-week", 4, "ngIf"], ["role", "gridcell", 4, "ngFor", "ngForOf"], [1, "week"], [3, "click", 4, "ngIf"], [3, "click", "mouseenter", "mouseleave", 4, "ngIf"], [3, "click"], [3, "click", "mouseenter", "mouseleave"], ["role", "gridcell"], ["bsDatepickerDayDecorator", "", 3, "day", "tooltip", "click", "mouseenter", "mouseleave", 4, "ngIf"], ["bsDatepickerDayDecorator", "", 3, "day", "click", "mouseenter", "mouseleave", 4, "ngIf"], ["bsDatepickerDayDecorator", "", 3, "day", "click", 4, "ngIf"], ["bsDatepickerDayDecorator", "", 3, "day", "tooltip", "click", "mouseenter", "mouseleave"], ["bsDatepickerDayDecorator", "", 3, "day", "click", "mouseenter", "mouseleave"], ["bsDatepickerDayDecorator", "", 3, "day", "click"]], template: function BsDaysCalendarViewComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "bs-calendar-layout");
                i0.ɵɵelementStart(1, "bs-datepicker-navigation-view", 0);
                i0.ɵɵlistener("onNavigate", function BsDaysCalendarViewComponent_Template_bs_datepicker_navigation_view_onNavigate_1_listener($event) { return ctx.navigateTo($event); })("onViewMode", function BsDaysCalendarViewComponent_Template_bs_datepicker_navigation_view_onViewMode_1_listener($event) { return ctx.changeViewMode($event); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(2, "table", 1);
                i0.ɵɵelementStart(3, "thead");
                i0.ɵɵelementStart(4, "tr");
                i0.ɵɵtemplate(5, BsDaysCalendarViewComponent_th_5_Template, 1, 0, "th", 2);
                i0.ɵɵtemplate(6, BsDaysCalendarViewComponent_th_6_Template, 2, 1, "th", 3);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(7, "tbody");
                i0.ɵɵtemplate(8, BsDaysCalendarViewComponent_tr_8_Template, 3, 2, "tr", 4);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("calendar", ctx.calendar);
                i0.ɵɵadvance(4);
                i0.ɵɵproperty("ngIf", ctx.options && ctx.options.showWeekNumbers);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngForOf", ctx.calendar.weekdays);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngForOf", ctx.calendar.weeks);
            }
        }, directives: [BsCalendarLayoutComponent, BsDatepickerNavigationViewComponent, i6.NgIf, i6.NgForOf, BsDatepickerDayDecoratorComponent, i6$1.TooltipDirective], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BsDaysCalendarViewComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'bs-days-calendar-view',
                        // changeDetection: ChangeDetectionStrategy.OnPush,
                        template: "\n    <bs-calendar-layout>\n      <bs-datepicker-navigation-view\n        [calendar]=\"calendar\"\n        (onNavigate)=\"navigateTo($event)\"\n        (onViewMode)=\"changeViewMode($event)\"\n      ></bs-datepicker-navigation-view>\n      <!--days matrix-->\n      <table role=\"grid\" class=\"days weeks\">\n        <thead>\n        <tr>\n          <!--if show weeks-->\n          <th *ngIf=\"options && options.showWeekNumbers\"></th>\n          <th *ngFor=\"let weekday of calendar.weekdays; let i = index\"\n              aria-label=\"weekday\">{{ calendar.weekdays[i] }}\n          </th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let week of calendar.weeks; let i = index\">\n          <td class=\"week\" [class.active-week]=\"isWeekHovered\"  *ngIf=\"options && options.showWeekNumbers\">\n            <span *ngIf=\"isiOS\" (click)=\"selectWeek(week)\">{{ calendar.weekNumbers[i] }}</span>\n            <span *ngIf=\"!isiOS\"\n                (click)=\"selectWeek(week)\"\n                (mouseenter)=\"weekHoverHandler(week, true)\"\n                (mouseleave)=\"weekHoverHandler(week, false)\">{{ calendar.weekNumbers[i] }}</span>\n          </td>\n          <td *ngFor=\"let day of week.days\" role=\"gridcell\">\n\n            <!-- When we want to show tooltips for dates -->\n            <span *ngIf=\"!isiOS && isShowTooltip\" bsDatepickerDayDecorator\n                [day]=\"day\"\n                (click)=\"selectDay(day)\"\n                tooltip=\"{{day.tooltipText}}\"\n                (mouseenter)=\"hoverDay(day, true)\"\n                (mouseleave)=\"hoverDay(day, false)\">{{ day.label }} 3</span>\n            <!-- When tooltips for dates are disabled -->\n            <span *ngIf=\"!isiOS && !isShowTooltip\" bsDatepickerDayDecorator\n                  [day]=\"day\"\n                  (click)=\"selectDay(day)\"\n                  (mouseenter)=\"hoverDay(day, true)\"\n                  (mouseleave)=\"hoverDay(day, false)\">{{ day.label }} 2</span>\n\n            <!-- For mobile iOS view, tooltips are not needed -->\n            <span *ngIf=\"isiOS\" bsDatepickerDayDecorator\n                  [day]=\"day\"\n                  (click)=\"selectDay(day)\">{{ day.label }} 1</span>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n\n    </bs-calendar-layout>\n  "
                    }]
            }], function () { return [{ type: BsDatepickerConfig }]; }, { calendar: [{
                    type: i0.Input
                }], options: [{
                    type: i0.Input
                }], onNavigate: [{
                    type: i0.Output
                }], onViewMode: [{
                    type: i0.Output
                }], onSelect: [{
                    type: i0.Output
                }], onHover: [{
                    type: i0.Output
                }], onHoverWeek: [{
                    type: i0.Output
                }] });
    })();

    function BsMonthCalendarViewComponent_tr_4_td_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r5_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "td", 4);
            i0.ɵɵlistener("click", function BsMonthCalendarViewComponent_tr_4_td_1_Template_td_click_0_listener() { i0.ɵɵrestoreView(_r5_1); var month_r3 = ctx.$implicit; var ctx_r4 = i0.ɵɵnextContext(2); return ctx_r4.viewMonth(month_r3); })("mouseenter", function BsMonthCalendarViewComponent_tr_4_td_1_Template_td_mouseenter_0_listener() { i0.ɵɵrestoreView(_r5_1); var month_r3 = ctx.$implicit; var ctx_r6 = i0.ɵɵnextContext(2); return ctx_r6.hoverMonth(month_r3, true); })("mouseleave", function BsMonthCalendarViewComponent_tr_4_td_1_Template_td_mouseleave_0_listener() { i0.ɵɵrestoreView(_r5_1); var month_r3 = ctx.$implicit; var ctx_r7 = i0.ɵɵnextContext(2); return ctx_r7.hoverMonth(month_r3, false); });
            i0.ɵɵelementStart(1, "span");
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var month_r3 = ctx.$implicit;
            i0.ɵɵclassProp("disabled", month_r3.isDisabled)("is-highlighted", month_r3.isHovered);
            i0.ɵɵadvance(1);
            i0.ɵɵclassProp("selected", month_r3.isSelected);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(month_r3.label);
        }
    }
    function BsMonthCalendarViewComponent_tr_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "tr");
            i0.ɵɵtemplate(1, BsMonthCalendarViewComponent_tr_4_td_1_Template, 3, 7, "td", 3);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var row_r1 = ctx.$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", row_r1);
        }
    }
    var BsMonthCalendarViewComponent = /** @class */ (function () {
        function BsMonthCalendarViewComponent() {
            this.onNavigate = new i0.EventEmitter();
            this.onViewMode = new i0.EventEmitter();
            this.onSelect = new i0.EventEmitter();
            this.onHover = new i0.EventEmitter();
        }
        BsMonthCalendarViewComponent.prototype.navigateTo = function (event) {
            var step = BsNavigationDirection.DOWN === event ? -1 : 1;
            this.onNavigate.emit({ step: { year: step } });
        };
        BsMonthCalendarViewComponent.prototype.viewMonth = function (month) {
            this.onSelect.emit(month);
        };
        BsMonthCalendarViewComponent.prototype.hoverMonth = function (cell, isHovered) {
            this.onHover.emit({ cell: cell, isHovered: isHovered });
        };
        BsMonthCalendarViewComponent.prototype.changeViewMode = function (event) {
            this.onViewMode.emit(event);
        };
        return BsMonthCalendarViewComponent;
    }());
    BsMonthCalendarViewComponent.ɵfac = function BsMonthCalendarViewComponent_Factory(t) { return new (t || BsMonthCalendarViewComponent)(); };
    BsMonthCalendarViewComponent.ɵcmp = i0.ɵɵdefineComponent({ type: BsMonthCalendarViewComponent, selectors: [["bs-month-calendar-view"]], inputs: { calendar: "calendar" }, outputs: { onNavigate: "onNavigate", onViewMode: "onViewMode", onSelect: "onSelect", onHover: "onHover" }, decls: 5, vars: 2, consts: [[3, "calendar", "onNavigate", "onViewMode"], ["role", "grid", 1, "months"], [4, "ngFor", "ngForOf"], ["role", "gridcell", 3, "disabled", "is-highlighted", "click", "mouseenter", "mouseleave", 4, "ngFor", "ngForOf"], ["role", "gridcell", 3, "click", "mouseenter", "mouseleave"]], template: function BsMonthCalendarViewComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "bs-calendar-layout");
                i0.ɵɵelementStart(1, "bs-datepicker-navigation-view", 0);
                i0.ɵɵlistener("onNavigate", function BsMonthCalendarViewComponent_Template_bs_datepicker_navigation_view_onNavigate_1_listener($event) { return ctx.navigateTo($event); })("onViewMode", function BsMonthCalendarViewComponent_Template_bs_datepicker_navigation_view_onViewMode_1_listener($event) { return ctx.changeViewMode($event); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(2, "table", 1);
                i0.ɵɵelementStart(3, "tbody");
                i0.ɵɵtemplate(4, BsMonthCalendarViewComponent_tr_4_Template, 2, 1, "tr", 2);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("calendar", ctx.calendar);
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("ngForOf", ctx.calendar == null ? null : ctx.calendar.months);
            }
        }, directives: [BsCalendarLayoutComponent, BsDatepickerNavigationViewComponent, i6.NgForOf], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BsMonthCalendarViewComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'bs-month-calendar-view',
                        template: "\n    <bs-calendar-layout>\n      <bs-datepicker-navigation-view\n        [calendar]=\"calendar\"\n        (onNavigate)=\"navigateTo($event)\"\n        (onViewMode)=\"changeViewMode($event)\"\n      ></bs-datepicker-navigation-view>\n\n      <table role=\"grid\" class=\"months\">\n        <tbody>\n        <tr *ngFor=\"let row of calendar?.months\">\n          <td *ngFor=\"let month of row\" role=\"gridcell\"\n              (click)=\"viewMonth(month)\"\n              (mouseenter)=\"hoverMonth(month, true)\"\n              (mouseleave)=\"hoverMonth(month, false)\"\n              [class.disabled]=\"month.isDisabled\"\n              [class.is-highlighted]=\"month.isHovered\">\n            <span [class.selected]=\"month.isSelected\">{{ month.label }}</span>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n    </bs-calendar-layout>\n  "
                    }]
            }], null, { calendar: [{
                    type: i0.Input
                }], onNavigate: [{
                    type: i0.Output
                }], onViewMode: [{
                    type: i0.Output
                }], onSelect: [{
                    type: i0.Output
                }], onHover: [{
                    type: i0.Output
                }] });
    })();

    function BsYearsCalendarViewComponent_tr_4_td_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r5_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "td", 4);
            i0.ɵɵlistener("click", function BsYearsCalendarViewComponent_tr_4_td_1_Template_td_click_0_listener() { i0.ɵɵrestoreView(_r5_1); var year_r3 = ctx.$implicit; var ctx_r4 = i0.ɵɵnextContext(2); return ctx_r4.viewYear(year_r3); })("mouseenter", function BsYearsCalendarViewComponent_tr_4_td_1_Template_td_mouseenter_0_listener() { i0.ɵɵrestoreView(_r5_1); var year_r3 = ctx.$implicit; var ctx_r6 = i0.ɵɵnextContext(2); return ctx_r6.hoverYear(year_r3, true); })("mouseleave", function BsYearsCalendarViewComponent_tr_4_td_1_Template_td_mouseleave_0_listener() { i0.ɵɵrestoreView(_r5_1); var year_r3 = ctx.$implicit; var ctx_r7 = i0.ɵɵnextContext(2); return ctx_r7.hoverYear(year_r3, false); });
            i0.ɵɵelementStart(1, "span");
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var year_r3 = ctx.$implicit;
            i0.ɵɵclassProp("disabled", year_r3.isDisabled)("is-highlighted", year_r3.isHovered);
            i0.ɵɵadvance(1);
            i0.ɵɵclassProp("selected", year_r3.isSelected);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(year_r3.label);
        }
    }
    function BsYearsCalendarViewComponent_tr_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "tr");
            i0.ɵɵtemplate(1, BsYearsCalendarViewComponent_tr_4_td_1_Template, 3, 7, "td", 3);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var row_r1 = ctx.$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", row_r1);
        }
    }
    var BsYearsCalendarViewComponent = /** @class */ (function () {
        function BsYearsCalendarViewComponent() {
            this.onNavigate = new i0.EventEmitter();
            this.onViewMode = new i0.EventEmitter();
            this.onSelect = new i0.EventEmitter();
            this.onHover = new i0.EventEmitter();
        }
        BsYearsCalendarViewComponent.prototype.navigateTo = function (event) {
            var step = BsNavigationDirection.DOWN === event ? -1 : 1;
            this.onNavigate.emit({ step: { year: step * yearsPerCalendar } });
        };
        BsYearsCalendarViewComponent.prototype.viewYear = function (year) {
            this.onSelect.emit(year);
        };
        BsYearsCalendarViewComponent.prototype.hoverYear = function (cell, isHovered) {
            this.onHover.emit({ cell: cell, isHovered: isHovered });
        };
        BsYearsCalendarViewComponent.prototype.changeViewMode = function (event) {
            this.onViewMode.emit(event);
        };
        return BsYearsCalendarViewComponent;
    }());
    BsYearsCalendarViewComponent.ɵfac = function BsYearsCalendarViewComponent_Factory(t) { return new (t || BsYearsCalendarViewComponent)(); };
    BsYearsCalendarViewComponent.ɵcmp = i0.ɵɵdefineComponent({ type: BsYearsCalendarViewComponent, selectors: [["bs-years-calendar-view"]], inputs: { calendar: "calendar" }, outputs: { onNavigate: "onNavigate", onViewMode: "onViewMode", onSelect: "onSelect", onHover: "onHover" }, decls: 5, vars: 2, consts: [[3, "calendar", "onNavigate", "onViewMode"], ["role", "grid", 1, "years"], [4, "ngFor", "ngForOf"], ["role", "gridcell", 3, "disabled", "is-highlighted", "click", "mouseenter", "mouseleave", 4, "ngFor", "ngForOf"], ["role", "gridcell", 3, "click", "mouseenter", "mouseleave"]], template: function BsYearsCalendarViewComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "bs-calendar-layout");
                i0.ɵɵelementStart(1, "bs-datepicker-navigation-view", 0);
                i0.ɵɵlistener("onNavigate", function BsYearsCalendarViewComponent_Template_bs_datepicker_navigation_view_onNavigate_1_listener($event) { return ctx.navigateTo($event); })("onViewMode", function BsYearsCalendarViewComponent_Template_bs_datepicker_navigation_view_onViewMode_1_listener($event) { return ctx.changeViewMode($event); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(2, "table", 1);
                i0.ɵɵelementStart(3, "tbody");
                i0.ɵɵtemplate(4, BsYearsCalendarViewComponent_tr_4_Template, 2, 1, "tr", 2);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("calendar", ctx.calendar);
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("ngForOf", ctx.calendar == null ? null : ctx.calendar.years);
            }
        }, directives: [BsCalendarLayoutComponent, BsDatepickerNavigationViewComponent, i6.NgForOf], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BsYearsCalendarViewComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'bs-years-calendar-view',
                        template: "\n    <bs-calendar-layout>\n      <bs-datepicker-navigation-view\n        [calendar]=\"calendar\"\n        (onNavigate)=\"navigateTo($event)\"\n        (onViewMode)=\"changeViewMode($event)\"\n      ></bs-datepicker-navigation-view>\n\n      <table role=\"grid\" class=\"years\">\n        <tbody>\n        <tr *ngFor=\"let row of calendar?.years\">\n          <td *ngFor=\"let year of row\" role=\"gridcell\"\n              (click)=\"viewYear(year)\"\n              (mouseenter)=\"hoverYear(year, true)\"\n              (mouseleave)=\"hoverYear(year, false)\"\n              [class.disabled]=\"year.isDisabled\"\n              [class.is-highlighted]=\"year.isHovered\">\n            <span [class.selected]=\"year.isSelected\">{{ year.label }}</span>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n    </bs-calendar-layout>\n  "
                    }]
            }], null, { calendar: [{
                    type: i0.Input
                }], onNavigate: [{
                    type: i0.Output
                }], onViewMode: [{
                    type: i0.Output
                }], onSelect: [{
                    type: i0.Output
                }], onHover: [{
                    type: i0.Output
                }] });
    })();

    function BsCustomDatesViewComponent_button_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r3_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 2);
            i0.ɵɵlistener("click", function BsCustomDatesViewComponent_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r3_1); var range_r1 = ctx.$implicit; var ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.selectFromRanges(range_r1); });
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var range_r1 = ctx.$implicit;
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵclassProp("selected", range_r1.value === ctx_r0.selectedRange);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", range_r1.label, " ");
        }
    }
    var BsCustomDatesViewComponent = /** @class */ (function () {
        function BsCustomDatesViewComponent() {
            this.onSelect = new i0.EventEmitter();
        }
        BsCustomDatesViewComponent.prototype.selectFromRanges = function (range) {
            this.onSelect.emit(range);
        };
        return BsCustomDatesViewComponent;
    }());
    BsCustomDatesViewComponent.ɵfac = function BsCustomDatesViewComponent_Factory(t) { return new (t || BsCustomDatesViewComponent)(); };
    BsCustomDatesViewComponent.ɵcmp = i0.ɵɵdefineComponent({ type: BsCustomDatesViewComponent, selectors: [["bs-custom-date-view"]], inputs: { ranges: "ranges", selectedRange: "selectedRange", customRangeLabel: "customRangeLabel" }, outputs: { onSelect: "onSelect" }, decls: 2, vars: 1, consts: [[1, "bs-datepicker-predefined-btns"], ["type", "button", "class", "btn", 3, "selected", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", 3, "click"]], template: function BsCustomDatesViewComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵtemplate(1, BsCustomDatesViewComponent_button_1_Template, 2, 3, "button", 1);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngForOf", ctx.ranges);
            }
        }, directives: [i6.NgForOf], encapsulation: 2, changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BsCustomDatesViewComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'bs-custom-date-view',
                        template: "\n    <div class=\"bs-datepicker-predefined-btns\">\n      <button *ngFor=\"let range of ranges\"\n        type=\"button\"\n        class=\"btn\"\n        (click)=\"selectFromRanges(range)\"\n        [class.selected]=\"range.value === selectedRange\">\n        {{ range.label }}\n      </button>\n    </div>\n  ",
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }], null, { ranges: [{
                    type: i0.Input
                }], selectedRange: [{
                    type: i0.Input
                }], customRangeLabel: [{
                    type: i0.Input
                }], onSelect: [{
                    type: i0.Output
                }] });
    })();

    function BsDatepickerContainerComponent_div_0_div_4_bs_days_calendar_view_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r10_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "bs-days-calendar-view", 9);
            i0.ɵɵlistener("onNavigate", function BsDatepickerContainerComponent_div_0_div_4_bs_days_calendar_view_1_Template_bs_days_calendar_view_onNavigate_0_listener($event) { i0.ɵɵrestoreView(_r10_1); var ctx_r9 = i0.ɵɵnextContext(3); return ctx_r9.navigateTo($event); })("onViewMode", function BsDatepickerContainerComponent_div_0_div_4_bs_days_calendar_view_1_Template_bs_days_calendar_view_onViewMode_0_listener($event) { i0.ɵɵrestoreView(_r10_1); var ctx_r11 = i0.ɵɵnextContext(3); return ctx_r11.setViewMode($event); })("onHover", function BsDatepickerContainerComponent_div_0_div_4_bs_days_calendar_view_1_Template_bs_days_calendar_view_onHover_0_listener($event) { i0.ɵɵrestoreView(_r10_1); var ctx_r12 = i0.ɵɵnextContext(3); return ctx_r12.dayHoverHandler($event); })("onHoverWeek", function BsDatepickerContainerComponent_div_0_div_4_bs_days_calendar_view_1_Template_bs_days_calendar_view_onHoverWeek_0_listener($event) { i0.ɵɵrestoreView(_r10_1); var ctx_r13 = i0.ɵɵnextContext(3); return ctx_r13.weekHoverHandler($event); })("onSelect", function BsDatepickerContainerComponent_div_0_div_4_bs_days_calendar_view_1_Template_bs_days_calendar_view_onSelect_0_listener($event) { i0.ɵɵrestoreView(_r10_1); var ctx_r14 = i0.ɵɵnextContext(3); return ctx_r14.daySelectHandler($event); });
            i0.ɵɵpipe(1, "async");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var calendar_r8 = ctx.$implicit;
            var ctx_r7 = i0.ɵɵnextContext(3);
            i0.ɵɵclassProp("bs-datepicker-multiple", ctx_r7.multipleCalendars);
            i0.ɵɵproperty("calendar", calendar_r8)("options", i0.ɵɵpipeBind1(1, 4, ctx_r7.options$));
        }
    }
    function BsDatepickerContainerComponent_div_0_div_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 7);
            i0.ɵɵtemplate(1, BsDatepickerContainerComponent_div_0_div_4_bs_days_calendar_view_1_Template, 2, 6, "bs-days-calendar-view", 8);
            i0.ɵɵpipe(2, "async");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(2, 1, ctx_r1.daysCalendar$));
        }
    }
    function BsDatepickerContainerComponent_div_0_div_5_bs_month_calendar_view_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r18_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "bs-month-calendar-view", 11);
            i0.ɵɵlistener("onNavigate", function BsDatepickerContainerComponent_div_0_div_5_bs_month_calendar_view_1_Template_bs_month_calendar_view_onNavigate_0_listener($event) { i0.ɵɵrestoreView(_r18_1); var ctx_r17 = i0.ɵɵnextContext(3); return ctx_r17.navigateTo($event); })("onViewMode", function BsDatepickerContainerComponent_div_0_div_5_bs_month_calendar_view_1_Template_bs_month_calendar_view_onViewMode_0_listener($event) { i0.ɵɵrestoreView(_r18_1); var ctx_r19 = i0.ɵɵnextContext(3); return ctx_r19.setViewMode($event); })("onHover", function BsDatepickerContainerComponent_div_0_div_5_bs_month_calendar_view_1_Template_bs_month_calendar_view_onHover_0_listener($event) { i0.ɵɵrestoreView(_r18_1); var ctx_r20 = i0.ɵɵnextContext(3); return ctx_r20.monthHoverHandler($event); })("onSelect", function BsDatepickerContainerComponent_div_0_div_5_bs_month_calendar_view_1_Template_bs_month_calendar_view_onSelect_0_listener($event) { i0.ɵɵrestoreView(_r18_1); var ctx_r21 = i0.ɵɵnextContext(3); return ctx_r21.monthSelectHandler($event); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var calendar_r16 = ctx.$implicit;
            var ctx_r15 = i0.ɵɵnextContext(3);
            i0.ɵɵclassProp("bs-datepicker-multiple", ctx_r15.multipleCalendars);
            i0.ɵɵproperty("calendar", calendar_r16);
        }
    }
    function BsDatepickerContainerComponent_div_0_div_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 7);
            i0.ɵɵtemplate(1, BsDatepickerContainerComponent_div_0_div_5_bs_month_calendar_view_1_Template, 1, 3, "bs-month-calendar-view", 10);
            i0.ɵɵpipe(2, "async");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(2, 1, ctx_r2.monthsCalendar));
        }
    }
    function BsDatepickerContainerComponent_div_0_div_6_bs_years_calendar_view_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r25_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "bs-years-calendar-view", 11);
            i0.ɵɵlistener("onNavigate", function BsDatepickerContainerComponent_div_0_div_6_bs_years_calendar_view_1_Template_bs_years_calendar_view_onNavigate_0_listener($event) { i0.ɵɵrestoreView(_r25_1); var ctx_r24 = i0.ɵɵnextContext(3); return ctx_r24.navigateTo($event); })("onViewMode", function BsDatepickerContainerComponent_div_0_div_6_bs_years_calendar_view_1_Template_bs_years_calendar_view_onViewMode_0_listener($event) { i0.ɵɵrestoreView(_r25_1); var ctx_r26 = i0.ɵɵnextContext(3); return ctx_r26.setViewMode($event); })("onHover", function BsDatepickerContainerComponent_div_0_div_6_bs_years_calendar_view_1_Template_bs_years_calendar_view_onHover_0_listener($event) { i0.ɵɵrestoreView(_r25_1); var ctx_r27 = i0.ɵɵnextContext(3); return ctx_r27.yearHoverHandler($event); })("onSelect", function BsDatepickerContainerComponent_div_0_div_6_bs_years_calendar_view_1_Template_bs_years_calendar_view_onSelect_0_listener($event) { i0.ɵɵrestoreView(_r25_1); var ctx_r28 = i0.ɵɵnextContext(3); return ctx_r28.yearSelectHandler($event); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var calendar_r23 = ctx.$implicit;
            var ctx_r22 = i0.ɵɵnextContext(3);
            i0.ɵɵclassProp("bs-datepicker-multiple", ctx_r22.multipleCalendars);
            i0.ɵɵproperty("calendar", calendar_r23);
        }
    }
    function BsDatepickerContainerComponent_div_0_div_6_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 7);
            i0.ɵɵtemplate(1, BsDatepickerContainerComponent_div_0_div_6_bs_years_calendar_view_1_Template, 1, 3, "bs-years-calendar-view", 10);
            i0.ɵɵpipe(2, "async");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r3 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(2, 1, ctx_r3.yearsCalendar));
        }
    }
    function BsDatepickerContainerComponent_div_0_div_7_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 12);
            i0.ɵɵelementStart(1, "button", 13);
            i0.ɵɵtext(2, "Apply");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "button", 14);
            i0.ɵɵtext(4, "Cancel");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
    }
    function BsDatepickerContainerComponent_div_0_div_8_div_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r32_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 17);
            i0.ɵɵelementStart(1, "button", 18);
            i0.ɵɵlistener("click", function BsDatepickerContainerComponent_div_0_div_8_div_1_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r32_1); var ctx_r31 = i0.ɵɵnextContext(3); return ctx_r31.setToday(); });
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r29 = i0.ɵɵnextContext(3);
            i0.ɵɵclassProp("today-left", ctx_r29.todayPos === "left")("today-right", ctx_r29.todayPos === "right")("today-center", ctx_r29.todayPos === "center");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx_r29.todayBtnLbl);
        }
    }
    function BsDatepickerContainerComponent_div_0_div_8_div_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r34_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 19);
            i0.ɵɵelementStart(1, "button", 18);
            i0.ɵɵlistener("click", function BsDatepickerContainerComponent_div_0_div_8_div_2_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r34_1); var ctx_r33 = i0.ɵɵnextContext(3); return ctx_r33.clearDate(); });
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r30 = i0.ɵɵnextContext(3);
            i0.ɵɵclassProp("clear-left", ctx_r30.clearPos === "left")("clear-right", ctx_r30.clearPos === "right")("clear-center", ctx_r30.clearPos === "center");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx_r30.clearBtnLbl);
        }
    }
    function BsDatepickerContainerComponent_div_0_div_8_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 12);
            i0.ɵɵtemplate(1, BsDatepickerContainerComponent_div_0_div_8_div_1_Template, 3, 7, "div", 15);
            i0.ɵɵtemplate(2, BsDatepickerContainerComponent_div_0_div_8_div_2_Template, 3, 7, "div", 16);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r5 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r5.showTodayBtn);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r5.showClearBtn);
        }
    }
    function BsDatepickerContainerComponent_div_0_div_9_Template(rf, ctx) {
        if (rf & 1) {
            var _r36_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 20);
            i0.ɵɵelementStart(1, "bs-custom-date-view", 21);
            i0.ɵɵlistener("onSelect", function BsDatepickerContainerComponent_div_0_div_9_Template_bs_custom_date_view_onSelect_1_listener($event) { i0.ɵɵrestoreView(_r36_1); var ctx_r35 = i0.ɵɵnextContext(2); return ctx_r35.setRangeOnCalendar($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r6 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("selectedRange", ctx_r6.chosenRange)("ranges", ctx_r6.customRanges)("customRangeLabel", ctx_r6.customRangeBtnLbl);
        }
    }
    function BsDatepickerContainerComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
            var _r38_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 1);
            i0.ɵɵelementStart(1, "div", 2);
            i0.ɵɵlistener("@datepickerAnimation.done", function BsDatepickerContainerComponent_div_0_Template_div_animation_datepickerAnimation_done_1_listener() { i0.ɵɵrestoreView(_r38_1); var ctx_r37 = i0.ɵɵnextContext(); return ctx_r37.positionServiceEnable(); });
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
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
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
        }
    }
    var BsDatepickerContainerComponent = /** @class */ (function (_super) {
        __extends(BsDatepickerContainerComponent, _super);
        function BsDatepickerContainerComponent(_renderer, _config, _store, _element, _actions, _effects, _positionService) {
            var _this = _super.call(this) || this;
            _this._config = _config;
            _this._store = _store;
            _this._element = _element;
            _this._actions = _actions;
            _this._positionService = _positionService;
            _this.valueChange = new i0.EventEmitter();
            _this.animationState = 'void';
            _this._subs = [];
            _this._effects = _effects;
            _renderer.setStyle(_element.nativeElement, 'display', 'block');
            _renderer.setStyle(_element.nativeElement, 'position', 'absolute');
            return _this;
        }
        Object.defineProperty(BsDatepickerContainerComponent.prototype, "value", {
            set: function (value) {
                var _a;
                (_a = this._effects) === null || _a === void 0 ? void 0 : _a.setValue(value);
            },
            enumerable: false,
            configurable: true
        });
        BsDatepickerContainerComponent.prototype.ngOnInit = function () {
            var _this = this;
            var _a, _b;
            this._positionService.setOptions({
                modifiers: { flip: { enabled: this._config.adaptivePosition } },
                allowedPositions: ['top', 'bottom']
            });
            (_a = this._positionService.event$) === null || _a === void 0 ? void 0 : _a.pipe(operators.take(1)).subscribe(function () {
                _this._positionService.disable();
                if (_this._config.isAnimated) {
                    _this.animationState = _this.isTopPosition ? 'animated-up' : 'animated-down';
                    return;
                }
                _this.animationState = 'unanimated';
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
                .select(function (state) { return state.selectedDate; })
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                .subscribe(function (date) { return _this.valueChange.emit(date); }));
            this._store.dispatch(this._actions.changeViewMode(this._config.startView));
        };
        Object.defineProperty(BsDatepickerContainerComponent.prototype, "isTopPosition", {
            get: function () {
                return this._element.nativeElement.classList.contains('top');
            },
            enumerable: false,
            configurable: true
        });
        BsDatepickerContainerComponent.prototype.positionServiceEnable = function () {
            this._positionService.enable();
        };
        BsDatepickerContainerComponent.prototype.daySelectHandler = function (day) {
            if (!day) {
                return;
            }
            var isDisabled = this.isOtherMonthsActive ? day.isDisabled : (day.isOtherMonth || day.isDisabled);
            if (isDisabled) {
                return;
            }
            this._store.dispatch(this._actions.select(day.date));
        };
        BsDatepickerContainerComponent.prototype.monthSelectHandler = function (day) {
            if (!day || day.isDisabled) {
                return;
            }
            this._store.dispatch(this._actions.navigateTo({
                unit: {
                    month: chronos.getMonth(day.date),
                    year: chronos.getFullYear(day.date)
                },
                viewMode: 'day'
            }));
        };
        BsDatepickerContainerComponent.prototype.yearSelectHandler = function (day) {
            if (!day || day.isDisabled) {
                return;
            }
            this._store.dispatch(this._actions.navigateTo({
                unit: {
                    year: chronos.getFullYear(day.date)
                },
                viewMode: 'month'
            }));
        };
        BsDatepickerContainerComponent.prototype.setToday = function () {
            this._store.dispatch(this._actions.select(new Date()));
        };
        BsDatepickerContainerComponent.prototype.clearDate = function () {
            this._store.dispatch(this._actions.select(undefined));
        };
        BsDatepickerContainerComponent.prototype.ngOnDestroy = function () {
            var e_1, _c;
            var _a;
            try {
                for (var _d = __values(this._subs), _e = _d.next(); !_e.done; _e = _d.next()) {
                    var sub = _e.value;
                    sub.unsubscribe();
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_e && !_e.done && (_c = _d.return)) _c.call(_d);
                }
                finally { if (e_1) throw e_1.error; }
            }
            (_a = this._effects) === null || _a === void 0 ? void 0 : _a.destroy();
        };
        return BsDatepickerContainerComponent;
    }(BsDatepickerAbstractComponent));
    BsDatepickerContainerComponent.ɵfac = function BsDatepickerContainerComponent_Factory(t) { return new (t || BsDatepickerContainerComponent)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(BsDatepickerConfig), i0.ɵɵdirectiveInject(BsDatepickerStore), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(BsDatepickerActions), i0.ɵɵdirectiveInject(BsDatepickerEffects), i0.ɵɵdirectiveInject(i5.PositioningService)); };
    BsDatepickerContainerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: BsDatepickerContainerComponent, selectors: [["bs-datepicker-container"]], hostAttrs: ["role", "dialog", "aria-label", "calendar", 1, "bottom"], hostBindings: function BsDatepickerContainerComponent_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵlistener("click", function BsDatepickerContainerComponent_click_HostBindingHandler($event) { return ctx._stopPropagation($event); });
            }
        }, features: [i0.ɵɵProvidersFeature([BsDatepickerStore, BsDatepickerEffects]), i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 3, consts: [["class", "bs-datepicker", 3, "ngClass", 4, "ngIf"], [1, "bs-datepicker", 3, "ngClass"], [1, "bs-datepicker-container"], ["role", "application", 1, "bs-calendar-container", 3, "ngSwitch"], ["class", "bs-media-container", 4, "ngSwitchCase"], ["class", "bs-datepicker-buttons", 4, "ngIf"], ["class", "bs-datepicker-custom-range", 4, "ngIf"], [1, "bs-media-container"], [3, "bs-datepicker-multiple", "calendar", "options", "onNavigate", "onViewMode", "onHover", "onHoverWeek", "onSelect", 4, "ngFor", "ngForOf"], [3, "calendar", "options", "onNavigate", "onViewMode", "onHover", "onHoverWeek", "onSelect"], [3, "bs-datepicker-multiple", "calendar", "onNavigate", "onViewMode", "onHover", "onSelect", 4, "ngFor", "ngForOf"], [3, "calendar", "onNavigate", "onViewMode", "onHover", "onSelect"], [1, "bs-datepicker-buttons"], ["type", "button", 1, "btn", "btn-success"], ["type", "button", 1, "btn", "btn-default"], ["class", "btn-today-wrapper", 3, "today-left", "today-right", "today-center", 4, "ngIf"], ["class", "btn-clear-wrapper", 3, "clear-left", "clear-right", "clear-center", 4, "ngIf"], [1, "btn-today-wrapper"], [1, "btn", "btn-success", 3, "click"], [1, "btn-clear-wrapper"], [1, "bs-datepicker-custom-range"], [3, "selectedRange", "ranges", "customRangeLabel", "onSelect"]], template: function BsDatepickerContainerComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, BsDatepickerContainerComponent_div_0_Template, 10, 11, "div", 0);
                i0.ɵɵpipe(1, "async");
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 1, ctx.viewMode));
            }
        }, directives: [i6.NgIf, i6.NgClass, i6.NgSwitch, i6.NgSwitchCase, i6.NgForOf, BsDaysCalendarViewComponent, BsMonthCalendarViewComponent, BsYearsCalendarViewComponent, BsCustomDatesViewComponent], pipes: [i6.AsyncPipe], encapsulation: 2, data: { animation: [datepickerAnimation] } });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BsDatepickerContainerComponent, [{
                type: i0.Component,
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
            }], function () { return [{ type: i0.Renderer2 }, { type: BsDatepickerConfig }, { type: BsDatepickerStore }, { type: i0.ElementRef }, { type: BsDatepickerActions }, { type: BsDatepickerEffects }, { type: i5.PositioningService }]; }, null);
    })();

    var BsDatepickerDirective = /** @class */ (function () {
        function BsDatepickerDirective(_config, _elementRef, _renderer, _viewContainerRef, cis) {
            this._config = _config;
            this._elementRef = _elementRef;
            this._renderer = _renderer;
            /**
             * Placement of a datepicker. Accepts: "top", "bottom", "left", "right"
             */
            this.placement = 'bottom';
            /**
             * Specifies events that should trigger. Supports a space separated list of
             * event names.
             */
            this.triggers = 'click';
            /**
             * Close datepicker on outside click
             */
            this.outsideClick = true;
            /**
             * A selector specifying the element the datepicker should be appended to.
             */
            this.container = 'body';
            this.outsideEsc = true;
            this.isDestroy$ = new rxjs.Subject();
            /**
             * Indicates whether datepicker's content is enabled or not
             */
            this.isDisabled = false;
            /**
             * Emits when datepicker value has been changed
             */
            this.bsValueChange = new i0.EventEmitter();
            this._subs = [];
            this._dateInputFormat$ = new rxjs.Subject();
            // todo: assign only subset of fields
            Object.assign(this, this._config);
            this._datepicker = cis.createLoader(_elementRef, _viewContainerRef, _renderer);
            this.onShown = this._datepicker.onShown;
            this.onHidden = this._datepicker.onHidden;
            this.isOpen$ = new rxjs.BehaviorSubject(this.isOpen);
        }
        Object.defineProperty(BsDatepickerDirective.prototype, "isOpen", {
            /**
             * Returns whether or not the datepicker is currently being shown
             */
            get: function () {
                return this._datepicker.isShown;
            },
            set: function (value) {
                this.isOpen$.next(value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BsDatepickerDirective.prototype, "bsValue", {
            /**
             * Initial value of datepicker
             */
            set: function (value) {
                if (this._bsValue && value && this._bsValue.getTime() === value.getTime()) {
                    return;
                }
                if (!this._bsValue && value) {
                    var now = new Date();
                    value.setMilliseconds(now.getMilliseconds());
                    value.setSeconds(now.getSeconds());
                    value.setMinutes(now.getMinutes());
                    value.setHours(now.getHours());
                }
                this._bsValue = value;
                this.bsValueChange.emit(value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BsDatepickerDirective.prototype, "dateInputFormat$", {
            get: function () {
                return this._dateInputFormat$;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BsDatepickerDirective.prototype, "bsConfig", {
            get: function () {
                return this._bsConfig;
            },
            /**
             * Config object for datepicker
             */
            set: function (bsConfig) {
                this._bsConfig = bsConfig;
                this.setConfig();
                this._dateInputFormat$.next(bsConfig && bsConfig.dateInputFormat);
            },
            enumerable: false,
            configurable: true
        });
        BsDatepickerDirective.prototype.ngOnInit = function () {
            var _this = this;
            this._datepicker.listen({
                outsideClick: this.outsideClick,
                outsideEsc: this.outsideEsc,
                triggers: this.triggers,
                show: function () { return _this.show(); }
            });
            this.setConfig();
        };
        BsDatepickerDirective.prototype.ngOnChanges = function (changes) {
            if (!this._datepickerRef || !this._datepickerRef.instance) {
                return;
            }
            if (changes.minDate) {
                this._datepickerRef.instance.minDate = this.minDate;
            }
            if (changes.maxDate) {
                this._datepickerRef.instance.maxDate = this.maxDate;
            }
            if (changes.daysDisabled) {
                this._datepickerRef.instance.daysDisabled = this.daysDisabled;
            }
            if (changes.datesDisabled) {
                this._datepickerRef.instance.datesDisabled = this.datesDisabled;
            }
            if (changes.datesEnabled) {
                this._datepickerRef.instance.datesEnabled = this.datesEnabled;
            }
            if (changes.isDisabled) {
                this._datepickerRef.instance.isDisabled = this.isDisabled;
            }
            if (changes.dateCustomClasses) {
                this._datepickerRef.instance.dateCustomClasses = this.dateCustomClasses;
            }
            if (changes.dateTooltipTexts) {
                this._datepickerRef.instance.dateTooltipTexts = this.dateTooltipTexts;
            }
        };
        BsDatepickerDirective.prototype.ngAfterViewInit = function () {
            var _this = this;
            this.isOpen$.pipe(operators.filter(function (isOpen) { return isOpen !== _this.isOpen; }), operators.takeUntil(this.isDestroy$))
                .subscribe(function () { return _this.toggle(); });
        };
        /**
         * Opens an element’s datepicker. This is considered a “manual” triggering of
         * the datepicker.
         */
        BsDatepickerDirective.prototype.show = function () {
            var _this = this;
            if (this._datepicker.isShown) {
                return;
            }
            this.setConfig();
            this._datepickerRef = this._datepicker
                .provide({ provide: BsDatepickerConfig, useValue: this._config })
                .attach(BsDatepickerContainerComponent)
                .to(this.container)
                .position({ attachment: this.placement })
                .show({ placement: this.placement });
            // if date changes from external source (model -> view)
            this._subs.push(this.bsValueChange.subscribe(function (value) {
                if (_this._datepickerRef) {
                    _this._datepickerRef.instance.value = value;
                }
            }));
            // if date changes from picker (view -> model)
            if (this._datepickerRef) {
                this._subs.push(this._datepickerRef.instance.valueChange.subscribe(function (value) {
                    _this.bsValue = value;
                    _this.hide();
                }));
            }
        };
        /**
         * Closes an element’s datepicker. This is considered a “manual” triggering of
         * the datepicker.
         */
        BsDatepickerDirective.prototype.hide = function () {
            var e_1, _a;
            if (this.isOpen) {
                this._datepicker.hide();
            }
            try {
                for (var _b = __values(this._subs), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var sub = _c.value;
                    sub.unsubscribe();
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            if (this._config.returnFocusToInput) {
                this._renderer.selectRootElement(this._elementRef.nativeElement).focus();
            }
        };
        /**
         * Toggles an element’s datepicker. This is considered a “manual” triggering
         * of the datepicker.
         */
        BsDatepickerDirective.prototype.toggle = function () {
            if (this.isOpen) {
                return this.hide();
            }
            this.show();
        };
        /**
         * Set config for datepicker
         */
        BsDatepickerDirective.prototype.setConfig = function () {
            this._config = Object.assign({}, this._config, this.bsConfig, {
                value: checkBsValue(this._bsValue, this.maxDate || this.bsConfig && this.bsConfig.maxDate),
                isDisabled: this.isDisabled,
                minDate: this.minDate || this.bsConfig && this.bsConfig.minDate,
                maxDate: this.maxDate || this.bsConfig && this.bsConfig.maxDate,
                daysDisabled: this.daysDisabled || this.bsConfig && this.bsConfig.daysDisabled,
                dateCustomClasses: this.dateCustomClasses || this.bsConfig && this.bsConfig.dateCustomClasses,
                dateTooltipTexts: this.dateTooltipTexts || this.bsConfig && this.bsConfig.dateTooltipTexts,
                datesDisabled: this.datesDisabled || this.bsConfig && this.bsConfig.datesDisabled,
                datesEnabled: this.datesEnabled || this.bsConfig && this.bsConfig.datesEnabled,
                minMode: this.minMode || this.bsConfig && this.bsConfig.minMode
            });
        };
        BsDatepickerDirective.prototype.ngOnDestroy = function () {
            this._datepicker.dispose();
            this.isOpen$.next(false);
            if (this.isDestroy$) {
                this.isDestroy$.next();
                this.isDestroy$.complete();
            }
        };
        return BsDatepickerDirective;
    }());
    BsDatepickerDirective.ɵfac = function BsDatepickerDirective_Factory(t) { return new (t || BsDatepickerDirective)(i0.ɵɵdirectiveInject(BsDatepickerConfig), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i2.ComponentLoaderFactory)); };
    BsDatepickerDirective.ɵdir = i0.ɵɵdefineDirective({ type: BsDatepickerDirective, selectors: [["", "bsDatepicker", ""]], inputs: { placement: "placement", triggers: "triggers", outsideClick: "outsideClick", container: "container", outsideEsc: "outsideEsc", isDisabled: "isDisabled", minDate: "minDate", maxDate: "maxDate", minMode: "minMode", daysDisabled: "daysDisabled", datesDisabled: "datesDisabled", datesEnabled: "datesEnabled", dateCustomClasses: "dateCustomClasses", dateTooltipTexts: "dateTooltipTexts", isOpen: "isOpen", bsValue: "bsValue", bsConfig: "bsConfig" }, outputs: { onShown: "onShown", onHidden: "onHidden", bsValueChange: "bsValueChange" }, exportAs: ["bsDatepicker"], features: [i0.ɵɵNgOnChangesFeature] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BsDatepickerDirective, [{
                type: i0.Directive,
                args: [{
                        selector: '[bsDatepicker]',
                        exportAs: 'bsDatepicker'
                    }]
            }], function () { return [{ type: BsDatepickerConfig }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i2.ComponentLoaderFactory }]; }, { placement: [{
                    type: i0.Input
                }], triggers: [{
                    type: i0.Input
                }], outsideClick: [{
                    type: i0.Input
                }], container: [{
                    type: i0.Input
                }], outsideEsc: [{
                    type: i0.Input
                }], onShown: [{
                    type: i0.Output
                }], onHidden: [{
                    type: i0.Output
                }], isDisabled: [{
                    type: i0.Input
                }], minDate: [{
                    type: i0.Input
                }], maxDate: [{
                    type: i0.Input
                }], minMode: [{
                    type: i0.Input
                }], daysDisabled: [{
                    type: i0.Input
                }], datesDisabled: [{
                    type: i0.Input
                }], datesEnabled: [{
                    type: i0.Input
                }], dateCustomClasses: [{
                    type: i0.Input
                }], dateTooltipTexts: [{
                    type: i0.Input
                }], bsValueChange: [{
                    type: i0.Output
                }], isOpen: [{
                    type: i0.Input
                }], bsValue: [{
                    type: i0.Input
                }], bsConfig: [{
                    type: i0.Input
                }] });
    })();

    var BsDatepickerInlineConfig = /** @class */ (function (_super) {
        __extends(BsDatepickerInlineConfig, _super);
        function BsDatepickerInlineConfig() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return BsDatepickerInlineConfig;
    }(BsDatepickerConfig));
    BsDatepickerInlineConfig.ɵfac = function BsDatepickerInlineConfig_Factory(t) { return ɵBsDatepickerInlineConfig_BaseFactory(t || BsDatepickerInlineConfig); };
    BsDatepickerInlineConfig.ɵprov = i0.ɵɵdefineInjectable({ token: BsDatepickerInlineConfig, factory: BsDatepickerInlineConfig.ɵfac, providedIn: 'root' });
    var ɵBsDatepickerInlineConfig_BaseFactory = /*@__PURE__*/ i0.ɵɵgetInheritedFactory(BsDatepickerInlineConfig);
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BsDatepickerInlineConfig, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], null, null);
    })();

    function BsDatepickerInlineContainerComponent_div_0_div_4_bs_days_calendar_view_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r10_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "bs-days-calendar-view", 9);
            i0.ɵɵlistener("onNavigate", function BsDatepickerInlineContainerComponent_div_0_div_4_bs_days_calendar_view_1_Template_bs_days_calendar_view_onNavigate_0_listener($event) { i0.ɵɵrestoreView(_r10_1); var ctx_r9 = i0.ɵɵnextContext(3); return ctx_r9.navigateTo($event); })("onViewMode", function BsDatepickerInlineContainerComponent_div_0_div_4_bs_days_calendar_view_1_Template_bs_days_calendar_view_onViewMode_0_listener($event) { i0.ɵɵrestoreView(_r10_1); var ctx_r11 = i0.ɵɵnextContext(3); return ctx_r11.setViewMode($event); })("onHover", function BsDatepickerInlineContainerComponent_div_0_div_4_bs_days_calendar_view_1_Template_bs_days_calendar_view_onHover_0_listener($event) { i0.ɵɵrestoreView(_r10_1); var ctx_r12 = i0.ɵɵnextContext(3); return ctx_r12.dayHoverHandler($event); })("onHoverWeek", function BsDatepickerInlineContainerComponent_div_0_div_4_bs_days_calendar_view_1_Template_bs_days_calendar_view_onHoverWeek_0_listener($event) { i0.ɵɵrestoreView(_r10_1); var ctx_r13 = i0.ɵɵnextContext(3); return ctx_r13.weekHoverHandler($event); })("onSelect", function BsDatepickerInlineContainerComponent_div_0_div_4_bs_days_calendar_view_1_Template_bs_days_calendar_view_onSelect_0_listener($event) { i0.ɵɵrestoreView(_r10_1); var ctx_r14 = i0.ɵɵnextContext(3); return ctx_r14.daySelectHandler($event); });
            i0.ɵɵpipe(1, "async");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var calendar_r8 = ctx.$implicit;
            var ctx_r7 = i0.ɵɵnextContext(3);
            i0.ɵɵclassProp("bs-datepicker-multiple", ctx_r7.multipleCalendars);
            i0.ɵɵproperty("calendar", calendar_r8)("options", i0.ɵɵpipeBind1(1, 4, ctx_r7.options$));
        }
    }
    function BsDatepickerInlineContainerComponent_div_0_div_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 7);
            i0.ɵɵtemplate(1, BsDatepickerInlineContainerComponent_div_0_div_4_bs_days_calendar_view_1_Template, 2, 6, "bs-days-calendar-view", 8);
            i0.ɵɵpipe(2, "async");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(2, 1, ctx_r1.daysCalendar$));
        }
    }
    function BsDatepickerInlineContainerComponent_div_0_div_5_bs_month_calendar_view_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r18_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "bs-month-calendar-view", 11);
            i0.ɵɵlistener("onNavigate", function BsDatepickerInlineContainerComponent_div_0_div_5_bs_month_calendar_view_1_Template_bs_month_calendar_view_onNavigate_0_listener($event) { i0.ɵɵrestoreView(_r18_1); var ctx_r17 = i0.ɵɵnextContext(3); return ctx_r17.navigateTo($event); })("onViewMode", function BsDatepickerInlineContainerComponent_div_0_div_5_bs_month_calendar_view_1_Template_bs_month_calendar_view_onViewMode_0_listener($event) { i0.ɵɵrestoreView(_r18_1); var ctx_r19 = i0.ɵɵnextContext(3); return ctx_r19.setViewMode($event); })("onHover", function BsDatepickerInlineContainerComponent_div_0_div_5_bs_month_calendar_view_1_Template_bs_month_calendar_view_onHover_0_listener($event) { i0.ɵɵrestoreView(_r18_1); var ctx_r20 = i0.ɵɵnextContext(3); return ctx_r20.monthHoverHandler($event); })("onSelect", function BsDatepickerInlineContainerComponent_div_0_div_5_bs_month_calendar_view_1_Template_bs_month_calendar_view_onSelect_0_listener($event) { i0.ɵɵrestoreView(_r18_1); var ctx_r21 = i0.ɵɵnextContext(3); return ctx_r21.monthSelectHandler($event); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var calendar_r16 = ctx.$implicit;
            var ctx_r15 = i0.ɵɵnextContext(3);
            i0.ɵɵclassProp("bs-datepicker-multiple", ctx_r15.multipleCalendars);
            i0.ɵɵproperty("calendar", calendar_r16);
        }
    }
    function BsDatepickerInlineContainerComponent_div_0_div_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 7);
            i0.ɵɵtemplate(1, BsDatepickerInlineContainerComponent_div_0_div_5_bs_month_calendar_view_1_Template, 1, 3, "bs-month-calendar-view", 10);
            i0.ɵɵpipe(2, "async");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(2, 1, ctx_r2.monthsCalendar));
        }
    }
    function BsDatepickerInlineContainerComponent_div_0_div_6_bs_years_calendar_view_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r25_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "bs-years-calendar-view", 11);
            i0.ɵɵlistener("onNavigate", function BsDatepickerInlineContainerComponent_div_0_div_6_bs_years_calendar_view_1_Template_bs_years_calendar_view_onNavigate_0_listener($event) { i0.ɵɵrestoreView(_r25_1); var ctx_r24 = i0.ɵɵnextContext(3); return ctx_r24.navigateTo($event); })("onViewMode", function BsDatepickerInlineContainerComponent_div_0_div_6_bs_years_calendar_view_1_Template_bs_years_calendar_view_onViewMode_0_listener($event) { i0.ɵɵrestoreView(_r25_1); var ctx_r26 = i0.ɵɵnextContext(3); return ctx_r26.setViewMode($event); })("onHover", function BsDatepickerInlineContainerComponent_div_0_div_6_bs_years_calendar_view_1_Template_bs_years_calendar_view_onHover_0_listener($event) { i0.ɵɵrestoreView(_r25_1); var ctx_r27 = i0.ɵɵnextContext(3); return ctx_r27.yearHoverHandler($event); })("onSelect", function BsDatepickerInlineContainerComponent_div_0_div_6_bs_years_calendar_view_1_Template_bs_years_calendar_view_onSelect_0_listener($event) { i0.ɵɵrestoreView(_r25_1); var ctx_r28 = i0.ɵɵnextContext(3); return ctx_r28.yearSelectHandler($event); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var calendar_r23 = ctx.$implicit;
            var ctx_r22 = i0.ɵɵnextContext(3);
            i0.ɵɵclassProp("bs-datepicker-multiple", ctx_r22.multipleCalendars);
            i0.ɵɵproperty("calendar", calendar_r23);
        }
    }
    function BsDatepickerInlineContainerComponent_div_0_div_6_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 7);
            i0.ɵɵtemplate(1, BsDatepickerInlineContainerComponent_div_0_div_6_bs_years_calendar_view_1_Template, 1, 3, "bs-years-calendar-view", 10);
            i0.ɵɵpipe(2, "async");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r3 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(2, 1, ctx_r3.yearsCalendar));
        }
    }
    function BsDatepickerInlineContainerComponent_div_0_div_7_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 12);
            i0.ɵɵelementStart(1, "button", 13);
            i0.ɵɵtext(2, "Apply");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "button", 14);
            i0.ɵɵtext(4, "Cancel");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
    }
    function BsDatepickerInlineContainerComponent_div_0_div_8_div_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r32_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 17);
            i0.ɵɵelementStart(1, "button", 18);
            i0.ɵɵlistener("click", function BsDatepickerInlineContainerComponent_div_0_div_8_div_1_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r32_1); var ctx_r31 = i0.ɵɵnextContext(3); return ctx_r31.setToday(); });
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r29 = i0.ɵɵnextContext(3);
            i0.ɵɵclassProp("today-left", ctx_r29.todayPos === "left")("today-right", ctx_r29.todayPos === "right")("today-center", ctx_r29.todayPos === "center");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx_r29.todayBtnLbl);
        }
    }
    function BsDatepickerInlineContainerComponent_div_0_div_8_div_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r34_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 19);
            i0.ɵɵelementStart(1, "button", 18);
            i0.ɵɵlistener("click", function BsDatepickerInlineContainerComponent_div_0_div_8_div_2_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r34_1); var ctx_r33 = i0.ɵɵnextContext(3); return ctx_r33.clearDate(); });
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r30 = i0.ɵɵnextContext(3);
            i0.ɵɵclassProp("clear-left", ctx_r30.clearPos === "left")("clear-right", ctx_r30.clearPos === "right")("clear-center", ctx_r30.clearPos === "center");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx_r30.clearBtnLbl);
        }
    }
    function BsDatepickerInlineContainerComponent_div_0_div_8_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 12);
            i0.ɵɵtemplate(1, BsDatepickerInlineContainerComponent_div_0_div_8_div_1_Template, 3, 7, "div", 15);
            i0.ɵɵtemplate(2, BsDatepickerInlineContainerComponent_div_0_div_8_div_2_Template, 3, 7, "div", 16);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r5 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r5.showTodayBtn);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r5.showClearBtn);
        }
    }
    function BsDatepickerInlineContainerComponent_div_0_div_9_Template(rf, ctx) {
        if (rf & 1) {
            var _r36_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 20);
            i0.ɵɵelementStart(1, "bs-custom-date-view", 21);
            i0.ɵɵlistener("onSelect", function BsDatepickerInlineContainerComponent_div_0_div_9_Template_bs_custom_date_view_onSelect_1_listener($event) { i0.ɵɵrestoreView(_r36_1); var ctx_r35 = i0.ɵɵnextContext(2); return ctx_r35.setRangeOnCalendar($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r6 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("selectedRange", ctx_r6.chosenRange)("ranges", ctx_r6.customRanges)("customRangeLabel", ctx_r6.customRangeBtnLbl);
        }
    }
    function BsDatepickerInlineContainerComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
            var _r38_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 1);
            i0.ɵɵelementStart(1, "div", 2);
            i0.ɵɵlistener("@datepickerAnimation.done", function BsDatepickerInlineContainerComponent_div_0_Template_div_animation_datepickerAnimation_done_1_listener() { i0.ɵɵrestoreView(_r38_1); var ctx_r37 = i0.ɵɵnextContext(); return ctx_r37.positionServiceEnable(); });
            i0.ɵɵelementStart(2, "div", 3);
            i0.ɵɵpipe(3, "async");
            i0.ɵɵtemplate(4, BsDatepickerInlineContainerComponent_div_0_div_4_Template, 3, 3, "div", 4);
            i0.ɵɵtemplate(5, BsDatepickerInlineContainerComponent_div_0_div_5_Template, 3, 3, "div", 4);
            i0.ɵɵtemplate(6, BsDatepickerInlineContainerComponent_div_0_div_6_Template, 3, 3, "div", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(7, BsDatepickerInlineContainerComponent_div_0_div_7_Template, 5, 0, "div", 5);
            i0.ɵɵtemplate(8, BsDatepickerInlineContainerComponent_div_0_div_8_Template, 3, 2, "div", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(9, BsDatepickerInlineContainerComponent_div_0_div_9_Template, 2, 3, "div", 6);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
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
        }
    }
    var BsDatepickerInlineContainerComponent = /** @class */ (function (_super) {
        __extends(BsDatepickerInlineContainerComponent, _super);
        function BsDatepickerInlineContainerComponent(_renderer, _config, _store, _element, _actions, _effects, _positioningService) {
            var _this = _super.call(this, _renderer, _config, _store, _element, _actions, _effects, _positioningService) || this;
            _renderer.setStyle(_element.nativeElement, 'display', 'inline-block');
            _renderer.setStyle(_element.nativeElement, 'position', 'static');
            return _this;
        }
        return BsDatepickerInlineContainerComponent;
    }(BsDatepickerContainerComponent));
    BsDatepickerInlineContainerComponent.ɵfac = function BsDatepickerInlineContainerComponent_Factory(t) { return new (t || BsDatepickerInlineContainerComponent)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(BsDatepickerConfig), i0.ɵɵdirectiveInject(BsDatepickerStore), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(BsDatepickerActions), i0.ɵɵdirectiveInject(BsDatepickerEffects), i0.ɵɵdirectiveInject(i5.PositioningService)); };
    BsDatepickerInlineContainerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: BsDatepickerInlineContainerComponent, selectors: [["bs-datepicker-inline-container"]], hostBindings: function BsDatepickerInlineContainerComponent_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵlistener("click", function BsDatepickerInlineContainerComponent_click_HostBindingHandler($event) { return ctx._stopPropagation($event); });
            }
        }, features: [i0.ɵɵProvidersFeature([BsDatepickerStore, BsDatepickerEffects]), i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 3, consts: [["class", "bs-datepicker", 3, "ngClass", 4, "ngIf"], [1, "bs-datepicker", 3, "ngClass"], [1, "bs-datepicker-container"], ["role", "application", 1, "bs-calendar-container", 3, "ngSwitch"], ["class", "bs-media-container", 4, "ngSwitchCase"], ["class", "bs-datepicker-buttons", 4, "ngIf"], ["class", "bs-datepicker-custom-range", 4, "ngIf"], [1, "bs-media-container"], [3, "bs-datepicker-multiple", "calendar", "options", "onNavigate", "onViewMode", "onHover", "onHoverWeek", "onSelect", 4, "ngFor", "ngForOf"], [3, "calendar", "options", "onNavigate", "onViewMode", "onHover", "onHoverWeek", "onSelect"], [3, "bs-datepicker-multiple", "calendar", "onNavigate", "onViewMode", "onHover", "onSelect", 4, "ngFor", "ngForOf"], [3, "calendar", "onNavigate", "onViewMode", "onHover", "onSelect"], [1, "bs-datepicker-buttons"], ["type", "button", 1, "btn", "btn-success"], ["type", "button", 1, "btn", "btn-default"], ["class", "btn-today-wrapper", 3, "today-left", "today-right", "today-center", 4, "ngIf"], ["class", "btn-clear-wrapper", 3, "clear-left", "clear-right", "clear-center", 4, "ngIf"], [1, "btn-today-wrapper"], [1, "btn", "btn-success", 3, "click"], [1, "btn-clear-wrapper"], [1, "bs-datepicker-custom-range"], [3, "selectedRange", "ranges", "customRangeLabel", "onSelect"]], template: function BsDatepickerInlineContainerComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, BsDatepickerInlineContainerComponent_div_0_Template, 10, 11, "div", 0);
                i0.ɵɵpipe(1, "async");
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 1, ctx.viewMode));
            }
        }, directives: [i6.NgIf, i6.NgClass, i6.NgSwitch, i6.NgSwitchCase, i6.NgForOf, BsDaysCalendarViewComponent, BsMonthCalendarViewComponent, BsYearsCalendarViewComponent, BsCustomDatesViewComponent], pipes: [i6.AsyncPipe], encapsulation: 2, data: { animation: [datepickerAnimation] } });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BsDatepickerInlineContainerComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'bs-datepicker-inline-container',
                        providers: [BsDatepickerStore, BsDatepickerEffects],
                        templateUrl: './bs-datepicker-view.html',
                        host: {
                            '(click)': '_stopPropagation($event)'
                        },
                        animations: [datepickerAnimation]
                    }]
            }], function () { return [{ type: i0.Renderer2 }, { type: BsDatepickerConfig }, { type: BsDatepickerStore }, { type: i0.ElementRef }, { type: BsDatepickerActions }, { type: BsDatepickerEffects }, { type: i5.PositioningService }]; }, null);
    })();

    var BsDatepickerInlineDirective = /** @class */ (function () {
        function BsDatepickerInlineDirective(_config, _elementRef, _renderer, _viewContainerRef, cis) {
            this._config = _config;
            this._elementRef = _elementRef;
            /**
             * Indicates whether datepicker is enabled or not
             */
            this.isDisabled = false;
            /**
             * Emits when datepicker value has been changed
             */
            this.bsValueChange = new i0.EventEmitter();
            this._subs = [];
            // todo: assign only subset of fields
            Object.assign(this, this._config);
            this._datepicker = cis.createLoader(_elementRef, _viewContainerRef, _renderer);
        }
        Object.defineProperty(BsDatepickerInlineDirective.prototype, "bsValue", {
            /**
             * Initial value of datepicker
             */
            set: function (value) {
                if (this._bsValue === value) {
                    return;
                }
                if (!this._bsValue && value) {
                    var now = new Date();
                    value.setMilliseconds(now.getMilliseconds());
                    value.setSeconds(now.getSeconds());
                    value.setMinutes(now.getMinutes());
                    value.setHours(now.getHours());
                }
                this._bsValue = value;
                this.bsValueChange.emit(value);
            },
            enumerable: false,
            configurable: true
        });
        BsDatepickerInlineDirective.prototype.ngOnInit = function () {
            var _this = this;
            this.setConfig();
            // if date changes from external source (model -> view)
            this._subs.push(this.bsValueChange.subscribe(function (value) {
                if (_this._datepickerRef) {
                    _this._datepickerRef.instance.value = value;
                }
            }));
            // if date changes from picker (view -> model)
            if (this._datepickerRef) {
                this._subs.push(this._datepickerRef.instance.valueChange.subscribe(function (value) {
                    _this.bsValue = value;
                }));
            }
        };
        BsDatepickerInlineDirective.prototype.ngOnChanges = function (changes) {
            if (!this._datepickerRef || !this._datepickerRef.instance) {
                return;
            }
            if (changes.minDate) {
                this._datepickerRef.instance.minDate = this.minDate;
                this.setConfig();
            }
            if (changes.maxDate) {
                this._datepickerRef.instance.maxDate = this.maxDate;
                this.setConfig();
            }
            if (changes.datesDisabled) {
                this._datepickerRef.instance.datesDisabled = this.datesDisabled;
                this.setConfig();
            }
            if (changes.datesEnabled) {
                this._datepickerRef.instance.datesEnabled = this.datesEnabled;
                this._datepickerRef.instance.value = this._bsValue;
            }
            if (changes.isDisabled) {
                this._datepickerRef.instance.isDisabled = this.isDisabled;
                this.setConfig();
            }
            if (changes.dateCustomClasses) {
                this._datepickerRef.instance.dateCustomClasses = this.dateCustomClasses;
                this.setConfig();
            }
            if (changes.dateTooltipTexts) {
                this._datepickerRef.instance.dateTooltipTexts = this.dateTooltipTexts;
                this.setConfig();
            }
        };
        /**
         * Set config for datepicker
         */
        BsDatepickerInlineDirective.prototype.setConfig = function () {
            if (this._datepicker) {
                this._datepicker.hide();
            }
            this._config = Object.assign({}, this._config, this.bsConfig, {
                value: checkBsValue(this._bsValue, this.maxDate || this.bsConfig && this.bsConfig.maxDate),
                isDisabled: this.isDisabled,
                minDate: this.minDate || this.bsConfig && this.bsConfig.minDate,
                maxDate: this.maxDate || this.bsConfig && this.bsConfig.maxDate,
                dateCustomClasses: this.dateCustomClasses || this.bsConfig && this.bsConfig.dateCustomClasses,
                dateTooltipTexts: this.dateTooltipTexts || this.bsConfig && this.bsConfig.dateTooltipTexts,
                datesDisabled: this.datesDisabled || this.bsConfig && this.bsConfig.datesDisabled,
                datesEnabled: this.datesEnabled || this.bsConfig && this.bsConfig.datesEnabled
            });
            this._datepickerRef = this._datepicker
                .provide({ provide: BsDatepickerConfig, useValue: this._config })
                .attach(BsDatepickerInlineContainerComponent)
                .to(this._elementRef)
                .show();
        };
        BsDatepickerInlineDirective.prototype.ngOnDestroy = function () {
            this._datepicker.dispose();
        };
        return BsDatepickerInlineDirective;
    }());
    BsDatepickerInlineDirective.ɵfac = function BsDatepickerInlineDirective_Factory(t) { return new (t || BsDatepickerInlineDirective)(i0.ɵɵdirectiveInject(BsDatepickerInlineConfig), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i2.ComponentLoaderFactory)); };
    BsDatepickerInlineDirective.ɵdir = i0.ɵɵdefineDirective({ type: BsDatepickerInlineDirective, selectors: [["bs-datepicker-inline"]], inputs: { bsConfig: "bsConfig", isDisabled: "isDisabled", minDate: "minDate", maxDate: "maxDate", dateCustomClasses: "dateCustomClasses", dateTooltipTexts: "dateTooltipTexts", datesEnabled: "datesEnabled", datesDisabled: "datesDisabled", bsValue: "bsValue" }, outputs: { bsValueChange: "bsValueChange" }, exportAs: ["bsDatepickerInline"], features: [i0.ɵɵNgOnChangesFeature] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BsDatepickerInlineDirective, [{
                type: i0.Directive,
                args: [{
                        selector: 'bs-datepicker-inline',
                        exportAs: 'bsDatepickerInline'
                    }]
            }], function () { return [{ type: BsDatepickerInlineConfig }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i2.ComponentLoaderFactory }]; }, { bsConfig: [{
                    type: i0.Input
                }], isDisabled: [{
                    type: i0.Input
                }], minDate: [{
                    type: i0.Input
                }], maxDate: [{
                    type: i0.Input
                }], dateCustomClasses: [{
                    type: i0.Input
                }], dateTooltipTexts: [{
                    type: i0.Input
                }], datesEnabled: [{
                    type: i0.Input
                }], datesDisabled: [{
                    type: i0.Input
                }], bsValueChange: [{
                    type: i0.Output
                }], bsValue: [{
                    type: i0.Input
                }] });
    })();

    var BsDaterangepickerInlineConfig = /** @class */ (function (_super) {
        __extends(BsDaterangepickerInlineConfig, _super);
        function BsDaterangepickerInlineConfig() {
            var _this = _super.apply(this, __spread(arguments)) || this;
            // DatepickerRenderOptions
            _this.displayMonths = 2;
            /** turn on/off animation */
            _this.isAnimated = false;
            return _this;
        }
        return BsDaterangepickerInlineConfig;
    }(BsDatepickerConfig));
    BsDaterangepickerInlineConfig.ɵfac = function BsDaterangepickerInlineConfig_Factory(t) { return ɵBsDaterangepickerInlineConfig_BaseFactory(t || BsDaterangepickerInlineConfig); };
    BsDaterangepickerInlineConfig.ɵprov = i0.ɵɵdefineInjectable({ token: BsDaterangepickerInlineConfig, factory: BsDaterangepickerInlineConfig.ɵfac, providedIn: 'root' });
    var ɵBsDaterangepickerInlineConfig_BaseFactory = /*@__PURE__*/ i0.ɵɵgetInheritedFactory(BsDaterangepickerInlineConfig);
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BsDaterangepickerInlineConfig, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], null, null);
    })();

    function BsDaterangepickerContainerComponent_div_0_div_4_bs_days_calendar_view_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r10_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "bs-days-calendar-view", 9);
            i0.ɵɵlistener("onNavigate", function BsDaterangepickerContainerComponent_div_0_div_4_bs_days_calendar_view_1_Template_bs_days_calendar_view_onNavigate_0_listener($event) { i0.ɵɵrestoreView(_r10_1); var ctx_r9 = i0.ɵɵnextContext(3); return ctx_r9.navigateTo($event); })("onViewMode", function BsDaterangepickerContainerComponent_div_0_div_4_bs_days_calendar_view_1_Template_bs_days_calendar_view_onViewMode_0_listener($event) { i0.ɵɵrestoreView(_r10_1); var ctx_r11 = i0.ɵɵnextContext(3); return ctx_r11.setViewMode($event); })("onHover", function BsDaterangepickerContainerComponent_div_0_div_4_bs_days_calendar_view_1_Template_bs_days_calendar_view_onHover_0_listener($event) { i0.ɵɵrestoreView(_r10_1); var ctx_r12 = i0.ɵɵnextContext(3); return ctx_r12.dayHoverHandler($event); })("onHoverWeek", function BsDaterangepickerContainerComponent_div_0_div_4_bs_days_calendar_view_1_Template_bs_days_calendar_view_onHoverWeek_0_listener($event) { i0.ɵɵrestoreView(_r10_1); var ctx_r13 = i0.ɵɵnextContext(3); return ctx_r13.weekHoverHandler($event); })("onSelect", function BsDaterangepickerContainerComponent_div_0_div_4_bs_days_calendar_view_1_Template_bs_days_calendar_view_onSelect_0_listener($event) { i0.ɵɵrestoreView(_r10_1); var ctx_r14 = i0.ɵɵnextContext(3); return ctx_r14.daySelectHandler($event); });
            i0.ɵɵpipe(1, "async");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var calendar_r8 = ctx.$implicit;
            var ctx_r7 = i0.ɵɵnextContext(3);
            i0.ɵɵclassProp("bs-datepicker-multiple", ctx_r7.multipleCalendars);
            i0.ɵɵproperty("calendar", calendar_r8)("options", i0.ɵɵpipeBind1(1, 4, ctx_r7.options$));
        }
    }
    function BsDaterangepickerContainerComponent_div_0_div_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 7);
            i0.ɵɵtemplate(1, BsDaterangepickerContainerComponent_div_0_div_4_bs_days_calendar_view_1_Template, 2, 6, "bs-days-calendar-view", 8);
            i0.ɵɵpipe(2, "async");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(2, 1, ctx_r1.daysCalendar$));
        }
    }
    function BsDaterangepickerContainerComponent_div_0_div_5_bs_month_calendar_view_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r18_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "bs-month-calendar-view", 11);
            i0.ɵɵlistener("onNavigate", function BsDaterangepickerContainerComponent_div_0_div_5_bs_month_calendar_view_1_Template_bs_month_calendar_view_onNavigate_0_listener($event) { i0.ɵɵrestoreView(_r18_1); var ctx_r17 = i0.ɵɵnextContext(3); return ctx_r17.navigateTo($event); })("onViewMode", function BsDaterangepickerContainerComponent_div_0_div_5_bs_month_calendar_view_1_Template_bs_month_calendar_view_onViewMode_0_listener($event) { i0.ɵɵrestoreView(_r18_1); var ctx_r19 = i0.ɵɵnextContext(3); return ctx_r19.setViewMode($event); })("onHover", function BsDaterangepickerContainerComponent_div_0_div_5_bs_month_calendar_view_1_Template_bs_month_calendar_view_onHover_0_listener($event) { i0.ɵɵrestoreView(_r18_1); var ctx_r20 = i0.ɵɵnextContext(3); return ctx_r20.monthHoverHandler($event); })("onSelect", function BsDaterangepickerContainerComponent_div_0_div_5_bs_month_calendar_view_1_Template_bs_month_calendar_view_onSelect_0_listener($event) { i0.ɵɵrestoreView(_r18_1); var ctx_r21 = i0.ɵɵnextContext(3); return ctx_r21.monthSelectHandler($event); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var calendar_r16 = ctx.$implicit;
            var ctx_r15 = i0.ɵɵnextContext(3);
            i0.ɵɵclassProp("bs-datepicker-multiple", ctx_r15.multipleCalendars);
            i0.ɵɵproperty("calendar", calendar_r16);
        }
    }
    function BsDaterangepickerContainerComponent_div_0_div_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 7);
            i0.ɵɵtemplate(1, BsDaterangepickerContainerComponent_div_0_div_5_bs_month_calendar_view_1_Template, 1, 3, "bs-month-calendar-view", 10);
            i0.ɵɵpipe(2, "async");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(2, 1, ctx_r2.monthsCalendar));
        }
    }
    function BsDaterangepickerContainerComponent_div_0_div_6_bs_years_calendar_view_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r25_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "bs-years-calendar-view", 11);
            i0.ɵɵlistener("onNavigate", function BsDaterangepickerContainerComponent_div_0_div_6_bs_years_calendar_view_1_Template_bs_years_calendar_view_onNavigate_0_listener($event) { i0.ɵɵrestoreView(_r25_1); var ctx_r24 = i0.ɵɵnextContext(3); return ctx_r24.navigateTo($event); })("onViewMode", function BsDaterangepickerContainerComponent_div_0_div_6_bs_years_calendar_view_1_Template_bs_years_calendar_view_onViewMode_0_listener($event) { i0.ɵɵrestoreView(_r25_1); var ctx_r26 = i0.ɵɵnextContext(3); return ctx_r26.setViewMode($event); })("onHover", function BsDaterangepickerContainerComponent_div_0_div_6_bs_years_calendar_view_1_Template_bs_years_calendar_view_onHover_0_listener($event) { i0.ɵɵrestoreView(_r25_1); var ctx_r27 = i0.ɵɵnextContext(3); return ctx_r27.yearHoverHandler($event); })("onSelect", function BsDaterangepickerContainerComponent_div_0_div_6_bs_years_calendar_view_1_Template_bs_years_calendar_view_onSelect_0_listener($event) { i0.ɵɵrestoreView(_r25_1); var ctx_r28 = i0.ɵɵnextContext(3); return ctx_r28.yearSelectHandler($event); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var calendar_r23 = ctx.$implicit;
            var ctx_r22 = i0.ɵɵnextContext(3);
            i0.ɵɵclassProp("bs-datepicker-multiple", ctx_r22.multipleCalendars);
            i0.ɵɵproperty("calendar", calendar_r23);
        }
    }
    function BsDaterangepickerContainerComponent_div_0_div_6_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 7);
            i0.ɵɵtemplate(1, BsDaterangepickerContainerComponent_div_0_div_6_bs_years_calendar_view_1_Template, 1, 3, "bs-years-calendar-view", 10);
            i0.ɵɵpipe(2, "async");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r3 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(2, 1, ctx_r3.yearsCalendar));
        }
    }
    function BsDaterangepickerContainerComponent_div_0_div_7_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 12);
            i0.ɵɵelementStart(1, "button", 13);
            i0.ɵɵtext(2, "Apply");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "button", 14);
            i0.ɵɵtext(4, "Cancel");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
    }
    function BsDaterangepickerContainerComponent_div_0_div_8_div_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r32_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 17);
            i0.ɵɵelementStart(1, "button", 18);
            i0.ɵɵlistener("click", function BsDaterangepickerContainerComponent_div_0_div_8_div_1_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r32_1); var ctx_r31 = i0.ɵɵnextContext(3); return ctx_r31.setToday(); });
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r29 = i0.ɵɵnextContext(3);
            i0.ɵɵclassProp("today-left", ctx_r29.todayPos === "left")("today-right", ctx_r29.todayPos === "right")("today-center", ctx_r29.todayPos === "center");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx_r29.todayBtnLbl);
        }
    }
    function BsDaterangepickerContainerComponent_div_0_div_8_div_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r34_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 19);
            i0.ɵɵelementStart(1, "button", 18);
            i0.ɵɵlistener("click", function BsDaterangepickerContainerComponent_div_0_div_8_div_2_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r34_1); var ctx_r33 = i0.ɵɵnextContext(3); return ctx_r33.clearDate(); });
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r30 = i0.ɵɵnextContext(3);
            i0.ɵɵclassProp("clear-left", ctx_r30.clearPos === "left")("clear-right", ctx_r30.clearPos === "right")("clear-center", ctx_r30.clearPos === "center");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx_r30.clearBtnLbl);
        }
    }
    function BsDaterangepickerContainerComponent_div_0_div_8_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 12);
            i0.ɵɵtemplate(1, BsDaterangepickerContainerComponent_div_0_div_8_div_1_Template, 3, 7, "div", 15);
            i0.ɵɵtemplate(2, BsDaterangepickerContainerComponent_div_0_div_8_div_2_Template, 3, 7, "div", 16);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r5 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r5.showTodayBtn);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r5.showClearBtn);
        }
    }
    function BsDaterangepickerContainerComponent_div_0_div_9_Template(rf, ctx) {
        if (rf & 1) {
            var _r36_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 20);
            i0.ɵɵelementStart(1, "bs-custom-date-view", 21);
            i0.ɵɵlistener("onSelect", function BsDaterangepickerContainerComponent_div_0_div_9_Template_bs_custom_date_view_onSelect_1_listener($event) { i0.ɵɵrestoreView(_r36_1); var ctx_r35 = i0.ɵɵnextContext(2); return ctx_r35.setRangeOnCalendar($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r6 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("selectedRange", ctx_r6.chosenRange)("ranges", ctx_r6.customRanges)("customRangeLabel", ctx_r6.customRangeBtnLbl);
        }
    }
    function BsDaterangepickerContainerComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
            var _r38_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 1);
            i0.ɵɵelementStart(1, "div", 2);
            i0.ɵɵlistener("@datepickerAnimation.done", function BsDaterangepickerContainerComponent_div_0_Template_div_animation_datepickerAnimation_done_1_listener() { i0.ɵɵrestoreView(_r38_1); var ctx_r37 = i0.ɵɵnextContext(); return ctx_r37.positionServiceEnable(); });
            i0.ɵɵelementStart(2, "div", 3);
            i0.ɵɵpipe(3, "async");
            i0.ɵɵtemplate(4, BsDaterangepickerContainerComponent_div_0_div_4_Template, 3, 3, "div", 4);
            i0.ɵɵtemplate(5, BsDaterangepickerContainerComponent_div_0_div_5_Template, 3, 3, "div", 4);
            i0.ɵɵtemplate(6, BsDaterangepickerContainerComponent_div_0_div_6_Template, 3, 3, "div", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(7, BsDaterangepickerContainerComponent_div_0_div_7_Template, 5, 0, "div", 5);
            i0.ɵɵtemplate(8, BsDaterangepickerContainerComponent_div_0_div_8_Template, 3, 2, "div", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(9, BsDaterangepickerContainerComponent_div_0_div_9_Template, 2, 3, "div", 6);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
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
        }
    }
    var BsDaterangepickerContainerComponent = /** @class */ (function (_super) {
        __extends(BsDaterangepickerContainerComponent, _super);
        function BsDaterangepickerContainerComponent(_renderer, _config, _store, _element, _actions, _effects, _positionService) {
            var _this = _super.call(this) || this;
            _this._config = _config;
            _this._store = _store;
            _this._element = _element;
            _this._actions = _actions;
            _this._positionService = _positionService;
            _this.valueChange = new i0.EventEmitter();
            _this.animationState = 'void';
            _this._rangeStack = [];
            _this.chosenRange = [];
            _this._subs = [];
            _this._effects = _effects;
            _this.customRanges = _this._config.ranges || [];
            _this.customRangeBtnLbl = _this._config.customRangeButtonLabel;
            _renderer.setStyle(_element.nativeElement, 'display', 'block');
            _renderer.setStyle(_element.nativeElement, 'position', 'absolute');
            return _this;
        }
        Object.defineProperty(BsDaterangepickerContainerComponent.prototype, "value", {
            set: function (value) {
                var _a;
                (_a = this._effects) === null || _a === void 0 ? void 0 : _a.setRangeValue(value);
            },
            enumerable: false,
            configurable: true
        });
        BsDaterangepickerContainerComponent.prototype.ngOnInit = function () {
            var _this = this;
            var _a, _b;
            this._positionService.setOptions({
                modifiers: { flip: { enabled: this._config.adaptivePosition } },
                allowedPositions: ['top', 'bottom']
            });
            (_a = this._positionService.event$) === null || _a === void 0 ? void 0 : _a.pipe(operators.take(1)).subscribe(function () {
                _this._positionService.disable();
                if (_this._config.isAnimated) {
                    _this.animationState = _this.isTopPosition ? 'animated-up' : 'animated-down';
                    return;
                }
                _this.animationState = 'unanimated';
            });
            this.containerClass = this._config.containerClass;
            this.isOtherMonthsActive = this._config.selectFromOtherMonth;
            (_b = this._effects) === null || _b === void 0 ? void 0 : _b.init(this._store).setOptions(this._config).setBindings(this).setEventHandlers(this).registerDatepickerSideEffects();
            // todo: move it somewhere else
            // on selected date change
            this._subs.push(this._store
                .select(function (state) { return state.selectedRange; })
                .subscribe(function (dateRange) {
                _this.valueChange.emit(dateRange);
                _this.chosenRange = dateRange || [];
            }));
        };
        Object.defineProperty(BsDaterangepickerContainerComponent.prototype, "isTopPosition", {
            get: function () {
                return this._element.nativeElement.classList.contains('top');
            },
            enumerable: false,
            configurable: true
        });
        BsDaterangepickerContainerComponent.prototype.positionServiceEnable = function () {
            this._positionService.enable();
        };
        BsDaterangepickerContainerComponent.prototype.daySelectHandler = function (day) {
            if (!day) {
                return;
            }
            var isDisabled = this.isOtherMonthsActive ? day.isDisabled : (day.isOtherMonth || day.isDisabled);
            if (isDisabled) {
                return;
            }
            this.rangesProcessing(day);
        };
        BsDaterangepickerContainerComponent.prototype.monthSelectHandler = function (day) {
            if (!day || day.isDisabled) {
                return;
            }
            day.isSelected = true;
            if (this._config.minMode !== 'month') {
                if (day.isDisabled) {
                    return;
                }
                this._store.dispatch(this._actions.navigateTo({
                    unit: {
                        month: chronos.getMonth(day.date),
                        year: chronos.getFullYear(day.date)
                    },
                    viewMode: 'day'
                }));
                return;
            }
            this.rangesProcessing(day);
        };
        BsDaterangepickerContainerComponent.prototype.yearSelectHandler = function (day) {
            if (!day || day.isDisabled) {
                return;
            }
            day.isSelected = true;
            if (this._config.minMode !== 'year') {
                if (day.isDisabled) {
                    return;
                }
                this._store.dispatch(this._actions.navigateTo({
                    unit: {
                        year: chronos.getFullYear(day.date)
                    },
                    viewMode: 'month'
                }));
                return;
            }
            this.rangesProcessing(day);
        };
        BsDaterangepickerContainerComponent.prototype.rangesProcessing = function (day) {
            // if only one date is already selected
            // and user clicks on previous date
            // start selection from new date
            // but if new date is after initial one
            // than finish selection
            if (this._rangeStack.length === 1) {
                this._rangeStack =
                    day.date >= this._rangeStack[0]
                        ? [this._rangeStack[0], day.date]
                        : [day.date];
            }
            if (this._config.maxDateRange) {
                this.setMaxDateRangeOnCalendar(day.date);
            }
            if (this._rangeStack.length === 0) {
                this._rangeStack = [day.date];
                if (this._config.maxDateRange) {
                    this.setMaxDateRangeOnCalendar(day.date);
                }
            }
            this._store.dispatch(this._actions.selectRange(this._rangeStack));
            if (this._rangeStack.length === 2) {
                this._rangeStack = [];
            }
        };
        BsDaterangepickerContainerComponent.prototype.ngOnDestroy = function () {
            var e_1, _c;
            var _a;
            try {
                for (var _d = __values(this._subs), _e = _d.next(); !_e.done; _e = _d.next()) {
                    var sub = _e.value;
                    sub.unsubscribe();
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_e && !_e.done && (_c = _d.return)) _c.call(_d);
                }
                finally { if (e_1) throw e_1.error; }
            }
            (_a = this._effects) === null || _a === void 0 ? void 0 : _a.destroy();
        };
        BsDaterangepickerContainerComponent.prototype.setRangeOnCalendar = function (dates) {
            if (dates) {
                this._rangeStack = dates.value instanceof Date ? [dates.value] : dates.value;
            }
            this._store.dispatch(this._actions.selectRange(this._rangeStack));
        };
        BsDaterangepickerContainerComponent.prototype.setMaxDateRangeOnCalendar = function (currentSelection) {
            var _a;
            var maxDateRange = new Date(currentSelection);
            if (this._config.maxDate) {
                var maxDateValueInMilliseconds = this._config.maxDate.getTime();
                var maxDateRangeInMilliseconds = currentSelection.getTime() + ((this._config.maxDateRange || 0) * dayInMilliseconds);
                maxDateRange = maxDateRangeInMilliseconds > maxDateValueInMilliseconds ?
                    new Date(this._config.maxDate) :
                    new Date(maxDateRangeInMilliseconds);
            }
            else {
                maxDateRange.setDate(currentSelection.getDate() + (this._config.maxDateRange || 0));
            }
            (_a = this._effects) === null || _a === void 0 ? void 0 : _a.setMaxDate(maxDateRange);
        };
        return BsDaterangepickerContainerComponent;
    }(BsDatepickerAbstractComponent));
    BsDaterangepickerContainerComponent.ɵfac = function BsDaterangepickerContainerComponent_Factory(t) { return new (t || BsDaterangepickerContainerComponent)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(BsDatepickerConfig), i0.ɵɵdirectiveInject(BsDatepickerStore), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(BsDatepickerActions), i0.ɵɵdirectiveInject(BsDatepickerEffects), i0.ɵɵdirectiveInject(i5.PositioningService)); };
    BsDaterangepickerContainerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: BsDaterangepickerContainerComponent, selectors: [["bs-daterangepicker-container"]], hostAttrs: ["role", "dialog", "aria-label", "calendar", 1, "bottom"], hostBindings: function BsDaterangepickerContainerComponent_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵlistener("click", function BsDaterangepickerContainerComponent_click_HostBindingHandler($event) { return ctx._stopPropagation($event); });
            }
        }, features: [i0.ɵɵProvidersFeature([BsDatepickerStore, BsDatepickerEffects]), i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 3, consts: [["class", "bs-datepicker", 3, "ngClass", 4, "ngIf"], [1, "bs-datepicker", 3, "ngClass"], [1, "bs-datepicker-container"], ["role", "application", 1, "bs-calendar-container", 3, "ngSwitch"], ["class", "bs-media-container", 4, "ngSwitchCase"], ["class", "bs-datepicker-buttons", 4, "ngIf"], ["class", "bs-datepicker-custom-range", 4, "ngIf"], [1, "bs-media-container"], [3, "bs-datepicker-multiple", "calendar", "options", "onNavigate", "onViewMode", "onHover", "onHoverWeek", "onSelect", 4, "ngFor", "ngForOf"], [3, "calendar", "options", "onNavigate", "onViewMode", "onHover", "onHoverWeek", "onSelect"], [3, "bs-datepicker-multiple", "calendar", "onNavigate", "onViewMode", "onHover", "onSelect", 4, "ngFor", "ngForOf"], [3, "calendar", "onNavigate", "onViewMode", "onHover", "onSelect"], [1, "bs-datepicker-buttons"], ["type", "button", 1, "btn", "btn-success"], ["type", "button", 1, "btn", "btn-default"], ["class", "btn-today-wrapper", 3, "today-left", "today-right", "today-center", 4, "ngIf"], ["class", "btn-clear-wrapper", 3, "clear-left", "clear-right", "clear-center", 4, "ngIf"], [1, "btn-today-wrapper"], [1, "btn", "btn-success", 3, "click"], [1, "btn-clear-wrapper"], [1, "bs-datepicker-custom-range"], [3, "selectedRange", "ranges", "customRangeLabel", "onSelect"]], template: function BsDaterangepickerContainerComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, BsDaterangepickerContainerComponent_div_0_Template, 10, 11, "div", 0);
                i0.ɵɵpipe(1, "async");
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 1, ctx.viewMode));
            }
        }, directives: [i6.NgIf, i6.NgClass, i6.NgSwitch, i6.NgSwitchCase, i6.NgForOf, BsDaysCalendarViewComponent, BsMonthCalendarViewComponent, BsYearsCalendarViewComponent, BsCustomDatesViewComponent], pipes: [i6.AsyncPipe], encapsulation: 2, data: { animation: [datepickerAnimation] } });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BsDaterangepickerContainerComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'bs-daterangepicker-container',
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
            }], function () { return [{ type: i0.Renderer2 }, { type: BsDatepickerConfig }, { type: BsDatepickerStore }, { type: i0.ElementRef }, { type: BsDatepickerActions }, { type: BsDatepickerEffects }, { type: i5.PositioningService }]; }, null);
    })();

    function BsDaterangepickerInlineContainerComponent_div_0_div_4_bs_days_calendar_view_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r10_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "bs-days-calendar-view", 9);
            i0.ɵɵlistener("onNavigate", function BsDaterangepickerInlineContainerComponent_div_0_div_4_bs_days_calendar_view_1_Template_bs_days_calendar_view_onNavigate_0_listener($event) { i0.ɵɵrestoreView(_r10_1); var ctx_r9 = i0.ɵɵnextContext(3); return ctx_r9.navigateTo($event); })("onViewMode", function BsDaterangepickerInlineContainerComponent_div_0_div_4_bs_days_calendar_view_1_Template_bs_days_calendar_view_onViewMode_0_listener($event) { i0.ɵɵrestoreView(_r10_1); var ctx_r11 = i0.ɵɵnextContext(3); return ctx_r11.setViewMode($event); })("onHover", function BsDaterangepickerInlineContainerComponent_div_0_div_4_bs_days_calendar_view_1_Template_bs_days_calendar_view_onHover_0_listener($event) { i0.ɵɵrestoreView(_r10_1); var ctx_r12 = i0.ɵɵnextContext(3); return ctx_r12.dayHoverHandler($event); })("onHoverWeek", function BsDaterangepickerInlineContainerComponent_div_0_div_4_bs_days_calendar_view_1_Template_bs_days_calendar_view_onHoverWeek_0_listener($event) { i0.ɵɵrestoreView(_r10_1); var ctx_r13 = i0.ɵɵnextContext(3); return ctx_r13.weekHoverHandler($event); })("onSelect", function BsDaterangepickerInlineContainerComponent_div_0_div_4_bs_days_calendar_view_1_Template_bs_days_calendar_view_onSelect_0_listener($event) { i0.ɵɵrestoreView(_r10_1); var ctx_r14 = i0.ɵɵnextContext(3); return ctx_r14.daySelectHandler($event); });
            i0.ɵɵpipe(1, "async");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var calendar_r8 = ctx.$implicit;
            var ctx_r7 = i0.ɵɵnextContext(3);
            i0.ɵɵclassProp("bs-datepicker-multiple", ctx_r7.multipleCalendars);
            i0.ɵɵproperty("calendar", calendar_r8)("options", i0.ɵɵpipeBind1(1, 4, ctx_r7.options$));
        }
    }
    function BsDaterangepickerInlineContainerComponent_div_0_div_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 7);
            i0.ɵɵtemplate(1, BsDaterangepickerInlineContainerComponent_div_0_div_4_bs_days_calendar_view_1_Template, 2, 6, "bs-days-calendar-view", 8);
            i0.ɵɵpipe(2, "async");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(2, 1, ctx_r1.daysCalendar$));
        }
    }
    function BsDaterangepickerInlineContainerComponent_div_0_div_5_bs_month_calendar_view_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r18_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "bs-month-calendar-view", 11);
            i0.ɵɵlistener("onNavigate", function BsDaterangepickerInlineContainerComponent_div_0_div_5_bs_month_calendar_view_1_Template_bs_month_calendar_view_onNavigate_0_listener($event) { i0.ɵɵrestoreView(_r18_1); var ctx_r17 = i0.ɵɵnextContext(3); return ctx_r17.navigateTo($event); })("onViewMode", function BsDaterangepickerInlineContainerComponent_div_0_div_5_bs_month_calendar_view_1_Template_bs_month_calendar_view_onViewMode_0_listener($event) { i0.ɵɵrestoreView(_r18_1); var ctx_r19 = i0.ɵɵnextContext(3); return ctx_r19.setViewMode($event); })("onHover", function BsDaterangepickerInlineContainerComponent_div_0_div_5_bs_month_calendar_view_1_Template_bs_month_calendar_view_onHover_0_listener($event) { i0.ɵɵrestoreView(_r18_1); var ctx_r20 = i0.ɵɵnextContext(3); return ctx_r20.monthHoverHandler($event); })("onSelect", function BsDaterangepickerInlineContainerComponent_div_0_div_5_bs_month_calendar_view_1_Template_bs_month_calendar_view_onSelect_0_listener($event) { i0.ɵɵrestoreView(_r18_1); var ctx_r21 = i0.ɵɵnextContext(3); return ctx_r21.monthSelectHandler($event); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var calendar_r16 = ctx.$implicit;
            var ctx_r15 = i0.ɵɵnextContext(3);
            i0.ɵɵclassProp("bs-datepicker-multiple", ctx_r15.multipleCalendars);
            i0.ɵɵproperty("calendar", calendar_r16);
        }
    }
    function BsDaterangepickerInlineContainerComponent_div_0_div_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 7);
            i0.ɵɵtemplate(1, BsDaterangepickerInlineContainerComponent_div_0_div_5_bs_month_calendar_view_1_Template, 1, 3, "bs-month-calendar-view", 10);
            i0.ɵɵpipe(2, "async");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(2, 1, ctx_r2.monthsCalendar));
        }
    }
    function BsDaterangepickerInlineContainerComponent_div_0_div_6_bs_years_calendar_view_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r25_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "bs-years-calendar-view", 11);
            i0.ɵɵlistener("onNavigate", function BsDaterangepickerInlineContainerComponent_div_0_div_6_bs_years_calendar_view_1_Template_bs_years_calendar_view_onNavigate_0_listener($event) { i0.ɵɵrestoreView(_r25_1); var ctx_r24 = i0.ɵɵnextContext(3); return ctx_r24.navigateTo($event); })("onViewMode", function BsDaterangepickerInlineContainerComponent_div_0_div_6_bs_years_calendar_view_1_Template_bs_years_calendar_view_onViewMode_0_listener($event) { i0.ɵɵrestoreView(_r25_1); var ctx_r26 = i0.ɵɵnextContext(3); return ctx_r26.setViewMode($event); })("onHover", function BsDaterangepickerInlineContainerComponent_div_0_div_6_bs_years_calendar_view_1_Template_bs_years_calendar_view_onHover_0_listener($event) { i0.ɵɵrestoreView(_r25_1); var ctx_r27 = i0.ɵɵnextContext(3); return ctx_r27.yearHoverHandler($event); })("onSelect", function BsDaterangepickerInlineContainerComponent_div_0_div_6_bs_years_calendar_view_1_Template_bs_years_calendar_view_onSelect_0_listener($event) { i0.ɵɵrestoreView(_r25_1); var ctx_r28 = i0.ɵɵnextContext(3); return ctx_r28.yearSelectHandler($event); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var calendar_r23 = ctx.$implicit;
            var ctx_r22 = i0.ɵɵnextContext(3);
            i0.ɵɵclassProp("bs-datepicker-multiple", ctx_r22.multipleCalendars);
            i0.ɵɵproperty("calendar", calendar_r23);
        }
    }
    function BsDaterangepickerInlineContainerComponent_div_0_div_6_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 7);
            i0.ɵɵtemplate(1, BsDaterangepickerInlineContainerComponent_div_0_div_6_bs_years_calendar_view_1_Template, 1, 3, "bs-years-calendar-view", 10);
            i0.ɵɵpipe(2, "async");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r3 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(2, 1, ctx_r3.yearsCalendar));
        }
    }
    function BsDaterangepickerInlineContainerComponent_div_0_div_7_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 12);
            i0.ɵɵelementStart(1, "button", 13);
            i0.ɵɵtext(2, "Apply");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "button", 14);
            i0.ɵɵtext(4, "Cancel");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
    }
    function BsDaterangepickerInlineContainerComponent_div_0_div_8_div_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r32_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 17);
            i0.ɵɵelementStart(1, "button", 18);
            i0.ɵɵlistener("click", function BsDaterangepickerInlineContainerComponent_div_0_div_8_div_1_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r32_1); var ctx_r31 = i0.ɵɵnextContext(3); return ctx_r31.setToday(); });
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r29 = i0.ɵɵnextContext(3);
            i0.ɵɵclassProp("today-left", ctx_r29.todayPos === "left")("today-right", ctx_r29.todayPos === "right")("today-center", ctx_r29.todayPos === "center");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx_r29.todayBtnLbl);
        }
    }
    function BsDaterangepickerInlineContainerComponent_div_0_div_8_div_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r34_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 19);
            i0.ɵɵelementStart(1, "button", 18);
            i0.ɵɵlistener("click", function BsDaterangepickerInlineContainerComponent_div_0_div_8_div_2_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r34_1); var ctx_r33 = i0.ɵɵnextContext(3); return ctx_r33.clearDate(); });
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r30 = i0.ɵɵnextContext(3);
            i0.ɵɵclassProp("clear-left", ctx_r30.clearPos === "left")("clear-right", ctx_r30.clearPos === "right")("clear-center", ctx_r30.clearPos === "center");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx_r30.clearBtnLbl);
        }
    }
    function BsDaterangepickerInlineContainerComponent_div_0_div_8_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 12);
            i0.ɵɵtemplate(1, BsDaterangepickerInlineContainerComponent_div_0_div_8_div_1_Template, 3, 7, "div", 15);
            i0.ɵɵtemplate(2, BsDaterangepickerInlineContainerComponent_div_0_div_8_div_2_Template, 3, 7, "div", 16);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r5 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r5.showTodayBtn);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r5.showClearBtn);
        }
    }
    function BsDaterangepickerInlineContainerComponent_div_0_div_9_Template(rf, ctx) {
        if (rf & 1) {
            var _r36_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 20);
            i0.ɵɵelementStart(1, "bs-custom-date-view", 21);
            i0.ɵɵlistener("onSelect", function BsDaterangepickerInlineContainerComponent_div_0_div_9_Template_bs_custom_date_view_onSelect_1_listener($event) { i0.ɵɵrestoreView(_r36_1); var ctx_r35 = i0.ɵɵnextContext(2); return ctx_r35.setRangeOnCalendar($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r6 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("selectedRange", ctx_r6.chosenRange)("ranges", ctx_r6.customRanges)("customRangeLabel", ctx_r6.customRangeBtnLbl);
        }
    }
    function BsDaterangepickerInlineContainerComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
            var _r38_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 1);
            i0.ɵɵelementStart(1, "div", 2);
            i0.ɵɵlistener("@datepickerAnimation.done", function BsDaterangepickerInlineContainerComponent_div_0_Template_div_animation_datepickerAnimation_done_1_listener() { i0.ɵɵrestoreView(_r38_1); var ctx_r37 = i0.ɵɵnextContext(); return ctx_r37.positionServiceEnable(); });
            i0.ɵɵelementStart(2, "div", 3);
            i0.ɵɵpipe(3, "async");
            i0.ɵɵtemplate(4, BsDaterangepickerInlineContainerComponent_div_0_div_4_Template, 3, 3, "div", 4);
            i0.ɵɵtemplate(5, BsDaterangepickerInlineContainerComponent_div_0_div_5_Template, 3, 3, "div", 4);
            i0.ɵɵtemplate(6, BsDaterangepickerInlineContainerComponent_div_0_div_6_Template, 3, 3, "div", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(7, BsDaterangepickerInlineContainerComponent_div_0_div_7_Template, 5, 0, "div", 5);
            i0.ɵɵtemplate(8, BsDaterangepickerInlineContainerComponent_div_0_div_8_Template, 3, 2, "div", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(9, BsDaterangepickerInlineContainerComponent_div_0_div_9_Template, 2, 3, "div", 6);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
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
        }
    }
    var BsDaterangepickerInlineContainerComponent = /** @class */ (function (_super) {
        __extends(BsDaterangepickerInlineContainerComponent, _super);
        function BsDaterangepickerInlineContainerComponent(_renderer, _config, _store, _element, _actions, _effects, _positioningService) {
            var _this = _super.call(this, _renderer, _config, _store, _element, _actions, _effects, _positioningService) || this;
            _renderer.setStyle(_element.nativeElement, 'display', 'inline-block');
            _renderer.setStyle(_element.nativeElement, 'position', 'static');
            return _this;
        }
        return BsDaterangepickerInlineContainerComponent;
    }(BsDaterangepickerContainerComponent));
    BsDaterangepickerInlineContainerComponent.ɵfac = function BsDaterangepickerInlineContainerComponent_Factory(t) { return new (t || BsDaterangepickerInlineContainerComponent)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(BsDatepickerConfig), i0.ɵɵdirectiveInject(BsDatepickerStore), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(BsDatepickerActions), i0.ɵɵdirectiveInject(BsDatepickerEffects), i0.ɵɵdirectiveInject(i5.PositioningService)); };
    BsDaterangepickerInlineContainerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: BsDaterangepickerInlineContainerComponent, selectors: [["bs-daterangepicker-inline-container"]], hostBindings: function BsDaterangepickerInlineContainerComponent_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵlistener("click", function BsDaterangepickerInlineContainerComponent_click_HostBindingHandler($event) { return ctx._stopPropagation($event); });
            }
        }, features: [i0.ɵɵProvidersFeature([BsDatepickerStore, BsDatepickerEffects]), i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 3, consts: [["class", "bs-datepicker", 3, "ngClass", 4, "ngIf"], [1, "bs-datepicker", 3, "ngClass"], [1, "bs-datepicker-container"], ["role", "application", 1, "bs-calendar-container", 3, "ngSwitch"], ["class", "bs-media-container", 4, "ngSwitchCase"], ["class", "bs-datepicker-buttons", 4, "ngIf"], ["class", "bs-datepicker-custom-range", 4, "ngIf"], [1, "bs-media-container"], [3, "bs-datepicker-multiple", "calendar", "options", "onNavigate", "onViewMode", "onHover", "onHoverWeek", "onSelect", 4, "ngFor", "ngForOf"], [3, "calendar", "options", "onNavigate", "onViewMode", "onHover", "onHoverWeek", "onSelect"], [3, "bs-datepicker-multiple", "calendar", "onNavigate", "onViewMode", "onHover", "onSelect", 4, "ngFor", "ngForOf"], [3, "calendar", "onNavigate", "onViewMode", "onHover", "onSelect"], [1, "bs-datepicker-buttons"], ["type", "button", 1, "btn", "btn-success"], ["type", "button", 1, "btn", "btn-default"], ["class", "btn-today-wrapper", 3, "today-left", "today-right", "today-center", 4, "ngIf"], ["class", "btn-clear-wrapper", 3, "clear-left", "clear-right", "clear-center", 4, "ngIf"], [1, "btn-today-wrapper"], [1, "btn", "btn-success", 3, "click"], [1, "btn-clear-wrapper"], [1, "bs-datepicker-custom-range"], [3, "selectedRange", "ranges", "customRangeLabel", "onSelect"]], template: function BsDaterangepickerInlineContainerComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, BsDaterangepickerInlineContainerComponent_div_0_Template, 10, 11, "div", 0);
                i0.ɵɵpipe(1, "async");
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 1, ctx.viewMode));
            }
        }, directives: [i6.NgIf, i6.NgClass, i6.NgSwitch, i6.NgSwitchCase, i6.NgForOf, BsDaysCalendarViewComponent, BsMonthCalendarViewComponent, BsYearsCalendarViewComponent, BsCustomDatesViewComponent], pipes: [i6.AsyncPipe], encapsulation: 2, data: { animation: [datepickerAnimation] } });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BsDaterangepickerInlineContainerComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'bs-daterangepicker-inline-container',
                        providers: [BsDatepickerStore, BsDatepickerEffects],
                        templateUrl: './bs-datepicker-view.html',
                        host: {
                            '(click)': '_stopPropagation($event)'
                        },
                        animations: [datepickerAnimation]
                    }]
            }], function () { return [{ type: i0.Renderer2 }, { type: BsDatepickerConfig }, { type: BsDatepickerStore }, { type: i0.ElementRef }, { type: BsDatepickerActions }, { type: BsDatepickerEffects }, { type: i5.PositioningService }]; }, null);
    })();

    var BsDaterangepickerInlineDirective = /** @class */ (function () {
        function BsDaterangepickerInlineDirective(_config, _elementRef, _renderer, _viewContainerRef, cis) {
            this._config = _config;
            this._elementRef = _elementRef;
            /**
             * Indicates whether datepicker is enabled or not
             */
            this.isDisabled = false;
            /**
             * Emits when daterangepicker value has been changed
             */
            this.bsValueChange = new i0.EventEmitter();
            this._subs = [];
            // todo: assign only subset of fields
            Object.assign(this, this._config);
            this._datepicker = cis.createLoader(_elementRef, _viewContainerRef, _renderer);
        }
        Object.defineProperty(BsDaterangepickerInlineDirective.prototype, "bsValue", {
            /**
             * Initial value of datepicker
             */
            set: function (value) {
                if (this._bsValue === value) {
                    return;
                }
                this._bsValue = value;
                this.bsValueChange.emit(value);
            },
            enumerable: false,
            configurable: true
        });
        BsDaterangepickerInlineDirective.prototype.ngOnInit = function () {
            var _this = this;
            this.setConfig();
            // if date changes from external source (model -> view)
            this._subs.push(this.bsValueChange.subscribe(function (value) {
                if (_this._datepickerRef) {
                    _this._datepickerRef.instance.value = value;
                }
            }));
            // if date changes from picker (view -> model)
            if (this._datepickerRef) {
                this._subs.push(this._datepickerRef.instance.valueChange
                    .pipe(operators.filter(function (range) { return range && range[0] && !!range[1]; }))
                    .subscribe(function (value) {
                    _this.bsValue = value;
                }));
            }
        };
        BsDaterangepickerInlineDirective.prototype.ngOnChanges = function (changes) {
            if (!this._datepickerRef || !this._datepickerRef.instance) {
                return;
            }
            if (changes.minDate) {
                this._datepickerRef.instance.minDate = this.minDate;
                this.setConfig();
            }
            if (changes.maxDate) {
                this._datepickerRef.instance.maxDate = this.maxDate;
                this.setConfig();
            }
            if (changes.datesEnabled) {
                this._datepickerRef.instance.datesEnabled = this.datesEnabled;
            }
            if (changes.datesDisabled) {
                this._datepickerRef.instance.datesDisabled = this.datesDisabled;
                this.setConfig();
            }
            if (changes.daysDisabled) {
                this._datepickerRef.instance.daysDisabled = this.daysDisabled;
                this.setConfig();
            }
            if (changes.isDisabled) {
                this._datepickerRef.instance.isDisabled = this.isDisabled;
                this.setConfig();
            }
            if (changes.dateCustomClasses) {
                this._datepickerRef.instance.dateCustomClasses = this.dateCustomClasses;
                this.setConfig();
            }
        };
        /**
         * Set config for datepicker
         */
        BsDaterangepickerInlineDirective.prototype.setConfig = function () {
            if (this._datepicker) {
                this._datepicker.hide();
            }
            this._config = Object.assign({}, this._config, this.bsConfig, {
                value: checkBsValue(this._bsValue, this.maxDate || this.bsConfig && this.bsConfig.maxDate),
                isDisabled: this.isDisabled,
                minDate: this.minDate || this.bsConfig && this.bsConfig.minDate,
                maxDate: this.maxDate || this.bsConfig && this.bsConfig.maxDate,
                daysDisabled: this.daysDisabled || this.bsConfig && this.bsConfig.daysDisabled,
                dateCustomClasses: this.dateCustomClasses || this.bsConfig && this.bsConfig.dateCustomClasses,
                datesDisabled: this.datesDisabled || this.bsConfig && this.bsConfig.datesDisabled,
                datesEnabled: this.datesEnabled || this.bsConfig && this.bsConfig.datesEnabled,
                ranges: checkRangesWithMaxDate(this.bsConfig && this.bsConfig.ranges, this.maxDate || this.bsConfig && this.bsConfig.maxDate),
                maxDateRange: this.bsConfig && this.bsConfig.maxDateRange
            });
            this._datepickerRef = this._datepicker
                .provide({ provide: BsDatepickerConfig, useValue: this._config })
                .attach(BsDaterangepickerInlineContainerComponent)
                .to(this._elementRef)
                .show();
        };
        BsDaterangepickerInlineDirective.prototype.ngOnDestroy = function () {
            this._datepicker.dispose();
        };
        return BsDaterangepickerInlineDirective;
    }());
    BsDaterangepickerInlineDirective.ɵfac = function BsDaterangepickerInlineDirective_Factory(t) { return new (t || BsDaterangepickerInlineDirective)(i0.ɵɵdirectiveInject(BsDaterangepickerInlineConfig), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i2.ComponentLoaderFactory)); };
    BsDaterangepickerInlineDirective.ɵdir = i0.ɵɵdefineDirective({ type: BsDaterangepickerInlineDirective, selectors: [["bs-daterangepicker-inline"]], inputs: { bsValue: "bsValue", bsConfig: "bsConfig", isDisabled: "isDisabled", minDate: "minDate", maxDate: "maxDate", dateCustomClasses: "dateCustomClasses", daysDisabled: "daysDisabled", datesDisabled: "datesDisabled", datesEnabled: "datesEnabled" }, outputs: { bsValueChange: "bsValueChange" }, exportAs: ["bsDaterangepickerInline"], features: [i0.ɵɵNgOnChangesFeature] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BsDaterangepickerInlineDirective, [{
                type: i0.Directive,
                args: [{
                        selector: 'bs-daterangepicker-inline',
                        exportAs: 'bsDaterangepickerInline'
                    }]
            }], function () { return [{ type: BsDaterangepickerInlineConfig }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i2.ComponentLoaderFactory }]; }, { bsValue: [{
                    type: i0.Input
                }], bsConfig: [{
                    type: i0.Input
                }], isDisabled: [{
                    type: i0.Input
                }], minDate: [{
                    type: i0.Input
                }], maxDate: [{
                    type: i0.Input
                }], dateCustomClasses: [{
                    type: i0.Input
                }], daysDisabled: [{
                    type: i0.Input
                }], datesDisabled: [{
                    type: i0.Input
                }], datesEnabled: [{
                    type: i0.Input
                }], bsValueChange: [{
                    type: i0.Output
                }] });
    })();

    var BS_DATEPICKER_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        useExisting: i0.forwardRef(function () { return BsDatepickerInputDirective; }),
        multi: true
    };
    var BS_DATEPICKER_VALIDATOR = {
        provide: forms.NG_VALIDATORS,
        useExisting: i0.forwardRef(function () { return BsDatepickerInputDirective; }),
        multi: true
    };
    var BsDatepickerInputDirective = /** @class */ (function () {
        function BsDatepickerInputDirective(_picker, _localeService, _renderer, _elRef, changeDetection) {
            this._picker = _picker;
            this._localeService = _localeService;
            this._renderer = _renderer;
            this._elRef = _elRef;
            this.changeDetection = changeDetection;
            this._onChange = Function.prototype;
            this._onTouched = Function.prototype;
            this._validatorChange = Function.prototype;
            this._subs = new rxjs.Subscription();
        }
        BsDatepickerInputDirective.prototype.ngOnInit = function () {
            var _this = this;
            var setBsValue = function (value) {
                _this._setInputValue(value);
                if (_this._value !== value) {
                    _this._value = value;
                    _this._onChange(value);
                    _this._onTouched();
                }
                _this.changeDetection.markForCheck();
            };
            // if value set via [bsValue] it will not get into value change
            if (this._picker._bsValue) {
                setBsValue(this._picker._bsValue);
            }
            // update input value on datepicker value update
            this._subs.add(this._picker.bsValueChange.subscribe(setBsValue));
            // update input value on locale change
            this._subs.add(this._localeService.localeChange.subscribe(function () {
                _this._setInputValue(_this._value);
            }));
            this._subs.add(this._picker.dateInputFormat$.pipe(operators.distinctUntilChanged()).subscribe(function () {
                _this._setInputValue(_this._value);
            }));
        };
        BsDatepickerInputDirective.prototype.ngOnDestroy = function () {
            this._subs.unsubscribe();
        };
        BsDatepickerInputDirective.prototype.onKeydownEvent = function (event) {
            if (event.keyCode === 13 || event.code === 'Enter') {
                this.hide();
            }
        };
        BsDatepickerInputDirective.prototype._setInputValue = function (value) {
            var initialDate = !value ? ''
                : chronos.formatDate(value, this._picker._config.dateInputFormat, this._localeService.currentLocale);
            this._renderer.setProperty(this._elRef.nativeElement, 'value', initialDate);
        };
        BsDatepickerInputDirective.prototype.onChange = function (event) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            this.writeValue(event.target.value);
            this._onChange(this._value);
            if (this._picker._config.returnFocusToInput) {
                this._renderer.selectRootElement(this._elRef.nativeElement).focus();
            }
            this._onTouched();
        };
        BsDatepickerInputDirective.prototype.validate = function (c) {
            var _value = c.value;
            if (_value === null || _value === undefined || _value === '') {
                return null;
            }
            if (chronos.isDate(_value)) {
                var _isDateValid = chronos.isDateValid(_value);
                if (!_isDateValid) {
                    return { bsDate: { invalid: _value } };
                }
                if (this._picker && this._picker.minDate && chronos.isBefore(_value, this._picker.minDate, 'date')) {
                    this.writeValue(this._picker.minDate);
                    return { bsDate: { minDate: this._picker.minDate } };
                }
                if (this._picker && this._picker.maxDate && chronos.isAfter(_value, this._picker.maxDate, 'date')) {
                    this.writeValue(this._picker.maxDate);
                    return { bsDate: { maxDate: this._picker.maxDate } };
                }
            }
            return null;
        };
        BsDatepickerInputDirective.prototype.registerOnValidatorChange = function (fn) {
            this._validatorChange = fn;
        };
        BsDatepickerInputDirective.prototype.writeValue = function (value) {
            if (!value) {
                this._value = void 0;
            }
            else {
                var _localeKey = this._localeService.currentLocale;
                var _locale = chronos.getLocale(_localeKey);
                if (!_locale) {
                    throw new Error("Locale \"" + _localeKey + "\" is not defined, please add it with \"defineLocale(...)\"");
                }
                this._value = chronos.parseDate(value, this._picker._config.dateInputFormat, this._localeService.currentLocale);
                if (this._picker._config.useUtc) {
                    this._value = chronos.utcAsLocal(this._value);
                }
            }
            this._picker.bsValue = this._value;
        };
        BsDatepickerInputDirective.prototype.setDisabledState = function (isDisabled) {
            this._picker.isDisabled = isDisabled;
            if (isDisabled) {
                this._renderer.setAttribute(this._elRef.nativeElement, 'disabled', 'disabled');
                return;
            }
            this._renderer.removeAttribute(this._elRef.nativeElement, 'disabled');
        };
        BsDatepickerInputDirective.prototype.registerOnChange = function (fn) {
            this._onChange = fn;
        };
        BsDatepickerInputDirective.prototype.registerOnTouched = function (fn) {
            this._onTouched = fn;
        };
        BsDatepickerInputDirective.prototype.onBlur = function () {
            this._onTouched();
        };
        BsDatepickerInputDirective.prototype.hide = function () {
            this._picker.hide();
            this._renderer.selectRootElement(this._elRef.nativeElement).blur();
            if (this._picker._config.returnFocusToInput) {
                this._renderer.selectRootElement(this._elRef.nativeElement).focus();
            }
        };
        return BsDatepickerInputDirective;
    }());
    BsDatepickerInputDirective.ɵfac = function BsDatepickerInputDirective_Factory(t) { return new (t || BsDatepickerInputDirective)(i0.ɵɵdirectiveInject(BsDatepickerDirective, 1), i0.ɵɵdirectiveInject(BsLocaleService), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    BsDatepickerInputDirective.ɵdir = i0.ɵɵdefineDirective({ type: BsDatepickerInputDirective, selectors: [["input", "bsDatepicker", ""]], hostBindings: function BsDatepickerInputDirective_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵlistener("change", function BsDatepickerInputDirective_change_HostBindingHandler($event) { return ctx.onChange($event); })("keyup.esc", function BsDatepickerInputDirective_keyup_esc_HostBindingHandler() { return ctx.hide(); })("keydown", function BsDatepickerInputDirective_keydown_HostBindingHandler($event) { return ctx.onKeydownEvent($event); })("blur", function BsDatepickerInputDirective_blur_HostBindingHandler() { return ctx.onBlur(); });
            }
        }, features: [i0.ɵɵProvidersFeature([BS_DATEPICKER_VALUE_ACCESSOR, BS_DATEPICKER_VALIDATOR])] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BsDatepickerInputDirective, [{
                type: i0.Directive,
                args: [{
                        selector: "input[bsDatepicker]",
                        // eslint-disable-next-line @angular-eslint/no-host-metadata-property
                        host: {
                            '(change)': 'onChange($event)',
                            '(keyup.esc)': 'hide()',
                            '(keydown)': 'onKeydownEvent($event)',
                            '(blur)': 'onBlur()'
                        },
                        providers: [BS_DATEPICKER_VALUE_ACCESSOR, BS_DATEPICKER_VALIDATOR]
                    }]
            }], function () {
            return [{ type: BsDatepickerDirective, decorators: [{
                            type: i0.Host
                        }] }, { type: BsLocaleService }, { type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i0.ChangeDetectorRef }];
        }, null);
    })();

    var BsDaterangepickerConfig = /** @class */ (function (_super) {
        __extends(BsDaterangepickerConfig, _super);
        function BsDaterangepickerConfig() {
            var _this = _super.apply(this, __spread(arguments)) || this;
            // DatepickerRenderOptions
            _this.displayMonths = 2;
            return _this;
        }
        return BsDaterangepickerConfig;
    }(BsDatepickerConfig));
    BsDaterangepickerConfig.ɵfac = function BsDaterangepickerConfig_Factory(t) { return ɵBsDaterangepickerConfig_BaseFactory(t || BsDaterangepickerConfig); };
    BsDaterangepickerConfig.ɵprov = i0.ɵɵdefineInjectable({ token: BsDaterangepickerConfig, factory: BsDaterangepickerConfig.ɵfac, providedIn: 'root' });
    var ɵBsDaterangepickerConfig_BaseFactory = /*@__PURE__*/ i0.ɵɵgetInheritedFactory(BsDaterangepickerConfig);
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BsDaterangepickerConfig, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], null, null);
    })();

    var BsDaterangepickerDirective = /** @class */ (function () {
        function BsDaterangepickerDirective(_config, _elementRef, _renderer, _viewContainerRef, cis) {
            this._config = _config;
            this._elementRef = _elementRef;
            this._renderer = _renderer;
            /**
             * Placement of a daterangepicker. Accepts: "top", "bottom", "left", "right"
             */
            this.placement = 'bottom';
            /**
             * Specifies events that should trigger. Supports a space separated list of
             * event names.
             */
            this.triggers = 'click';
            /**
             * Close daterangepicker on outside click
             */
            this.outsideClick = true;
            /**
             * A selector specifying the element the daterangepicker should be appended to.
             */
            this.container = 'body';
            this.outsideEsc = true;
            this.isDestroy$ = new rxjs.Subject();
            /**
             * Indicates whether daterangepicker's content is enabled or not
             */
            this.isDisabled = false;
            /**
             * Emits when daterangepicker value has been changed
             */
            this.bsValueChange = new i0.EventEmitter();
            this._subs = [];
            this._rangeInputFormat$ = new rxjs.Subject();
            this._datepicker = cis.createLoader(_elementRef, _viewContainerRef, _renderer);
            Object.assign(this, _config);
            this.onShown = this._datepicker.onShown;
            this.onHidden = this._datepicker.onHidden;
            this.isOpen$ = new rxjs.BehaviorSubject(this.isOpen);
        }
        Object.defineProperty(BsDaterangepickerDirective.prototype, "isOpen", {
            /**
             * Returns whether or not the daterangepicker is currently being shown
             */
            get: function () {
                return this._datepicker.isShown;
            },
            set: function (value) {
                this.isOpen$.next(value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BsDaterangepickerDirective.prototype, "bsValue", {
            /**
             * Initial value of daterangepicker
             */
            set: function (value) {
                if (this._bsValue === value) {
                    return;
                }
                this._bsValue = value;
                this.bsValueChange.emit(value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BsDaterangepickerDirective.prototype, "bsConfig", {
            get: function () {
                return this._bsConfig;
            },
            /**
             * Config object for daterangepicker
             */
            set: function (bsConfig) {
                this._bsConfig = bsConfig;
                this.setConfig();
                this._rangeInputFormat$.next(bsConfig && bsConfig.rangeInputFormat);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BsDaterangepickerDirective.prototype, "rangeInputFormat$", {
            get: function () {
                return this._rangeInputFormat$;
            },
            enumerable: false,
            configurable: true
        });
        BsDaterangepickerDirective.prototype.ngOnInit = function () {
            var _this = this;
            this.isDestroy$ = new rxjs.Subject();
            this._datepicker.listen({
                outsideClick: this.outsideClick,
                outsideEsc: this.outsideEsc,
                triggers: this.triggers,
                show: function () { return _this.show(); }
            });
            this.setConfig();
        };
        BsDaterangepickerDirective.prototype.ngOnChanges = function (changes) {
            if (!this._datepickerRef || !this._datepickerRef.instance) {
                return;
            }
            if (changes.minDate) {
                this._datepickerRef.instance.minDate = this.minDate;
            }
            if (changes.maxDate) {
                this._datepickerRef.instance.maxDate = this.maxDate;
            }
            if (changes.datesDisabled) {
                this._datepickerRef.instance.datesDisabled = this.datesDisabled;
            }
            if (changes.datesEnabled) {
                this._datepickerRef.instance.datesEnabled = this.datesEnabled;
            }
            if (changes.daysDisabled) {
                this._datepickerRef.instance.daysDisabled = this.daysDisabled;
            }
            if (changes.isDisabled) {
                this._datepickerRef.instance.isDisabled = this.isDisabled;
            }
            if (changes.dateCustomClasses) {
                this._datepickerRef.instance.dateCustomClasses = this.dateCustomClasses;
            }
        };
        BsDaterangepickerDirective.prototype.ngAfterViewInit = function () {
            var _this = this;
            this.isOpen$.pipe(operators.filter(function (isOpen) { return isOpen !== _this.isOpen; }), operators.takeUntil(this.isDestroy$))
                .subscribe(function () { return _this.toggle(); });
        };
        /**
         * Opens an element’s datepicker. This is considered a “manual” triggering of
         * the datepicker.
         */
        BsDaterangepickerDirective.prototype.show = function () {
            var _this = this;
            if (this._datepicker.isShown) {
                return;
            }
            this.setConfig();
            this._datepickerRef = this._datepicker
                .provide({ provide: BsDatepickerConfig, useValue: this._config })
                .attach(BsDaterangepickerContainerComponent)
                .to(this.container)
                .position({ attachment: this.placement })
                .show({ placement: this.placement });
            // if date changes from external source (model -> view)
            this._subs.push(this.bsValueChange.subscribe(function (value) {
                if (_this._datepickerRef) {
                    _this._datepickerRef.instance.value = value;
                }
            }));
            // if date changes from picker (view -> model)
            if (this._datepickerRef) {
                this._subs.push(this._datepickerRef.instance.valueChange
                    .pipe(operators.filter(function (range) { return range && range[0] && !!range[1]; }))
                    .subscribe(function (value) {
                    _this.bsValue = value;
                    _this.hide();
                }));
            }
        };
        /**
         * Set config for daterangepicker
         */
        BsDaterangepickerDirective.prototype.setConfig = function () {
            this._config = Object.assign({}, this._config, this.bsConfig, {
                value: checkBsValue(this._bsValue, this.maxDate || this.bsConfig && this.bsConfig.maxDate),
                isDisabled: this.isDisabled,
                minDate: this.minDate || this.bsConfig && this.bsConfig.minDate,
                maxDate: this.maxDate || this.bsConfig && this.bsConfig.maxDate,
                daysDisabled: this.daysDisabled || this.bsConfig && this.bsConfig.daysDisabled,
                dateCustomClasses: this.dateCustomClasses || this.bsConfig && this.bsConfig.dateCustomClasses,
                datesDisabled: this.datesDisabled || this.bsConfig && this.bsConfig.datesDisabled,
                datesEnabled: this.datesEnabled || this.bsConfig && this.bsConfig.datesEnabled,
                ranges: checkRangesWithMaxDate(this.bsConfig && this.bsConfig.ranges, this.maxDate || this.bsConfig && this.bsConfig.maxDate),
                maxDateRange: this.bsConfig && this.bsConfig.maxDateRange
            });
        };
        /**
         * Closes an element’s datepicker. This is considered a “manual” triggering of
         * the datepicker.
         */
        BsDaterangepickerDirective.prototype.hide = function () {
            var e_1, _a;
            if (this.isOpen) {
                this._datepicker.hide();
            }
            try {
                for (var _b = __values(this._subs), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var sub = _c.value;
                    sub.unsubscribe();
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            if (this._config.returnFocusToInput) {
                this._renderer.selectRootElement(this._elementRef.nativeElement).focus();
            }
        };
        /**
         * Toggles an element’s datepicker. This is considered a “manual” triggering
         * of the datepicker.
         */
        BsDaterangepickerDirective.prototype.toggle = function () {
            if (this.isOpen) {
                return this.hide();
            }
            this.show();
        };
        BsDaterangepickerDirective.prototype.ngOnDestroy = function () {
            this._datepicker.dispose();
            this.isOpen$.next(false);
            if (this.isDestroy$) {
                this.isDestroy$.next();
                this.isDestroy$.complete();
            }
        };
        return BsDaterangepickerDirective;
    }());
    BsDaterangepickerDirective.ɵfac = function BsDaterangepickerDirective_Factory(t) { return new (t || BsDaterangepickerDirective)(i0.ɵɵdirectiveInject(BsDaterangepickerConfig), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i2.ComponentLoaderFactory)); };
    BsDaterangepickerDirective.ɵdir = i0.ɵɵdefineDirective({ type: BsDaterangepickerDirective, selectors: [["", "bsDaterangepicker", ""]], inputs: { placement: "placement", triggers: "triggers", outsideClick: "outsideClick", container: "container", outsideEsc: "outsideEsc", isOpen: "isOpen", bsValue: "bsValue", bsConfig: "bsConfig", isDisabled: "isDisabled", minDate: "minDate", maxDate: "maxDate", dateCustomClasses: "dateCustomClasses", daysDisabled: "daysDisabled", datesDisabled: "datesDisabled", datesEnabled: "datesEnabled" }, outputs: { onShown: "onShown", onHidden: "onHidden", bsValueChange: "bsValueChange" }, exportAs: ["bsDaterangepicker"], features: [i0.ɵɵNgOnChangesFeature] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BsDaterangepickerDirective, [{
                type: i0.Directive,
                args: [{
                        selector: '[bsDaterangepicker]',
                        exportAs: 'bsDaterangepicker'
                    }]
            }], function () { return [{ type: BsDaterangepickerConfig }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i2.ComponentLoaderFactory }]; }, { placement: [{
                    type: i0.Input
                }], triggers: [{
                    type: i0.Input
                }], outsideClick: [{
                    type: i0.Input
                }], container: [{
                    type: i0.Input
                }], outsideEsc: [{
                    type: i0.Input
                }], isOpen: [{
                    type: i0.Input
                }], onShown: [{
                    type: i0.Output
                }], onHidden: [{
                    type: i0.Output
                }], bsValue: [{
                    type: i0.Input
                }], bsConfig: [{
                    type: i0.Input
                }], isDisabled: [{
                    type: i0.Input
                }], minDate: [{
                    type: i0.Input
                }], maxDate: [{
                    type: i0.Input
                }], dateCustomClasses: [{
                    type: i0.Input
                }], daysDisabled: [{
                    type: i0.Input
                }], datesDisabled: [{
                    type: i0.Input
                }], datesEnabled: [{
                    type: i0.Input
                }], bsValueChange: [{
                    type: i0.Output
                }] });
    })();

    var BS_DATERANGEPICKER_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        useExisting: i0.forwardRef(function () { return BsDaterangepickerInputDirective; }),
        multi: true
    };
    var BS_DATERANGEPICKER_VALIDATOR = {
        provide: forms.NG_VALIDATORS,
        useExisting: i0.forwardRef(function () { return BsDaterangepickerInputDirective; }),
        multi: true
    };
    var BsDaterangepickerInputDirective = /** @class */ (function () {
        function BsDaterangepickerInputDirective(_picker, _localeService, _renderer, _elRef, changeDetection) {
            this._picker = _picker;
            this._localeService = _localeService;
            this._renderer = _renderer;
            this._elRef = _elRef;
            this.changeDetection = changeDetection;
            this._onChange = Function.prototype;
            this._onTouched = Function.prototype;
            this._validatorChange = Function.prototype;
            this._subs = new rxjs.Subscription();
        }
        BsDaterangepickerInputDirective.prototype.ngOnInit = function () {
            var _this = this;
            var setBsValue = function (value) {
                _this._setInputValue(value);
                if (_this._value !== value) {
                    _this._value = value;
                    _this._onChange(value);
                    _this._onTouched();
                }
                _this.changeDetection.markForCheck();
            };
            // if value set via [bsValue] it will not get into value change
            if (this._picker._bsValue) {
                setBsValue(this._picker._bsValue);
            }
            // update input value on datepicker value update
            this._subs.add(this._picker.bsValueChange.subscribe(function (value) {
                _this._setInputValue(value);
                if (_this._value !== value) {
                    _this._value = value;
                    _this._onChange(value);
                    _this._onTouched();
                }
                _this.changeDetection.markForCheck();
            }));
            // update input value on locale change
            this._subs.add(this._localeService.localeChange.subscribe(function () {
                _this._setInputValue(_this._value);
            }));
            this._subs.add(
            // update input value on format change
            this._picker.rangeInputFormat$.pipe(operators.distinctUntilChanged()).subscribe(function () {
                _this._setInputValue(_this._value);
            }));
        };
        BsDaterangepickerInputDirective.prototype.ngOnDestroy = function () {
            this._subs.unsubscribe();
        };
        BsDaterangepickerInputDirective.prototype.onKeydownEvent = function (event) {
            if (event.keyCode === 13 || event.code === 'Enter') {
                this.hide();
            }
        };
        BsDaterangepickerInputDirective.prototype._setInputValue = function (date) {
            var range = '';
            if (date) {
                var start = !date[0] ? ''
                    : chronos.formatDate(date[0], this._picker._config.rangeInputFormat, this._localeService.currentLocale);
                var end = !date[1] ? ''
                    : chronos.formatDate(date[1], this._picker._config.rangeInputFormat, this._localeService.currentLocale);
                range = (start && end) ? start + this._picker._config.rangeSeparator + end : '';
            }
            this._renderer.setProperty(this._elRef.nativeElement, 'value', range);
        };
        BsDaterangepickerInputDirective.prototype.onChange = function (event) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            this.writeValue(event.target.value);
            this._onChange(this._value);
            if (this._picker._config.returnFocusToInput) {
                this._renderer.selectRootElement(this._elRef.nativeElement).focus();
            }
            this._onTouched();
        };
        BsDaterangepickerInputDirective.prototype.validate = function (c) {
            var _value = c.value;
            var errors = [];
            if (_value === null || _value === undefined || !chronos.isArray(_value)) {
                return null;
            }
            _value = _value.slice().sort(function (a, b) { return a.getTime() - b.getTime(); });
            var _isFirstDateValid = chronos.isDateValid(_value[0]);
            var _isSecondDateValid = chronos.isDateValid(_value[1]);
            if (!_isFirstDateValid) {
                return { bsDate: { invalid: _value[0] } };
            }
            if (!_isSecondDateValid) {
                return { bsDate: { invalid: _value[1] } };
            }
            if (this._picker && this._picker.minDate && chronos.isBefore(_value[0], this._picker.minDate, 'date')) {
                _value[0] = this._picker.minDate;
                errors.push({ bsDate: { minDate: this._picker.minDate } });
            }
            if (this._picker && this._picker.maxDate && chronos.isAfter(_value[1], this._picker.maxDate, 'date')) {
                _value[1] = this._picker.maxDate;
                errors.push({ bsDate: { maxDate: this._picker.maxDate } });
            }
            if (errors.length > 0) {
                this.writeValue(_value);
                return errors;
            }
            return null;
        };
        BsDaterangepickerInputDirective.prototype.registerOnValidatorChange = function (fn) {
            this._validatorChange = fn;
        };
        BsDaterangepickerInputDirective.prototype.writeValue = function (value) {
            var _this = this;
            if (!value) {
                this._value = void 0;
            }
            else {
                var _localeKey = this._localeService.currentLocale;
                var _locale = chronos.getLocale(_localeKey);
                if (!_locale) {
                    throw new Error("Locale \"" + _localeKey + "\" is not defined, please add it with \"defineLocale(...)\"");
                }
                var _input = [];
                if (typeof value === 'string') {
                    var trimmedSeparator = this._picker._config.rangeSeparator.trim();
                    _input = value
                        .split(trimmedSeparator.length > 0 ? trimmedSeparator : this._picker._config.rangeSeparator)
                        .map(function (_val) { return _val.trim(); });
                }
                if (Array.isArray(value)) {
                    _input = value;
                }
                this._value = _input
                    .map(function (_val) {
                    if (_this._picker._config.useUtc) {
                        return chronos.utcAsLocal(chronos.parseDate(_val, _this._picker._config.rangeInputFormat, _this._localeService.currentLocale));
                    }
                    return chronos.parseDate(_val, _this._picker._config.rangeInputFormat, _this._localeService.currentLocale);
                })
                    .map(function (date) { return (isNaN(date.valueOf()) ? void 0 : date); });
            }
            this._picker.bsValue = this._value;
        };
        BsDaterangepickerInputDirective.prototype.setDisabledState = function (isDisabled) {
            this._picker.isDisabled = isDisabled;
            if (isDisabled) {
                this._renderer.setAttribute(this._elRef.nativeElement, 'disabled', 'disabled');
                return;
            }
            this._renderer.removeAttribute(this._elRef.nativeElement, 'disabled');
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        BsDaterangepickerInputDirective.prototype.registerOnChange = function (fn) {
            this._onChange = fn;
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        BsDaterangepickerInputDirective.prototype.registerOnTouched = function (fn) {
            this._onTouched = fn;
        };
        BsDaterangepickerInputDirective.prototype.onBlur = function () {
            this._onTouched();
        };
        BsDaterangepickerInputDirective.prototype.hide = function () {
            this._picker.hide();
            this._renderer.selectRootElement(this._elRef.nativeElement).blur();
            if (this._picker._config.returnFocusToInput) {
                this._renderer.selectRootElement(this._elRef.nativeElement).focus();
            }
        };
        return BsDaterangepickerInputDirective;
    }());
    BsDaterangepickerInputDirective.ɵfac = function BsDaterangepickerInputDirective_Factory(t) { return new (t || BsDaterangepickerInputDirective)(i0.ɵɵdirectiveInject(BsDaterangepickerDirective, 1), i0.ɵɵdirectiveInject(BsLocaleService), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    BsDaterangepickerInputDirective.ɵdir = i0.ɵɵdefineDirective({ type: BsDaterangepickerInputDirective, selectors: [["input", "bsDaterangepicker", ""]], hostBindings: function BsDaterangepickerInputDirective_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵlistener("change", function BsDaterangepickerInputDirective_change_HostBindingHandler($event) { return ctx.onChange($event); })("keyup.esc", function BsDaterangepickerInputDirective_keyup_esc_HostBindingHandler() { return ctx.hide(); })("keydown", function BsDaterangepickerInputDirective_keydown_HostBindingHandler($event) { return ctx.onKeydownEvent($event); })("blur", function BsDaterangepickerInputDirective_blur_HostBindingHandler() { return ctx.onBlur(); });
            }
        }, features: [i0.ɵɵProvidersFeature([BS_DATERANGEPICKER_VALUE_ACCESSOR, BS_DATERANGEPICKER_VALIDATOR])] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BsDaterangepickerInputDirective, [{
                type: i0.Directive,
                args: [{
                        selector: "input[bsDaterangepicker]",
                        // eslint-disable-next-line @angular-eslint/no-host-metadata-property
                        host: {
                            '(change)': 'onChange($event)',
                            '(keyup.esc)': 'hide()',
                            '(keydown)': 'onKeydownEvent($event)',
                            '(blur)': 'onBlur()'
                        },
                        providers: [BS_DATERANGEPICKER_VALUE_ACCESSOR, BS_DATERANGEPICKER_VALIDATOR]
                    }]
            }], function () {
            return [{ type: BsDaterangepickerDirective, decorators: [{
                            type: i0.Host
                        }] }, { type: BsLocaleService }, { type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i0.ChangeDetectorRef }];
        }, null);
    })();

    var DateFormatter = /** @class */ (function () {
        function DateFormatter() {
        }
        DateFormatter.prototype.format = function (date, format, locale) {
            return chronos.formatDate(date, format, locale);
        };
        return DateFormatter;
    }());

    function DatePickerInnerComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 1);
            i0.ɵɵprojection(1);
            i0.ɵɵelementEnd();
        }
    }
    var _c0$2 = ["*"];
    var DatePickerInnerComponent = /** @class */ (function () {
        function DatePickerInnerComponent() {
            this.monthColLimit = 0;
            this.yearColLimit = 0;
            this.selectionDone = new i0.EventEmitter(undefined);
            this.update = new i0.EventEmitter(false);
            this.activeDateChange = new i0.EventEmitter(undefined);
            this.stepDay = {};
            this.stepMonth = {};
            this.stepYear = {};
            this.modes = ['day', 'month', 'year'];
            this.dateFormatter = new DateFormatter();
        }
        Object.defineProperty(DatePickerInnerComponent.prototype, "activeDate", {
            get: function () {
                return this._activeDate;
            },
            set: function (value) {
                this._activeDate = value;
            },
            enumerable: false,
            configurable: true
        });
        // todo: add formatter value to Date object
        DatePickerInnerComponent.prototype.ngOnInit = function () {
            // todo: use date for unique value
            this.uniqueId = "datepicker--" + Math.floor(Math.random() * 10000);
            if (this.initDate) {
                this.activeDate = this.initDate;
                this.selectedDate = new Date(this.activeDate.valueOf());
                this.update.emit(this.activeDate);
            }
            else if (this.activeDate === undefined) {
                this.activeDate = new Date();
            }
        };
        // this.refreshView should be called here to reflect the changes on the fly
        DatePickerInnerComponent.prototype.ngOnChanges = function (changes) {
            this.refreshView();
            this.checkIfActiveDateGotUpdated(changes.activeDate);
        };
        // Check if activeDate has been update and then emit the activeDateChange with the new date
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        DatePickerInnerComponent.prototype.checkIfActiveDateGotUpdated = function (activeDate) {
            if (activeDate && !activeDate.firstChange) {
                var previousValue = activeDate.previousValue;
                if (previousValue &&
                    previousValue instanceof Date &&
                    previousValue.getTime() !== activeDate.currentValue.getTime()) {
                    this.activeDateChange.emit(this.activeDate);
                }
            }
        };
        DatePickerInnerComponent.prototype.setCompareHandler = function (handler, type) {
            if (type === 'day') {
                this.compareHandlerDay = handler;
            }
            if (type === 'month') {
                this.compareHandlerMonth = handler;
            }
            if (type === 'year') {
                this.compareHandlerYear = handler;
            }
        };
        DatePickerInnerComponent.prototype.compare = function (date1, date2) {
            if (date1 === undefined || date2 === undefined) {
                return undefined;
            }
            if (this.datepickerMode === 'day' && this.compareHandlerDay) {
                return this.compareHandlerDay(date1, date2);
            }
            if (this.datepickerMode === 'month' && this.compareHandlerMonth) {
                return this.compareHandlerMonth(date1, date2);
            }
            if (this.datepickerMode === 'year' && this.compareHandlerYear) {
                return this.compareHandlerYear(date1, date2);
            }
            return void 0;
        };
        DatePickerInnerComponent.prototype.setRefreshViewHandler = function (handler, type) {
            if (type === 'day') {
                this.refreshViewHandlerDay = handler;
            }
            if (type === 'month') {
                this.refreshViewHandlerMonth = handler;
            }
            if (type === 'year') {
                this.refreshViewHandlerYear = handler;
            }
        };
        DatePickerInnerComponent.prototype.refreshView = function () {
            if (this.datepickerMode === 'day' && this.refreshViewHandlerDay) {
                this.refreshViewHandlerDay();
            }
            if (this.datepickerMode === 'month' && this.refreshViewHandlerMonth) {
                this.refreshViewHandlerMonth();
            }
            if (this.datepickerMode === 'year' && this.refreshViewHandlerYear) {
                this.refreshViewHandlerYear();
            }
        };
        DatePickerInnerComponent.prototype.dateFilter = function (date, format) {
            return this.dateFormatter.format(date, format, this.locale);
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        DatePickerInnerComponent.prototype.isActive = function (dateObject) {
            if (this.compare(dateObject.date, this.activeDate) === 0) {
                this.activeDateId = dateObject.uid;
                return true;
            }
            return false;
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        DatePickerInnerComponent.prototype.createDateObject = function (date, format) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            var dateObject = {};
            dateObject.date = new Date(date.getFullYear(), date.getMonth(), date.getDate());
            dateObject.date = this.fixTimeZone(dateObject.date);
            dateObject.label = this.dateFilter(date, format);
            dateObject.selected = this.compare(date, this.selectedDate) === 0;
            dateObject.disabled = this.isDisabled(date);
            dateObject.current = this.compare(date, new Date()) === 0;
            dateObject.customClass = this.getCustomClassForDate(dateObject.date);
            return dateObject;
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        DatePickerInnerComponent.prototype.split = function (arr, size) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            var arrays = [];
            while (arr.length > 0) {
                arrays.push(arr.splice(0, size));
            }
            return arrays;
        };
        // Fix a hard-reproducible bug with timezones
        // The bug depends on OS, browser, current timezone and current date
        // i.e.
        // var date = new Date(2014, 0, 1);
        // console.log(date.getFullYear(), date.getMonth(), date.getDate(),
        // date.getHours()); can result in "2013 11 31 23" because of the bug.
        DatePickerInnerComponent.prototype.fixTimeZone = function (date) {
            var hours = date.getHours();
            return new Date(date.getFullYear(), date.getMonth(), date.getDate(), hours === 23 ? hours + 2 : 0);
        };
        DatePickerInnerComponent.prototype.select = function (date, isManual) {
            if (isManual === void 0) { isManual = true; }
            if (this.datepickerMode === this.minMode) {
                if (!this.activeDate) {
                    this.activeDate = new Date(0, 0, 0, 0, 0, 0, 0);
                }
                this.activeDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
                this.activeDate = this.fixTimeZone(this.activeDate);
                if (isManual) {
                    this.selectionDone.emit(this.activeDate);
                }
            }
            else {
                this.activeDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
                this.activeDate = this.fixTimeZone(this.activeDate);
                if (isManual && this.datepickerMode) {
                    this.datepickerMode = this.modes[this.modes.indexOf(this.datepickerMode) - 1];
                }
            }
            this.selectedDate = new Date(this.activeDate.valueOf());
            this.update.emit(this.activeDate);
            this.refreshView();
        };
        DatePickerInnerComponent.prototype.move = function (direction) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            var expectedStep;
            if (this.datepickerMode === 'day') {
                expectedStep = this.stepDay;
            }
            if (this.datepickerMode === 'month') {
                expectedStep = this.stepMonth;
            }
            if (this.datepickerMode === 'year') {
                expectedStep = this.stepYear;
            }
            if (expectedStep && this.activeDate) {
                var year = this.activeDate.getFullYear() + direction * (expectedStep.years || 0);
                var month = this.activeDate.getMonth() + direction * (expectedStep.months || 0);
                this.activeDate = new Date(year, month, 1);
                this.refreshView();
                this.activeDateChange.emit(this.activeDate);
            }
        };
        DatePickerInnerComponent.prototype.toggleMode = function (_direction) {
            var direction = _direction || 1;
            if ((this.datepickerMode === this.maxMode && direction === 1) ||
                (this.datepickerMode === this.minMode && direction === -1)) {
                return;
            }
            if (this.datepickerMode) {
                this.datepickerMode = this.modes[this.modes.indexOf(this.datepickerMode) + direction];
            }
            this.refreshView();
        };
        DatePickerInnerComponent.prototype.getCustomClassForDate = function (date) {
            var _this = this;
            if (!this.customClass) {
                return '';
            }
            // todo: build a hash of custom classes, it will work faster
            var customClassObject = this.customClass.find(function (customClass) {
                return (customClass.date.valueOf() === date.valueOf() &&
                    customClass.mode === _this.datepickerMode);
            }, this);
            return customClassObject === undefined ? '' : customClassObject.clazz;
        };
        DatePickerInnerComponent.prototype.compareDateDisabled = function (date1Disabled, date2) {
            if (date1Disabled === undefined || date2 === undefined) {
                return undefined;
            }
            if (date1Disabled.mode === 'day' && this.compareHandlerDay) {
                return this.compareHandlerDay(date1Disabled.date, date2);
            }
            if (date1Disabled.mode === 'month' && this.compareHandlerMonth) {
                return this.compareHandlerMonth(date1Disabled.date, date2);
            }
            if (date1Disabled.mode === 'year' && this.compareHandlerYear) {
                return this.compareHandlerYear(date1Disabled.date, date2);
            }
            return undefined;
        };
        DatePickerInnerComponent.prototype.isDisabled = function (date) {
            var _this = this;
            var isDateDisabled = false;
            if (this.dateDisabled) {
                this.dateDisabled.forEach(function (disabledDate) {
                    if (_this.compareDateDisabled(disabledDate, date) === 0) {
                        isDateDisabled = true;
                    }
                });
            }
            if (this.dayDisabled) {
                isDateDisabled =
                    isDateDisabled ||
                        this.dayDisabled.indexOf(date.getDay()) > -1;
            }
            if (isDateDisabled) {
                return isDateDisabled;
            }
            var minDate = Number(this.minDate && this.compare(date, this.minDate));
            if (!isNaN(minDate)) {
                return minDate < 0;
            }
            var maxDate = Number(this.maxDate && this.compare(date, this.maxDate));
            if (!isNaN(maxDate)) {
                return maxDate > 0;
            }
            return false;
        };
        return DatePickerInnerComponent;
    }());
    DatePickerInnerComponent.ɵfac = function DatePickerInnerComponent_Factory(t) { return new (t || DatePickerInnerComponent)(); };
    DatePickerInnerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DatePickerInnerComponent, selectors: [["datepicker-inner"]], inputs: { locale: "locale", datepickerMode: "datepickerMode", startingDay: "startingDay", yearRange: "yearRange", minDate: "minDate", maxDate: "maxDate", minMode: "minMode", maxMode: "maxMode", showWeeks: "showWeeks", formatDay: "formatDay", formatMonth: "formatMonth", formatYear: "formatYear", formatDayHeader: "formatDayHeader", formatDayTitle: "formatDayTitle", formatMonthTitle: "formatMonthTitle", onlyCurrentMonth: "onlyCurrentMonth", shortcutPropagation: "shortcutPropagation", customClass: "customClass", monthColLimit: "monthColLimit", yearColLimit: "yearColLimit", dateDisabled: "dateDisabled", dayDisabled: "dayDisabled", initDate: "initDate", activeDate: "activeDate" }, outputs: { selectionDone: "selectionDone", update: "update", activeDateChange: "activeDateChange" }, features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0$2, decls: 1, vars: 1, consts: [["class", "well well-sm bg-faded p-a card", "role", "application", 4, "ngIf"], ["role", "application", 1, "well", "well-sm", "bg-faded", "p-a", "card"]], template: function DatePickerInnerComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵprojectionDef();
                i0.ɵɵtemplate(0, DatePickerInnerComponent_div_0_Template, 2, 0, "div", 0);
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngIf", ctx.datepickerMode);
            }
        }, directives: [i6.NgIf], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DatePickerInnerComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'datepicker-inner',
                        template: "\n    <!--&lt;!&ndash;ng-keydown=\"keydown($event)\"&ndash;&gt;-->\n    <div *ngIf='datepickerMode' class='well well-sm bg-faded p-a card' role='application'>\n      <ng-content></ng-content>\n    </div>\n  "
                    }]
            }], null, { locale: [{
                    type: i0.Input
                }], datepickerMode: [{
                    type: i0.Input
                }], startingDay: [{
                    type: i0.Input
                }], yearRange: [{
                    type: i0.Input
                }], minDate: [{
                    type: i0.Input
                }], maxDate: [{
                    type: i0.Input
                }], minMode: [{
                    type: i0.Input
                }], maxMode: [{
                    type: i0.Input
                }], showWeeks: [{
                    type: i0.Input
                }], formatDay: [{
                    type: i0.Input
                }], formatMonth: [{
                    type: i0.Input
                }], formatYear: [{
                    type: i0.Input
                }], formatDayHeader: [{
                    type: i0.Input
                }], formatDayTitle: [{
                    type: i0.Input
                }], formatMonthTitle: [{
                    type: i0.Input
                }], onlyCurrentMonth: [{
                    type: i0.Input
                }], shortcutPropagation: [{
                    type: i0.Input
                }], customClass: [{
                    type: i0.Input
                }], monthColLimit: [{
                    type: i0.Input
                }], yearColLimit: [{
                    type: i0.Input
                }], dateDisabled: [{
                    type: i0.Input
                }], dayDisabled: [{
                    type: i0.Input
                }], initDate: [{
                    type: i0.Input
                }], selectionDone: [{
                    type: i0.Output
                }], update: [{
                    type: i0.Output
                }], activeDateChange: [{
                    type: i0.Output
                }], activeDate: [{
                    type: i0.Input
                }] });
    })();

    var DatepickerConfig = /** @class */ (function () {
        function DatepickerConfig() {
            this.locale = 'en';
            this.datepickerMode = 'day';
            this.startingDay = 0;
            this.yearRange = 20;
            this.minMode = 'day';
            this.maxMode = 'year';
            this.showWeeks = true;
            this.formatDay = 'DD';
            this.formatMonth = 'MMMM';
            this.formatYear = 'YYYY';
            this.formatDayHeader = 'dd';
            this.formatDayTitle = 'MMMM YYYY';
            this.formatMonthTitle = 'YYYY';
            this.onlyCurrentMonth = false;
            this.monthColLimit = 3;
            this.yearColLimit = 5;
            this.shortcutPropagation = false;
        }
        return DatepickerConfig;
    }());
    DatepickerConfig.ɵfac = function DatepickerConfig_Factory(t) { return new (t || DatepickerConfig)(); };
    DatepickerConfig.ɵprov = i0.ɵɵdefineInjectable({ token: DatepickerConfig, factory: DatepickerConfig.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DatepickerConfig, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], null, null);
    })();

    // @deprecated
    function DayPickerComponent_table_0_button_4_Template(rf, ctx) {
        if (rf & 1) {
            var _r9_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 8);
            i0.ɵɵlistener("click", function DayPickerComponent_table_0_button_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r9_1); var ctx_r8 = i0.ɵɵnextContext(2); return ctx_r8.datePicker.move(-1); });
            i0.ɵɵtext(1, "\u2039");
            i0.ɵɵelementEnd();
        }
    }
    function DayPickerComponent_table_0_button_5_Template(rf, ctx) {
        if (rf & 1) {
            var _r11_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 8);
            i0.ɵɵlistener("click", function DayPickerComponent_table_0_button_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r11_1); var ctx_r10 = i0.ɵɵnextContext(2); return ctx_r10.datePicker.move(-1); });
            i0.ɵɵtext(1, "<");
            i0.ɵɵelementEnd();
        }
    }
    function DayPickerComponent_table_0_button_11_Template(rf, ctx) {
        if (rf & 1) {
            var _r13_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 9);
            i0.ɵɵlistener("click", function DayPickerComponent_table_0_button_11_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r13_1); var ctx_r12 = i0.ɵɵnextContext(2); return ctx_r12.datePicker.move(1); });
            i0.ɵɵtext(1, "\u203A");
            i0.ɵɵelementEnd();
        }
    }
    function DayPickerComponent_table_0_button_12_Template(rf, ctx) {
        if (rf & 1) {
            var _r15_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 9);
            i0.ɵɵlistener("click", function DayPickerComponent_table_0_button_12_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r15_1); var ctx_r14 = i0.ɵɵnextContext(2); return ctx_r14.datePicker.move(1); });
            i0.ɵɵtext(1, "> ");
            i0.ɵɵelementEnd();
        }
    }
    function DayPickerComponent_table_0_th_14_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "th");
        }
    }
    function DayPickerComponent_table_0_th_15_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "th", 10);
            i0.ɵɵelementStart(1, "small", 11);
            i0.ɵɵelementStart(2, "b");
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var labelz_r16 = ctx.$implicit;
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(labelz_r16.abbr);
        }
    }
    function DayPickerComponent_table_0_ng_template_17_tr_0_td_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "td", 10);
            i0.ɵɵelementStart(1, "em");
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var index_r18 = i0.ɵɵnextContext(2).index;
            var ctx_r20 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx_r20.weekNumbers[index_r18]);
        }
    }
    var _c0$3 = function (a0, a1, a2, a3, a4) { return { "btn-secondary": a0, "btn-info": a1, disabled: a2, active: a3, "btn-default": a4 }; };
    var _c1$1 = function (a0, a1) { return { "text-muted": a0, "text-info": a1 }; };
    function DayPickerComponent_table_0_ng_template_17_tr_0_td_2_button_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r27_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 16);
            i0.ɵɵlistener("click", function DayPickerComponent_table_0_ng_template_17_tr_0_td_2_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r27_1); var dtz_r23 = i0.ɵɵnextContext().$implicit; var ctx_r25 = i0.ɵɵnextContext(4); return ctx_r25.datePicker.select(dtz_r23.date); });
            i0.ɵɵelementStart(1, "span", 17);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var dtz_r23 = i0.ɵɵnextContext().$implicit;
            var ctx_r24 = i0.ɵɵnextContext(4);
            i0.ɵɵclassMapInterpolate1("btn btn-sm ", dtz_r23.customClass, "");
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction5(7, _c0$3, ctx_r24.isBs4 && !dtz_r23.selected && !ctx_r24.datePicker.isActive(dtz_r23), dtz_r23.selected, dtz_r23.disabled, !ctx_r24.isBs4 && ctx_r24.datePicker.isActive(dtz_r23), !ctx_r24.isBs4))("disabled", dtz_r23.disabled);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(13, _c1$1, dtz_r23.secondary || dtz_r23.current, !ctx_r24.isBs4 && dtz_r23.current));
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(dtz_r23.label);
        }
    }
    function DayPickerComponent_table_0_ng_template_17_tr_0_td_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "td", 14);
            i0.ɵɵtemplate(1, DayPickerComponent_table_0_ng_template_17_tr_0_td_2_button_1_Template, 3, 16, "button", 15);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var dtz_r23 = ctx.$implicit;
            var ctx_r21 = i0.ɵɵnextContext(4);
            i0.ɵɵproperty("id", dtz_r23.uid);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !(ctx_r21.datePicker.onlyCurrentMonth && dtz_r23.secondary));
        }
    }
    function DayPickerComponent_table_0_ng_template_17_tr_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "tr");
            i0.ɵɵtemplate(1, DayPickerComponent_table_0_ng_template_17_tr_0_td_1_Template, 3, 1, "td", 12);
            i0.ɵɵtemplate(2, DayPickerComponent_table_0_ng_template_17_tr_0_td_2_Template, 2, 2, "td", 13);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var rowz_r17 = i0.ɵɵnextContext().$implicit;
            var ctx_r19 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r19.datePicker.showWeeks);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", rowz_r17);
        }
    }
    function DayPickerComponent_table_0_ng_template_17_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtemplate(0, DayPickerComponent_table_0_ng_template_17_tr_0_Template, 3, 2, "tr", 5);
        }
        if (rf & 2) {
            var rowz_r17 = ctx.$implicit;
            var ctx_r7 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("ngIf", !(ctx_r7.datePicker.onlyCurrentMonth && rowz_r17[0].secondary && rowz_r17[6].secondary));
        }
    }
    var _c2 = function (a0) { return { disabled: a0 }; };
    function DayPickerComponent_table_0_Template(rf, ctx) {
        if (rf & 1) {
            var _r31_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "table", 1);
            i0.ɵɵelementStart(1, "thead");
            i0.ɵɵelementStart(2, "tr");
            i0.ɵɵelementStart(3, "th");
            i0.ɵɵtemplate(4, DayPickerComponent_table_0_button_4_Template, 2, 0, "button", 2);
            i0.ɵɵtemplate(5, DayPickerComponent_table_0_button_5_Template, 2, 0, "button", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "th");
            i0.ɵɵelementStart(7, "button", 3);
            i0.ɵɵlistener("click", function DayPickerComponent_table_0_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r31_1); var ctx_r30 = i0.ɵɵnextContext(); return ctx_r30.datePicker.toggleMode(0); });
            i0.ɵɵelementStart(8, "strong");
            i0.ɵɵtext(9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "th");
            i0.ɵɵtemplate(11, DayPickerComponent_table_0_button_11_Template, 2, 0, "button", 4);
            i0.ɵɵtemplate(12, DayPickerComponent_table_0_button_12_Template, 2, 0, "button", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "tr");
            i0.ɵɵtemplate(14, DayPickerComponent_table_0_th_14_Template, 1, 0, "th", 5);
            i0.ɵɵtemplate(15, DayPickerComponent_table_0_th_15_Template, 4, 1, "th", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "tbody");
            i0.ɵɵtemplate(17, DayPickerComponent_table_0_ng_template_17_Template, 1, 1, "ng-template", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵattribute("aria-labelledby", ctx_r0.datePicker.uniqueId + "-title");
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngIf", !ctx_r0.isBs4);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r0.isBs4);
            i0.ɵɵadvance(1);
            i0.ɵɵattribute("colspan", 5 + (ctx_r0.datePicker.showWeeks ? 1 : 0));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("id", ctx_r0.datePicker.uniqueId + "-title")("disabled", ctx_r0.datePicker.datepickerMode === ctx_r0.datePicker.maxMode)("ngClass", i0.ɵɵpureFunction1(13, _c2, ctx_r0.datePicker.datepickerMode === ctx_r0.datePicker.maxMode));
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx_r0.title);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", !ctx_r0.isBs4);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r0.isBs4);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx_r0.datePicker.showWeeks);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx_r0.labels);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx_r0.rows);
        }
    }
    var DayPickerComponent = /** @class */ (function () {
        function DayPickerComponent(datePicker) {
            this.labels = [];
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            this.rows = [];
            this.weekNumbers = [];
            this.datePicker = datePicker;
        }
        Object.defineProperty(DayPickerComponent.prototype, "isBs4", {
            get: function () {
                return !utils.isBs3();
            },
            enumerable: false,
            configurable: true
        });
        /*protected getDaysInMonth(year:number, month:number) {
         return ((month === 1) && (year % 4 === 0) &&
         ((year % 100 !== 0) || (year % 400 === 0))) ? 29 : DAYS_IN_MONTH[month];
         }*/
        DayPickerComponent.prototype.ngOnInit = function () {
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            var self = this;
            this.datePicker.stepDay = { months: 1 };
            // todo valorkin fix
            this.datePicker.setRefreshViewHandler(function () {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                // eslint-disable-next-line @typescript-eslint/no-this-alias
                var that = this;
                var year = that.activeDate.getFullYear();
                var month = that.activeDate.getMonth();
                var firstDayOfMonth = new Date(year, month, 1);
                var difference = that.startingDay - firstDayOfMonth.getDay();
                var numDisplayedFromPreviousMonth = difference > 0 ? 7 - difference : -difference;
                var firstDate = new Date(firstDayOfMonth.getTime());
                if (numDisplayedFromPreviousMonth > 0) {
                    firstDate.setDate(-numDisplayedFromPreviousMonth + 1);
                }
                // 42 is the number of days on a six-week calendar
                var _days = self.getDates(firstDate, 42);
                var days = [];
                for (var i = 0; i < 42; i++) {
                    var _dateObject = that.createDateObject(_days[i], that.formatDay);
                    _dateObject.secondary = _days[i].getMonth() !== month;
                    _dateObject.uid = that.uniqueId + '-' + i;
                    days[i] = _dateObject;
                }
                self.labels = [];
                for (var j = 0; j < 7; j++) {
                    self.labels[j] = {};
                    self.labels[j].abbr = that.dateFilter(days[j].date, that.formatDayHeader);
                    self.labels[j].full = that.dateFilter(days[j].date, 'EEEE');
                }
                self.title = that.dateFilter(that.activeDate, that.formatDayTitle);
                self.rows = that.split(days, 7);
                if (that.showWeeks) {
                    self.weekNumbers = [];
                    var thursdayIndex = (4 + 7 - that.startingDay) % 7;
                    var numWeeks = self.rows.length;
                    for (var curWeek = 0; curWeek < numWeeks; curWeek++) {
                        var _date = self.rows[curWeek][thursdayIndex].date;
                        if (_date) {
                            self.weekNumbers.push(self.getISO8601WeekNumber(_date));
                        }
                    }
                }
            }, 'day');
            this.datePicker.setCompareHandler(function (date1, date2) {
                var d1 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate());
                var d2 = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate());
                return d1.getTime() - d2.getTime();
            }, 'day');
            this.datePicker.refreshView();
        };
        DayPickerComponent.prototype.getDates = function (startDate, n) {
            var dates = new Array(n);
            var current = new Date(startDate.getTime());
            var i = 0;
            var date;
            while (i < n) {
                date = new Date(current.getTime());
                date = this.datePicker.fixTimeZone(date);
                dates[i++] = date;
                current = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
            }
            return dates;
        };
        DayPickerComponent.prototype.getISO8601WeekNumber = function (date) {
            var checkDate = new Date(date.getTime());
            // Thursday
            checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));
            var time = checkDate.getTime();
            // Compare with Jan 1
            checkDate.setMonth(0);
            checkDate.setDate(1);
            return (Math.floor(Math.round((time - checkDate.getTime()) / 86400000) / 7) + 1);
        };
        return DayPickerComponent;
    }());
    DayPickerComponent.ɵfac = function DayPickerComponent_Factory(t) { return new (t || DayPickerComponent)(i0.ɵɵdirectiveInject(DatePickerInnerComponent)); };
    DayPickerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DayPickerComponent, selectors: [["daypicker"]], decls: 1, vars: 1, consts: [["role", "grid", "aria-activedescendant", "activeDateId", 4, "ngIf"], ["role", "grid", "aria-activedescendant", "activeDateId"], ["type", "button", "class", "btn btn-default btn-secondary btn-sm pull-left float-left", "tabindex", "-1", 3, "click", 4, "ngIf"], ["type", "button", "tabindex", "-1", 1, "btn", "btn-default", "btn-secondary", "btn-sm", 2, "width", "100%", 3, "id", "disabled", "ngClass", "click"], ["type", "button", "class", "btn btn-default btn-secondary btn-sm pull-right float-right", "tabindex", "-1", 3, "click", 4, "ngIf"], [4, "ngIf"], ["class", "text-center", 4, "ngFor", "ngForOf"], ["ngFor", "", 3, "ngForOf"], ["type", "button", "tabindex", "-1", 1, "btn", "btn-default", "btn-secondary", "btn-sm", "pull-left", "float-left", 3, "click"], ["type", "button", "tabindex", "-1", 1, "btn", "btn-default", "btn-secondary", "btn-sm", "pull-right", "float-right", 3, "click"], [1, "text-center"], ["aria-label", "labelz.full"], ["class", "h6", "class", "text-center", 4, "ngIf"], ["class", "text-center", "role", "gridcell", 3, "id", 4, "ngFor", "ngForOf"], ["role", "gridcell", 1, "text-center", 3, "id"], ["type", "button", "style", "min-width:100%;", "tabindex", "-1", 3, "class", "ngClass", "disabled", "click", 4, "ngIf"], ["type", "button", "tabindex", "-1", 2, "min-width", "100%", 3, "ngClass", "disabled", "click"], [3, "ngClass"]], template: function DayPickerComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, DayPickerComponent_table_0_Template, 18, 15, "table", 0);
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngIf", ctx.datePicker.datepickerMode === "day");
            }
        }, directives: [i6.NgIf, i6.NgClass, i6.NgForOf], styles: ["[_nghost-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n      color: #292b2c;\n      background-color: #fff;\n      border-color: #ccc;\n    }\n    [_nghost-%COMP%]   .btn-info[_ngcontent-%COMP%]   .text-muted[_ngcontent-%COMP%] {\n      color: #292b2c !important;\n    }"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DayPickerComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'daypicker',
                        template: "\n<table *ngIf=\"datePicker.datepickerMode === 'day'\" role=\"grid\" [attr.aria-labelledby]=\"datePicker.uniqueId + '-title'\" aria-activedescendant=\"activeDateId\">\n  <thead>\n    <tr>\n      <th>\n        <button *ngIf=\"!isBs4\"\n                type=\"button\"\n                class=\"btn btn-default btn-secondary btn-sm pull-left float-left\"\n                (click)=\"datePicker.move(-1)\"\n                tabindex=\"-1\">\u2039</button>\n        <button *ngIf=\"isBs4\"\n                type=\"button\"\n                class=\"btn btn-default btn-secondary btn-sm pull-left float-left\"\n                (click)=\"datePicker.move(-1)\"\n                tabindex=\"-1\">&lt;</button>\n      </th>\n      <th [attr.colspan]=\"5 + (datePicker.showWeeks ? 1 : 0)\">\n        <button [id]=\"datePicker.uniqueId + '-title'\"\n                type=\"button\" class=\"btn btn-default btn-secondary btn-sm\"\n                (click)=\"datePicker.toggleMode(0)\"\n                [disabled]=\"datePicker.datepickerMode === datePicker.maxMode\"\n                [ngClass]=\"{disabled: datePicker.datepickerMode === datePicker.maxMode}\" tabindex=\"-1\" style=\"width:100%;\">\n          <strong>{{ title }}</strong>\n        </button>\n      </th>\n      <th>\n        <button *ngIf=\"!isBs4\"\n                type=\"button\"\n                class=\"btn btn-default btn-secondary btn-sm pull-right float-right\"\n                (click)=\"datePicker.move(1)\"\n                tabindex=\"-1\">\u203A</button>\n        <button *ngIf=\"isBs4\"\n                type=\"button\"\n                class=\"btn btn-default btn-secondary btn-sm pull-right float-right\"\n                (click)=\"datePicker.move(1)\"\n                tabindex=\"-1\">&gt;\n        </button>\n      </th>\n    </tr>\n    <tr>\n      <th *ngIf=\"datePicker.showWeeks\"></th>\n      <th *ngFor=\"let labelz of labels\" class=\"text-center\">\n        <small aria-label=\"labelz.full\"><b>{{ labelz.abbr }}</b></small>\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <ng-template ngFor [ngForOf]=\"rows\" let-rowz=\"$implicit\" let-index=\"index\">\n      <tr *ngIf=\"!(datePicker.onlyCurrentMonth && rowz[0].secondary && rowz[6].secondary)\">\n        <td *ngIf=\"datePicker.showWeeks\" class=\"h6\" class=\"text-center\">\n          <em>{{ weekNumbers[index] }}</em>\n        </td>\n        <td *ngFor=\"let dtz of rowz\" class=\"text-center\" role=\"gridcell\" [id]=\"dtz.uid\">\n          <button type=\"button\" style=\"min-width:100%;\" class=\"btn btn-sm {{dtz.customClass}}\"\n                  *ngIf=\"!(datePicker.onlyCurrentMonth && dtz.secondary)\"\n                  [ngClass]=\"{'btn-secondary': isBs4 && !dtz.selected && !datePicker.isActive(dtz), 'btn-info': dtz.selected, disabled: dtz.disabled, active: !isBs4 && datePicker.isActive(dtz), 'btn-default': !isBs4}\"\n                  [disabled]=\"dtz.disabled\"\n                  (click)=\"datePicker.select(dtz.date)\" tabindex=\"-1\">\n            <span [ngClass]=\"{'text-muted': dtz.secondary || dtz.current, 'text-info': !isBs4 && dtz.current}\">{{ dtz.label }}</span>\n          </button>\n        </td>\n      </tr>\n    </ng-template>\n  </tbody>\n</table>\n  ",
                        styles: [
                            "\n    :host .btn-secondary {\n      color: #292b2c;\n      background-color: #fff;\n      border-color: #ccc;\n    }\n    :host .btn-info .text-muted {\n      color: #292b2c !important;\n    }\n  "
                        ]
                    }]
            }], function () { return [{ type: DatePickerInnerComponent }]; }, null);
    })();

    // @deprecated
    var _c0$4 = function (a0, a1, a2, a3) { return { "btn-link": a0, "btn-info": a1, disabled: a2, active: a3 }; };
    var _c1$2 = function (a0, a1) { return { "text-success": a0, "text-info": a1 }; };
    function MonthPickerComponent_table_0_tr_14_td_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r6_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "td", 7);
            i0.ɵɵelementStart(1, "button", 8);
            i0.ɵɵlistener("click", function MonthPickerComponent_table_0_tr_14_td_1_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r6_1); var dtz_r4 = ctx.$implicit; var ctx_r5 = i0.ɵɵnextContext(3); return ctx_r5.datePicker.select(dtz_r4.date); });
            i0.ɵɵelementStart(2, "span", 9);
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var dtz_r4 = ctx.$implicit;
            var ctx_r3 = i0.ɵɵnextContext(3);
            i0.ɵɵproperty("ngClass", dtz_r4.customClass);
            i0.ɵɵattribute("id", dtz_r4.uid);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction4(6, _c0$4, ctx_r3.isBs4 && !dtz_r4.selected && !ctx_r3.datePicker.isActive(dtz_r4), dtz_r4.selected || ctx_r3.isBs4 && !dtz_r4.selected && ctx_r3.datePicker.isActive(dtz_r4), dtz_r4.disabled, !ctx_r3.isBs4 && ctx_r3.datePicker.isActive(dtz_r4)))("disabled", dtz_r4.disabled);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(11, _c1$2, ctx_r3.isBs4 && dtz_r4.current, !ctx_r3.isBs4 && dtz_r4.current));
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(dtz_r4.label);
        }
    }
    function MonthPickerComponent_table_0_tr_14_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "tr");
            i0.ɵɵtemplate(1, MonthPickerComponent_table_0_tr_14_td_1_Template, 4, 14, "td", 6);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var rowz_r2 = ctx.$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", rowz_r2);
        }
    }
    var _c2$1 = function (a0) { return { disabled: a0 }; };
    function MonthPickerComponent_table_0_Template(rf, ctx) {
        if (rf & 1) {
            var _r8_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "table", 1);
            i0.ɵɵelementStart(1, "thead");
            i0.ɵɵelementStart(2, "tr");
            i0.ɵɵelementStart(3, "th");
            i0.ɵɵelementStart(4, "button", 2);
            i0.ɵɵlistener("click", function MonthPickerComponent_table_0_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r8_1); var ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.datePicker.move(-1); });
            i0.ɵɵtext(5, "\u2039");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "th");
            i0.ɵɵelementStart(7, "button", 3);
            i0.ɵɵlistener("click", function MonthPickerComponent_table_0_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r8_1); var ctx_r9 = i0.ɵɵnextContext(); return ctx_r9.datePicker.toggleMode(0); });
            i0.ɵɵelementStart(8, "strong");
            i0.ɵɵtext(9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "th");
            i0.ɵɵelementStart(11, "button", 4);
            i0.ɵɵlistener("click", function MonthPickerComponent_table_0_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r8_1); var ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.datePicker.move(1); });
            i0.ɵɵtext(12, "\u203A");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "tbody");
            i0.ɵɵtemplate(14, MonthPickerComponent_table_0_tr_14_Template, 2, 1, "tr", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(6);
            i0.ɵɵattribute("colspan", ctx_r0.datePicker.monthColLimit - 2 <= 0 ? 1 : ctx_r0.datePicker.monthColLimit - 2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("id", ctx_r0.datePicker.uniqueId + "-title")("disabled", ctx_r0.datePicker.datepickerMode === ctx_r0.maxMode)("ngClass", i0.ɵɵpureFunction1(6, _c2$1, ctx_r0.datePicker.datepickerMode === ctx_r0.maxMode));
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx_r0.title);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngForOf", ctx_r0.rows);
        }
    }
    var MonthPickerComponent = /** @class */ (function () {
        function MonthPickerComponent(datePicker) {
            this.rows = [];
            this.datePicker = datePicker;
        }
        Object.defineProperty(MonthPickerComponent.prototype, "isBs4", {
            get: function () {
                return !utils.isBs3();
            },
            enumerable: false,
            configurable: true
        });
        MonthPickerComponent.prototype.ngOnInit = function () {
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            var self = this;
            this.datePicker.stepMonth = { years: 1 };
            this.datePicker.setRefreshViewHandler(function () {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                // eslint-disable-next-line @typescript-eslint/no-this-alias
                var that = this;
                var months = new Array(12);
                var year = that.activeDate.getFullYear();
                var date;
                for (var i = 0; i < 12; i++) {
                    date = new Date(year, i, 1);
                    date = that.fixTimeZone(date);
                    months[i] = that.createDateObject(date, that.formatMonth);
                    months[i].uid = that.uniqueId + '-' + i;
                }
                self.title = that.dateFilter(that.activeDate, that.formatMonthTitle);
                self.rows = that.split(months, self.datePicker.monthColLimit);
            }, 'month');
            this.datePicker.setCompareHandler(function (date1, date2) {
                var d1 = new Date(date1.getFullYear(), date1.getMonth());
                var d2 = new Date(date2.getFullYear(), date2.getMonth());
                return d1.getTime() - d2.getTime();
            }, 'month');
            this.datePicker.refreshView();
        };
        return MonthPickerComponent;
    }());
    MonthPickerComponent.ɵfac = function MonthPickerComponent_Factory(t) { return new (t || MonthPickerComponent)(i0.ɵɵdirectiveInject(DatePickerInnerComponent)); };
    MonthPickerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MonthPickerComponent, selectors: [["monthpicker"]], decls: 1, vars: 1, consts: [["role", "grid", 4, "ngIf"], ["role", "grid"], ["type", "button", "tabindex", "-1", 1, "btn", "btn-default", "btn-sm", "pull-left", "float-left", 3, "click"], ["type", "button", "tabindex", "-1", 1, "btn", "btn-default", "btn-sm", 2, "width", "100%", 3, "id", "disabled", "ngClass", "click"], ["type", "button", "tabindex", "-1", 1, "btn", "btn-default", "btn-sm", "pull-right", "float-right", 3, "click"], [4, "ngFor", "ngForOf"], ["class", "text-center", "role", "gridcell", 3, "ngClass", 4, "ngFor", "ngForOf"], ["role", "gridcell", 1, "text-center", 3, "ngClass"], ["type", "button", "tabindex", "-1", 1, "btn", "btn-default", 2, "min-width", "100%", 3, "ngClass", "disabled", "click"], [3, "ngClass"]], template: function MonthPickerComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, MonthPickerComponent_table_0_Template, 15, 8, "table", 0);
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngIf", ctx.datePicker.datepickerMode === "month");
            }
        }, directives: [i6.NgIf, i6.NgClass, i6.NgForOf], styles: ["[_nghost-%COMP%]   .btn-info[_ngcontent-%COMP%]   .text-success[_ngcontent-%COMP%] {\n      color: #fff !important;\n    }"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MonthPickerComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'monthpicker',
                        template: "\n<table *ngIf=\"datePicker.datepickerMode==='month'\" role=\"grid\">\n  <thead>\n    <tr>\n      <th>\n        <button type=\"button\" class=\"btn btn-default btn-sm pull-left float-left\"\n                (click)=\"datePicker.move(-1)\" tabindex=\"-1\">\u2039</button></th>\n      <th [attr.colspan]=\"((datePicker.monthColLimit - 2) <= 0) ? 1 : datePicker.monthColLimit - 2\">\n        <button [id]=\"datePicker.uniqueId + '-title'\"\n                type=\"button\" class=\"btn btn-default btn-sm\"\n                (click)=\"datePicker.toggleMode(0)\"\n                [disabled]=\"datePicker.datepickerMode === maxMode\"\n                [ngClass]=\"{disabled: datePicker.datepickerMode === maxMode}\" tabindex=\"-1\" style=\"width:100%;\">\n          <strong>{{ title }}</strong>\n        </button>\n      </th>\n      <th>\n        <button type=\"button\" class=\"btn btn-default btn-sm pull-right float-right\"\n                (click)=\"datePicker.move(1)\" tabindex=\"-1\">\u203A</button>\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let rowz of rows\">\n      <td *ngFor=\"let dtz of rowz\" class=\"text-center\" role=\"gridcell\" [attr.id]=\"dtz.uid\" [ngClass]=\"dtz.customClass\">\n        <button type=\"button\" style=\"min-width:100%;\" class=\"btn btn-default\"\n                [ngClass]=\"{'btn-link': isBs4 && !dtz.selected && !datePicker.isActive(dtz), 'btn-info': dtz.selected || (isBs4 && !dtz.selected && datePicker.isActive(dtz)), disabled: dtz.disabled, active: !isBs4 && datePicker.isActive(dtz)}\"\n                [disabled]=\"dtz.disabled\"\n                (click)=\"datePicker.select(dtz.date)\" tabindex=\"-1\">\n          <span [ngClass]=\"{'text-success': isBs4 && dtz.current, 'text-info': !isBs4 && dtz.current}\">{{ dtz.label }}</span>\n        </button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n  ",
                        styles: [
                            "\n    :host .btn-info .text-success {\n      color: #fff !important;\n    }\n  "
                        ]
                    }]
            }], function () { return [{ type: DatePickerInnerComponent }]; }, null);
    })();

    // @deprecated
    var _c0$5 = function (a0, a1, a2, a3) { return { "btn-link": a0, "btn-info": a1, disabled: a2, active: a3 }; };
    var _c1$3 = function (a0, a1) { return { "text-success": a0, "text-info": a1 }; };
    function YearPickerComponent_table_0_tr_14_td_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r6_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "td", 7);
            i0.ɵɵelementStart(1, "button", 8);
            i0.ɵɵlistener("click", function YearPickerComponent_table_0_tr_14_td_1_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r6_1); var dtz_r4 = ctx.$implicit; var ctx_r5 = i0.ɵɵnextContext(3); return ctx_r5.datePicker.select(dtz_r4.date); });
            i0.ɵɵelementStart(2, "span", 9);
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var dtz_r4 = ctx.$implicit;
            var ctx_r3 = i0.ɵɵnextContext(3);
            i0.ɵɵattribute("id", dtz_r4.uid);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction4(5, _c0$5, ctx_r3.isBs4 && !dtz_r4.selected && !ctx_r3.datePicker.isActive(dtz_r4), dtz_r4.selected || ctx_r3.isBs4 && !dtz_r4.selected && ctx_r3.datePicker.isActive(dtz_r4), dtz_r4.disabled, !ctx_r3.isBs4 && ctx_r3.datePicker.isActive(dtz_r4)))("disabled", dtz_r4.disabled);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(10, _c1$3, ctx_r3.isBs4 && dtz_r4.current, !ctx_r3.isBs4 && dtz_r4.current));
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(dtz_r4.label);
        }
    }
    function YearPickerComponent_table_0_tr_14_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "tr");
            i0.ɵɵtemplate(1, YearPickerComponent_table_0_tr_14_td_1_Template, 4, 13, "td", 6);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var rowz_r2 = ctx.$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", rowz_r2);
        }
    }
    var _c2$2 = function (a0) { return { disabled: a0 }; };
    function YearPickerComponent_table_0_Template(rf, ctx) {
        if (rf & 1) {
            var _r8_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "table", 1);
            i0.ɵɵelementStart(1, "thead");
            i0.ɵɵelementStart(2, "tr");
            i0.ɵɵelementStart(3, "th");
            i0.ɵɵelementStart(4, "button", 2);
            i0.ɵɵlistener("click", function YearPickerComponent_table_0_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r8_1); var ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.datePicker.move(-1); });
            i0.ɵɵtext(5, "\u2039 ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "th");
            i0.ɵɵelementStart(7, "button", 3);
            i0.ɵɵlistener("click", function YearPickerComponent_table_0_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r8_1); var ctx_r9 = i0.ɵɵnextContext(); return ctx_r9.datePicker.toggleMode(0); });
            i0.ɵɵelementStart(8, "strong");
            i0.ɵɵtext(9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "th");
            i0.ɵɵelementStart(11, "button", 4);
            i0.ɵɵlistener("click", function YearPickerComponent_table_0_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r8_1); var ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.datePicker.move(1); });
            i0.ɵɵtext(12, "\u203A ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "tbody");
            i0.ɵɵtemplate(14, YearPickerComponent_table_0_tr_14_Template, 2, 1, "tr", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(6);
            i0.ɵɵattribute("colspan", ctx_r0.datePicker.yearColLimit - 2 <= 0 ? 1 : ctx_r0.datePicker.yearColLimit - 2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("id", ctx_r0.datePicker.uniqueId + "-title")("disabled", ctx_r0.datePicker.datepickerMode === ctx_r0.datePicker.maxMode)("ngClass", i0.ɵɵpureFunction1(6, _c2$2, ctx_r0.datePicker.datepickerMode === ctx_r0.datePicker.maxMode));
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx_r0.title);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngForOf", ctx_r0.rows);
        }
    }
    var YearPickerComponent = /** @class */ (function () {
        function YearPickerComponent(datePicker) {
            this.rows = [];
            this.datePicker = datePicker;
        }
        Object.defineProperty(YearPickerComponent.prototype, "isBs4", {
            get: function () {
                return !utils.isBs3();
            },
            enumerable: false,
            configurable: true
        });
        YearPickerComponent.prototype.ngOnInit = function () {
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            var self = this;
            this.datePicker.stepYear = { years: this.datePicker.yearRange };
            this.datePicker.setRefreshViewHandler(function () {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                // eslint-disable-next-line @typescript-eslint/no-this-alias
                var that = this;
                var years = new Array(that.yearRange);
                var date;
                var start = self.getStartingYear(that.activeDate.getFullYear()) || 0;
                for (var i = 0; i < that.yearRange; i++) {
                    date = new Date(start + i, 0, 1);
                    date = that.fixTimeZone(date);
                    years[i] = that.createDateObject(date, that.formatYear);
                    years[i].uid = that.uniqueId + '-' + i;
                }
                self.title = [years[0].label, years[that.yearRange - 1].label].join(' - ');
                self.rows = that.split(years, self.datePicker.yearColLimit);
            }, 'year');
            this.datePicker.setCompareHandler(function (date1, date2) {
                return date1.getFullYear() - date2.getFullYear();
            }, 'year');
            this.datePicker.refreshView();
        };
        YearPickerComponent.prototype.getStartingYear = function (year) {
            // todo: parseInt
            if (this.datePicker && this.datePicker.yearRange) {
                return ((year - 1) / this.datePicker.yearRange * this.datePicker.yearRange + 1);
            }
            return undefined;
        };
        return YearPickerComponent;
    }());
    YearPickerComponent.ɵfac = function YearPickerComponent_Factory(t) { return new (t || YearPickerComponent)(i0.ɵɵdirectiveInject(DatePickerInnerComponent)); };
    YearPickerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: YearPickerComponent, selectors: [["yearpicker"]], decls: 1, vars: 1, consts: [["role", "grid", 4, "ngIf"], ["role", "grid"], ["type", "button", "tabindex", "-1", 1, "btn", "btn-default", "btn-sm", "pull-left", "float-left", 3, "click"], ["role", "heading", "type", "button", "tabindex", "-1", 1, "btn", "btn-default", "btn-sm", 2, "width", "100%", 3, "id", "disabled", "ngClass", "click"], ["type", "button", "tabindex", "-1", 1, "btn", "btn-default", "btn-sm", "pull-right", "float-right", 3, "click"], [4, "ngFor", "ngForOf"], ["class", "text-center", "role", "gridcell", 4, "ngFor", "ngForOf"], ["role", "gridcell", 1, "text-center"], ["type", "button", "tabindex", "-1", 1, "btn", "btn-default", 2, "min-width", "100%", 3, "ngClass", "disabled", "click"], [3, "ngClass"]], template: function YearPickerComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, YearPickerComponent_table_0_Template, 15, 8, "table", 0);
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngIf", ctx.datePicker.datepickerMode === "year");
            }
        }, directives: [i6.NgIf, i6.NgClass, i6.NgForOf], styles: ["[_nghost-%COMP%]   .btn-info[_ngcontent-%COMP%]   .text-success[_ngcontent-%COMP%] {\n        color: #fff !important;\n      }"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(YearPickerComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'yearpicker',
                        template: "\n    <table *ngIf=\"datePicker.datepickerMode==='year'\" role='grid'>\n      <thead>\n      <tr>\n        <th>\n          <button type='button' class='btn btn-default btn-sm pull-left float-left'\n                  (click)='datePicker.move(-1)' tabindex='-1'>\u2039\n          </button>\n        </th>\n        <th [attr.colspan]='((datePicker.yearColLimit - 2) <= 0) ? 1 : datePicker.yearColLimit - 2'>\n          <button [id]=\"datePicker.uniqueId + '-title'\" role='heading'\n                  type='button' class='btn btn-default btn-sm'\n                  (click)='datePicker.toggleMode(0)'\n                  [disabled]='datePicker.datepickerMode === datePicker.maxMode'\n                  [ngClass]='{disabled: datePicker.datepickerMode === datePicker.maxMode}' tabindex='-1'\n                  style='width:100%;'>\n            <strong>{{ title }}</strong>\n          </button>\n        </th>\n        <th>\n          <button type='button' class='btn btn-default btn-sm pull-right float-right'\n                  (click)='datePicker.move(1)' tabindex='-1'>\u203A\n          </button>\n        </th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr *ngFor='let rowz of rows'>\n        <td *ngFor='let dtz of rowz' class='text-center' role='gridcell' [attr.id]='dtz.uid'>\n          <button type='button' style='min-width:100%;' class='btn btn-default'\n                  [ngClass]=\"{'btn-link': isBs4 && !dtz.selected && !datePicker.isActive(dtz), 'btn-info': dtz.selected || (isBs4 && !dtz.selected && datePicker.isActive(dtz)), disabled: dtz.disabled, active: !isBs4 && datePicker.isActive(dtz)}\"\n                  [disabled]='dtz.disabled'\n                  (click)='datePicker.select(dtz.date)' tabindex='-1'>\n            <span\n              [ngClass]=\"{'text-success': isBs4 && dtz.current, 'text-info': !isBs4 && dtz.current}\">{{ dtz.label }}</span>\n          </button>\n        </td>\n      </tr>\n      </tbody>\n    </table>\n  ",
                        styles: [
                            "\n      :host .btn-info .text-success {\n        color: #fff !important;\n      }\n    "
                        ]
                    }]
            }], function () { return [{ type: DatePickerInnerComponent }]; }, null);
    })();

    var DATEPICKER_CONTROL_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        useExisting: i0.forwardRef(function () { return DatePickerComponent; }),
        multi: true
    };
    var DatePickerComponent = /** @class */ (function () {
        function DatePickerComponent(config) {
            /** sets datepicker mode, supports: `day`, `month`, `year` */
            this.datepickerMode = 'day';
            /** if false week numbers will be hidden */
            this.showWeeks = true;
            /** number of months displayed in a single row of month picker */
            this.monthColLimit = 3;
            /** number of years displayed in a single row of year picker */
            this.yearColLimit = 5;
            this.selectionDone = new i0.EventEmitter(undefined);
            /** callback to invoke when the activeDate is changed. */
            this.activeDateChange = new i0.EventEmitter(undefined);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            this.onChange = Function.prototype;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            this.onTouched = Function.prototype;
            this._now = new Date();
            this.config = config;
            this.configureOptions();
        }
        Object.defineProperty(DatePickerComponent.prototype, "activeDate", {
            /** currently active date */
            get: function () {
                return this._activeDate || this._now;
            },
            set: function (value) {
                this._activeDate = value;
            },
            enumerable: false,
            configurable: true
        });
        DatePickerComponent.prototype.configureOptions = function () {
            Object.assign(this, this.config);
        };
        DatePickerComponent.prototype.onUpdate = function (event) {
            this.activeDate = event;
            this.onChange(event);
        };
        DatePickerComponent.prototype.onSelectionDone = function (event) {
            this.selectionDone.emit(event);
        };
        DatePickerComponent.prototype.onActiveDateChange = function (event) {
            this.activeDateChange.emit(event);
        };
        // todo: support null value
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        DatePickerComponent.prototype.writeValue = function (value) {
            var _a, _b;
            if (((_a = this._datePicker) === null || _a === void 0 ? void 0 : _a.compare(value, this._activeDate)) === 0) {
                return;
            }
            if (value && value instanceof Date) {
                this.activeDate = value;
                (_b = this._datePicker) === null || _b === void 0 ? void 0 : _b.select(value, false);
                return;
            }
            this.activeDate = value ? new Date(value) : void 0;
        };
        DatePickerComponent.prototype.registerOnChange = function (fn) {
            this.onChange = fn;
        };
        DatePickerComponent.prototype.registerOnTouched = function (fn) {
            this.onTouched = fn;
        };
        return DatePickerComponent;
    }());
    DatePickerComponent.ɵfac = function DatePickerComponent_Factory(t) { return new (t || DatePickerComponent)(i0.ɵɵdirectiveInject(DatepickerConfig)); };
    DatePickerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DatePickerComponent, selectors: [["datepicker"]], viewQuery: function DatePickerComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(DatePickerInnerComponent, 3);
            }
            if (rf & 2) {
                var _t = void 0;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._datePicker = _t.first);
            }
        }, inputs: { datepickerMode: "datepickerMode", initDate: "initDate", minDate: "minDate", maxDate: "maxDate", minMode: "minMode", maxMode: "maxMode", showWeeks: "showWeeks", formatDay: "formatDay", formatMonth: "formatMonth", formatYear: "formatYear", formatDayHeader: "formatDayHeader", formatDayTitle: "formatDayTitle", formatMonthTitle: "formatMonthTitle", startingDay: "startingDay", yearRange: "yearRange", onlyCurrentMonth: "onlyCurrentMonth", shortcutPropagation: "shortcutPropagation", monthColLimit: "monthColLimit", yearColLimit: "yearColLimit", customClass: "customClass", dateDisabled: "dateDisabled", dayDisabled: "dayDisabled", activeDate: "activeDate" }, outputs: { selectionDone: "selectionDone", activeDateChange: "activeDateChange" }, features: [i0.ɵɵProvidersFeature([DATEPICKER_CONTROL_VALUE_ACCESSOR])], decls: 4, vars: 24, consts: [[3, "activeDate", "locale", "datepickerMode", "initDate", "minDate", "maxDate", "minMode", "maxMode", "showWeeks", "formatDay", "formatMonth", "formatYear", "formatDayHeader", "formatDayTitle", "formatMonthTitle", "startingDay", "yearRange", "customClass", "dateDisabled", "dayDisabled", "onlyCurrentMonth", "shortcutPropagation", "monthColLimit", "yearColLimit", "update", "selectionDone", "activeDateChange"], ["tabindex", "0"]], template: function DatePickerComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "datepicker-inner", 0);
                i0.ɵɵlistener("update", function DatePickerComponent_Template_datepicker_inner_update_0_listener($event) { return ctx.onUpdate($event); })("selectionDone", function DatePickerComponent_Template_datepicker_inner_selectionDone_0_listener($event) { return ctx.onSelectionDone($event); })("activeDateChange", function DatePickerComponent_Template_datepicker_inner_activeDateChange_0_listener($event) { return ctx.onActiveDateChange($event); });
                i0.ɵɵelement(1, "daypicker", 1);
                i0.ɵɵelement(2, "monthpicker", 1);
                i0.ɵɵelement(3, "yearpicker", 1);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("activeDate", ctx.activeDate)("locale", ctx.config.locale)("datepickerMode", ctx.datepickerMode)("initDate", ctx.initDate)("minDate", ctx.minDate)("maxDate", ctx.maxDate)("minMode", ctx.minMode)("maxMode", ctx.maxMode)("showWeeks", ctx.showWeeks)("formatDay", ctx.formatDay)("formatMonth", ctx.formatMonth)("formatYear", ctx.formatYear)("formatDayHeader", ctx.formatDayHeader)("formatDayTitle", ctx.formatDayTitle)("formatMonthTitle", ctx.formatMonthTitle)("startingDay", ctx.startingDay)("yearRange", ctx.yearRange)("customClass", ctx.customClass)("dateDisabled", ctx.dateDisabled)("dayDisabled", ctx.dayDisabled)("onlyCurrentMonth", ctx.onlyCurrentMonth)("shortcutPropagation", ctx.shortcutPropagation)("monthColLimit", ctx.monthColLimit)("yearColLimit", ctx.yearColLimit);
            }
        }, directives: [DatePickerInnerComponent, DayPickerComponent, MonthPickerComponent, YearPickerComponent], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DatePickerComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'datepicker',
                        template: "\n    <datepicker-inner [activeDate]=\"activeDate\"\n                      (update)=\"onUpdate($event)\"\n                      [locale]=\"config.locale\"\n                      [datepickerMode]=\"datepickerMode\"\n                      [initDate]=\"initDate\"\n                      [minDate]=\"minDate\"\n                      [maxDate]=\"maxDate\"\n                      [minMode]=\"minMode\"\n                      [maxMode]=\"maxMode\"\n                      [showWeeks]=\"showWeeks\"\n                      [formatDay]=\"formatDay\"\n                      [formatMonth]=\"formatMonth\"\n                      [formatYear]=\"formatYear\"\n                      [formatDayHeader]=\"formatDayHeader\"\n                      [formatDayTitle]=\"formatDayTitle\"\n                      [formatMonthTitle]=\"formatMonthTitle\"\n                      [startingDay]=\"startingDay\"\n                      [yearRange]=\"yearRange\"\n                      [customClass]=\"customClass\"\n                      [dateDisabled]=\"dateDisabled\"\n                      [dayDisabled]=\"dayDisabled\"\n                      [onlyCurrentMonth]=\"onlyCurrentMonth\"\n                      [shortcutPropagation]=\"shortcutPropagation\"\n                      [monthColLimit]=\"monthColLimit\"\n                      [yearColLimit]=\"yearColLimit\"\n                      (selectionDone)=\"onSelectionDone($event)\"\n                      (activeDateChange)=\"onActiveDateChange($event)\">\n      <daypicker tabindex=\"0\"></daypicker>\n      <monthpicker tabindex=\"0\"></monthpicker>\n      <yearpicker tabindex=\"0\"></yearpicker>\n    </datepicker-inner>\n    ",
                        providers: [DATEPICKER_CONTROL_VALUE_ACCESSOR]
                    }]
            }], function () { return [{ type: DatepickerConfig }]; }, { datepickerMode: [{
                    type: i0.Input
                }], initDate: [{
                    type: i0.Input
                }], minDate: [{
                    type: i0.Input
                }], maxDate: [{
                    type: i0.Input
                }], minMode: [{
                    type: i0.Input
                }], maxMode: [{
                    type: i0.Input
                }], showWeeks: [{
                    type: i0.Input
                }], formatDay: [{
                    type: i0.Input
                }], formatMonth: [{
                    type: i0.Input
                }], formatYear: [{
                    type: i0.Input
                }], formatDayHeader: [{
                    type: i0.Input
                }], formatDayTitle: [{
                    type: i0.Input
                }], formatMonthTitle: [{
                    type: i0.Input
                }], startingDay: [{
                    type: i0.Input
                }], yearRange: [{
                    type: i0.Input
                }], onlyCurrentMonth: [{
                    type: i0.Input
                }], shortcutPropagation: [{
                    type: i0.Input
                }], monthColLimit: [{
                    type: i0.Input
                }], yearColLimit: [{
                    type: i0.Input
                }], customClass: [{
                    type: i0.Input
                }], dateDisabled: [{
                    type: i0.Input
                }], dayDisabled: [{
                    type: i0.Input
                }], activeDate: [{
                    type: i0.Input
                }], selectionDone: [{
                    type: i0.Output
                }], activeDateChange: [{
                    type: i0.Output
                }], _datePicker: [{
                    type: i0.ViewChild,
                    args: [DatePickerInnerComponent, { static: true }]
                }] });
    })();

    var BsDatepickerModule = /** @class */ (function () {
        function BsDatepickerModule() {
        }
        BsDatepickerModule.forRoot = function () {
            return {
                ngModule: BsDatepickerModule,
                providers: [
                    i2.ComponentLoaderFactory,
                    i5.PositioningService,
                    BsDatepickerStore,
                    BsDatepickerActions,
                    BsDatepickerEffects,
                    BsLocaleService
                ]
            };
        };
        return BsDatepickerModule;
    }());
    BsDatepickerModule.ɵmod = i0.ɵɵdefineNgModule({ type: BsDatepickerModule });
    BsDatepickerModule.ɵinj = i0.ɵɵdefineInjector({ factory: function BsDatepickerModule_Factory(t) { return new (t || BsDatepickerModule)(); }, imports: [[i6.CommonModule, i6$1.TooltipModule]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(BsDatepickerModule, { declarations: [BsCalendarLayoutComponent,
                BsCurrentDateViewComponent,
                BsCustomDatesViewComponent,
                BsDatepickerDayDecoratorComponent,
                BsDatepickerNavigationViewComponent,
                BsDaysCalendarViewComponent,
                BsMonthCalendarViewComponent,
                BsTimepickerViewComponent,
                BsYearsCalendarViewComponent,
                BsDatepickerContainerComponent,
                BsDatepickerDirective,
                BsDatepickerInlineContainerComponent,
                BsDatepickerInlineDirective,
                BsDatepickerInputDirective,
                BsDaterangepickerContainerComponent,
                BsDaterangepickerDirective,
                BsDaterangepickerInlineContainerComponent,
                BsDaterangepickerInlineDirective,
                BsDaterangepickerInputDirective], imports: [i6.CommonModule, i6$1.TooltipModule], exports: [BsDatepickerContainerComponent,
                BsDatepickerDirective,
                BsDatepickerInlineContainerComponent,
                BsDatepickerInlineDirective,
                BsDatepickerInputDirective,
                BsDaterangepickerContainerComponent,
                BsDaterangepickerDirective,
                BsDaterangepickerInlineContainerComponent,
                BsDaterangepickerInlineDirective,
                BsDaterangepickerInputDirective] });
    })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BsDatepickerModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [i6.CommonModule, i6$1.TooltipModule],
                        declarations: [
                            BsCalendarLayoutComponent,
                            BsCurrentDateViewComponent,
                            BsCustomDatesViewComponent,
                            BsDatepickerDayDecoratorComponent,
                            BsDatepickerNavigationViewComponent,
                            BsDaysCalendarViewComponent,
                            BsMonthCalendarViewComponent,
                            BsTimepickerViewComponent,
                            BsYearsCalendarViewComponent,
                            BsDatepickerContainerComponent,
                            BsDatepickerDirective,
                            BsDatepickerInlineContainerComponent,
                            BsDatepickerInlineDirective,
                            BsDatepickerInputDirective,
                            BsDaterangepickerContainerComponent,
                            BsDaterangepickerDirective,
                            BsDaterangepickerInlineContainerComponent,
                            BsDaterangepickerInlineDirective,
                            BsDaterangepickerInputDirective
                        ],
                        entryComponents: [
                            BsDatepickerContainerComponent,
                            BsDaterangepickerContainerComponent,
                            BsDatepickerInlineContainerComponent,
                            BsDaterangepickerInlineContainerComponent
                        ],
                        exports: [
                            BsDatepickerContainerComponent,
                            BsDatepickerDirective,
                            BsDatepickerInlineContainerComponent,
                            BsDatepickerInlineDirective,
                            BsDatepickerInputDirective,
                            BsDaterangepickerContainerComponent,
                            BsDaterangepickerDirective,
                            BsDaterangepickerInlineContainerComponent,
                            BsDaterangepickerInlineDirective,
                            BsDaterangepickerInputDirective
                        ]
                    }]
            }], null, null);
    })();

    var DatepickerModule = /** @class */ (function () {
        function DatepickerModule() {
        }
        DatepickerModule.forRoot = function () {
            return { ngModule: DatepickerModule, providers: [DatepickerConfig] };
        };
        return DatepickerModule;
    }());
    DatepickerModule.ɵmod = i0.ɵɵdefineNgModule({ type: DatepickerModule });
    DatepickerModule.ɵinj = i0.ɵɵdefineInjector({ factory: function DatepickerModule_Factory(t) { return new (t || DatepickerModule)(); }, imports: [[i6.CommonModule, forms.FormsModule]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(DatepickerModule, { declarations: [DatePickerComponent,
                DatePickerInnerComponent,
                DayPickerComponent,
                MonthPickerComponent,
                YearPickerComponent], imports: [i6.CommonModule, forms.FormsModule], exports: [DatePickerComponent,
                DatePickerInnerComponent,
                DayPickerComponent,
                MonthPickerComponent,
                YearPickerComponent] });
    })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DatepickerModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [i6.CommonModule, forms.FormsModule],
                        declarations: [
                            DatePickerComponent,
                            DatePickerInnerComponent,
                            DayPickerComponent,
                            MonthPickerComponent,
                            YearPickerComponent
                        ],
                        exports: [
                            DatePickerComponent,
                            DatePickerInnerComponent,
                            DayPickerComponent,
                            MonthPickerComponent,
                            YearPickerComponent
                        ],
                        entryComponents: [DatePickerComponent]
                    }]
            }], null, null);
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.BsDatepickerConfig = BsDatepickerConfig;
    exports.BsDatepickerContainerComponent = BsDatepickerContainerComponent;
    exports.BsDatepickerDirective = BsDatepickerDirective;
    exports.BsDatepickerInlineConfig = BsDatepickerInlineConfig;
    exports.BsDatepickerInlineContainerComponent = BsDatepickerInlineContainerComponent;
    exports.BsDatepickerInlineDirective = BsDatepickerInlineDirective;
    exports.BsDatepickerInputDirective = BsDatepickerInputDirective;
    exports.BsDatepickerModule = BsDatepickerModule;
    exports.BsDaterangepickerConfig = BsDaterangepickerConfig;
    exports.BsDaterangepickerContainerComponent = BsDaterangepickerContainerComponent;
    exports.BsDaterangepickerDirective = BsDaterangepickerDirective;
    exports.BsDaterangepickerInlineConfig = BsDaterangepickerInlineConfig;
    exports.BsDaterangepickerInlineContainerComponent = BsDaterangepickerInlineContainerComponent;
    exports.BsDaterangepickerInlineDirective = BsDaterangepickerInlineDirective;
    exports.BsDaterangepickerInputDirective = BsDaterangepickerInputDirective;
    exports.BsLocaleService = BsLocaleService;
    exports.DateFormatter = DateFormatter;
    exports.DatePickerComponent = DatePickerComponent;
    exports.DatePickerInnerComponent = DatePickerInnerComponent;
    exports.DatepickerConfig = DatepickerConfig;
    exports.DatepickerModule = DatepickerModule;
    exports.DayPickerComponent = DayPickerComponent;
    exports.MonthPickerComponent = MonthPickerComponent;
    exports.YearPickerComponent = YearPickerComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-bootstrap-datepicker.umd.js.map
