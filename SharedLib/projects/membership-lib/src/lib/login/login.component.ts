import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ICredential } from '../icredential';
import { MembershipLibService } from '../membership-lib.service';

@Component({
  selector: 'membership-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credential: ICredential;
  loginForm!: FormGroup;
  showPassword: boolean = false;

  @Output() validSignIn = new EventEmitter<any>();
  isCredentialInvalid: boolean = false;

  constructor(private membershipSvc: MembershipLibService) {
    this.credential = {} as ICredential;
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      contactNumber: new FormControl(this.credential.contactNumber, [
        Validators.required,
        Validators.pattern(/^\d{10}$/),
        Validators.minLength(10),
        Validators.maxLength(10),
      ]),
      password: new FormControl(this.credential.password, [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  get contactnumber() {
    return this.loginForm.get('contactNumber')!;
  }

  get password() {
    return this.loginForm.get('password')!;
  }

  onSignIn() {
    if (this.loginForm.invalid) {
      for (const control of Object.keys(this.loginForm.controls)) {
        this.loginForm.controls[control].markAsTouched();
      }
      return;
    }

    let credential: ICredential = {
      contactNumber: this.contactnumber.value,
      password: this.password.value,
    };

    this.membershipSvc.signIn(credential).subscribe({
      next: (response) => {
        if (response.token == '' || !response) {
          this.isCredentialInvalid = true;
          setTimeout(() => {
            this.isCredentialInvalid = false;
          }, 3000);
        }
        if (response.token != '') {
          this.validSignIn.emit({ token: response.token });
        }
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {},
    });
  }
}
