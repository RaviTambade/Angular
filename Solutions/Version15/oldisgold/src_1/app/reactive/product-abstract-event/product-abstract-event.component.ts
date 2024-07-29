import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'reactive-product-event',
  templateUrl: './product-abstract-event.component.html',
  styleUrls: ['./product-abstract-event.component.css']
})
export class ProductAbstractEventComponent implements OnInit {

  ngOnInit() {
  }
  productForm: FormGroup;
  title: AbstractControl;
  description: AbstractControl;

  constructor(fb: FormBuilder) {
    this.productForm = fb.group({'title_t':  ['', Validators.required],
                            'description':  ['', Validators.required]});
    
    this.title = this.productForm.controls['title_t'];
    this.description = this.productForm.controls['description'];

    //listener : this is subscribes to control
    this.title.valueChanges.subscribe(
      (value: string) => {
        console.log('title control value changed to:', value);
      }
    );

    /*this.description.valueChanges.subscribe(
      (value: string) => {
        console.log('description control value changed to:', value);
      }
    );

    this.productForm.valueChanges.subscribe(
      (form: any) => {
        console.log('form value changed to:', form);
      }
    );*/
    
  }

  onSubmit(form: any): void {
    console.log('you submitted value:', form.code);
  }
}
