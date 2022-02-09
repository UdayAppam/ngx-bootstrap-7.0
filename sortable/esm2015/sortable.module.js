import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortableComponent } from './sortable.component';
import { DraggableItemService } from './draggable-item.service';
import * as i0 from "@angular/core";
export class SortableModule {
    static forRoot() {
        return { ngModule: SortableModule, providers: [DraggableItemService] };
    }
}
SortableModule.ɵmod = i0.ɵɵdefineNgModule({ type: SortableModule });
SortableModule.ɵinj = i0.ɵɵdefineInjector({ factory: function SortableModule_Factory(t) { return new (t || SortableModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SortableModule, { declarations: [SortableComponent], imports: [CommonModule], exports: [SortableComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SortableModule, [{
        type: NgModule,
        args: [{
                declarations: [SortableComponent],
                imports: [CommonModule],
                exports: [SortableComponent]
            }]
    }], null, null); })();
//# sourceMappingURL=sortable.module.js.map