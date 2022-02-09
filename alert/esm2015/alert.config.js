import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class AlertConfig {
    constructor() {
        /** default alert type */
        this.type = 'warning';
        /** is alerts are dismissible by default */
        this.dismissible = false;
        /** default time before alert will dismiss */
        this.dismissOnTimeout = undefined;
    }
}
AlertConfig.ɵfac = function AlertConfig_Factory(t) { return new (t || AlertConfig)(); };
AlertConfig.ɵprov = i0.ɵɵdefineInjectable({ token: AlertConfig, factory: AlertConfig.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AlertConfig, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
//# sourceMappingURL=alert.config.js.map