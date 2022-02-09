import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export class BsLocaleService {
    constructor() {
        this._defaultLocale = 'en';
        this._locale = new BehaviorSubject(this._defaultLocale);
        this._localeChange = this._locale.asObservable();
    }
    get locale() {
        return this._locale;
    }
    get localeChange() {
        return this._localeChange;
    }
    get currentLocale() {
        return this._locale.getValue();
    }
    use(locale) {
        if (locale === this.currentLocale) {
            return;
        }
        this._locale.next(locale);
    }
}
BsLocaleService.ɵfac = function BsLocaleService_Factory(t) { return new (t || BsLocaleService)(); };
BsLocaleService.ɵprov = i0.ɵɵdefineInjectable({ token: BsLocaleService, factory: BsLocaleService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BsLocaleService, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=bs-locale.service.js.map