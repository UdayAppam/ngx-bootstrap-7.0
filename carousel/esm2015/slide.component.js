import { Component, HostBinding, Input } from '@angular/core';
import { CarouselComponent } from './carousel.component';
import * as i0 from "@angular/core";
import * as i1 from "./carousel.component";
const _c0 = ["*"];
export class SlideComponent {
    constructor(carousel) {
        /** Is current slide active */
        this.active = false;
        this.itemWidth = '100%';
        this.order = 0;
        this.isAnimated = false;
        /** Wraps element by appropriate CSS classes */
        this.addClass = true;
        this.carousel = carousel;
    }
    /** Fires changes in container collection after adding a new slide instance */
    ngOnInit() {
        this.carousel.addSlide(this);
        this.itemWidth = `${100 / this.carousel.itemsPerSlide}%`;
    }
    /** Fires changes in container collection after removing of this slide instance */
    ngOnDestroy() {
        this.carousel.removeSlide(this);
    }
}
SlideComponent.ɵfac = function SlideComponent_Factory(t) { return new (t || SlideComponent)(i0.ɵɵdirectiveInject(i1.CarouselComponent)); };
SlideComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SlideComponent, selectors: [["slide"]], hostVars: 13, hostBindings: function SlideComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵattribute("aria-hidden", !ctx.active);
        i0.ɵɵstyleProp("width", ctx.itemWidth)("order", ctx.order);
        i0.ɵɵclassProp("active", ctx.active)("carousel-animation", ctx.isAnimated)("item", ctx.addClass)("carousel-item", ctx.addClass);
    } }, inputs: { active: "active" }, ngContentSelectors: _c0, decls: 2, vars: 2, consts: [[1, "item"]], template: function SlideComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵprojection(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassProp("active", ctx.active);
    } }, styles: [".carousel-animation[_nghost-%COMP%] {\n       transition: opacity 0.6s ease, visibility 0.6s ease;\n       float: left;\n    }\n    .carousel-animation.active[_nghost-%COMP%] {\n      opacity: 1;\n      visibility: visible;\n    }\n    .carousel-animation[_nghost-%COMP%]:not(.active) {\n      display: block;\n      position: absolute;\n      opacity: 0;\n      visibility: hidden;\n    }"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SlideComponent, [{
        type: Component,
        args: [{
                selector: 'slide',
                template: `
    <div [class.active]="active" class="item">
      <ng-content></ng-content>
    </div>
  `,
                // eslint-disable-next-line @angular-eslint/no-host-metadata-property
                host: {
                    '[attr.aria-hidden]': '!active'
                },
                styles: [`
    :host.carousel-animation {
       transition: opacity 0.6s ease, visibility 0.6s ease;
       float: left;
    }
    :host.carousel-animation.active {
      opacity: 1;
      visibility: visible;
    }
    :host.carousel-animation:not(.active) {
      display: block;
      position: absolute;
      opacity: 0;
      visibility: hidden;
    }
  `]
            }]
    }], function () { return [{ type: i1.CarouselComponent }]; }, { active: [{
            type: HostBinding,
            args: ['class.active']
        }, {
            type: Input
        }], itemWidth: [{
            type: HostBinding,
            args: ['style.width']
        }], order: [{
            type: HostBinding,
            args: ['style.order']
        }], isAnimated: [{
            type: HostBinding,
            args: ['class.carousel-animation']
        }], addClass: [{
            type: HostBinding,
            args: ['class.item']
        }, {
            type: HostBinding,
            args: ['class.carousel-item']
        }] }); })();
//# sourceMappingURL=slide.component.js.map