import {Component, forwardRef, Input, ChangeDetectorRef} from '@angular/core';
import {FormControl, NG_VALUE_ACCESSOR, ControlValueAccessor} from '@angular/forms';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

// Depending on whether rollup is used, moment needs to be imported differently.
// Since Moment.js doesn't have a default export, we normally need to import using the `* as`
// syntax. However, rollup creates a synthetic default module and we thus need to import it using
// the `default as` syntax.
import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
//import {default as _rollupMoment} from 'moment';
import { MatDatepickerInputEvent } from '../../../../node_modules/@angular/material';
import { MomentUtcDateAdapter } from './moment-utc-date-adapter';

const moment = _moment;

// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};
@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatePickerComponent),
      multi: true
    },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]
    },
    // { provide: DateAdapter, useClass: MomentUtcDateAdapter }, // https://stackoverflow.com/questions/48710053/day-incorrect-in-angular-material-datepicker
    {
      provide: MAT_DATE_FORMATS,
      useValue: MY_FORMATS
    },
    // { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } }
  ]
})
export class DatePickerComponent implements ControlValueAccessor {
  /**
   * Set the value of the date set by user, notice the underscore infront of the datevalue
   */

  @Input() _dateValue: string = '';

  /**
   * Placeholder value for the material control input
   */
  @Input() public placeholder: string = null;

  /**
   * The date format to use with default format but allowing you to pass a custom date format
   */
  @Input() private format = 'MM/DD/YYYY HH:mm:ss';

  internalValue: string;

  constructor(private ref: ChangeDetectorRef) {
  }

  @Input() title: string;

  get dateValue() {
    return moment(this._dateValue, this.format);
  }

  set dateValue(val) {
    this._dateValue = moment(val).format(this.format);
    //this.propagateChange(this._dateValue);
    this.propagateChange(moment(val).toDate());
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
      console.log(event.value);
      this.dateValue = moment(event.value, this.format);
  }

  writeValue(value: any) {
    if (value !== undefined) {
      this.dateValue = moment(value, this.format);
    }
  }

  propagateChange = (_: any) => {};

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() {}
}
