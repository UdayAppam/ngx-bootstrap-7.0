import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CarouselComponent } from './carousel.component';
import { SlideComponent } from './slide.component';
import * as i0 from "@angular/core";
export class CarouselModule {
    static forRoot() {
        return { ngModule: CarouselModule, providers: [] };
    }
}
CarouselModule.ɵmod = i0.ɵɵdefineNgModule({ type: CarouselModule });
CarouselModule.ɵinj = i0.ɵɵdefineInjector({ factory: function CarouselModule_Factory(t) { return new (t || CarouselModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CarouselModule, { declarations: [SlideComponent, CarouselComponent], imports: [CommonModule], exports: [SlideComponent, CarouselComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CarouselModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: [SlideComponent, CarouselComponent],
                exports: [SlideComponent, CarouselComponent]
            }]
    }], null, null); })();
//# sourceMappingURL=carousel.module.js.map