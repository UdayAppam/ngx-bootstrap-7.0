import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';
import { BsDropdownState } from './bs-dropdown.state';
import * as i0 from "@angular/core";
import * as i1 from "./bs-dropdown.state";
export class BsDropdownMenuDirective {
    constructor(_state, _viewContainer, _templateRef) {
        _state.resolveDropdownMenu({
            templateRef: _templateRef,
            viewContainer: _viewContainer
        });
    }
}
BsDropdownMenuDirective.ɵfac = function BsDropdownMenuDirective_Factory(t) { return new (t || BsDropdownMenuDirective)(i0.ɵɵdirectiveInject(i1.BsDropdownState), i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i0.TemplateRef)); };
BsDropdownMenuDirective.ɵdir = i0.ɵɵdefineDirective({ type: BsDropdownMenuDirective, selectors: [["", "bsDropdownMenu", ""], ["", "dropdownMenu", ""]], exportAs: ["bs-dropdown-menu"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BsDropdownMenuDirective, [{
        type: Directive,
        args: [{
                selector: '[bsDropdownMenu],[dropdownMenu]',
                exportAs: 'bs-dropdown-menu'
            }]
    }], function () { return [{ type: i1.BsDropdownState }, { type: i0.ViewContainerRef }, { type: i0.TemplateRef }]; }, null); })();
//# sourceMappingURL=bs-dropdown-menu.directive.js.map