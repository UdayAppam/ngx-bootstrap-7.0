import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
/** Default values provider for tooltip */
export class TooltipConfig {
    constructor() {
        /** sets disable adaptive position */
        this.adaptivePosition = true;
        /** tooltip placement, supported positions: 'top', 'bottom', 'left', 'right' */
        this.placement = 'top';
        /** array of event names which triggers tooltip opening */
        this.triggers = 'hover focus';
        /** delay before showing the tooltip */
        this.delay = 0;
    }
}
TooltipConfig.ɵfac = function TooltipConfig_Factory(t) { return new (t || TooltipConfig)(); };
TooltipConfig.ɵprov = i0.ɵɵdefineInjectable({ token: TooltipConfig, factory: TooltipConfig.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TooltipConfig, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
//# sourceMappingURL=tooltip.config.js.map