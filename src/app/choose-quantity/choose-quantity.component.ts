import {Component, forwardRef, Input} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator
} from '@angular/forms';

@Component({
  selector: 'choose-quantity',
  templateUrl: './choose-quantity.component.html',
  styleUrls: ['./choose-quantity.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ChooseQuantityComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: ChooseQuantityComponent,
      multi: true
    }
  ]
})
export class ChooseQuantityComponent implements ControlValueAccessor, Validator {
  quantity = 0;

  @Input()
  increment: number;

  onChange = (quantity) => {
  };

  onTouched = () => {
  };

  touched = false;

  disabled = false;

  writeValue(quantity: number): void {
    this.quantity = quantity;
  }

  registerOnChange(onChange: any): void {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }


  registerOnValidatorChange(fn: () => void): void {
  }

  validate(control: AbstractControl): ValidationErrors | null {
    const quantity = control.value;
    if (quantity < 0) {
      return {mustBePositive: {quantity}};
    }
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  onAdd() {
    this.markAsTouched();
    if (!this.disabled) {
      this.quantity += this.increment;
      this.onChange(this.quantity);

      if (this.quantity > 50) {
        this.setDisabledState(true);
      }
    }
  }

  onRemove() {
    this.markAsTouched();
    if (this.disabled) {
      this.setDisabledState(false);
    }

    if (!this.disabled) {
      this.quantity -= this.increment;
      this.onChange(this.quantity);
    }
  }
}
