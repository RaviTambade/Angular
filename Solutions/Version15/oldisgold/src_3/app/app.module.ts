import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PersonService } from './person.service';
import { CatalogModule } from './catalog/catalog.module';
import { SharedModule } from  './shared/sharedmodule';
import { SPAModule } from './routing/spa.module';

@NgModule({
  declarations: [ AppComponent],
  imports: [
    BrowserModule,
    CatalogModule,
    SharedModule,
    SPAModule
  ],
  providers: [PersonService],
 bootstrap: [AppComponent]
})
export class AppModule { }
