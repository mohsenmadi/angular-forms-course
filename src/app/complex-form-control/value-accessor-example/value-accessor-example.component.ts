import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'value-accessor-example',
  templateUrl: './value-accessor-example.component.html',
  styleUrls: ['./value-accessor-example.component.scss']
})
export class ValueAccessorExampleComponent {

  form = this.fb.group({
    itemName: ['']
  });

  constructor(private fb: FormBuilder) {
  }

  onSubmit() {
    console.log(this.form.value)
  }
}
