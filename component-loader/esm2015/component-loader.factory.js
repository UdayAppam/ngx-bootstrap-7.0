import { ApplicationRef, ComponentFactoryResolver, Injectable, Injector, NgZone } from '@angular/core';
import { ComponentLoader } from './component-loader.class';
import { PositioningService } from 'ngx-bootstrap/positioning';
import * as i0 from "@angular/core";
import * as i1 from "ngx-bootstrap/positioning";
export class ComponentLoaderFactory {
    constructor(_componentFactoryResolver, _ngZone, _injector, _posService, _applicationRef) {
        this._componentFactoryResolver = _componentFactoryResolver;
        this._ngZone = _ngZone;
        this._injector = _injector;
        this._posService = _posService;
        this._applicationRef = _applicationRef;
    }
    /**
     *
     * @param _elementRef
     * @param _viewContainerRef
     * @param _renderer
     */
    createLoader(_elementRef, _viewContainerRef, _renderer) {
        return new ComponentLoader(_viewContainerRef, _renderer, _elementRef, this._injector, this._componentFactoryResolver, this._ngZone, this._applicationRef, this._posService);
    }
}
ComponentLoaderFactory.ɵfac = function ComponentLoaderFactory_Factory(t) { return new (t || ComponentLoaderFactory)(i0.ɵɵinject(i0.ComponentFactoryResolver), i0.ɵɵinject(i0.NgZone), i0.ɵɵinject(i0.Injector), i0.ɵɵinject(i1.PositioningService), i0.ɵɵinject(i0.ApplicationRef)); };
ComponentLoaderFactory.ɵprov = i0.ɵɵdefineInjectable({ token: ComponentLoaderFactory, factory: ComponentLoaderFactory.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ComponentLoaderFactory, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: i0.ComponentFactoryResolver }, { type: i0.NgZone }, { type: i0.Injector }, { type: i1.PositioningService }, { type: i0.ApplicationRef }]; }, null); })();
//# sourceMappingURL=component-loader.factory.js.map