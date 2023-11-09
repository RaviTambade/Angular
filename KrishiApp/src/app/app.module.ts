import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { RoleLibModule } from 'role-lib';
//import{MembershipModule} from 'membership';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    //MembershipModule,
    RoleLibModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
