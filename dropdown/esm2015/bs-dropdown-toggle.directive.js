import { ChangeDetectorRef, Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';
import { BsDropdownState } from './bs-dropdown.state';
import { BsDropdownDirective } from './bs-dropdown.directive';
import * as i0 from "@angular/core";
import * as i1 from "./bs-dropdown.directive";
import * as i2 from "./bs-dropdown.state";
export class BsDropdownToggleDirective {
    constructor(_changeDetectorRef, _dropdown, _element, _renderer, _state) {
        this._changeDetectorRef = _changeDetectorRef;
        this._dropdown = _dropdown;
        this._element = _element;
        this._renderer = _renderer;
        this._state = _state;
        this.isOpen = false;
        this._subscriptions = [];
        // sync is open value with state
        this._subscriptions.push(this._state.isOpenChange.subscribe((value) => {
            this.isOpen = value;
            if (value) {
                this._documentClickListener = this._renderer.listen('document', 'click', (event) => {
                    if (this._state.autoClose && event.button !== 2 &&
                        !this._element.nativeElement.contains(event.target) &&
                        !(this._state.insideClick && this._dropdown._contains(event))) {
                        this._state.toggleClick.emit(false);
                        this._changeDetectorRef.detectChanges();
                    }
                });
                this._escKeyUpListener = this._renderer.listen(this._element.nativeElement, 'keyup.esc', () => {
                    if (this._state.autoClose) {
                        this._state.toggleClick.emit(false);
                        this._changeDetectorRef.detectChanges();
                    }
                });
            }
            else {
                this._documentClickListener && this._documentClickListener();
                this._escKeyUpListener && this._escKeyUpListener();
            }
        }));
        // populate disabled state
        this._subscriptions.push(this._state.isDisabledChange
            .subscribe((value) => this.isDisabled = value || void 0));
    }
    onClick(event) {
        event.stopPropagation();
        if (this.isDisabled) {
            return;
        }
        this._state.toggleClick.emit(true);
    }
    ngOnDestroy() {
        if (this._documentClickListener) {
            this._documentClickListener();
        }
        if (this._escKeyUpListener) {
            this._escKeyUpListener();
        }
        for (const sub of this._subscriptions) {
            sub.unsubscribe();
        }
    }
}
BsDropdownToggleDirective.ɵfac = function BsDropdownToggleDirective_Factory(t) { return new (t || BsDropdownToggleDirective)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.BsDropdownDirective), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i2.BsDropdownState)); };
BsDropdownToggleDirective.ɵdir = i0.ɵɵdefineDirective({ type: BsDropdownToggleDirective, selectors: [["", "bsDropdownToggle", ""], ["", "dropdownToggle", ""]], hostVars: 3, hostBindings: function BsDropdownToggleDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("click", function BsDropdownToggleDirective_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } if (rf & 2) {
        i0.ɵɵattribute("aria-haspopup", true)("disabled", ctx.isDisabled)("aria-expanded", ctx.isOpen);
    } }, exportAs: ["bs-dropdown-toggle"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BsDropdownToggleDirective, [{
        type: Directive,
        args: [{
                selector: '[bsDropdownToggle],[dropdownToggle]',
                exportAs: 'bs-dropdown-toggle',
                // eslint-disable-next-line @angular-eslint/no-host-metadata-property
                host: {
                    '[attr.aria-haspopup]': 'true'
                }
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.BsDropdownDirective }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i2.BsDropdownState }]; }, { isDisabled: [{
            type: HostBinding,
            args: ['attr.disabled']
        }], isOpen: [{
            type: HostBinding,
            args: ['attr.aria-expanded']
        }], onClick: [{
            type: HostListener,
            args: ['click', ['$event']]
        }] }); })();
//# sourceMappingURL=bs-dropdown-toggle.directive.js.map