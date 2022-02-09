import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Configuration service, provides default values for the AccordionComponent.
 */
export class AccordionConfig {
    constructor() {
        /** Whether the other panels should be closed when a panel is opened */
        this.closeOthers = false;
        /** turn on/off animation */
        this.isAnimated = false;
    }
}
AccordionConfig.ɵfac = function AccordionConfig_Factory(t) { return new (t || AccordionConfig)(); };
AccordionConfig.ɵprov = i0.ɵɵdefineInjectable({ token: AccordionConfig, factory: AccordionConfig.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AccordionConfig, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
//# sourceMappingURL=accordion.config.js.map