import { __awaiter } from "tslib";
import { Component, HostBinding, Inject, Input, Output, EventEmitter } from '@angular/core';
import { isBs3 } from 'ngx-bootstrap/utils';
import { AccordionComponent } from './accordion.component';
import * as i0 from "@angular/core";
import * as i1 from "./accordion.component";
import * as i2 from "@angular/common";
import * as i3 from "ngx-bootstrap/collapse";
const _c0 = function (a0) { return { "text-muted": a0 }; };
function AccordionPanelComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 7);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(2, _c0, ctx_r0.isDisabled));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.heading, " ");
} }
const _c1 = [[["", "accordion-heading", ""]], "*"];
const _c2 = ["[accordion-heading]", "*"];
/**
 * ### Accordion heading
 * Instead of using `heading` attribute on the `accordion-group`, you can use
 * an `accordion-heading` attribute on `any` element inside of a group that
 * will be used as group's header template.
 */
export class AccordionPanelComponent {
    constructor(accordion) {
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
        this.isOpenChange = new EventEmitter();
        this._isOpen = false;
        this.accordion = accordion;
    }
    // Questionable, maybe .panel-open should be on child div.panel element?
    /** Is accordion group open or closed. This property supports two-way binding */
    get isOpen() {
        return this._isOpen;
    }
    set isOpen(value) {
        if (value !== this.isOpen) {
            if (value) {
                this.accordion.closeOtherPanels(this);
            }
            this._isOpen = value;
            (() => __awaiter(this, void 0, void 0, function* () {
                yield Promise.resolve();
                this.isOpenChange.emit(value);
            }));
        }
    }
    get isBs3() {
        return isBs3();
    }
    ngOnInit() {
        this.accordion.addGroup(this);
    }
    ngOnDestroy() {
        this.accordion.removeGroup(this);
    }
    toggleOpen() {
        if (!this.isDisabled) {
            this.isOpen = !this.isOpen;
        }
    }
}
AccordionPanelComponent.ɵfac = function AccordionPanelComponent_Factory(t) { return new (t || AccordionPanelComponent)(i0.ɵɵdirectiveInject(AccordionComponent)); };
AccordionPanelComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AccordionPanelComponent, selectors: [["accordion-group"], ["accordion-panel"]], hostAttrs: [1, "panel", 2, "display", "block"], hostVars: 2, hostBindings: function AccordionPanelComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("panel-open", ctx.isOpen);
    } }, inputs: { heading: "heading", panelClass: "panelClass", isDisabled: "isDisabled", isOpen: "isOpen" }, outputs: { isOpenChange: "isOpenChange" }, ngContentSelectors: _c2, decls: 9, vars: 6, consts: [[1, "panel", "card", 3, "ngClass"], ["role", "tab", 1, "panel-heading", "card-header", 3, "ngClass", "click"], [1, "panel-title"], ["role", "button", 1, "accordion-toggle"], ["class", "btn btn-link", "type", "button", 3, "ngClass", 4, "ngIf"], ["role", "tabpanel", 1, "panel-collapse", "collapse", 3, "collapse", "isAnimated"], [1, "panel-body", "card-block", "card-body"], ["type", "button", 1, "btn", "btn-link", 3, "ngClass"]], template: function AccordionPanelComponent_Template(rf, ctx) { if (rf & 1) {
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
    } if (rf & 2) {
        i0.ɵɵproperty("ngClass", ctx.panelClass);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngClass", ctx.isDisabled ? "panel-disabled" : "panel-enabled");
        i0.ɵɵadvance(2);
        i0.ɵɵattribute("aria-expanded", ctx.isOpen);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.heading);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("collapse", !ctx.isOpen)("isAnimated", ctx.isAnimated);
    } }, directives: [i2.NgClass, i2.NgIf, i3.CollapseDirective], styles: ["[_nghost-%COMP%]   .card-header.panel-enabled[_ngcontent-%COMP%]{cursor:pointer}[_nghost-%COMP%]   .card-header.panel-disabled[_ngcontent-%COMP%]   .btn.btn-link[_ngcontent-%COMP%]{cursor:default;text-decoration:none}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AccordionPanelComponent, [{
        type: Component,
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
    }], function () { return [{ type: i1.AccordionComponent, decorators: [{
                type: Inject,
                args: [AccordionComponent]
            }] }]; }, { heading: [{
            type: Input
        }], panelClass: [{
            type: Input
        }], isDisabled: [{
            type: Input
        }], isOpenChange: [{
            type: Output
        }], isOpen: [{
            type: HostBinding,
            args: ['class.panel-open']
        }, {
            type: Input
        }] }); })();
//# sourceMappingURL=accordion-group.component.js.map