import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgTranscludeDirective } from './ng-transclude.directive';
import { TabHeadingDirective } from './tab-heading.directive';
import { TabDirective } from './tab.directive';
import { TabsetComponent } from './tabset.component';
import * as i0 from "@angular/core";
export class TabsModule {
    static forRoot() {
        return {
            ngModule: TabsModule,
            providers: []
        };
    }
}
TabsModule.ɵmod = i0.ɵɵdefineNgModule({ type: TabsModule });
TabsModule.ɵinj = i0.ɵɵdefineInjector({ factory: function TabsModule_Factory(t) { return new (t || TabsModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(TabsModule, { declarations: [NgTranscludeDirective,
        TabDirective,
        TabsetComponent,
        TabHeadingDirective], imports: [CommonModule], exports: [TabDirective,
        TabsetComponent,
        TabHeadingDirective,
        NgTranscludeDirective] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TabsModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: [
                    NgTranscludeDirective,
                    TabDirective,
                    TabsetComponent,
                    TabHeadingDirective
                ],
                exports: [
                    TabDirective,
                    TabsetComponent,
                    TabHeadingDirective,
                    NgTranscludeDirective
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=tabs.module.js.map