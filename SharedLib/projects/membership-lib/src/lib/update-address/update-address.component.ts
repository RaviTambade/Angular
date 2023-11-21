import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Address } from '../address';
import { MembershipLibService } from '../membership-lib.service';

@Component({
  selector: 'membership-update-address',
  templateUrl: './update-address.component.html',
  styleUrls: ['./update-address.component.css'],
})
export class UpdateAddressComponent {
  addressForm!: FormGroup;
  @Output() onComplete = new EventEmitter<{ isStateUpdated: boolean }>();

  @Input() address!: Address;
  constructor(private membershipSvc: MembershipLibService) {}

  ngOnInit(): void {
    this.addressForm = new FormGroup({
      area: new FormControl(this.address.area, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50),
      ]),
      landmark: new FormControl(this.address.landMark, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50),
      ]),
      addressType: new FormControl(this.address.addressType, [
        Validators.required,
      ]),
      city: new FormControl(this.address.city, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20),
      ]),
      state: new FormControl(this.address.state, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20),
      ]),
      pincode: new FormControl(this.address.pinCode, [
        Validators.required,
        Validators.pattern('[0-9]+'),
        Validators.minLength(6),
        Validators.maxLength(6),
      ]),
    });
  }

  get area() {
    return this.addressForm.get('area')!;
  }
  get landmark() {
    return this.addressForm.get('landmark')!;
  }
  get city() {
    return this.addressForm.get('city')!;
  }
  get state() {
    return this.addressForm.get('state')!;
  }
  get addressType() {
    return this.addressForm.get('addressType')!;
  }
  get pincode() {
    return this.addressForm.get('pincode')!;
  }

  onSubmit() {
    if (this.addressForm.invalid) {
      for (const control of Object.keys(this.addressForm.controls)) {
        this.addressForm.controls[control].markAsTouched();
      }
      return;
    }

    let address: Address = {
      id: this.address.id,
      userId: this.address.id,
      area: this.area.value,
      landMark: this.landmark.value,
      city: this.city.value,
      state: this.state.value,
      addressType: this.addressType.value,
      pinCode: this.pincode.value,
      name: this.address.name,
      contactNumber: this.address.contactNumber,
    };

    this.membershipSvc.updateAddress(address.id, address).subscribe((res) => {
      if (res == true) {
        this.onComplete.emit({ isStateUpdated: true });
      } else {
        this.onComplete.emit({ isStateUpdated: false });
      }
    });
  }
  onCancelClick() {
    this.onComplete.emit({ isStateUpdated: false });
  }
}
