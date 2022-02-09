import { Component, ElementRef, Renderer2 } from '@angular/core';
import { CLASS_NAME } from './modal-options.class';
import { isBs3, Utils } from 'ngx-bootstrap/utils';
import * as i0 from "@angular/core";
/** This component will be added as background layout for modals if enabled */
export class ModalBackdropComponent {
    constructor(element, renderer) {
        this._isAnimated = false;
        this._isShown = false;
        this.element = element;
        this.renderer = renderer;
    }
    get isAnimated() {
        return this._isAnimated;
    }
    set isAnimated(value) {
        this._isAnimated = value;
    }
    get isShown() {
        return this._isShown;
    }
    set isShown(value) {
        this._isShown = value;
        if (value) {
            this.renderer.addClass(this.element.nativeElement, `${CLASS_NAME.IN}`);
        }
        else {
            this.renderer.removeClass(this.element.nativeElement, `${CLASS_NAME.IN}`);
        }
        if (!isBs3()) {
            if (value) {
                this.renderer.addClass(this.element.nativeElement, `${CLASS_NAME.SHOW}`);
            }
            else {
                this.renderer.removeClass(this.element.nativeElement, `${CLASS_NAME.SHOW}`);
            }
        }
    }
    ngOnInit() {
        if (this.isAnimated) {
            this.renderer.addClass(this.element.nativeElement, `${CLASS_NAME.FADE}`);
            Utils.reflow(this.element.nativeElement);
        }
        this.isShown = true;
    }
}
ModalBackdropComponent.ɵfac = function ModalBackdropComponent_Factory(t) { return new (t || ModalBackdropComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
ModalBackdropComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ModalBackdropComponent, selectors: [["bs-modal-backdrop"]], hostAttrs: [1, "modal-backdrop"], decls: 0, vars: 0, template: function ModalBackdropComponent_Template(rf, ctx) { }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModalBackdropComponent, [{
        type: Component,
        args: [{
                selector: 'bs-modal-backdrop',
                template: ' ',
                // eslint-disable-next-line @angular-eslint/no-host-metadata-property
                host: { class: CLASS_NAME.BACKDROP }
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, null); })();
//# sourceMappingURL=modal-backdrop.component.js.map