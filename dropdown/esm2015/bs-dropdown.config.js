import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
/** Default dropdown configuration */
export class BsDropdownConfig {
    constructor() {
        /** default dropdown auto closing behavior */
        this.autoClose = true;
        /** default dropdown auto closing behavior */
        this.insideClick = false;
        /** turn on/off animation */
        this.isAnimated = false;
    }
}
BsDropdownConfig.ɵfac = function BsDropdownConfig_Factory(t) { return new (t || BsDropdownConfig)(); };
BsDropdownConfig.ɵprov = i0.ɵɵdefineInjectable({ token: BsDropdownConfig, factory: BsDropdownConfig.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BsDropdownConfig, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
//# sourceMappingURL=bs-dropdown.config.js.map