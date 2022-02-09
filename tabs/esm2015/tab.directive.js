import { Directive, EventEmitter, HostBinding, Input, Output, ElementRef, Renderer2 } from '@angular/core';
import { TabsetComponent } from './tabset.component';
import * as i0 from "@angular/core";
import * as i1 from "./tabset.component";
export class TabDirective {
    constructor(tabset, elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        /** if true tab can not be activated */
        this.disabled = false;
        /** if true tab can be removable, additional button will appear */
        this.removable = false;
        /** fired when tab became active, $event:Tab equals to selected instance of Tab component */
        this.selectTab = new EventEmitter();
        /** fired when tab became inactive, $event:Tab equals to deselected instance of Tab component */
        this.deselect = new EventEmitter();
        /** fired before tab will be removed, $event:Tab equals to instance of removed tab */
        this.removed = new EventEmitter();
        this.addClass = true;
        this.role = 'tabpanel';
        this._active = false;
        this._customClass = '';
        this.tabset = tabset;
        this.tabset.addTab(this);
    }
    /** if set, will be added to the tab's class attribute. Multiple classes are supported. */
    get customClass() {
        return this._customClass;
    }
    set customClass(customClass) {
        if (this.customClass) {
            this.customClass.split(' ').forEach((cssClass) => {
                this.renderer.removeClass(this.elementRef.nativeElement, cssClass);
            });
        }
        this._customClass = customClass ? customClass.trim() : '';
        if (this.customClass) {
            this.customClass.split(' ').forEach((cssClass) => {
                this.renderer.addClass(this.elementRef.nativeElement, cssClass);
            });
        }
    }
    /** tab active state toggle */
    get active() {
        return this._active;
    }
    set active(active) {
        if (this._active === active) {
            return;
        }
        if ((this.disabled && active) || !active) {
            if (this._active && !active) {
                this.deselect.emit(this);
                this._active = active;
            }
            return;
        }
        this._active = active;
        this.selectTab.emit(this);
        this.tabset.tabs.forEach((tab) => {
            if (tab !== this) {
                tab.active = false;
            }
        });
    }
    get ariaLabelledby() {
        return this.id ? `${this.id}-link` : '';
    }
    ngOnInit() {
        this.removable = !!this.removable;
    }
    ngOnDestroy() {
        this.tabset.removeTab(this, { reselect: false, emit: false });
    }
}
TabDirective.ɵfac = function TabDirective_Factory(t) { return new (t || TabDirective)(i0.ɵɵdirectiveInject(i1.TabsetComponent), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
TabDirective.ɵdir = i0.ɵɵdefineDirective({ type: TabDirective, selectors: [["tab"], ["", "tab", ""]], hostVars: 7, hostBindings: function TabDirective_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵattribute("id", ctx.id)("role", ctx.role)("aria-labelledby", ctx.ariaLabelledby);
        i0.ɵɵclassProp("active", ctx.active)("tab-pane", ctx.addClass);
    } }, inputs: { heading: "heading", id: "id", disabled: "disabled", removable: "removable", customClass: "customClass", active: "active" }, outputs: { selectTab: "selectTab", deselect: "deselect", removed: "removed" }, exportAs: ["tab"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TabDirective, [{
        type: Directive,
        args: [{ selector: 'tab, [tab]', exportAs: 'tab' }]
    }], function () { return [{ type: i1.TabsetComponent }, { type: i0.ElementRef }, { type: i0.Renderer2 }]; }, { heading: [{
            type: Input
        }], id: [{
            type: HostBinding,
            args: ['attr.id']
        }, {
            type: Input
        }], disabled: [{
            type: Input
        }], removable: [{
            type: Input
        }], customClass: [{
            type: Input
        }], active: [{
            type: HostBinding,
            args: ['class.active']
        }, {
            type: Input
        }], selectTab: [{
            type: Output
        }], deselect: [{
            type: Output
        }], removed: [{
            type: Output
        }], addClass: [{
            type: HostBinding,
            args: ['class.tab-pane']
        }], role: [{
            type: HostBinding,
            args: ['attr.role']
        }], ariaLabelledby: [{
            type: HostBinding,
            args: ['attr.aria-labelledby']
        }] }); })();
//# sourceMappingURL=tab.directive.js.map