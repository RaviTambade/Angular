import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import{MembershipModule} from 'membership';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MembershipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
