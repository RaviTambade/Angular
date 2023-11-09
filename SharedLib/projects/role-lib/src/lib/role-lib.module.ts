import { NgModule } from '@angular/core';
import { RoleLibComponent } from './role-lib.component';
import { RoleListComponent } from './role-list/role-list.component';



@NgModule({
  declarations: [
    RoleLibComponent,
    RoleListComponent
  ],
  imports: [
  ],
  exports: [
    RoleLibComponent
  ]
})
export class RoleLibModule { }
