import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChange, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, Validator, FormControl, ValidationErrors } from '@angular/forms';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import { MaskService } from './mask.service';

// "text-mask-addons": "^3.7.2",
// "angular2-text-mask": "^9.0.0",
@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.scss'],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => NumberComponent), multi: true },
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => NumberComponent), multi: true }
  ]
})
export class NumberComponent implements OnInit, OnChanges, ControlValueAccessor, Validator {
  @Input() value: number;
  @Input() allowEmptyValue = false;
  @Input() decimalPlaces: number = 2;
  @Input() isPercent: boolean = false;
  @Input() placeholder: string = '';
  @Output() textChange = new EventEmitter<number>();
  @Output() tabEvent = new EventEmitter<KeyboardEvent>();

  internalValue: number;
  numberMask: any;
  propagateChange: any = () => { };

  writeValue(value: string): void {
    const parsedValue = parseFloat(value);
    if (!isNaN(parsedValue)) {
      this.value = parsedValue;
      this.setInternalValue(parsedValue);
    }
  }

  ngOnChanges(inputChange: any): void {
    const typedChange = <SimpleChange>inputChange.value;
    if (typedChange) {
        this.setInternalValue(typedChange.currentValue);
        this.propagateChange(this.internalValue);
    }
  }

  valueUpdated(): void {
    this.value = this.internalValue;
    this.textChange.emit(this.internalValue);
    this.propagateChange(this.internalValue);
  }

  private setInternalValue(value: number): void {
    this.internalValue = this.allowEmptyValue ? value : value || 0;
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  constructor() { }

  ngOnInit() {
    if(this.isPercent === false) {
      this.numberMask = MaskService.getMaskNumberWithDecimalPlaces(this.decimalPlaces);
    } else {
      this.numberMask = MaskService.getPercentMask(this.decimalPlaces);
    }
    this.setInternalValue(this.value);
  }

  getMaskNumberWithDecimalPlaces(decimalLimit: number = 2) {
    return createNumberMask({
      prefix: '',
      suffix: '',
      thousandsSeparatorSymbol: ',',
      allowDecimal: true,
      decimalLimit: decimalLimit,
      allowNegative: false
    });


    // return createNumberMask({
		// 	prefix: '',
		// 	suffix: '',
		// 	includeThousandsSeparator: true,
		// 	allowDecimal: true,
		// 	requireDecimal: true,
		// 	allowLeadingZeroes: true,
		// 	decimalSymbol: '.',
		// 	thousandsSeparatorSymbol: ',',
		// 	decimalLimit: 2,
		// 	integerLimit: 2,
		// });
  }

  unmask(value, allowEmptyValue = false): any {
    if (value === undefined || value === null || value.toString().trim() === '') {
      if (allowEmptyValue) {
        return value;
      }
      return 0;
    }
    if (value === '-_%') {
      return 0;
    }
    return +value.toString().replace(/[^\d\.\-]/g, '');
  }

  registerOnValidatorChange?(fn: () => void): void {
    //throw new Error("Method not implemented.");
  }
  setDisabledState?(isDisabled: boolean): void {
    //throw new Error("Method not implemented.");
  }
  validate(ctrl: FormControl): ValidationErrors {
    return null;
  }
}
