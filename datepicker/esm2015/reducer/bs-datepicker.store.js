import { Injectable } from '@angular/core';
import { MiniStore, MiniState } from 'ngx-bootstrap/mini-ngrx';
import { initialDatepickerState } from './bs-datepicker.state';
import { BehaviorSubject } from 'rxjs';
import { bsDatepickerReducer } from './bs-datepicker.reducer';
import * as i0 from "@angular/core";
export class BsDatepickerStore extends MiniStore {
    constructor() {
        const _dispatcher = new BehaviorSubject({
            type: '[datepicker] dispatcher init'
        });
        const state = new MiniState(initialDatepickerState, _dispatcher, bsDatepickerReducer);
        super(_dispatcher, bsDatepickerReducer, state);
    }
}
BsDatepickerStore.ɵfac = function BsDatepickerStore_Factory(t) { return new (t || BsDatepickerStore)(); };
BsDatepickerStore.ɵprov = i0.ɵɵdefineInjectable({ token: BsDatepickerStore, factory: BsDatepickerStore.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BsDatepickerStore, [{
        type: Injectable
    }], function () { return []; }, null); })();
//# sourceMappingURL=bs-datepicker.store.js.map