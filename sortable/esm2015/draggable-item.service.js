import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export class DraggableItemService {
    constructor() {
        this.onCapture = new Subject();
    }
    dragStart(item) {
        this.draggableItem = item;
    }
    getItem() {
        return this.draggableItem;
    }
    captureItem(overZoneIndex, newIndex) {
        if (this.draggableItem && this.draggableItem.overZoneIndex !== overZoneIndex) {
            this.draggableItem.lastZoneIndex = this.draggableItem.overZoneIndex;
            this.draggableItem.overZoneIndex = overZoneIndex;
            this.onCapture.next(this.draggableItem);
            this.draggableItem = Object.assign({}, this.draggableItem, {
                overZoneIndex,
                i: newIndex
            });
        }
        return this.draggableItem;
    }
    onCaptureItem() {
        return this.onCapture;
    }
}
DraggableItemService.ɵfac = function DraggableItemService_Factory(t) { return new (t || DraggableItemService)(); };
DraggableItemService.ɵprov = i0.ɵɵdefineInjectable({ token: DraggableItemService, factory: DraggableItemService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DraggableItemService, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=draggable-item.service.js.map