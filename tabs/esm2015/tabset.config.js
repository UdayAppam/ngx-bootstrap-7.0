import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class TabsetConfig {
    constructor() {
        /** provides default navigation context class: 'tabs' or 'pills' */
        this.type = 'tabs';
        /** provides possibility to set keyNavigations enable or disable, by default is enable */
        this.isKeysAllowed = true;
        /** aria label for tab list */
        this.ariaLabel = 'Tabs';
    }
}
TabsetConfig.ɵfac = function TabsetConfig_Factory(t) { return new (t || TabsetConfig)(); };
TabsetConfig.ɵprov = i0.ɵɵdefineInjectable({ token: TabsetConfig, factory: TabsetConfig.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TabsetConfig, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
//# sourceMappingURL=tabset.config.js.map