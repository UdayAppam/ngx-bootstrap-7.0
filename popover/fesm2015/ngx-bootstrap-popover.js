import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵnextContext, ɵɵadvance, ɵɵtextInterpolate, ɵɵdirectiveInject, ɵɵdefineComponent, ɵɵattribute, ɵɵclassMap, ɵɵclassProp, ɵɵprojectionDef, ɵɵelement, ɵɵtemplate, ɵɵprojection, ɵɵproperty, Component, ChangeDetectionStrategy, Input, ElementRef, Renderer2, ViewContainerRef, ɵɵdefineDirective, Directive, Output, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { isBs3, parseTriggers } from 'ngx-bootstrap/utils';
import { NgIf, CommonModule } from '@angular/common';
import { PositioningService } from 'ngx-bootstrap/positioning';
import { timer } from 'rxjs';

/**
 * Configuration service for the Popover directive.
 * You can inject this service, typically in your root component, and customize
 * the values of its properties in order to provide default values for all the
 * popovers used in the application.
 */
class PopoverConfig {
    constructor() {
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
}
PopoverConfig.ɵfac = function PopoverConfig_Factory(t) { return new (t || PopoverConfig)(); };
PopoverConfig.ɵprov = ɵɵdefineInjectable({ token: PopoverConfig, factory: PopoverConfig.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(PopoverConfig, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();

function PopoverContainerComponent_h3_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "h3", 3);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r0.title);
} }
const _c0 = ["*"];
class PopoverContainerComponent {
    constructor(config) {
        Object.assign(this, config);
    }
    get isBs3() {
        return isBs3();
    }
}
PopoverContainerComponent.ɵfac = function PopoverContainerComponent_Factory(t) { return new (t || PopoverContainerComponent)(ɵɵdirectiveInject(PopoverConfig)); };
PopoverContainerComponent.ɵcmp = ɵɵdefineComponent({ type: PopoverContainerComponent, selectors: [["popover-container"]], hostAttrs: ["role", "tooltip", 2, "display", "block"], hostVars: 7, hostBindings: function PopoverContainerComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵɵattribute("id", ctx.popoverId);
        ɵɵclassMap("popover in popover-" + ctx.placement + " " + "bs-popover-" + ctx.placement + " " + ctx.placement + " " + ctx.containerClass);
        ɵɵclassProp("show", !ctx.isBs3)("bs3", ctx.isBs3);
    } }, inputs: { placement: "placement", title: "title" }, ngContentSelectors: _c0, decls: 4, vars: 1, consts: [[1, "popover-arrow", "arrow"], ["class", "popover-title popover-header", 4, "ngIf"], [1, "popover-content", "popover-body"], [1, "popover-title", "popover-header"]], template: function PopoverContainerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelement(0, "div", 0);
        ɵɵtemplate(1, PopoverContainerComponent_h3_1_Template, 2, 1, "h3", 1);
        ɵɵelementStart(2, "div", 2);
        ɵɵprojection(3);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.title);
    } }, directives: [NgIf], styles: [".bs3.popover-top[_nghost-%COMP%] {\n      margin-bottom: 10px;\n    }\n    .bs3.popover.top[_nghost-%COMP%] > .arrow[_ngcontent-%COMP%] {\n      margin-left: -2px;\n    }\n    .bs3.popover.top[_nghost-%COMP%] {\n      margin-bottom: 10px;\n    }\n    .popover.bottom[_nghost-%COMP%] > .arrow[_ngcontent-%COMP%] {\n      margin-left: -4px;\n    }\n    .bs3.bs-popover-left[_nghost-%COMP%] {\n      margin-right: .5rem;\n    }\n    .bs3.bs-popover-right[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%], .bs3.bs-popover-left[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%]{\n      margin: .3rem 0;\n    }"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(PopoverContainerComponent, [{
        type: Component,
        args: [{
                selector: 'popover-container',
                changeDetection: ChangeDetectionStrategy.OnPush,
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
                    `
    :host.bs3.popover-top {
      margin-bottom: 10px;
    }
    :host.bs3.popover.top>.arrow {
      margin-left: -2px;
    }
    :host.bs3.popover.top {
      margin-bottom: 10px;
    }
    :host.popover.bottom>.arrow {
      margin-left: -4px;
    }
    :host.bs3.bs-popover-left {
      margin-right: .5rem;
    }
    :host.bs3.bs-popover-right .arrow, :host.bs3.bs-popover-left .arrow{
      margin: .3rem 0;
    }
    `
                ],
                templateUrl: './popover-container.component.html'
            }]
    }], function () { return [{ type: PopoverConfig }]; }, { placement: [{
            type: Input
        }], title: [{
            type: Input
        }] }); })();

let id = 0;
/**
 * A lightweight, extensible directive for fancy popover creation.
 */
