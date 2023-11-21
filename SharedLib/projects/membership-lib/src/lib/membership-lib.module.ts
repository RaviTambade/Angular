import { NgModule } from '@angular/core';
import { MembershipLibComponent } from './membership-lib.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { AddAddressComponent } from './add-address/add-address.component';
import { UpdateAddressComponent } from './update-address/update-address.component';

@NgModule({
  declarations: [
    MembershipLibComponent,
    LoginComponent,
    UserprofileComponent,
    ChangePasswordComponent,
    UpdateProfileComponent,
    AddAddressComponent,
    UpdateAddressComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [
    // MembershipLibComponent
    LoginComponent,
    UserprofileComponent,
    ChangePasswordComponent,
    UpdateProfileComponent,
    AddAddressComponent,
    UpdateAddressComponent,
  ],
})
export class MembershipLibModule {}
