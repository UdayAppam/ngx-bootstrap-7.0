import { ChangeDetectorRef, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { AbstractControl, ControlValueAccessor, ValidationErrors, Validator } from '@angular/forms';
import { BsDaterangepickerDirective } from './bs-daterangepicker.component';
import { BsLocaleService } from './bs-locale.service';
import * as i0 from "@angular/core";
export declare class BsDaterangepickerInputDirective implements ControlValueAccessor, Validator, OnInit, OnDestroy {
    private _picker;
    private _localeService;
    private _renderer;
    private _elRef;
    private changeDetection;
    private _onChange;
    private _onTouched;
    private _validatorChange;
    private _value?;
    private _subs;
    constructor(_picker: BsDaterangepickerDirective, _localeService: BsLocaleService, _renderer: Renderer2, _elRef: ElementRef, changeDetection: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    onKeydownEvent(event: KeyboardEvent): void;
    _setInputValue(date?: (Date | undefined)[]): void;
    onChange(event: Event): void;
    validate(c: AbstractControl): ValidationErrors | null;
    registerOnValidatorChange(fn: () => void): void;
    writeValue(value: Date[] | string): void;
    setDisabledState(isDisabled: boolean): void;
    registerOnChange(fn: () => void): void;
    registerOnTouched(fn: () => void): void;
    onBlur(): void;
    hide(): void;
    static ɵfac: i0.ɵɵFactoryDef<BsDaterangepickerInputDirective, [{ host: true; }, null, null, null, null]>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<BsDaterangepickerInputDirective, "input[bsDaterangepicker]", never, {}, {}, never>;
}
//# sourceMappingURL=bs-daterangepicker-input.directive.d.ts.map