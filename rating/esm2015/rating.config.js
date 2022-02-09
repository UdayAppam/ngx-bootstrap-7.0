import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
/** Default values provider for rating */
export class RatingConfig {
    constructor() {
        /** aria label for rating */
        this.ariaLabel = 'rating';
    }
}
RatingConfig.ɵfac = function RatingConfig_Factory(t) { return new (t || RatingConfig)(); };
RatingConfig.ɵprov = i0.ɵɵdefineInjectable({ token: RatingConfig, factory: RatingConfig.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RatingConfig, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
//# sourceMappingURL=rating.config.js.map