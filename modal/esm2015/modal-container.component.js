import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { CLASS_NAME, DISMISS_REASONS, ModalOptions, TRANSITION_DURATIONS } from './modal-options.class';
import { isBs3 } from 'ngx-bootstrap/utils';
import * as i0 from "@angular/core";
import * as i1 from "./modal-options.class";
import * as i2 from "ngx-bootstrap/focus-trap";
const _c0 = ["*"];
export class ModalContainerComponent {
    constructor(options, _element, _renderer) {
        this._element = _element;
        this._renderer = _renderer;
        this.isShown = false;
        this.isAnimated = false;
        this.isModalHiding = false;
        this.clickStartedInContent = false;
        this.config = Object.assign({}, options);
    }
    ngOnInit() {
        if (this.isAnimated) {
            this._renderer.addClass(this._element.nativeElement, CLASS_NAME.FADE);
        }
        this._renderer.setStyle(this._element.nativeElement, 'display', 'block');
        setTimeout(() => {
            this.isShown = true;
            this._renderer.addClass(this._element.nativeElement, isBs3() ? CLASS_NAME.IN : CLASS_NAME.SHOW);
        }, this.isAnimated ? TRANSITION_DURATIONS.BACKDROP : 0);
        if (document && document.body) {
            if (this.bsModalService && this.bsModalService.getModalsCount() === 1) {
                this.bsModalService.checkScrollbar();
                this.bsModalService.setScrollbar();
            }
            this._renderer.addClass(document.body, CLASS_NAME.OPEN);
        }
        if (this._element.nativeElement) {
            this._element.nativeElement.focus();
        }
    }
    onClickStarted(event) {
        this.clickStartedInContent = event.target !== this._element.nativeElement;
    }
    onClickStop(event) {
        var _a;
        const clickedInBackdrop = event.target === this._element.nativeElement && !this.clickStartedInContent;
        if (this.config.ignoreBackdropClick ||
            this.config.backdrop === 'static' ||
            !clickedInBackdrop) {
            this.clickStartedInContent = false;
            return;
        }
        (_a = this.bsModalService) === null || _a === void 0 ? void 0 : _a.setDismissReason(DISMISS_REASONS.BACKRDOP);
        this.hide();
    }
    onPopState() {
        var _a;
        (_a = this.bsModalService) === null || _a === void 0 ? void 0 : _a.setDismissReason(DISMISS_REASONS.BACK);
        this.hide();
    }
    onEsc(event) {
        var _a, _b;
        if (!this.isShown) {
            return;
        }
        if (event.keyCode === 27 || event.key === 'Escape') {
            event.preventDefault();
        }
        if (this.config.keyboard &&
            this.level === ((_a = this.bsModalService) === null || _a === void 0 ? void 0 : _a.getModalsCount())) {
            (_b = this.bsModalService) === null || _b === void 0 ? void 0 : _b.setDismissReason(DISMISS_REASONS.ESC);
            this.hide();
        }
    }
    ngOnDestroy() {
        if (this.isShown) {
            this._hide();
        }
    }
    hide() {
        if (this.isModalHiding || !this.isShown) {
            return;
        }
        if (this.config.closeInterceptor) {
            this.config.closeInterceptor().then(() => this._hide(), () => undefined);
            return;
        }
        this._hide();
    }
    _hide() {
        this.isModalHiding = true;
        this._renderer.removeClass(this._element.nativeElement, isBs3() ? CLASS_NAME.IN : CLASS_NAME.SHOW);
        setTimeout(() => {
            var _a, _b;
            this.isShown = false;
            if (document &&
                document.body &&
                ((_a = this.bsModalService) === null || _a === void 0 ? void 0 : _a.getModalsCount()) === 1) {
                this._renderer.removeClass(document.body, CLASS_NAME.OPEN);
            }
            (_b = this.bsModalService) === null || _b === void 0 ? void 0 : _b.hide(this.config.id);
            this.isModalHiding = false;
        }, this.isAnimated ? TRANSITION_DURATIONS.MODAL : 0);
    }
}
ModalContainerComponent.??fac = function ModalContainerComponent_Factory(t) { return new (t || ModalContainerComponent)(i0.????directiveInject(i1.ModalOptions), i0.????directiveInject(i0.ElementRef), i0.????directiveInject(i0.Renderer2)); };
ModalContainerComponent.??cmp = i0.????defineComponent({ type: ModalContainerComponent, selectors: [["modal-container"]], hostAttrs: ["role", "dialog", "tabindex", "-1", 1, "modal"], hostVars: 3, hostBindings: function ModalContainerComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.????listener("mousedown", function ModalContainerComponent_mousedown_HostBindingHandler($event) { return ctx.onClickStarted($event); })("click", function ModalContainerComponent_click_HostBindingHandler($event) { return ctx.onClickStop($event); })("popstate", function ModalContainerComponent_popstate_HostBindingHandler() { return ctx.onPopState(); }, false, i0.????resolveWindow)("keydown.esc", function ModalContainerComponent_keydown_esc_HostBindingHandler($event) { return ctx.onEsc($event); }, false, i0.????resolveWindow);
    } if (rf & 2) {
        i0.????attribute("aria-modal", true)("aria-labelledby", ctx.config.ariaLabelledBy)("aria-describedby", ctx.config.ariaDescribedby);
    } }, ngContentSelectors: _c0, decls: 3, vars: 2, consts: [["role", "document", "focusTrap", ""], [1, "modal-content"]], template: function ModalContainerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.????projectionDef();
        i0.????elementStart(0, "div", 0);
        i0.????elementStart(1, "div", 1);
        i0.????projection(2);
        i0.????elementEnd();
        i0.????elementEnd();
    } if (rf & 2) {
        i0.????classMap("modal-dialog" + (ctx.config.class ? " " + ctx.config.class : ""));
    } }, directives: [i2.FocusTrapDirective], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.??setClassMetadata(ModalContainerComponent, [{
        type: Component,
        args: [{
                selector: 'modal-container',
                template: `
    <div [class]="'modal-dialog' + (config.class ? ' ' + config.class : '')"
         role="document"
         focusTrap>
      <div class="modal-content">
        <ng-content></ng-content>
      </div>
    </div>
  `,
                // eslint-disable-next-line @angular-eslint/no-host-metadata-property
                host: {
                    class: 'modal',
                    role: 'dialog',
                    tabindex: '-1',
                    '[attr.aria-modal]': 'true',
                    '[attr.aria-labelledby]': 'config.ariaLabelledBy',
                    '[attr.aria-describedby]': 'config.ariaDescribedby'
                }
            }]
    }], function () { return [{ type: i1.ModalOptions }, { type: i0.ElementRef }, { type: i0.Renderer2 }]; }, { onClickStarted: [{
            type: HostListener,
            args: ['mousedown', ['$event']]
        }], onClickStop: [{
            type: HostListener,
            args: ['click', ['$event']]
        }], onPopState: [{
            type: HostListener,
            args: ['window:popstate']
        }], onEsc: [{
            type: HostListener,
            args: ['window:keydown.esc', ['$event']]
        }] }); })();
//# sourceMappingURL=modal-container.component.js.map