import { Directive, TemplateRef } from '@angular/core';
import { TabDirective } from './tab.directive';
import * as i0 from "@angular/core";
import * as i1 from "./tab.directive";
/** Should be used to mark <ng-template> element as a template for tab heading */
export class TabHeadingDirective {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(templateRef, tab) {
        tab.headingRef = templateRef;
    }
}
TabHeadingDirective.ɵfac = function TabHeadingDirective_Factory(t) { return new (t || TabHeadingDirective)(i0.ɵɵdirectiveInject(i0.TemplateRef), i0.ɵɵdirectiveInject(i1.TabDirective)); };
TabHeadingDirective.ɵdir = i0.ɵɵdefineDirective({ type: TabHeadingDirective, selectors: [["", "tabHeading", ""]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TabHeadingDirective, [{
        type: Directive,
        args: [{ selector: '[tabHeading]' }]
    }], function () { return [{ type: i0.TemplateRef }, { type: i1.TabDirective }]; }, null); })();
//# sourceMappingURL=tab-heading.directive.js.map