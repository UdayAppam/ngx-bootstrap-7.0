import { NgModule } from '@angular/core';
import { ButtonCheckboxDirective } from './button-checkbox.directive';
import { ButtonRadioDirective } from './button-radio.directive';
import { ButtonRadioGroupDirective } from './button-radio-group.directive';
import * as i0 from "@angular/core";
export class ButtonsModule {
    static forRoot() {
        return { ngModule: ButtonsModule, providers: [] };
    }
}
ButtonsModule.ɵmod = i0.ɵɵdefineNgModule({ type: ButtonsModule });
ButtonsModule.ɵinj = i0.ɵɵdefineInjector({ factory: function ButtonsModule_Factory(t) { return new (t || ButtonsModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ButtonsModule, { declarations: [ButtonCheckboxDirective, ButtonRadioDirective, ButtonRadioGroupDirective], exports: [ButtonCheckboxDirective, ButtonRadioDirective, ButtonRadioGroupDirective] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ButtonsModule, [{
        type: NgModule,
        args: [{
                declarations: [ButtonCheckboxDirective, ButtonRadioDirective, ButtonRadioGroupDirective],
                exports: [ButtonCheckboxDirective, ButtonRadioDirective, ButtonRadioGroupDirective]
            }]
    }], null, null); })();
//# sourceMappingURL=buttons.module.js.map