import { Injectable } from '@angular/core';
import { BsDatepickerConfig } from './bs-datepicker.config';
import * as i0 from "@angular/core";
export class BsDaterangepickerInlineConfig extends BsDatepickerConfig {
    constructor() {
        super(...arguments);
        // DatepickerRenderOptions
        this.displayMonths = 2;
        /** turn on/off animation */
        this.isAnimated = false;
    }
}
BsDaterangepickerInlineConfig.ɵfac = function BsDaterangepickerInlineConfig_Factory(t) { return ɵBsDaterangepickerInlineConfig_BaseFactory(t || BsDaterangepickerInlineConfig); };
BsDaterangepickerInlineConfig.ɵprov = i0.ɵɵdefineInjectable({ token: BsDaterangepickerInlineConfig, factory: BsDaterangepickerInlineConfig.ɵfac, providedIn: 'root' });
const ɵBsDaterangepickerInlineConfig_BaseFactory = /*@__PURE__*/ i0.ɵɵgetInheritedFactory(BsDaterangepickerInlineConfig);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BsDaterangepickerInlineConfig, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
//# sourceMappingURL=bs-daterangepicker-inline.config.js.map