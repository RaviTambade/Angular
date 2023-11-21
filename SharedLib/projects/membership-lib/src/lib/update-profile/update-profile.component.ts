import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IUser } from '../Iuser';
import { MembershipLibService } from '../membership-lib.service';
import { StateChangeEvent } from '../stateChangeEvent';

@Component({
  selector: 'membership-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css'],
})
export class UpdateProfileComponent {
  @Input() user: IUser = {
    id: 0,
    imageUrl: '',
    aadharId: '',
    firstName: '',
    lastName: '',
    birthDate: '',
    gender: '',
    email: '',
    contactNumber: '',
  };

  @Output() onUpdateFinished = new EventEmitter<StateChangeEvent>();

  userForm: FormGroup;

  constructor(private svc: MembershipLibService) {
    this.userForm = new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50),
      ]),
      aadharId: new FormControl('', [
        Validators.required,
        Validators.minLength(14),
        Validators.maxLength(14),
        Validators.pattern(/^\d{4}\s?\d{4}\s?\d{4}$/),
      ]),
      birthDate: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      email: new FormControl('', [
        Validators.required,
        Validators.maxLength(50),
        Validators.email,
      ]),
    });
  }
  ngOnInit(): void {
    this.userForm.setValue({
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      aadharId: this.user.aadharId,
      birthDate: this.user.birthDate,
      gender: this.user.gender,
      email: this.user.email,
    });

    this.aadharId.valueChanges.subscribe((value) => {
      const formattedValue = value.replace(/(\d{4})(?=\d)/g, '$1 ');
      this.aadharId.setValue(formattedValue, { emitEvent: false });
    });
  }

  get firstname() {
    return this.userForm.get('firstName')!;
  }

  get lastname() {
    return this.userForm.get('lastName')!;
  }

  get email() {
    return this.userForm.get('email')!;
  }

  get aadharId() {
    return this.userForm.get('aadharId')!;
  }

  get dob() {
    return this.userForm.get('birthDate')!;
  }
  get gender() {
    return this.userForm.get('gender')!;
  }

  ngAfterViewInit(): void {
    window.scrollTo(0, document.body.scrollHeight);
  }

  updateUser() {
    const aadharNumber = this.userForm
      .get('aadharId')
      ?.value.replace(/\s/g, '');

    if (this.userForm.valid) {
      this.user.firstName = this.firstname.value;
      this.user.lastName = this.lastname.value;
      this.user.aadharId = aadharNumber;
      this.user.birthDate = this.dob.value;
      this.user.gender = this.gender.value;
      this.user.email = this.email.value;

      this.svc.updateUser(this.user.id, this.user).subscribe((response) => {
        this.onUpdateFinished.emit({ isStateUpdated: true });
      });
    }
  }

  cancelupdateUser() {
    this.onUpdateFinished.emit({ isStateUpdated: false });
  }
}
