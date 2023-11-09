import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RoleLibModule } from './lib/role-lib.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RoleLibService } from './lib/role-lib.service';
import { RouterModule } from '@angular/router';
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
