import { EventEmitter } from '@angular/core';
import { BsDatepickerViewMode, BsNavigationDirection, NavigationViewModel } from '../../models';
import * as i0 from "@angular/core";
export declare class BsDatepickerNavigationViewComponent {
    calendar: NavigationViewModel;
    onNavigate: EventEmitter<BsNavigationDirection>;
    onViewMode: EventEmitter<BsDatepickerViewMode>;
    navTo(down: boolean): void;
    view(viewMode: BsDatepickerViewMode): void;
    static ɵfac: i0.ɵɵFactoryDef<BsDatepickerNavigationViewComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<BsDatepickerNavigationViewComponent, "bs-datepicker-navigation-view", never, { "calendar": "calendar"; }, { "onNavigate": "onNavigate"; "onViewMode": "onViewMode"; }, never, never>;
}
//# sourceMappingURL=bs-datepicker-navigation-view.component.d.ts.map