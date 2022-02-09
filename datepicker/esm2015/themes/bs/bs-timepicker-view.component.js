import { Component } from '@angular/core';
import * as i0 from "@angular/core";
export class BsTimepickerViewComponent {
    constructor() {
        this.ampm = 'ok';
        this.hours = 0;
        this.minutes = 0;
    }
}
BsTimepickerViewComponent.ɵfac = function BsTimepickerViewComponent_Factory(t) { return new (t || BsTimepickerViewComponent)(); };
BsTimepickerViewComponent.ɵcmp = i0.ɵɵdefineComponent({ type: BsTimepickerViewComponent, selectors: [["bs-timepicker"]], decls: 16, vars: 3, consts: [[1, "bs-timepicker-container"], [1, "bs-timepicker-controls"], ["type", "button", 1, "bs-decrease"], ["type", "text", "placeholder", "00", 3, "value"], ["type", "button", 1, "bs-increase"], ["type", "button", 1, "switch-time-format"], ["src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAKCAYAAABi8KSDAAABSElEQVQYV3XQPUvDUBQG4HNuagtVqc6KgouCv6GIuIntYBLB9hcIQpLStCAIV7DYmpTcRWcXqZio3Vwc/UCc/QEqfgyKGbr0I7nS1EiHeqYzPO/h5SD0jaxUZjmSLCB+OFb+UFINFwASAEAdpu9gaGXVyAHHFQBkHpKHc6a9dzECvADyY9sqlAMsK9W0jzxDXqeytr3mhQckxSji27TJJ5/rPmIpwJJq3HrtduriYOurv1a4i1p5HnhkG9OFymi0ReoO05cGwb+ayv4dysVygjeFmsP05f8wpZQ8fsdvfmuY9zjWSNqUtgYFVnOVReILYoBFzdQI5/GGFzNHhGbeZnopDGU29sZbscgldmC99w35VOATTycIMMcBXIfpSVGzZhA6C8hh00conln6VQ9TGgV32OEAKQC4DrBq7CJwd0ggR7Vq/rPrfgB+C3sGypY5DAAAAABJRU5ErkJggg==", "alt", ""]], template: function BsTimepickerViewComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "button", 2);
        i0.ɵɵtext(3, "-");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(4, "input", 3);
        i0.ɵɵelementStart(5, "button", 4);
        i0.ɵɵtext(6, "+");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "div", 1);
        i0.ɵɵelementStart(8, "button", 2);
        i0.ɵɵtext(9, "-");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(10, "input", 3);
        i0.ɵɵelementStart(11, "button", 4);
        i0.ɵɵtext(12, "+");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "button", 5);
        i0.ɵɵtext(14);
        i0.ɵɵelement(15, "img", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("value", ctx.hours);
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("value", ctx.minutes);
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate1("", ctx.ampm, " ");
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BsTimepickerViewComponent, [{
        type: Component,
        args: [{
                selector: 'bs-timepicker',
                template: `
    <div class="bs-timepicker-container">
      <div class="bs-timepicker-controls">
        <button class="bs-decrease" type="button">-</button>
        <input type="text" [value]="hours" placeholder="00">
        <button class="bs-increase" type="button">+</button>
      </div>
      <div class="bs-timepicker-controls">
        <button class="bs-decrease" type="button">-</button>
        <input type="text" [value]="minutes" placeholder="00">
        <button class="bs-increase" type="button">+</button>
      </div>
      <button class="switch-time-format" type="button">{{ ampm }}
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAKCAYAAABi8KSDAAABSElEQVQYV3XQPUvDUBQG4HNuagtVqc6KgouCv6GIuIntYBLB9hcIQpLStCAIV7DYmpTcRWcXqZio3Vwc/UCc/QEqfgyKGbr0I7nS1EiHeqYzPO/h5SD0jaxUZjmSLCB+OFb+UFINFwASAEAdpu9gaGXVyAHHFQBkHpKHc6a9dzECvADyY9sqlAMsK9W0jzxDXqeytr3mhQckxSji27TJJ5/rPmIpwJJq3HrtduriYOurv1a4i1p5HnhkG9OFymi0ReoO05cGwb+ayv4dysVygjeFmsP05f8wpZQ8fsdvfmuY9zjWSNqUtgYFVnOVReILYoBFzdQI5/GGFzNHhGbeZnopDGU29sZbscgldmC99w35VOATTycIMMcBXIfpSVGzZhA6C8hh00conln6VQ9TGgV32OEAKQC4DrBq7CJwd0ggR7Vq/rPrfgB+C3sGypY5DAAAAABJRU5ErkJggg=="
          alt="">
      </button>
    </div>
  `
            }]
    }], null, null); })();
//# sourceMappingURL=bs-timepicker-view.component.js.map