import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';
import { MembershipLibService } from '../membership-lib.service';
import { IUpdatePassword } from '../iupdate-password';

export function confirmPasswordValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    return control.value.newPassword === control.value.confirmPassword
      ? null
      : { PasswordNoMatch: true };
  };
}

@Component({
  selector: 'membership-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
})
export class ChangePasswordComponent {
  showOldPassword: boolean = false;
  showNewPassword: boolean = false;
  showConfirmPassword: boolean = false;

  changePasswordForm!: FormGroup;

  @Output() onPasswordChange = new EventEmitter();
  constructor(private membershipSvc: MembershipLibService) {}

  ngOnInit(): void {
    this.changePasswordForm = new FormGroup(
      {
        oldPassword: new FormControl('', [
          Validators.required,
          Validators.minLength(8),
        ]),
        newPassword: new FormControl('', [
          Validators.required,
          Validators.minLength(8),
        ]),
        confirmPassword: new FormControl('', [
          Validators.required,
          Validators.minLength(8),
        ]),
      },
      { validators: [confirmPasswordValidator()] }
    );
  }

  get oldPassword() {
    return this.changePasswordForm.get('oldPassword')!;
  }
  get newPassword() {
    return this.changePasswordForm.get('newPassword')!;
  }
  get confirmPassword() {
    return this.changePasswordForm.get('confirmPassword')!;
  }

  ngAfterViewInit(): void {
    window.scrollTo(0, document.body.scrollHeight);
  }

  onUpdatePassword() {
    if (this.changePasswordForm.invalid) {
      for (const control of Object.keys(this.changePasswordForm.controls)) {
        this.changePasswordForm.controls[control].markAsTouched();
      }
      return;
    }

    let credential: IUpdatePassword = {
      oldPassword: this.oldPassword.value,
      newPassword: this.newPassword.value,
    };

    this.membershipSvc.changePassword(credential).subscribe((response) => {
      if (response) {
        alert('Password changed');
        this.onPasswordChange.emit();
      }
    });
  }

  onCancelClick() {
    this.onPasswordChange.emit();
  }
}
