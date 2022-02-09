import { EventEmitter, Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class BsDropdownState {
    constructor() {
        this.direction = 'down';
        this.autoClose = true;
        this.insideClick = false;
        this.isAnimated = false;
        this.isOpenChange = new EventEmitter();
        this.isDisabledChange = new EventEmitter();
        this.toggleClick = new EventEmitter();
        this.dropdownMenu = new Promise(resolve => {
            this.resolveDropdownMenu = resolve;
        });
    }
}
BsDropdownState.ɵfac = function BsDropdownState_Factory(t) { return new (t || BsDropdownState)(); };
BsDropdownState.ɵprov = i0.ɵɵdefineInjectable({ token: BsDropdownState, factory: BsDropdownState.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BsDropdownState, [{
        type: Injectable
    }], function () { return []; }, null); })();
//# sourceMappingURL=bs-dropdown.state.js.map