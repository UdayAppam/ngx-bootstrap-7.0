import { Injectable } from '@angular/core';
import { BsDatepickerConfig } from './bs-datepicker.config';
import * as i0 from "@angular/core";
export class BsDaterangepickerConfig extends BsDatepickerConfig {
    constructor() {
        super(...arguments);
        // DatepickerRenderOptions
        this.displayMonths = 2;
    }
}
BsDaterangepickerConfig.ɵfac = function BsDaterangepickerConfig_Factory(t) { return ɵBsDaterangepickerConfig_BaseFactory(t || BsDaterangepickerConfig); };
BsDaterangepickerConfig.ɵprov = i0.ɵɵdefineInjectable({ token: BsDaterangepickerConfig, factory: BsDaterangepickerConfig.ɵfac, providedIn: 'root' });
const ɵBsDaterangepickerConfig_BaseFactory = /*@__PURE__*/ i0.ɵɵgetInheritedFactory(BsDaterangepickerConfig);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BsDaterangepickerConfig, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
//# sourceMappingURL=bs-daterangepicker.config.js.map