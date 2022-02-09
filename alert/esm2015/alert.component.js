import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { AlertConfig } from './alert.config';
import { OnChange } from 'ngx-bootstrap/utils';
import * as i0 from "@angular/core";
import * as i1 from "./alert.config";
import * as i2 from "@angular/common";
function AlertComponent_ng_template_0_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 2);
    i0.ɵɵlistener("click", function AlertComponent_ng_template_0_ng_template_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(2); return ctx_r2.close(); });
    i0.ɵɵelementStart(1, "span", 3);
    i0.ɵɵtext(2, "\u00D7");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 4);
    i0.ɵɵtext(4, "Close");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function AlertComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵtemplate(1, AlertComponent_ng_template_0_ng_template_1_Template, 5, 0, "ng-template", 0);
    i0.ɵɵprojection(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassMap("alert alert-" + ctx_r0.type);
    i0.ɵɵproperty("ngClass", ctx_r0.classes);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.dismissible);
} }
const _c0 = ["*"];
export class AlertComponent {
    constructor(_config, changeDetection) {
        this.changeDetection = changeDetection;
        /** Alert type.
         * Provides one of four bootstrap supported contextual classes:
         * `success`, `info`, `warning` and `danger`
         */
        this.type = 'warning';
        /** If set, displays an inline "Close" button */
        this.dismissible = false;
        /** Is alert visible */
        this.isOpen = true;
        /** This event fires immediately after close instance method is called,
         * $event is an instance of Alert component.
         */
        this.onClose = new EventEmitter();
        /** This event fires when alert closed, $event is an instance of Alert component */
        this.onClosed = new EventEmitter();
        this.classes = '';
        this.dismissibleChange = new EventEmitter();
        Object.assign(this, _config);
        this.dismissibleChange.subscribe(( /*dismissible: boolean*/) => {
            this.classes = this.dismissible ? 'alert-dismissible' : '';
            this.changeDetection.markForCheck();
        });
    }
    ngOnInit() {
        if (this.dismissOnTimeout) {
            // if dismissOnTimeout used as attr without binding, it will be a string
            setTimeout(() => this.close(), parseInt(this.dismissOnTimeout, 10));
        }
    }
    // todo: animation ` If the .fade and .in classes are present on the element,
    // the alert will fade out before it is removed`
    /**
     * Closes an alert by removing it from the DOM.
     */
    close() {
        if (!this.isOpen) {
            return;
        }
        this.onClose.emit(this);
        this.isOpen = false;
        this.changeDetection.markForCheck();
        this.onClosed.emit(this);
    }
}
AlertComponent.ɵfac = function AlertComponent_Factory(t) { return new (t || AlertComponent)(i0.ɵɵdirectiveInject(i1.AlertConfig), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
AlertComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AlertComponent, selectors: [["alert"], ["bs-alert"]], inputs: { type: "type", dismissible: "dismissible", dismissOnTimeout: "dismissOnTimeout", isOpen: "isOpen" }, outputs: { onClose: "onClose", onClosed: "onClosed" }, ngContentSelectors: _c0, decls: 1, vars: 1, consts: [[3, "ngIf"], ["role", "alert", 3, "ngClass"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "sr-only"]], template: function AlertComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵtemplate(0, AlertComponent_ng_template_0_Template, 3, 4, "ng-template", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.isOpen);
    } }, directives: [i2.NgIf, i2.NgClass], encapsulation: 2, changeDetection: 0 });
__decorate([
    OnChange(),
    __metadata("design:type", Object)
], AlertComponent.prototype, "dismissible", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AlertComponent, [{
        type: Component,
        args: [{
                selector: 'alert,bs-alert',
                templateUrl: './alert.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i1.AlertConfig }, { type: i0.ChangeDetectorRef }]; }, { type: [{
            type: Input
        }], dismissible: [{
            type: Input
        }], dismissOnTimeout: [{
            type: Input
        }], isOpen: [{
            type: Input
        }], onClose: [{
            type: Output
        }], onClosed: [{
            type: Output
        }] }); })();
//# sourceMappingURL=alert.component.js.map