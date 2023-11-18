import { Component,Directive } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NG_VALIDATORS, AbstractControl, Validator, ValidationErrors, ValidatorFn } from '@angular/forms';

export function emailValidator(): ValidatorFn {

  const EMAIL_REGEXP = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  return (control: AbstractControl): ValidationErrors | null => {
    const isValid = EMAIL_REGEXP.test(control.value);

    if (isValid) {
      return null;
    } else {
      return {
        emailValidator: {
          valid: false,
        },
      };
    }
  };

}

@Directive({
  selector: '[appEmailValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: EmailValidatorDirective,
    multi: true,
  }],
})
export class EmailValidatorDirective implements Validator {
  constructor() {
  }

  public validate(control: AbstractControl): ValidationErrors | null {
    return emailValidator()(control);
  }

}

interface IUser {
  name: string;
  nickname: string;
  email: string;
  password: string;
  showPassword: boolean;
}

@Component({
  selector: 'contact-form-valid',
  templateUrl: './contact-form-valid.component.html',
  styleUrls: ['./contact-form-valid.component.css']
})
export class ContactFormValidComponent {

  reactiveForm!: FormGroup;
  user: IUser;

  constructor() {
    this.user = {} as IUser;
  }

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      name: new FormControl(this.user.name, [Validators.required,Validators.minLength(1), Validators.maxLength(250),]),
      nickname: new FormControl(this.user.nickname, [Validators.maxLength(10), ]),
      email: new FormControl(this.user.email, [Validators.required,Validators.minLength(1),Validators.maxLength(250),emailValidator(),
      ]),
      password: new FormControl(this.user.password, [Validators.required,Validators.minLength(15),]),
    });
  }

  get name() {
    return this.reactiveForm.get('name')!;
  }

  get nickname() {
    return this.reactiveForm.get('nickname')!;
  }

  get email() {
    return this.reactiveForm.get('email')!;
  }

  get password() {
    return this.reactiveForm.get('password')!;
  }

  public validate(): void {
    if (this.reactiveForm.invalid) {
      for (const control of Object.keys(this.reactiveForm.controls)) {
        this.reactiveForm.controls[control].markAsTouched();
      }
      return;
    }

    this.user = this.reactiveForm.value;

    console.info('Name:', this.user.name);
    console.info('Nickname:', this.user.nickname);
    console.info('Email:', this.user.email);
    console.info('Password:', this.user.password);
  }

}
