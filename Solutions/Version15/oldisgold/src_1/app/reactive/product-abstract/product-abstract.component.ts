import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl,
         FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'reactive-abstract',
  templateUrl: './product-abstract.component.html',
  styleUrls: ['./product-abstract.component.css']
})
export class ProductAbstractComponent implements OnInit {
 
 productForm: FormGroup;
 
 title:   AbstractControl;
 quantity: AbstractControl;

  constructor(fb: FormBuilder){ 
    let product={ 
      'title': ['Rose', Validators.required],
      'quantity':['45', Validators.required]
    };
    this.productForm = fb.group(product);
    this.title = this.productForm.controls['title'];
    this.quantity = this.productForm.controls['quantity'];
  } 

  onSubmit(value: string): void {
     console.log('you submitted value: ', value);
  }
  ngOnInit() {}
}