class PopoverDirective {
    constructor(_config, _elementRef, _renderer, _viewContainerRef, cis, _positionService) {
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
    /**
     * Returns whether or not the popover is currently being shown
     */
    get isOpen() {
        return this._popover.isShown;
    }
    set isOpen(value) {
        if (value) {
            this.show();
        }
        else {
            this.hide();
        }
    }
    /**
     * Set attribute aria-describedBy for element directive and
     * set id for the popover
     */
    setAriaDescribedBy() {
        this._ariaDescribedby = this.isOpen ? `ngx-popover-${this.popoverId}` : void 0;
        if (this._ariaDescribedby) {
            if (this._popover.instance) {
                this._popover.instance.popoverId = this._ariaDescribedby;
            }
            this._renderer.setAttribute(this._elementRef.nativeElement, 'aria-describedby', this._ariaDescribedby);
        }
        else {
            this._renderer.removeAttribute(this._elementRef.nativeElement, 'aria-describedby');
        }
    }
    /**
     * Opens an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    show() {
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
        const showPopover = () => {
            if (this._delayTimeoutId) {
                this._delayTimeoutId = undefined;
            }
            this._popover
                .attach(PopoverContainerComponent)
                .to(this.container)
                .position({ attachment: this.placement })
                .show({
                content: this.popover,
                context: this.popoverContext,
                placement: this.placement,
                title: this.popoverTitle,
                containerClass: this.containerClass
            });
            if (!this.adaptivePosition && this._popover._componentRef) {
                this._positionService.calcPosition();
                this._positionService.deletePositionElement(this._popover._componentRef.location);
            }
            this.isOpen = true;
            this.setAriaDescribedBy();
        };
        const cancelDelayedTooltipShowing = () => {
            if (this._popoverCancelShowFn) {
                this._popoverCancelShowFn();
            }
        };
        if (this.delay) {
            const _timer = timer(this.delay).subscribe(() => {
                showPopover();
                cancelDelayedTooltipShowing();
            });
            if (this.triggers) {
                parseTriggers(this.triggers)
                    .forEach((trigger) => {
                    if (!trigger.close) {
                        return;
                    }
                    this._popoverCancelShowFn = this._renderer.listen(this._elementRef.nativeElement, trigger.close, () => {
                        _timer.unsubscribe();
                        cancelDelayedTooltipShowing();
                    });
                });
            }
        }
        else {
            showPopover();
        }
    }
    /**
     * Closes an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    hide() {
        if (this._delayTimeoutId) {
            clearTimeout(this._delayTimeoutId);
            this._delayTimeoutId = undefined;
        }
        if (this.isOpen) {
            this._popover.hide();
            this.setAriaDescribedBy();
            this.isOpen = false;
        }
    }
    /**
     * Toggles an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    toggle() {
        if (this.isOpen) {
            return this.hide();
        }
        this.show();
    }
    ngOnInit() {
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
            show: () => this.show(),
            hide: () => this.hide()
        });
    }
    ngOnDestroy() {
        this._popover.dispose();
    }
}
PopoverDirective.ɵfac = function PopoverDirective_Factory(t) { return new (t || PopoverDirective)(ɵɵdirectiveInject(PopoverConfig), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(ComponentLoaderFactory), ɵɵdirectiveInject(PositioningService)); };
PopoverDirective.ɵdir = ɵɵdefineDirective({ type: PopoverDirective, selectors: [["", "popover", ""]], inputs: { adaptivePosition: "adaptivePosition", boundariesElement: "boundariesElement", popover: "popover", popoverContext: "popoverContext", popoverTitle: "popoverTitle", placement: "placement", outsideClick: "outsideClick", triggers: "triggers", container: "container", containerClass: "containerClass", isOpen: "isOpen", delay: "delay" }, outputs: { onShown: "onShown", onHidden: "onHidden" }, exportAs: ["bs-popover"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(PopoverDirective, [{
        type: Directive,
        args: [{ selector: '[popover]', exportAs: 'bs-popover' }]
    }], function () { return [{ type: PopoverConfig }, { type: ElementRef }, { type: Renderer2 }, { type: ViewContainerRef }, { type: ComponentLoaderFactory }, { type: PositioningService }]; }, { adaptivePosition: [{
            type: Input
        }], boundariesElement: [{
            type: Input
        }], popover: [{
            type: Input
        }], popoverContext: [{
            type: Input
        }], popoverTitle: [{
            type: Input
        }], placement: [{
            type: Input
        }], outsideClick: [{
            type: Input
        }], triggers: [{
            type: Input
        }], container: [{
            type: Input
        }], containerClass: [{
            type: Input
        }], isOpen: [{
            type: Input
        }], delay: [{
            type: Input
        }], onShown: [{
            type: Output
        }], onHidden: [{
            type: Output
        }] }); })();

class PopoverModule {
    static forRoot() {
        return {
            ngModule: PopoverModule,
            providers: [ComponentLoaderFactory, PositioningService]
        };
    }
}
PopoverModule.ɵmod = ɵɵdefineNgModule({ type: PopoverModule });
PopoverModule.ɵinj = ɵɵdefineInjector({ factory: function PopoverModule_Factory(t) { return new (t || PopoverModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(PopoverModule, { declarations: [PopoverDirective, PopoverContainerComponent], imports: [CommonModule], exports: [PopoverDirective] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(PopoverModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: [PopoverDirective, PopoverContainerComponent],
                exports: [PopoverDirective],
                entryComponents: [PopoverContainerComponent]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { PopoverConfig, PopoverContainerComponent, PopoverDirective, PopoverModule };
//# sourceMappingURL=ngx-bootstrap-popover.js.map
