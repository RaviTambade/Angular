import { NgModule } from '@angular/core';
import { RoleLibComponent } from './role-lib.component';
import { RoleListComponent } from './role-list/role-list.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';


const routes : Routes = [
     {path : "users/:role" , component : UsersComponent},
     {path : "users/details/:id", component: UserDetailsComponent},
     {path : "roles" , component : RoleListComponent},
] 


@NgModule({
  declarations: [
    RoleLibComponent,
    RoleListComponent,
    UsersComponent,
    UserDetailsComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RoleLibComponent,
    RoleListComponent,
  ]
})
export class RoleLibModule { }
