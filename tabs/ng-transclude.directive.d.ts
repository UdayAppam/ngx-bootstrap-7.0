import { TemplateRef, ViewContainerRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class NgTranscludeDirective {
    viewRef: ViewContainerRef;
    protected _ngTransclude?: TemplateRef<any>;
    set ngTransclude(templateRef: TemplateRef<any> | undefined);
    get ngTransclude(): TemplateRef<any> | undefined;
    constructor(viewRef: ViewContainerRef);
    static ɵfac: i0.ɵɵFactoryDef<NgTranscludeDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<NgTranscludeDirective, "[ngTransclude]", never, { "ngTransclude": "ngTransclude"; }, {}, never>;
}
//# sourceMappingURL=ng-transclude.directive.d.ts.map