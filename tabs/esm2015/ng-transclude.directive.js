import { Directive, Input, ViewContainerRef } from '@angular/core';
import * as i0 from "@angular/core";
export class NgTranscludeDirective {
    constructor(viewRef) {
        this.viewRef = viewRef;
    }
    set ngTransclude(templateRef) {
        this._ngTransclude = templateRef;
        if (templateRef) {
            this.viewRef.createEmbeddedView(templateRef);
        }
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    get ngTransclude() {
        return this._ngTransclude;
    }
}
NgTranscludeDirective.ɵfac = function NgTranscludeDirective_Factory(t) { return new (t || NgTranscludeDirective)(i0.ɵɵdirectiveInject(i0.ViewContainerRef)); };
NgTranscludeDirective.ɵdir = i0.ɵɵdefineDirective({ type: NgTranscludeDirective, selectors: [["", "ngTransclude", ""]], inputs: { ngTransclude: "ngTransclude" } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgTranscludeDirective, [{
        type: Directive,
        args: [{
                selector: '[ngTransclude]'
            }]
    }], function () { return [{ type: i0.ViewContainerRef }]; }, { ngTransclude: [{
            type: Input
        }] }); })();
//# sourceMappingURL=ng-transclude.directive.js.map