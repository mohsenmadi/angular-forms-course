import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'cva-input',
  templateUrl: './cva-input.component.html',
  styleUrls: ['./cva-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CvaInputComponent),
      multi: true
    }
  ]
})
export class CvaInputComponent implements ControlValueAccessor {

  @Input() parentForm: FormGroup;
  @Input() fieldName: string;

  value = '';

  onChange = (value) => {};

  onTouched = () => {};

  touched = false;

  disabled = false;

  get formField(): FormControl {
    return this.parentForm?.controls[this.fieldName] as FormControl;
  }

  writeValue(value: string): void {
    this.value = value;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

}
