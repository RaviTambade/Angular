import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'reactive-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  ngOnInit() {   }

  loginForm: FormGroup;

  constructor(fb: FormBuilder) {

    let credential= {
      'email':['ravi.tambade@transflower.in', Validators.email],
      'password': ['Ravi', Validators.required],
    };
    this.loginForm = fb.group(credential);
  }

  onSubmit(value: string): void {
    console.log('you submitted value: ', value);
  }
}
