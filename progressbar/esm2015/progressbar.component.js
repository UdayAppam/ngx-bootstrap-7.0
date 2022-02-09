import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ProgressbarConfig } from './progressbar.config';
import * as i0 from "@angular/core";
import * as i1 from "./progressbar.config";
import * as i2 from "@angular/common";
import * as i3 from "./bar.component";
function ProgressbarComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function ProgressbarComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "bar", 3);
    i0.ɵɵprojection(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("type", ctx_r2.type)("value", ctx_r2._value)("max", ctx_r2.max)("animate", ctx_r2.animate)("striped", ctx_r2.striped);
} }
function ProgressbarComponent_ng_template_3_bar_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "bar", 3);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("type", item_r6.type)("value", item_r6.value)("max", item_r6.max)("animate", ctx_r5.animate)("striped", ctx_r5.striped);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r6.label);
} }
function ProgressbarComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ProgressbarComponent_ng_template_3_bar_0_Template, 2, 6, "bar", 4);
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngForOf", ctx_r4._values);
} }
const _c0 = ["*"];
export class ProgressbarComponent {
    constructor(config) {
        /** maximum total value of progress element */
        this.max = 100;
        /** if `true` changing value of progress bar will be animated */
        this.animate = false;
        /** If `true`, striped classes are applied */
        this.striped = false;
        this.isStacked = false;
        this._value = 0;
        Object.assign(this, config);
    }
    /** current value of progress bar. Could be a number or array of objects
     * like {"value":15,"type":"info","label":"15 %"}
     */
    set value(value) {
        this.isStacked = Array.isArray(value);
        if (typeof value === 'number') {
            this._value = value;
            this._values = void 0;
        }
        else {
            this._value = void 0;
            this._values = value;
        }
    }
}
ProgressbarComponent.ɵfac = function ProgressbarComponent_Factory(t) { return new (t || ProgressbarComponent)(i0.ɵɵdirectiveInject(i1.ProgressbarConfig)); };
ProgressbarComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ProgressbarComponent, selectors: [["progressbar"]], hostVars: 3, hostBindings: function ProgressbarComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵattribute("max", ctx.max);
        i0.ɵɵclassProp("progress", true);
    } }, inputs: { max: "max", animate: "animate", striped: "striped", type: "type", value: "value" }, ngContentSelectors: _c0, decls: 5, vars: 3, consts: [[4, "ngIf", "ngIfThen", "ngIfElse"], ["NotStacked", ""], ["Stacked", ""], [3, "type", "value", "max", "animate", "striped"], [3, "type", "value", "max", "animate", "striped", 4, "ngFor", "ngForOf"]], template: function ProgressbarComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵtemplate(0, ProgressbarComponent_ng_container_0_Template, 1, 0, "ng-container", 0);
        i0.ɵɵtemplate(1, ProgressbarComponent_ng_template_1_Template, 2, 5, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(3, ProgressbarComponent_ng_template_3_Template, 1, 1, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(2);
        const _r3 = i0.ɵɵreference(4);
        i0.ɵɵproperty("ngIf", !ctx.isStacked)("ngIfThen", _r1)("ngIfElse", _r3);
    } }, directives: [i2.NgIf, i3.BarComponent, i2.NgForOf], styles: ["[_nghost-%COMP%] {\n      width: 100%;\n      display: flex;\n    }"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProgressbarComponent, [{
        type: Component,
        args: [{
                selector: 'progressbar',
                templateUrl: './progressbar.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
                // eslint-disable-next-line @angular-eslint/no-host-metadata-property
                host: {
                    '[class.progress]': 'true',
                    '[attr.max]': 'max'
                },
                styles: [`
    :host {
      width: 100%;
      display: flex;
    } `]
            }]
    }], function () { return [{ type: i1.ProgressbarConfig }]; }, { max: [{
            type: Input
        }], animate: [{
            type: Input
        }], striped: [{
            type: Input
        }], type: [{
            type: Input
        }], value: [{
            type: Input
        }] }); })();
//# sourceMappingURL=progressbar.component.js.map