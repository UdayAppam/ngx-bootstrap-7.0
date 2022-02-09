(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ngx-bootstrap/pagination', ['exports', '@angular/core', '@angular/forms', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['ngx-bootstrap'] = global['ngx-bootstrap'] || {}, global['ngx-bootstrap'].pagination = {}), global.ng.core, global.ng.forms, global.ng.common));
}(this, (function (exports, i0, forms, i2) { 'use strict';

    // todo: split
    /** Provides default values for Pagination and pager components */
    var PaginationConfig = /** @class */ (function () {
        function PaginationConfig() {
            this.main = {
                itemsPerPage: 10,
                boundaryLinks: false,
                directionLinks: true,
                firstText: 'First',
                previousText: 'Previous',
                nextText: 'Next',
                lastText: 'Last',
                pageBtnClass: '',
                rotate: true
            };
            this.pager = {
                itemsPerPage: 15,
                previousText: '« Previous',
                nextText: 'Next »',
                pageBtnClass: '',
                align: true
            };
        }
        return PaginationConfig;
    }());
    PaginationConfig.ɵfac = function PaginationConfig_Factory(t) { return new (t || PaginationConfig)(); };
    PaginationConfig.ɵprov = i0.ɵɵdefineInjectable({ token: PaginationConfig, factory: PaginationConfig.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PaginationConfig, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], null, null);
    })();

    var _c0 = function (a0, a1) { return { "pull-left": a0, "float-left": a1 }; };
    var _c1 = function (a0, a1) { return { "pull-right": a0, "float-right": a1 }; };
    var PAGER_CONTROL_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        useExisting: i0.forwardRef(function () { return PagerComponent; }),
        multi: true
    };
    var PagerComponent = /** @class */ (function () {
        function PagerComponent(elementRef, paginationConfig, changeDetection) {
            this.elementRef = elementRef;
            this.changeDetection = changeDetection;
            /** if `true` aligns each link to the sides of pager */
            this.align = false;
            /** if false first and last buttons will be hidden */
            this.boundaryLinks = false;
            /** if false previous and next buttons will be hidden */
            this.directionLinks = true;
            // labels
            /** first button text */
            this.firstText = 'First';
            /** previous button text */
            this.previousText = '« Previous';
            /** next button text */
            this.nextText = 'Next »';
            /** last button text */
            this.lastText = 'Last';
            /** if true current page will in the middle of pages list */
            this.rotate = true;
            // css
            /** add class to <code><li\></code> */
            this.pageBtnClass = '';
            /** if true pagination component will be disabled */
            this.disabled = false;
            /** fired when total pages count changes, $event:number equals to total pages count */
            this.numPages = new i0.EventEmitter();
            /** fired when page was changed, $event:{page, itemsPerPage} equals to
             * object with current page index and number of items per page
             */
            this.pageChanged = new i0.EventEmitter();
            this.onChange = Function.prototype;
            this.onTouched = Function.prototype;
            this.classMap = '';
            this.inited = false;
            this._itemsPerPage = 15;
            this._totalItems = 0;
            this._totalPages = 0;
            this._page = 1;
            this.elementRef = elementRef;
            if (!this.config) {
                this.configureOptions(Object.assign({}, paginationConfig.main, paginationConfig.pager));
            }
        }
        Object.defineProperty(PagerComponent.prototype, "itemsPerPage", {
            /** maximum number of items per page. If value less than 1 will display all items on one page */
            get: function () {
                return this._itemsPerPage;
            },
            set: function (v) {
                this._itemsPerPage = v;
                this.totalPages = this.calculateTotalPages();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(PagerComponent.prototype, "totalItems", {
            /** total number of items in all pages */
            get: function () {
                return this._totalItems;
            },
            set: function (v) {
                this._totalItems = v;
                this.totalPages = this.calculateTotalPages();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(PagerComponent.prototype, "totalPages", {
            get: function () {
                return this._totalPages;
            },
            set: function (v) {
                this._totalPages = v;
                this.numPages.emit(v);
                if (this.inited) {
                    this.selectPage(this.page);
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(PagerComponent.prototype, "page", {
            get: function () {
                return this._page;
            },
            set: function (value) {
                var _previous = this._page;
                this._page = value > this.totalPages ? this.totalPages : value || 1;
                this.changeDetection.markForCheck();
                if (_previous === this._page || typeof _previous === 'undefined') {
                    return;
                }
                this.pageChanged.emit({
                    page: this._page,
                    itemsPerPage: this.itemsPerPage
                });
            },
            enumerable: false,
            configurable: true
        });
        PagerComponent.prototype.configureOptions = function (config) {
            this.config = Object.assign({}, config);
        };
        PagerComponent.prototype.ngOnInit = function () {
            var _a, _b, _c, _d, _e, _f;
            if (typeof window !== 'undefined') {
                this.classMap = this.elementRef.nativeElement.getAttribute('class') || '';
            }
            // watch for maxSize
            if (typeof this.maxSize === 'undefined') {
                this.maxSize = ((_a = this.config) === null || _a === void 0 ? void 0 : _a.maxSize) || 0;
            }
            if (typeof this.rotate === 'undefined') {
                this.rotate = !!((_b = this.config) === null || _b === void 0 ? void 0 : _b.rotate);
            }
            if (typeof this.boundaryLinks === 'undefined') {
                this.boundaryLinks = !!((_c = this.config) === null || _c === void 0 ? void 0 : _c.boundaryLinks);
            }
            if (typeof this.directionLinks === 'undefined') {
                this.directionLinks = !!((_d = this.config) === null || _d === void 0 ? void 0 : _d.directionLinks);
            }
            if (typeof this.pageBtnClass === 'undefined') {
                this.pageBtnClass = ((_e = this.config) === null || _e === void 0 ? void 0 : _e.pageBtnClass) || '';
            }
            // base class
            if (typeof this.itemsPerPage === 'undefined') {
                this.itemsPerPage = ((_f = this.config) === null || _f === void 0 ? void 0 : _f.itemsPerPage) || 0;
            }
            this.totalPages = this.calculateTotalPages();
            // this class
            this.pages = this.getPages(this.page, this.totalPages);
            this.inited = true;
        };
        PagerComponent.prototype.writeValue = function (value) {
            this.page = value;
            this.pages = this.getPages(this.page, this.totalPages);
        };
        PagerComponent.prototype.getText = function (key) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            return this[key + "Text"] || this.config[key + "Text"];
        };
        PagerComponent.prototype.noPrevious = function () {
            return this.page === 1;
        };
        PagerComponent.prototype.noNext = function () {
            return this.page === this.totalPages;
        };
        PagerComponent.prototype.registerOnChange = function (fn) {
            this.onChange = fn;
        };
        PagerComponent.prototype.registerOnTouched = function (fn) {
            this.onTouched = fn;
        };
        PagerComponent.prototype.selectPage = function (page, event) {
            if (event) {
                event.preventDefault();
            }
            if (!this.disabled) {
                if (event && event.target) {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    var target = event.target;
                    target.blur();
                }
                this.writeValue(page);
                this.onChange(this.page);
            }
        };
        // Create page object used in template
        PagerComponent.prototype.makePage = function (num, text, active) {
            return { text: text, number: num, active: active };
        };
        PagerComponent.prototype.getPages = function (currentPage, totalPages) {
            var pages = [];
            // Default page limits
            var startPage = 1;
            var endPage = totalPages;
            var isMaxSized = typeof this.maxSize !== 'undefined' && this.maxSize < totalPages;
            // recompute if maxSize
            if (isMaxSized && this.maxSize) {
                if (this.rotate) {
                    // Current page is displayed in the middle of the visible ones
                    startPage = Math.max(currentPage - Math.floor(this.maxSize / 2), 1);
                    endPage = startPage + this.maxSize - 1;
                    // Adjust if limit is exceeded
                    if (endPage > totalPages) {
                        endPage = totalPages;
                        startPage = endPage - this.maxSize + 1;
                    }
                }
                else {
                    // Visible pages are paginated with maxSize
                    startPage =
                        (Math.ceil(currentPage / this.maxSize) - 1) * this.maxSize + 1;
                    // Adjust last page if limit is exceeded
                    endPage = Math.min(startPage + this.maxSize - 1, totalPages);
                }
            }
            // Add page number links
            for (var num = startPage; num <= endPage; num++) {
                var page = this.makePage(num, num.toString(), num === currentPage);
                pages.push(page);
            }
            // Add links to move between page sets
            if (isMaxSized && !this.rotate) {
                if (startPage > 1) {
                    var previousPageSet = this.makePage(startPage - 1, '...', false);
                    pages.unshift(previousPageSet);
                }
                if (endPage < totalPages) {
                    var nextPageSet = this.makePage(endPage + 1, '...', false);
                    pages.push(nextPageSet);
                }
            }
            return pages;
        };
        // base class
        PagerComponent.prototype.calculateTotalPages = function () {
            var totalPages = this.itemsPerPage < 1
                ? 1
                : Math.ceil(this.totalItems / this.itemsPerPage);
            return Math.max(totalPages || 0, 1);
        };
        return PagerComponent;
    }());
    PagerComponent.ɵfac = function PagerComponent_Factory(t) { return new (t || PagerComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(PaginationConfig), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    PagerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PagerComponent, selectors: [["pager"]], inputs: { align: "align", maxSize: "maxSize", boundaryLinks: "boundaryLinks", directionLinks: "directionLinks", firstText: "firstText", previousText: "previousText", nextText: "nextText", lastText: "lastText", rotate: "rotate", pageBtnClass: "pageBtnClass", disabled: "disabled", itemsPerPage: "itemsPerPage", totalItems: "totalItems" }, outputs: { numPages: "numPages", pageChanged: "pageChanged" }, features: [i0.ɵɵProvidersFeature([PAGER_CONTROL_VALUE_ACCESSOR])], decls: 7, vars: 24, consts: [[1, "pager"], [3, "ngClass"], ["href", "", 3, "click"]], template: function PagerComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "ul", 0);
                i0.ɵɵelementStart(1, "li", 1);
                i0.ɵɵelementStart(2, "a", 2);
                i0.ɵɵlistener("click", function PagerComponent_Template_a_click_2_listener($event) { return ctx.selectPage(ctx.page - 1, $event); });
                i0.ɵɵtext(3);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(4, "li", 1);
                i0.ɵɵelementStart(5, "a", 2);
                i0.ɵɵlistener("click", function PagerComponent_Template_a_click_5_listener($event) { return ctx.selectPage(ctx.page + 1, $event); });
                i0.ɵɵtext(6);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(1);
                i0.ɵɵclassMap(ctx.pageBtnClass);
                i0.ɵɵclassProp("disabled", ctx.noPrevious())("previous", ctx.align);
                i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(18, _c0, ctx.align, ctx.align));
                i0.ɵɵadvance(2);
                i0.ɵɵtextInterpolate(ctx.getText("previous"));
                i0.ɵɵadvance(1);
                i0.ɵɵclassMap(ctx.pageBtnClass);
                i0.ɵɵclassProp("disabled", ctx.noNext())("next", ctx.align);
                i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(21, _c1, ctx.align, ctx.align));
                i0.ɵɵadvance(2);
                i0.ɵɵtextInterpolate(ctx.getText("next"));
            }
        }, directives: [i2.NgClass], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PagerComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'pager',
                        templateUrl: './pager.component.html',
                        providers: [PAGER_CONTROL_VALUE_ACCESSOR]
                    }]
            }], function () { return [{ type: i0.ElementRef }, { type: PaginationConfig }, { type: i0.ChangeDetectorRef }]; }, { align: [{
                    type: i0.Input
                }], maxSize: [{
                    type: i0.Input
                }], boundaryLinks: [{
                    type: i0.Input
                }], directionLinks: [{
                    type: i0.Input
                }], firstText: [{
                    type: i0.Input
                }], previousText: [{
                    type: i0.Input
                }], nextText: [{
                    type: i0.Input
                }], lastText: [{
                    type: i0.Input
                }], rotate: [{
                    type: i0.Input
                }], pageBtnClass: [{
                    type: i0.Input
                }], disabled: [{
                    type: i0.Input
                }], numPages: [{
                    type: i0.Output
                }], pageChanged: [{
                    type: i0.Output
                }], itemsPerPage: [{
                    type: i0.Input
                }], totalItems: [{
                    type: i0.Input
                }] });
    })();

    var _c0$1 = function (a0, a1) { return { disabled: a0, currentPage: a1 }; };
    function PaginationComponent_li_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r16_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "li", 11);
            i0.ɵɵelementStart(1, "a", 12);
            i0.ɵɵlistener("click", function PaginationComponent_li_1_Template_a_click_1_listener($event) { i0.ɵɵrestoreView(_r16_1); var ctx_r15 = i0.ɵɵnextContext(); return ctx_r15.selectPage(1, $event); });
            i0.ɵɵelementContainer(2, 13);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            var _r11 = i0.ɵɵreference(13);
            i0.ɵɵclassProp("disabled", ctx_r0.noPrevious() || ctx_r0.disabled);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngTemplateOutlet", ctx_r0.customFirstTemplate || _r11)("ngTemplateOutletContext", i0.ɵɵpureFunction2(4, _c0$1, ctx_r0.noPrevious() || ctx_r0.disabled, ctx_r0.page));
        }
    }
    function PaginationComponent_li_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r18_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "li", 14);
            i0.ɵɵelementStart(1, "a", 12);
            i0.ɵɵlistener("click", function PaginationComponent_li_2_Template_a_click_1_listener($event) { i0.ɵɵrestoreView(_r18_1); var ctx_r17 = i0.ɵɵnextContext(); return ctx_r17.selectPage(ctx_r17.page - 1, $event); });
            i0.ɵɵelementContainer(2, 13);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext();
            var _r9 = i0.ɵɵreference(11);
            i0.ɵɵclassProp("disabled", ctx_r1.noPrevious() || ctx_r1.disabled);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngTemplateOutlet", ctx_r1.customPreviousTemplate || _r9)("ngTemplateOutletContext", i0.ɵɵpureFunction2(4, _c0$1, ctx_r1.noPrevious() || ctx_r1.disabled, ctx_r1.page));
        }
    }
    var _c1$1 = function (a0, a1, a2) { return { disabled: a0, $implicit: a1, currentPage: a2 }; };
    function PaginationComponent_li_3_Template(rf, ctx) {
        if (rf & 1) {
            var _r21_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "li", 15);
            i0.ɵɵelementStart(1, "a", 12);
            i0.ɵɵlistener("click", function PaginationComponent_li_3_Template_a_click_1_listener($event) { i0.ɵɵrestoreView(_r21_1); var pg_r19 = ctx.$implicit; var ctx_r20 = i0.ɵɵnextContext(); return ctx_r20.selectPage(pg_r19.number, $event); });
            i0.ɵɵelementContainer(2, 13);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var pg_r19 = ctx.$implicit;
            var ctx_r2 = i0.ɵɵnextContext();
            var _r5 = i0.ɵɵreference(7);
            i0.ɵɵclassProp("active", pg_r19.active)("disabled", ctx_r2.disabled && !pg_r19.active);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngTemplateOutlet", ctx_r2.customPageTemplate || _r5)("ngTemplateOutletContext", i0.ɵɵpureFunction3(6, _c1$1, ctx_r2.disabled, pg_r19, ctx_r2.page));
        }
    }
    function PaginationComponent_li_4_Template(rf, ctx) {
        if (rf & 1) {
            var _r23_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "li", 16);
            i0.ɵɵelementStart(1, "a", 12);
            i0.ɵɵlistener("click", function PaginationComponent_li_4_Template_a_click_1_listener($event) { i0.ɵɵrestoreView(_r23_1); var ctx_r22 = i0.ɵɵnextContext(); return ctx_r22.selectPage(ctx_r22.page + 1, $event); });
            i0.ɵɵelementContainer(2, 13);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r3 = i0.ɵɵnextContext();
            var _r7 = i0.ɵɵreference(9);
            i0.ɵɵclassProp("disabled", ctx_r3.noNext() || ctx_r3.disabled);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngTemplateOutlet", ctx_r3.customNextTemplate || _r7)("ngTemplateOutletContext", i0.ɵɵpureFunction2(4, _c0$1, ctx_r3.noNext() || ctx_r3.disabled, ctx_r3.page));
        }
    }
    function PaginationComponent_li_5_Template(rf, ctx) {
        if (rf & 1) {
            var _r25_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "li", 17);
            i0.ɵɵelementStart(1, "a", 12);
            i0.ɵɵlistener("click", function PaginationComponent_li_5_Template_a_click_1_listener($event) { i0.ɵɵrestoreView(_r25_1); var ctx_r24 = i0.ɵɵnextContext(); return ctx_r24.selectPage(ctx_r24.totalPages, $event); });
            i0.ɵɵelementContainer(2, 13);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r4 = i0.ɵɵnextContext();
            var _r13 = i0.ɵɵreference(15);
            i0.ɵɵclassProp("disabled", ctx_r4.noNext() || ctx_r4.disabled);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngTemplateOutlet", ctx_r4.customLastTemplate || _r13)("ngTemplateOutletContext", i0.ɵɵpureFunction2(4, _c0$1, ctx_r4.noNext() || ctx_r4.disabled, ctx_r4.page));
        }
    }
    function PaginationComponent_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtext(0);
        }
        if (rf & 2) {
            var page_r26 = ctx.$implicit;
            i0.ɵɵtextInterpolate(page_r26.text);
        }
    }
    function PaginationComponent_ng_template_8_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtext(0);
        }
        if (rf & 2) {
            var ctx_r8 = i0.ɵɵnextContext();
            i0.ɵɵtextInterpolate(ctx_r8.getText("next"));
        }
    }
    function PaginationComponent_ng_template_10_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtext(0);
        }
        if (rf & 2) {
            var ctx_r10 = i0.ɵɵnextContext();
            i0.ɵɵtextInterpolate(ctx_r10.getText("previous"));
        }
    }
    function PaginationComponent_ng_template_12_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtext(0);
        }
        if (rf & 2) {
            var ctx_r12 = i0.ɵɵnextContext();
            i0.ɵɵtextInterpolate(ctx_r12.getText("first"));
        }
    }
    function PaginationComponent_ng_template_14_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtext(0);
        }
        if (rf & 2) {
            var ctx_r14 = i0.ɵɵnextContext();
            i0.ɵɵtextInterpolate(ctx_r14.getText("last"));
        }
    }
    var PAGINATION_CONTROL_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        useExisting: i0.forwardRef(function () { return PaginationComponent; }),
        multi: true
    };
    var PaginationComponent = /** @class */ (function () {
        function PaginationComponent(elementRef, paginationConfig, changeDetection) {
            this.elementRef = elementRef;
            this.changeDetection = changeDetection;
            /** if `true` aligns each link to the sides of pager */
            this.align = true;
            /** if false first and last buttons will be hidden */
            this.boundaryLinks = false;
            /** if false previous and next buttons will be hidden */
            this.directionLinks = true;
            // labels
            /** first button text */
            this.firstText = 'First';
            /** previous button text */
            this.previousText = 'Previous';
            /** next button text */
            this.nextText = 'Next';
            /** last button text */
            this.lastText = 'Last';
            /** if true current page will in the middle of pages list */
            this.rotate = true;
            // css
            /** add class to <code><li\></code> */
            this.pageBtnClass = '';
            /** if true pagination component will be disabled */
            this.disabled = false;
            /** fired when total pages count changes, $event:number equals to total pages count */
            this.numPages = new i0.EventEmitter();
            /** fired when page was changed, $event:{page, itemsPerPage} equals to object
             * with current page index and number of items per page
             */
            this.pageChanged = new i0.EventEmitter();
            this.onChange = Function.prototype;
            this.onTouched = Function.prototype;
            this.classMap = '';
            this.inited = false;
            this._itemsPerPage = 10;
            this._totalItems = 0;
            this._totalPages = 0;
            this._page = 1;
            this.elementRef = elementRef;
            if (!this.config) {
                this.configureOptions(paginationConfig.main);
            }
        }
        Object.defineProperty(PaginationComponent.prototype, "itemsPerPage", {
            /** maximum number of items per page. If value less than 1 will display all items on one page */
            get: function () {
                return this._itemsPerPage;
            },
            set: function (v) {
                this._itemsPerPage = v;
                this.totalPages = this.calculateTotalPages();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(PaginationComponent.prototype, "totalItems", {
            /** total number of items in all pages */
            get: function () {
                return this._totalItems;
            },
            set: function (v) {
                this._totalItems = v;
                this.totalPages = this.calculateTotalPages();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(PaginationComponent.prototype, "totalPages", {
            get: function () {
                return this._totalPages;
            },
            set: function (v) {
                this._totalPages = v;
                this.numPages.emit(v);
                if (this.inited) {
                    this.selectPage(this.page);
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(PaginationComponent.prototype, "page", {
            get: function () {
                return this._page;
            },
            set: function (value) {
                var _previous = this._page;
                this._page = value > this.totalPages ? this.totalPages : value || 1;
                this.changeDetection.markForCheck();
                if (_previous === this._page || typeof _previous === 'undefined') {
                    return;
                }
                this.pageChanged.emit({
                    page: this._page,
                    itemsPerPage: this.itemsPerPage
                });
            },
            enumerable: false,
            configurable: true
        });
        PaginationComponent.prototype.configureOptions = function (config) {
            this.config = Object.assign({}, config);
        };
        PaginationComponent.prototype.ngOnInit = function () {
            var _a, _b, _c, _d, _e, _f;
            if (typeof window !== 'undefined') {
                this.classMap = this.elementRef.nativeElement.getAttribute('class') || '';
            }
            // watch for maxSize
            if (typeof this.maxSize === 'undefined') {
                this.maxSize = ((_a = this.config) === null || _a === void 0 ? void 0 : _a.maxSize) || 0;
            }
            if (typeof this.rotate === 'undefined') {
                this.rotate = !!((_b = this.config) === null || _b === void 0 ? void 0 : _b.rotate);
            }
            if (typeof this.boundaryLinks === 'undefined') {
                this.boundaryLinks = !!((_c = this.config) === null || _c === void 0 ? void 0 : _c.boundaryLinks);
            }
            if (typeof this.directionLinks === 'undefined') {
                this.directionLinks = !!((_d = this.config) === null || _d === void 0 ? void 0 : _d.directionLinks);
            }
            if (typeof this.pageBtnClass === 'undefined') {
                this.pageBtnClass = ((_e = this.config) === null || _e === void 0 ? void 0 : _e.pageBtnClass) || '';
            }
            // base class
            if (typeof this.itemsPerPage === 'undefined') {
                this.itemsPerPage = ((_f = this.config) === null || _f === void 0 ? void 0 : _f.itemsPerPage) || 0;
            }
            this.totalPages = this.calculateTotalPages();
            // this class
            this.pages = this.getPages(this.page, this.totalPages);
            this.inited = true;
        };
        PaginationComponent.prototype.writeValue = function (value) {
            this.page = value;
            this.pages = this.getPages(this.page, this.totalPages);
        };
        PaginationComponent.prototype.getText = function (key) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            return this[key + "Text"] || this.config[key + "Text"];
        };
        PaginationComponent.prototype.noPrevious = function () {
            return this.page === 1;
        };
        PaginationComponent.prototype.noNext = function () {
            return this.page === this.totalPages;
        };
        PaginationComponent.prototype.registerOnChange = function (fn) {
            this.onChange = fn;
        };
        PaginationComponent.prototype.registerOnTouched = function (fn) {
            this.onTouched = fn;
        };
        PaginationComponent.prototype.selectPage = function (page, event) {
            if (event) {
                event.preventDefault();
            }
            if (!this.disabled) {
                if (event && event.target) {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    var target = event.target;
                    target.blur();
                }
                this.writeValue(page);
                this.onChange(this.page);
            }
        };
        // Create page object used in template
        PaginationComponent.prototype.makePage = function (num, text, active) {
            return { text: text, number: num, active: active };
        };
        PaginationComponent.prototype.getPages = function (currentPage, totalPages) {
            var pages = [];
            // Default page limits
            var startPage = 1;
            var endPage = totalPages;
            var isMaxSized = typeof this.maxSize !== 'undefined' && this.maxSize < totalPages;
            // recompute if maxSize
            if (isMaxSized && this.maxSize) {
                if (this.rotate) {
                    // Current page is displayed in the middle of the visible ones
                    startPage = Math.max(currentPage - Math.floor(this.maxSize / 2), 1);
                    endPage = startPage + this.maxSize - 1;
                    // Adjust if limit is exceeded
                    if (endPage > totalPages) {
                        endPage = totalPages;
                        startPage = endPage - this.maxSize + 1;
                    }
                }
                else {
                    // Visible pages are paginated with maxSize
                    startPage =
                        (Math.ceil(currentPage / this.maxSize) - 1) * this.maxSize + 1;
                    // Adjust last page if limit is exceeded
                    endPage = Math.min(startPage + this.maxSize - 1, totalPages);
                }
            }
            // Add page number links
            for (var num = startPage; num <= endPage; num++) {
                var page = this.makePage(num, num.toString(), num === currentPage);
                pages.push(page);
            }
            // Add links to move between page sets
            if (isMaxSized && !this.rotate) {
                if (startPage > 1) {
                    var previousPageSet = this.makePage(startPage - 1, '...', false);
                    pages.unshift(previousPageSet);
                }
                if (endPage < totalPages) {
                    var nextPageSet = this.makePage(endPage + 1, '...', false);
                    pages.push(nextPageSet);
                }
            }
            return pages;
        };
        // base class
        PaginationComponent.prototype.calculateTotalPages = function () {
            var totalPages = this.itemsPerPage < 1
                ? 1
                : Math.ceil(this.totalItems / this.itemsPerPage);
            return Math.max(totalPages || 0, 1);
        };
        return PaginationComponent;
    }());
    PaginationComponent.ɵfac = function PaginationComponent_Factory(t) { return new (t || PaginationComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(PaginationConfig), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    PaginationComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PaginationComponent, selectors: [["pagination"]], inputs: { align: "align", maxSize: "maxSize", boundaryLinks: "boundaryLinks", directionLinks: "directionLinks", firstText: "firstText", previousText: "previousText", nextText: "nextText", lastText: "lastText", rotate: "rotate", pageBtnClass: "pageBtnClass", disabled: "disabled", customPageTemplate: "customPageTemplate", customNextTemplate: "customNextTemplate", customPreviousTemplate: "customPreviousTemplate", customFirstTemplate: "customFirstTemplate", customLastTemplate: "customLastTemplate", itemsPerPage: "itemsPerPage", totalItems: "totalItems" }, outputs: { numPages: "numPages", pageChanged: "pageChanged" }, features: [i0.ɵɵProvidersFeature([PAGINATION_CONTROL_VALUE_ACCESSOR])], decls: 16, vars: 6, consts: [[1, "pagination", 3, "ngClass"], ["class", "pagination-first page-item", 3, "disabled", 4, "ngIf"], ["class", "pagination-prev page-item", 3, "disabled", 4, "ngIf"], ["class", "pagination-page page-item", 3, "active", "disabled", 4, "ngFor", "ngForOf"], ["class", "pagination-next page-item", 3, "disabled", 4, "ngIf"], ["class", "pagination-last page-item", 3, "disabled", 4, "ngIf"], ["defaultPageTemplate", ""], ["defaultNextTemplate", ""], ["defaultPreviousTemplate", ""], ["defaultFirstTemplate", ""], ["defaultLastTemplate", ""], [1, "pagination-first", "page-item"], ["href", "", 1, "page-link", 3, "click"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "pagination-prev", "page-item"], [1, "pagination-page", "page-item"], [1, "pagination-next", "page-item"], [1, "pagination-last", "page-item"]], template: function PaginationComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "ul", 0);
                i0.ɵɵtemplate(1, PaginationComponent_li_1_Template, 3, 7, "li", 1);
                i0.ɵɵtemplate(2, PaginationComponent_li_2_Template, 3, 7, "li", 2);
                i0.ɵɵtemplate(3, PaginationComponent_li_3_Template, 3, 10, "li", 3);
                i0.ɵɵtemplate(4, PaginationComponent_li_4_Template, 3, 7, "li", 4);
                i0.ɵɵtemplate(5, PaginationComponent_li_5_Template, 3, 7, "li", 5);
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(6, PaginationComponent_ng_template_6_Template, 1, 1, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵtemplate(8, PaginationComponent_ng_template_8_Template, 1, 1, "ng-template", null, 7, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵtemplate(10, PaginationComponent_ng_template_10_Template, 1, 1, "ng-template", null, 8, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵtemplate(12, PaginationComponent_ng_template_12_Template, 1, 1, "ng-template", null, 9, i0.ɵɵtemplateRefExtractor);
                i0.ɵɵtemplate(14, PaginationComponent_ng_template_14_Template, 1, 1, "ng-template", null, 10, i0.ɵɵtemplateRefExtractor);
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngClass", ctx.classMap);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.boundaryLinks);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.directionLinks);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngForOf", ctx.pages);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.directionLinks);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.boundaryLinks);
            }
        }, directives: [i2.NgClass, i2.NgIf, i2.NgForOf, i2.NgTemplateOutlet], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PaginationComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'pagination',
                        templateUrl: './pagination.component.html',
                        providers: [PAGINATION_CONTROL_VALUE_ACCESSOR]
                    }]
            }], function () { return [{ type: i0.ElementRef }, { type: PaginationConfig }, { type: i0.ChangeDetectorRef }]; }, { align: [{
                    type: i0.Input
                }], maxSize: [{
                    type: i0.Input
                }], boundaryLinks: [{
                    type: i0.Input
                }], directionLinks: [{
                    type: i0.Input
                }], firstText: [{
                    type: i0.Input
                }], previousText: [{
                    type: i0.Input
                }], nextText: [{
                    type: i0.Input
                }], lastText: [{
                    type: i0.Input
                }], rotate: [{
                    type: i0.Input
                }], pageBtnClass: [{
                    type: i0.Input
                }], disabled: [{
                    type: i0.Input
                }], customPageTemplate: [{
                    type: i0.Input
                }], customNextTemplate: [{
                    type: i0.Input
                }], customPreviousTemplate: [{
                    type: i0.Input
                }], customFirstTemplate: [{
                    type: i0.Input
                }], customLastTemplate: [{
                    type: i0.Input
                }], numPages: [{
                    type: i0.Output
                }], pageChanged: [{
                    type: i0.Output
                }], itemsPerPage: [{
                    type: i0.Input
                }], totalItems: [{
                    type: i0.Input
                }] });
    })();

    var PaginationModule = /** @class */ (function () {
        function PaginationModule() {
        }
        PaginationModule.forRoot = function () {
            return { ngModule: PaginationModule, providers: [] };
        };
        return PaginationModule;
    }());
    PaginationModule.ɵmod = i0.ɵɵdefineNgModule({ type: PaginationModule });
    PaginationModule.ɵinj = i0.ɵɵdefineInjector({ factory: function PaginationModule_Factory(t) { return new (t || PaginationModule)(); }, imports: [[i2.CommonModule]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PaginationModule, { declarations: [PagerComponent, PaginationComponent], imports: [i2.CommonModule], exports: [PagerComponent, PaginationComponent] }); })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PaginationModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [i2.CommonModule],
                        declarations: [PagerComponent, PaginationComponent],
                        exports: [PagerComponent, PaginationComponent]
                    }]
            }], null, null);
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.PagerComponent = PagerComponent;
    exports.PaginationComponent = PaginationComponent;
    exports.PaginationConfig = PaginationConfig;
    exports.PaginationModule = PaginationModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-bootstrap-pagination.umd.js.map
