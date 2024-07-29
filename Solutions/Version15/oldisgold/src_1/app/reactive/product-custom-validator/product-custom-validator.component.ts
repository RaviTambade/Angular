import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators, FormControl } from '@angular/forms';

//Validation Policy 
function codeValidator(control: FormControl): { [s: string]: boolean } {
  if (!control.value.match(/^TFL/)) {
    return {testValue: true};
  }
}


@Component({
  selector: 'reactive-custom-validator',
  templateUrl: './product-custom-validator.component.html',
  styleUrls: ['./product-custom-validator.component.css']
})
export class ProductCustomValidatorComponent implements OnInit {
  ngOnInit() { }

  productForm: FormGroup;
  code: AbstractControl;

  constructor(fb: FormBuilder) {
    this.productForm = fb.group({
      'code':  ['', Validators.compose([Validators.required,
                                        codeValidator])]
    });

    this.code = this.productForm.controls['code'];
  }

  onSubmit(value: string): void {
    console.log('you submitted value: ', value);
  }
}
