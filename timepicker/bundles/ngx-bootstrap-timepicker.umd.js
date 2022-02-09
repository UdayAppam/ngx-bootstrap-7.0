(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('rxjs'), require('ngx-bootstrap/mini-ngrx'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ngx-bootstrap/timepicker', ['exports', '@angular/core', '@angular/forms', 'rxjs', 'ngx-bootstrap/mini-ngrx', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['ngx-bootstrap'] = global['ngx-bootstrap'] || {}, global['ngx-bootstrap'].timepicker = {}), global.ng.core, global.ng.forms, global.rxjs, global.miniNgrx, global.ng.common));
}(this, (function (exports, i0, forms, rxjs, miniNgrx, i4) { 'use strict';

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

    var dex = 10;
    var hoursPerDay = 24;
    var hoursPerDayHalf = 12;
    var minutesPerHour = 60;
    var secondsPerMinute = 60;
    function isValidDate(value) {
        if (!value) {
            return false;
        }
        if (value instanceof Date && isNaN(value.getHours())) {
            return false;
        }
        if (typeof value === 'string') {
            return isValidDate(new Date(value));
        }
        return true;
    }
    function isValidLimit(controls, newDate) {
        if (controls.min && newDate < controls.min) {
            return false;
        }
        if (controls.max && newDate > controls.max) {
            return false;
        }
        return true;
    }
    function toNumber(value) {
        if (typeof value === 'undefined') {
            return NaN;
        }
        if (typeof value === 'number') {
            return value;
        }
        return parseInt(value, dex);
    }
    function isNumber(value) {
        return !isNaN(toNumber(value));
    }
    function parseHours(value, isPM) {
        if (isPM === void 0) { isPM = false; }
        var hour = toNumber(value);
        if (isNaN(hour) ||
            hour < 0 ||
            hour > (isPM ? hoursPerDayHalf : hoursPerDay)) {
            return NaN;
        }
        return hour;
    }
    function parseMinutes(value) {
        var minute = toNumber(value);
        if (isNaN(minute) || minute < 0 || minute > minutesPerHour) {
            return NaN;
        }
        return minute;
    }
    function parseSeconds(value) {
        var seconds = toNumber(value);
        if (isNaN(seconds) || seconds < 0 || seconds > secondsPerMinute) {
            return NaN;
        }
        return seconds;
    }
    function parseTime(value) {
        if (typeof value === 'string') {
            return new Date(value);
        }
        return value;
    }
    function changeTime(value, diff) {
        if (!value) {
            return changeTime(createDate(new Date(), 0, 0, 0), diff);
        }
        if (!diff) {
            return value;
        }
        var hour = value.getHours();
        var minutes = value.getMinutes();
        var seconds = value.getSeconds();
        if (diff.hour) {
            hour = hour + toNumber(diff.hour);
        }
        if (diff.minute) {
            minutes = minutes + toNumber(diff.minute);
        }
        if (diff.seconds) {
            seconds = seconds + toNumber(diff.seconds);
        }
        return createDate(value, hour, minutes, seconds);
    }
    function setTime(value, opts) {
        var hour = parseHours(opts.hour);
        var minute = parseMinutes(opts.minute);
        var seconds = parseSeconds(opts.seconds) || 0;
        if (opts.isPM && hour !== 12) {
            hour += hoursPerDayHalf;
        }
        if (!value) {
            if (!isNaN(hour) && !isNaN(minute)) {
                return createDate(new Date(), hour, minute, seconds);
            }
            return value;
        }
        if (isNaN(hour) || isNaN(minute)) {
            return value;
        }
        return createDate(value, hour, minute, seconds);
    }
    function createDate(value, hours, minutes, seconds) {
        var newValue = new Date(value.getFullYear(), value.getMonth(), value.getDate(), hours, minutes, seconds, value.getMilliseconds());
        // #3139 ensure date part remains unchanged
        newValue.setFullYear(value.getFullYear());
        newValue.setMonth(value.getMonth());
        newValue.setDate(value.getDate());
        return newValue;
    }
    function padNumber(value) {
        var _value = value.toString();
        if (_value.length > 1) {
            return _value;
        }
        return "0" + _value;
    }
    function isHourInputValid(hours, isPM) {
        return !isNaN(parseHours(hours, isPM));
    }
    function isMinuteInputValid(minutes) {
        return !isNaN(parseMinutes(minutes));
    }
    function isSecondInputValid(seconds) {
        return !isNaN(parseSeconds(seconds));
    }
    function isInputLimitValid(diff, max, min) {
        var newDate = setTime(new Date(), diff);
        if (!newDate) {
            return false;
        }
        if (max && newDate > max) {
            return false;
        }
        if (min && newDate < min) {
            return false;
        }
        return true;
    }
    function isInputValid(hours, minutes, seconds, isPM) {
        if (minutes === void 0) { minutes = '0'; }
        if (seconds === void 0) { seconds = '0'; }
        return isHourInputValid(hours, isPM)
            && isMinuteInputValid(minutes)
            && isSecondInputValid(seconds);
    }

    function canChangeValue(state, event) {
        if (state.readonlyInput || state.disabled) {
            return false;
        }
        if (event) {
            if (event.source === 'wheel' && !state.mousewheel) {
                return false;
            }
            if (event.source === 'key' && !state.arrowkeys) {
                return false;
            }
        }
        return true;
    }
    function canChangeHours(event, controls) {
        if (!event.step) {
            return false;
        }
        if (event.step > 0 && !controls.canIncrementHours) {
            return false;
        }
        if (event.step < 0 && !controls.canDecrementHours) {
            return false;
        }
        return true;
    }
    function canChangeMinutes(event, controls) {
        if (!event.step) {
            return false;
        }
        if (event.step > 0 && !controls.canIncrementMinutes) {
            return false;
        }
        if (event.step < 0 && !controls.canDecrementMinutes) {
            return false;
        }
        return true;
    }
    function canChangeSeconds(event, controls) {
        if (!event.step) {
            return false;
        }
        if (event.step > 0 && !controls.canIncrementSeconds) {
            return false;
        }
        if (event.step < 0 && !controls.canDecrementSeconds) {
            return false;
        }
        return true;
    }
    function getControlsValue(state) {
        var hourStep = state.hourStep, minuteStep = state.minuteStep, secondsStep = state.secondsStep, readonlyInput = state.readonlyInput, disabled = state.disabled, mousewheel = state.mousewheel, arrowkeys = state.arrowkeys, showSpinners = state.showSpinners, showMeridian = state.showMeridian, showSeconds = state.showSeconds, meridians = state.meridians, min = state.min, max = state.max;
        return {
            hourStep: hourStep,
            minuteStep: minuteStep,
            secondsStep: secondsStep,
            readonlyInput: readonlyInput,
            disabled: disabled,
            mousewheel: mousewheel,
            arrowkeys: arrowkeys,
            showSpinners: showSpinners,
            showMeridian: showMeridian,
            showSeconds: showSeconds,
            meridians: meridians,
            min: min,
            max: max
        };
    }
    function timepickerControls(value, state) {
        var hoursPerDay = 24;
        var hoursPerDayHalf = 12;
        var min = state.min, max = state.max, hourStep = state.hourStep, minuteStep = state.minuteStep, secondsStep = state.secondsStep, showSeconds = state.showSeconds;
        var res = {
            canIncrementHours: true,
            canIncrementMinutes: true,
            canIncrementSeconds: true,
            canDecrementHours: true,
            canDecrementMinutes: true,
            canDecrementSeconds: true,
            canToggleMeridian: true
        };
        if (!value) {
            return res;
        }
        // compare dates
        if (max) {
            var _newHour = changeTime(value, { hour: hourStep });
            res.canIncrementHours = max > _newHour && (value.getHours() + hourStep) < hoursPerDay;
            if (!res.canIncrementHours) {
                var _newMinutes = changeTime(value, { minute: minuteStep });
                res.canIncrementMinutes = showSeconds
                    ? max > _newMinutes
                    : max >= _newMinutes;
            }
            if (!res.canIncrementMinutes) {
                var _newSeconds = changeTime(value, { seconds: secondsStep });
                res.canIncrementSeconds = max >= _newSeconds;
            }
            if (value.getHours() < hoursPerDayHalf) {
                res.canToggleMeridian = changeTime(value, { hour: hoursPerDayHalf }) < max;
            }
        }
        if (min) {
            var _newHour = changeTime(value, { hour: -hourStep });
            res.canDecrementHours = min < _newHour;
            if (!res.canDecrementHours) {
                var _newMinutes = changeTime(value, { minute: -minuteStep });
                res.canDecrementMinutes = showSeconds
                    ? min < _newMinutes
                    : min <= _newMinutes;
            }
            if (!res.canDecrementMinutes) {
                var _newSeconds = changeTime(value, { seconds: -secondsStep });
                res.canDecrementSeconds = min <= _newSeconds;
            }
            if (value.getHours() >= hoursPerDayHalf) {
                res.canToggleMeridian = changeTime(value, { hour: -hoursPerDayHalf }) > min;
            }
        }
        return res;
    }

    /** Provides default configuration values for timepicker */
    var TimepickerConfig = /** @class */ (function () {
        function TimepickerConfig() {
            /** hours change step */
            this.hourStep = 1;
            /** minutes change step */
            this.minuteStep = 5;
            /** seconds changes step */
            this.secondsStep = 10;
            /** if true works in 12H mode and displays AM/PM. If false works in 24H mode and hides AM/PM */
            this.showMeridian = true;
            /** meridian labels based on locale */
            this.meridians = ['AM', 'PM'];
            /** if true hours and minutes fields will be readonly */
            this.readonlyInput = false;
            /** if true hours and minutes fields will be disabled */
            this.disabled = false;
            /** if true scroll inside hours and minutes inputs will change time */
            this.mousewheel = true;
            /** if true the values of hours and minutes can be changed using the up/down arrow keys on the keyboard */
            this.arrowkeys = true;
            /** if true spinner arrows above and below the inputs will be shown */
            this.showSpinners = true;
            /** show seconds in timepicker */
            this.showSeconds = false;
            /** show minutes in timepicker */
            this.showMinutes = true;
            /** placeholder for hours field in timepicker */
            this.hoursPlaceholder = 'HH';
            /** placeholder for minutes field in timepicker */
            this.minutesPlaceholder = 'MM';
            /** placeholder for seconds field in timepicker */
            this.secondsPlaceholder = 'SS';
            /** hours aria label */
            this.ariaLabelHours = 'hours';
            /** minutes aria label */
            this.ariaLabelMinutes = 'minutes';
            /** seconds aria label */
            this.ariaLabelSeconds = 'seconds';
        }
        return TimepickerConfig;
    }());
    TimepickerConfig.ɵfac = function TimepickerConfig_Factory(t) { return new (t || TimepickerConfig)(); };
    TimepickerConfig.ɵprov = i0.ɵɵdefineInjectable({ token: TimepickerConfig, factory: TimepickerConfig.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TimepickerConfig, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], null, null);
    })();

    var TimepickerActions = /** @class */ (function () {
        function TimepickerActions() {
        }
        TimepickerActions.prototype.writeValue = function (value) {
            return {
                type: TimepickerActions.WRITE_VALUE,
                payload: value
            };
        };
        TimepickerActions.prototype.changeHours = function (event) {
            return {
                type: TimepickerActions.CHANGE_HOURS,
                payload: event
            };
        };
        TimepickerActions.prototype.changeMinutes = function (event) {
            return {
                type: TimepickerActions.CHANGE_MINUTES,
                payload: event
            };
        };
        TimepickerActions.prototype.changeSeconds = function (event) {
            return {
                type: TimepickerActions.CHANGE_SECONDS,
                payload: event
            };
        };
        TimepickerActions.prototype.setTime = function (value) {
            return {
                type: TimepickerActions.SET_TIME_UNIT,
                payload: value
            };
        };
        TimepickerActions.prototype.updateControls = function (value) {
            return {
                type: TimepickerActions.UPDATE_CONTROLS,
                payload: value
            };
        };
        return TimepickerActions;
    }());
    TimepickerActions.WRITE_VALUE = '[timepicker] write value from ng model';
    TimepickerActions.CHANGE_HOURS = '[timepicker] change hours';
    TimepickerActions.CHANGE_MINUTES = '[timepicker] change minutes';
    TimepickerActions.CHANGE_SECONDS = '[timepicker] change seconds';
    TimepickerActions.SET_TIME_UNIT = '[timepicker] set time unit';
    TimepickerActions.UPDATE_CONTROLS = '[timepicker] update controls';
    TimepickerActions.ɵfac = function TimepickerActions_Factory(t) { return new (t || TimepickerActions)(); };
    TimepickerActions.ɵprov = i0.ɵɵdefineInjectable({ token: TimepickerActions, factory: TimepickerActions.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TimepickerActions, [{
                type: i0.Injectable
            }], null, null);
    })();

    var initialState = {
        value: void 0,
        config: new TimepickerConfig(),
        controls: {
            canIncrementHours: true,
            canIncrementMinutes: true,
            canIncrementSeconds: true,
            canDecrementHours: true,
            canDecrementMinutes: true,
            canDecrementSeconds: true,
            canToggleMeridian: true
        }
    };
    function timepickerReducer(state, action) {
        if (state === void 0) { state = initialState; }
        switch (action.type) {
            case TimepickerActions.WRITE_VALUE: {
                return Object.assign({}, state, { value: action.payload });
            }
            case TimepickerActions.CHANGE_HOURS: {
                if (!canChangeValue(state.config, action.payload) ||
                    !canChangeHours(action.payload, state.controls)) {
                    return state;
                }
                var _newTime = changeTime(state.value, { hour: action.payload.step });
                if ((state.config.max || state.config.min) && !isValidLimit(state.config, _newTime)) {
                    return state;
                }
                return Object.assign({}, state, { value: _newTime });
            }
            case TimepickerActions.CHANGE_MINUTES: {
                if (!canChangeValue(state.config, action.payload) ||
                    !canChangeMinutes(action.payload, state.controls)) {
                    return state;
                }
                var _newTime = changeTime(state.value, { minute: action.payload.step });
                if ((state.config.max || state.config.min) && !isValidLimit(state.config, _newTime)) {
                    return state;
                }
                return Object.assign({}, state, { value: _newTime });
            }
            case TimepickerActions.CHANGE_SECONDS: {
                if (!canChangeValue(state.config, action.payload) ||
                    !canChangeSeconds(action.payload, state.controls)) {
                    return state;
                }
                var _newTime = changeTime(state.value, {
                    seconds: action.payload.step
                });
                if ((state.config.max || state.config.min) && !isValidLimit(state.config, _newTime)) {
                    return state;
                }
                return Object.assign({}, state, { value: _newTime });
            }
            case TimepickerActions.SET_TIME_UNIT: {
                if (!canChangeValue(state.config)) {
                    return state;
                }
                var _newTime = setTime(state.value, action.payload);
                return Object.assign({}, state, { value: _newTime });
            }
            case TimepickerActions.UPDATE_CONTROLS: {
                var _newControlsState = timepickerControls(state.value, action.payload);
                var _newState = {
                    value: state.value,
                    config: action.payload,
                    controls: _newControlsState
                };
                if (state.config.showMeridian !== _newState.config.showMeridian) {
                    if (state.value) {
                        _newState.value = new Date(state.value);
                    }
                }
                return Object.assign({}, state, _newState);
            }
            default:
                return state;
        }
    }

    var TimepickerStore = /** @class */ (function (_super) {
        __extends(TimepickerStore, _super);
        function TimepickerStore() {
            var _this = this;
            var _dispatcher = new rxjs.BehaviorSubject({
                type: '[mini-ngrx] dispatcher init'
            });
            var state = new miniNgrx.MiniState(initialState, _dispatcher, timepickerReducer);
            _this = _super.call(this, _dispatcher, timepickerReducer, state) || this;
            return _this;
        }
        return TimepickerStore;
    }(miniNgrx.MiniStore));
    TimepickerStore.ɵfac = function TimepickerStore_Factory(t) { return new (t || TimepickerStore)(); };
    TimepickerStore.ɵprov = i0.ɵɵdefineInjectable({ token: TimepickerStore, factory: TimepickerStore.ɵfac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TimepickerStore, [{
                type: i0.Injectable
            }], function () { return []; }, null);
    })();

    function TimepickerComponent_td_6_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "td");
            i0.ɵɵtext(1, "\u00A0\u00A0\u00A0");
            i0.ɵɵelementEnd();
        }
    }
    function TimepickerComponent_td_7_Template(rf, ctx) {
        if (rf & 1) {
            var _r19_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "td");
            i0.ɵɵelementStart(1, "a", 1);
            i0.ɵɵlistener("click", function TimepickerComponent_td_7_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r19_1); var ctx_r18 = i0.ɵɵnextContext(); return ctx_r18.changeMinutes(ctx_r18.minuteStep); });
            i0.ɵɵelement(2, "span", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵclassProp("disabled", !ctx_r1.canIncrementMinutes || !ctx_r1.isEditable);
        }
    }
    function TimepickerComponent_td_8_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "td");
            i0.ɵɵtext(1, "\u00A0");
            i0.ɵɵelementEnd();
        }
    }
    function TimepickerComponent_td_9_Template(rf, ctx) {
        if (rf & 1) {
            var _r21_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "td");
            i0.ɵɵelementStart(1, "a", 1);
            i0.ɵɵlistener("click", function TimepickerComponent_td_9_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r21_1); var ctx_r20 = i0.ɵɵnextContext(); return ctx_r20.changeSeconds(ctx_r20.secondsStep); });
            i0.ɵɵelement(2, "span", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r3 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵclassProp("disabled", !ctx_r3.canIncrementSeconds || !ctx_r3.isEditable);
        }
    }
    function TimepickerComponent_td_10_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "td");
            i0.ɵɵtext(1, "\u00A0\u00A0\u00A0");
            i0.ɵɵelementEnd();
        }
    }
    function TimepickerComponent_td_11_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "td");
        }
    }
    function TimepickerComponent_td_15_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "td");
            i0.ɵɵtext(1, "\u00A0:\u00A0");
            i0.ɵɵelementEnd();
        }
    }
    function TimepickerComponent_td_16_Template(rf, ctx) {
        if (rf & 1) {
            var _r23_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "td", 4);
            i0.ɵɵelementStart(1, "input", 5);
            i0.ɵɵlistener("wheel", function TimepickerComponent_td_16_Template_input_wheel_1_listener($event) { i0.ɵɵrestoreView(_r23_1); var ctx_r22 = i0.ɵɵnextContext(); ctx_r22.prevDef($event); return ctx_r22.changeMinutes(ctx_r22.minuteStep * ctx_r22.wheelSign($event), "wheel"); })("keydown.ArrowUp", function TimepickerComponent_td_16_Template_input_keydown_ArrowUp_1_listener() { i0.ɵɵrestoreView(_r23_1); var ctx_r24 = i0.ɵɵnextContext(); return ctx_r24.changeMinutes(ctx_r24.minuteStep, "key"); })("keydown.ArrowDown", function TimepickerComponent_td_16_Template_input_keydown_ArrowDown_1_listener() { i0.ɵɵrestoreView(_r23_1); var ctx_r25 = i0.ɵɵnextContext(); return ctx_r25.changeMinutes(-ctx_r25.minuteStep, "key"); })("change", function TimepickerComponent_td_16_Template_input_change_1_listener($event) { i0.ɵɵrestoreView(_r23_1); var ctx_r26 = i0.ɵɵnextContext(); return ctx_r26.updateMinutes($event.target); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r7 = i0.ɵɵnextContext();
            i0.ɵɵclassProp("has-error", ctx_r7.invalidMinutes);
            i0.ɵɵadvance(1);
            i0.ɵɵclassProp("is-invalid", ctx_r7.invalidMinutes);
            i0.ɵɵproperty("placeholder", ctx_r7.minutesPlaceholder)("readonly", ctx_r7.readonlyInput)("disabled", ctx_r7.disabled)("value", ctx_r7.minutes);
            i0.ɵɵattribute("aria-label", ctx_r7.labelMinutes);
        }
    }
    function TimepickerComponent_td_17_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "td");
            i0.ɵɵtext(1, "\u00A0:\u00A0");
            i0.ɵɵelementEnd();
        }
    }
    function TimepickerComponent_td_18_Template(rf, ctx) {
        if (rf & 1) {
            var _r28_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "td", 4);
            i0.ɵɵelementStart(1, "input", 5);
            i0.ɵɵlistener("wheel", function TimepickerComponent_td_18_Template_input_wheel_1_listener($event) { i0.ɵɵrestoreView(_r28_1); var ctx_r27 = i0.ɵɵnextContext(); ctx_r27.prevDef($event); return ctx_r27.changeSeconds(ctx_r27.secondsStep * ctx_r27.wheelSign($event), "wheel"); })("keydown.ArrowUp", function TimepickerComponent_td_18_Template_input_keydown_ArrowUp_1_listener() { i0.ɵɵrestoreView(_r28_1); var ctx_r29 = i0.ɵɵnextContext(); return ctx_r29.changeSeconds(ctx_r29.secondsStep, "key"); })("keydown.ArrowDown", function TimepickerComponent_td_18_Template_input_keydown_ArrowDown_1_listener() { i0.ɵɵrestoreView(_r28_1); var ctx_r30 = i0.ɵɵnextContext(); return ctx_r30.changeSeconds(-ctx_r30.secondsStep, "key"); })("change", function TimepickerComponent_td_18_Template_input_change_1_listener($event) { i0.ɵɵrestoreView(_r28_1); var ctx_r31 = i0.ɵɵnextContext(); return ctx_r31.updateSeconds($event.target); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r9 = i0.ɵɵnextContext();
            i0.ɵɵclassProp("has-error", ctx_r9.invalidSeconds);
            i0.ɵɵadvance(1);
            i0.ɵɵclassProp("is-invalid", ctx_r9.invalidSeconds);
            i0.ɵɵproperty("placeholder", ctx_r9.secondsPlaceholder)("readonly", ctx_r9.readonlyInput)("disabled", ctx_r9.disabled)("value", ctx_r9.seconds);
            i0.ɵɵattribute("aria-label", ctx_r9.labelSeconds);
        }
    }
    function TimepickerComponent_td_19_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "td");
            i0.ɵɵtext(1, "\u00A0\u00A0\u00A0");
            i0.ɵɵelementEnd();
        }
    }
    function TimepickerComponent_td_20_Template(rf, ctx) {
        if (rf & 1) {
            var _r33_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "td");
            i0.ɵɵelementStart(1, "button", 8);
            i0.ɵɵlistener("click", function TimepickerComponent_td_20_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r33_1); var ctx_r32 = i0.ɵɵnextContext(); return ctx_r32.toggleMeridian(); });
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r11 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵclassProp("disabled", !ctx_r11.isEditable || !ctx_r11.canToggleMeridian);
            i0.ɵɵproperty("disabled", !ctx_r11.isEditable || !ctx_r11.canToggleMeridian);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1("", ctx_r11.meridian, " ");
        }
    }
    function TimepickerComponent_td_25_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "td");
            i0.ɵɵtext(1, "\u00A0\u00A0\u00A0");
            i0.ɵɵelementEnd();
        }
    }
    function TimepickerComponent_td_26_Template(rf, ctx) {
        if (rf & 1) {
            var _r35_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "td");
            i0.ɵɵelementStart(1, "a", 1);
            i0.ɵɵlistener("click", function TimepickerComponent_td_26_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r35_1); var ctx_r34 = i0.ɵɵnextContext(); return ctx_r34.changeMinutes(-ctx_r34.minuteStep); });
            i0.ɵɵelement(2, "span", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r13 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵclassProp("disabled", !ctx_r13.canDecrementMinutes || !ctx_r13.isEditable);
        }
    }
    function TimepickerComponent_td_27_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "td");
            i0.ɵɵtext(1, "\u00A0");
            i0.ɵɵelementEnd();
        }
    }
    function TimepickerComponent_td_28_Template(rf, ctx) {
        if (rf & 1) {
            var _r37_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "td");
            i0.ɵɵelementStart(1, "a", 1);
            i0.ɵɵlistener("click", function TimepickerComponent_td_28_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r37_1); var ctx_r36 = i0.ɵɵnextContext(); return ctx_r36.changeSeconds(-ctx_r36.secondsStep); });
            i0.ɵɵelement(2, "span", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r15 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵclassProp("disabled", !ctx_r15.canDecrementSeconds || !ctx_r15.isEditable);
        }
    }
    function TimepickerComponent_td_29_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "td");
            i0.ɵɵtext(1, "\u00A0\u00A0\u00A0");
            i0.ɵɵelementEnd();
        }
    }
    function TimepickerComponent_td_30_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "td");
        }
    }
    var TIMEPICKER_CONTROL_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        useExisting: i0.forwardRef(function () { return TimepickerComponent; }),
        multi: true
    };
    var TimepickerComponent = /** @class */ (function () {
        function TimepickerComponent(_config, _cd, _store, _timepickerActions) {
            var _this = this;
            this._cd = _cd;
            this._store = _store;
            this._timepickerActions = _timepickerActions;
            /** hours change step */
            this.hourStep = 1;
            /** minutes change step */
            this.minuteStep = 5;
            /** seconds change step */
            this.secondsStep = 10;
            /** if true hours and minutes fields will be readonly */
            this.readonlyInput = false;
            /** if true hours and minutes fields will be disabled */
            this.disabled = false;
            /** if true scroll inside hours and minutes inputs will change time */
            this.mousewheel = true;
            /** if true the values of hours and minutes can be changed using the up/down arrow keys on the keyboard */
            this.arrowkeys = true;
            /** if true spinner arrows above and below the inputs will be shown */
            this.showSpinners = true;
            /** if true meridian button will be shown */
            this.showMeridian = true;
            /** show minutes in timepicker */
            this.showMinutes = true;
            /** show seconds in timepicker */
            this.showSeconds = false;
            /** meridian labels based on locale */
            this.meridians = ['AM', 'PM'];
            /** placeholder for hours field in timepicker */
            this.hoursPlaceholder = 'HH';
            /** placeholder for minutes field in timepicker */
            this.minutesPlaceholder = 'MM';
            /** placeholder for seconds field in timepicker */
            this.secondsPlaceholder = 'SS';
            /** emits true if value is a valid date */
            this.isValid = new i0.EventEmitter();
            // ui variables
            this.hours = '';
            this.minutes = '';
            this.seconds = '';
            this.meridian = '';
            // min\max validation for input fields
            this.invalidHours = false;
            this.invalidMinutes = false;
            this.invalidSeconds = false;
            // aria-label variables
            this.labelHours = 'hours';
            this.labelMinutes = 'minutes';
            this.labelSeconds = 'seconds';
            // time picker controls state
            this.canIncrementHours = true;
            this.canIncrementMinutes = true;
            this.canIncrementSeconds = true;
            this.canDecrementHours = true;
            this.canDecrementMinutes = true;
            this.canDecrementSeconds = true;
            this.canToggleMeridian = true;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            this.onChange = Function.prototype;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            this.onTouched = Function.prototype;
            Object.assign(this, _config);
            this.timepickerSub = _store
                .select(function (state) { return state.value; })
                .subscribe(function (value) {
                // update UI values if date changed
                _this._renderTime(value);
                _this.onChange(value);
                _this._store.dispatch(_this._timepickerActions.updateControls(getControlsValue(_this)));
            });
            _store
                .select(function (state) { return state.controls; })
                .subscribe(function (controlsState) {
                _this.isValid.emit(isInputValid(_this.hours, _this.minutes, _this.seconds, _this.isPM()));
                Object.assign(_this, controlsState);
                _cd.markForCheck();
            });
        }
        Object.defineProperty(TimepickerComponent.prototype, "isSpinnersVisible", {
            /** @deprecated - please use `isEditable` instead */
            get: function () {
                return this.showSpinners && !this.readonlyInput;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TimepickerComponent.prototype, "isEditable", {
            get: function () {
                return !(this.readonlyInput || this.disabled);
            },
            enumerable: false,
            configurable: true
        });
        TimepickerComponent.prototype.resetValidation = function () {
            this.invalidHours = false;
            this.invalidMinutes = false;
            this.invalidSeconds = false;
        };
        TimepickerComponent.prototype.isPM = function () {
            return this.showMeridian && this.meridian === this.meridians[1];
        };
        TimepickerComponent.prototype.prevDef = function ($event) {
            $event.preventDefault();
        };
        TimepickerComponent.prototype.wheelSign = function ($event) {
            return Math.sign($event.deltaY || 0) * -1;
        };
        TimepickerComponent.prototype.ngOnChanges = function () {
            this._store.dispatch(this._timepickerActions.updateControls(getControlsValue(this)));
        };
        TimepickerComponent.prototype.changeHours = function (step, source) {
            if (source === void 0) { source = ''; }
            this.resetValidation();
            this._store.dispatch(this._timepickerActions.changeHours({ step: step, source: source }));
        };
        TimepickerComponent.prototype.changeMinutes = function (step, source) {
            if (source === void 0) { source = ''; }
            this.resetValidation();
            this._store.dispatch(this._timepickerActions.changeMinutes({ step: step, source: source }));
        };
        TimepickerComponent.prototype.changeSeconds = function (step, source) {
            if (source === void 0) { source = ''; }
            this.resetValidation();
            this._store.dispatch(this._timepickerActions.changeSeconds({ step: step, source: source }));
        };
        TimepickerComponent.prototype.updateHours = function (target) {
            this.resetValidation();
            this.hours = target.value;
            var isValid = isHourInputValid(this.hours, this.isPM()) && this.isValidLimit();
            if (!isValid) {
                this.invalidHours = true;
                this.isValid.emit(false);
                this.onChange(null);
                return;
            }
            this._updateTime();
        };
        TimepickerComponent.prototype.updateMinutes = function (target) {
            this.resetValidation();
            this.minutes = target.value;
            var isValid = isMinuteInputValid(this.minutes) && this.isValidLimit();
            if (!isValid) {
                this.invalidMinutes = true;
                this.isValid.emit(false);
                this.onChange(null);
                return;
            }
            this._updateTime();
        };
        TimepickerComponent.prototype.updateSeconds = function (target) {
            this.resetValidation();
            this.seconds = target.value;
            var isValid = isSecondInputValid(this.seconds) && this.isValidLimit();
            if (!isValid) {
                this.invalidSeconds = true;
                this.isValid.emit(false);
                this.onChange(null);
                return;
            }
            this._updateTime();
        };
        TimepickerComponent.prototype.isValidLimit = function () {
            return isInputLimitValid({
                hour: this.hours,
                minute: this.minutes,
                seconds: this.seconds,
                isPM: this.isPM()
            }, this.max, this.min);
        };
        TimepickerComponent.prototype._updateTime = function () {
            var _seconds = this.showSeconds ? this.seconds : void 0;
            var _minutes = this.showMinutes ? this.minutes : void 0;
            if (!isInputValid(this.hours, _minutes, _seconds, this.isPM())) {
                this.isValid.emit(false);
                this.onChange(null);
                return;
            }
            this._store.dispatch(this._timepickerActions.setTime({
                hour: this.hours,
                minute: this.minutes,
                seconds: this.seconds,
                isPM: this.isPM()
            }));
        };
        TimepickerComponent.prototype.toggleMeridian = function () {
            if (!this.showMeridian || !this.isEditable) {
                return;
            }
            var _hoursPerDayHalf = 12;
            this._store.dispatch(this._timepickerActions.changeHours({
                step: _hoursPerDayHalf,
                source: ''
            }));
        };
        /**
         * Write a new value to the element.
         */
        TimepickerComponent.prototype.writeValue = function (obj) {
            if (isValidDate(obj)) {
                this._store.dispatch(this._timepickerActions.writeValue(parseTime(obj)));
            }
            else if (obj == null) {
                this._store.dispatch(this._timepickerActions.writeValue());
            }
        };
        /**
         * Set the function to be called when the control receives a change event.
         */
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        TimepickerComponent.prototype.registerOnChange = function (fn) {
            this.onChange = fn;
        };
        /**
         * Set the function to be called when the control receives a touch event.
         */
        TimepickerComponent.prototype.registerOnTouched = function (fn) {
            this.onTouched = fn;
        };
        /**
         * This function is called when the control status changes to or from "disabled".
         * Depending on the value, it will enable or disable the appropriate DOM element.
         *
         * @param isDisabled
         */
        TimepickerComponent.prototype.setDisabledState = function (isDisabled) {
            this.disabled = isDisabled;
            this._cd.markForCheck();
        };
        TimepickerComponent.prototype.ngOnDestroy = function () {
            this.timepickerSub.unsubscribe();
        };
        TimepickerComponent.prototype._renderTime = function (value) {
            if (!value || !isValidDate(value)) {
                this.hours = '';
                this.minutes = '';
                this.seconds = '';
                this.meridian = this.meridians[0];
                return;
            }
            var _value = parseTime(value);
            if (!_value) {
                return;
            }
            var _hoursPerDayHalf = 12;
            var _hours = _value.getHours();
            if (this.showMeridian) {
                this.meridian = this.meridians[_hours >= _hoursPerDayHalf ? 1 : 0];
                _hours = _hours % _hoursPerDayHalf;
                // should be 12 PM, not 00 PM
                if (_hours === 0) {
                    _hours = _hoursPerDayHalf;
                }
            }
            this.hours = padNumber(_hours);
            this.minutes = padNumber(_value.getMinutes());
            this.seconds = padNumber(_value.getUTCSeconds());
        };
        return TimepickerComponent;
    }());
    TimepickerComponent.ɵfac = function TimepickerComponent_Factory(t) { return new (t || TimepickerComponent)(i0.ɵɵdirectiveInject(TimepickerConfig), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(TimepickerStore), i0.ɵɵdirectiveInject(TimepickerActions)); };
    TimepickerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TimepickerComponent, selectors: [["timepicker"]], inputs: { hourStep: "hourStep", minuteStep: "minuteStep", secondsStep: "secondsStep", readonlyInput: "readonlyInput", disabled: "disabled", mousewheel: "mousewheel", arrowkeys: "arrowkeys", showSpinners: "showSpinners", showMeridian: "showMeridian", showMinutes: "showMinutes", showSeconds: "showSeconds", meridians: "meridians", min: "min", max: "max", hoursPlaceholder: "hoursPlaceholder", minutesPlaceholder: "minutesPlaceholder", secondsPlaceholder: "secondsPlaceholder" }, outputs: { isValid: "isValid" }, features: [i0.ɵɵProvidersFeature([TIMEPICKER_CONTROL_VALUE_ACCESSOR, TimepickerStore]), i0.ɵɵNgOnChangesFeature], decls: 31, vars: 33, consts: [[1, "text-center", 3, "hidden"], [1, "btn", "btn-link", 3, "click"], [1, "bs-chevron", "bs-chevron-up"], [4, "ngIf"], [1, "form-group"], ["type", "text", "maxlength", "2", 1, "form-control", "text-center", "bs-timepicker-field", 3, "placeholder", "readonly", "disabled", "value", "wheel", "keydown.ArrowUp", "keydown.ArrowDown", "change"], ["class", "form-group", 3, "has-error", 4, "ngIf"], [1, "bs-chevron", "bs-chevron-down"], ["type", "button", 1, "btn", "btn-default", "text-center", 3, "disabled", "click"]], template: function TimepickerComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "table");
                i0.ɵɵelementStart(1, "tbody");
                i0.ɵɵelementStart(2, "tr", 0);
                i0.ɵɵelementStart(3, "td");
                i0.ɵɵelementStart(4, "a", 1);
                i0.ɵɵlistener("click", function TimepickerComponent_Template_a_click_4_listener() { return ctx.changeHours(ctx.hourStep); });
                i0.ɵɵelement(5, "span", 2);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(6, TimepickerComponent_td_6_Template, 2, 0, "td", 3);
                i0.ɵɵtemplate(7, TimepickerComponent_td_7_Template, 3, 2, "td", 3);
                i0.ɵɵtemplate(8, TimepickerComponent_td_8_Template, 2, 0, "td", 3);
                i0.ɵɵtemplate(9, TimepickerComponent_td_9_Template, 3, 2, "td", 3);
                i0.ɵɵtemplate(10, TimepickerComponent_td_10_Template, 2, 0, "td", 3);
                i0.ɵɵtemplate(11, TimepickerComponent_td_11_Template, 1, 0, "td", 3);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(12, "tr");
                i0.ɵɵelementStart(13, "td", 4);
                i0.ɵɵelementStart(14, "input", 5);
                i0.ɵɵlistener("wheel", function TimepickerComponent_Template_input_wheel_14_listener($event) { ctx.prevDef($event); return ctx.changeHours(ctx.hourStep * ctx.wheelSign($event), "wheel"); })("keydown.ArrowUp", function TimepickerComponent_Template_input_keydown_ArrowUp_14_listener() { return ctx.changeHours(ctx.hourStep, "key"); })("keydown.ArrowDown", function TimepickerComponent_Template_input_keydown_ArrowDown_14_listener() { return ctx.changeHours(-ctx.hourStep, "key"); })("change", function TimepickerComponent_Template_input_change_14_listener($event) { return ctx.updateHours($event.target); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(15, TimepickerComponent_td_15_Template, 2, 0, "td", 3);
                i0.ɵɵtemplate(16, TimepickerComponent_td_16_Template, 2, 9, "td", 6);
                i0.ɵɵtemplate(17, TimepickerComponent_td_17_Template, 2, 0, "td", 3);
                i0.ɵɵtemplate(18, TimepickerComponent_td_18_Template, 2, 9, "td", 6);
                i0.ɵɵtemplate(19, TimepickerComponent_td_19_Template, 2, 0, "td", 3);
                i0.ɵɵtemplate(20, TimepickerComponent_td_20_Template, 3, 4, "td", 3);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(21, "tr", 0);
                i0.ɵɵelementStart(22, "td");
                i0.ɵɵelementStart(23, "a", 1);
                i0.ɵɵlistener("click", function TimepickerComponent_Template_a_click_23_listener() { return ctx.changeHours(-ctx.hourStep); });
                i0.ɵɵelement(24, "span", 7);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(25, TimepickerComponent_td_25_Template, 2, 0, "td", 3);
                i0.ɵɵtemplate(26, TimepickerComponent_td_26_Template, 3, 2, "td", 3);
                i0.ɵɵtemplate(27, TimepickerComponent_td_27_Template, 2, 0, "td", 3);
                i0.ɵɵtemplate(28, TimepickerComponent_td_28_Template, 3, 2, "td", 3);
                i0.ɵɵtemplate(29, TimepickerComponent_td_29_Template, 2, 0, "td", 3);
                i0.ɵɵtemplate(30, TimepickerComponent_td_30_Template, 1, 0, "td", 3);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("hidden", !ctx.showSpinners);
                i0.ɵɵadvance(2);
                i0.ɵɵclassProp("disabled", !ctx.canIncrementHours || !ctx.isEditable);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngIf", ctx.showMinutes);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.showMinutes);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.showSeconds);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.showSeconds);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.showMeridian);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.showMeridian);
                i0.ɵɵadvance(2);
                i0.ɵɵclassProp("has-error", ctx.invalidHours);
                i0.ɵɵadvance(1);
                i0.ɵɵclassProp("is-invalid", ctx.invalidHours);
                i0.ɵɵproperty("placeholder", ctx.hoursPlaceholder)("readonly", ctx.readonlyInput)("disabled", ctx.disabled)("value", ctx.hours);
                i0.ɵɵattribute("aria-label", ctx.labelHours);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.showMinutes);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.showMinutes);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.showSeconds);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.showSeconds);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.showMeridian);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.showMeridian);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("hidden", !ctx.showSpinners);
                i0.ɵɵadvance(2);
                i0.ɵɵclassProp("disabled", !ctx.canDecrementHours || !ctx.isEditable);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngIf", ctx.showMinutes);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.showMinutes);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.showSeconds);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.showSeconds);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.showMeridian);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.showMeridian);
            }
        }, directives: [i4.NgIf], styles: ["\n    .bs-chevron {\n      border-style: solid;\n      display: block;\n      width: 9px;\n      height: 9px;\n      position: relative;\n      border-width: 3px 0px 0 3px;\n    }\n\n    .bs-chevron-up {\n      -webkit-transform: rotate(45deg);\n      transform: rotate(45deg);\n      top: 2px;\n    }\n\n    .bs-chevron-down {\n      -webkit-transform: rotate(-135deg);\n      transform: rotate(-135deg);\n      top: -2px;\n    }\n\n    .bs-timepicker-field {\n      width: 50px;\n      padding: .375rem .55rem;\n    }\n  "], encapsulation: 2, changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TimepickerComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'timepicker',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        providers: [TIMEPICKER_CONTROL_VALUE_ACCESSOR, TimepickerStore],
                        templateUrl: './timepicker.component.html',
                        styles: ["\n    .bs-chevron {\n      border-style: solid;\n      display: block;\n      width: 9px;\n      height: 9px;\n      position: relative;\n      border-width: 3px 0px 0 3px;\n    }\n\n    .bs-chevron-up {\n      -webkit-transform: rotate(45deg);\n      transform: rotate(45deg);\n      top: 2px;\n    }\n\n    .bs-chevron-down {\n      -webkit-transform: rotate(-135deg);\n      transform: rotate(-135deg);\n      top: -2px;\n    }\n\n    .bs-timepicker-field {\n      width: 50px;\n      padding: .375rem .55rem;\n    }\n  "],
                        encapsulation: i0.ViewEncapsulation.None
                    }]
            }], function () { return [{ type: TimepickerConfig }, { type: i0.ChangeDetectorRef }, { type: TimepickerStore }, { type: TimepickerActions }]; }, { hourStep: [{
                    type: i0.Input
                }], minuteStep: [{
                    type: i0.Input
                }], secondsStep: [{
                    type: i0.Input
                }], readonlyInput: [{
                    type: i0.Input
                }], disabled: [{
                    type: i0.Input
                }], mousewheel: [{
                    type: i0.Input
                }], arrowkeys: [{
                    type: i0.Input
                }], showSpinners: [{
                    type: i0.Input
                }], showMeridian: [{
                    type: i0.Input
                }], showMinutes: [{
                    type: i0.Input
                }], showSeconds: [{
                    type: i0.Input
                }], meridians: [{
                    type: i0.Input
                }], min: [{
                    type: i0.Input
                }], max: [{
                    type: i0.Input
                }], hoursPlaceholder: [{
                    type: i0.Input
                }], minutesPlaceholder: [{
                    type: i0.Input
                }], secondsPlaceholder: [{
                    type: i0.Input
                }], isValid: [{
                    type: i0.Output
                }] });
    })();

    var TimepickerModule = /** @class */ (function () {
        function TimepickerModule() {
        }
        TimepickerModule.forRoot = function () {
            return {
                ngModule: TimepickerModule,
                providers: [TimepickerActions, TimepickerStore]
            };
        };
        return TimepickerModule;
    }());
    TimepickerModule.ɵmod = i0.ɵɵdefineNgModule({ type: TimepickerModule });
    TimepickerModule.ɵinj = i0.ɵɵdefineInjector({ factory: function TimepickerModule_Factory(t) { return new (t || TimepickerModule)(); }, imports: [[i4.CommonModule]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(TimepickerModule, { declarations: [TimepickerComponent], imports: [i4.CommonModule], exports: [TimepickerComponent] }); })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TimepickerModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [i4.CommonModule],
                        declarations: [TimepickerComponent],
                        exports: [TimepickerComponent]
                    }]
            }], null, null);
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.TimepickerActions = TimepickerActions;
    exports.TimepickerComponent = TimepickerComponent;
    exports.TimepickerConfig = TimepickerConfig;
    exports.TimepickerModule = TimepickerModule;
    exports.TimepickerStore = TimepickerStore;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-bootstrap-timepicker.umd.js.map
