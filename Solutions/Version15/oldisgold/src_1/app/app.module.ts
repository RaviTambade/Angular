import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PersonService } from './person.service';
import { CatalogModule } from './catalog/catalog.module';
import { SharedModule } from  './shared/sharedmodule';
import { SPAModule } from './routing/spa.module';
import { TemplateFormsModule } from './forms/templateforms.module';
import { ReactiveModule } from './reactive/reactive.module';

@NgModule({
  declarations: [ AppComponent],
  imports: [
    BrowserModule,
    CatalogModule,
    SharedModule,
    SPAModule,
    TemplateFormsModule,
    ReactiveModule
  ],
  providers: [PersonService],
 bootstrap: [AppComponent]
})
export class AppModule { }
