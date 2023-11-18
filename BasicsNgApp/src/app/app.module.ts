import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CatalogModuleModule } from './Catalog/catalog-module/catalog-module.module';
import { SharedModule } from './shared/sharedmodule';
import { MembershipModule } from './membership/membership.module';
//import { SPAModule } from './Routing/SPAModule';
import { GraphicsModule } from './graphics/graphics.module';
import { TemplateFormsModule } from './forms/templateforms.module';
import { ReusableModule } from './reusable/reusable.module';
import { ObservableModule } from './observables/observable.module';
import { SPAModule } from './spa/spa.module';
import { Customodule } from './custom/customodule';
import { MasterComponent } from './Catalog/effects/peertopeer/master/master.component';
import { SalveComponent } from './Catalog/effects/peertopeer/salve/salve.component';
import { FlowersComponent } from './custom/flowers/flowers.component';

import {TFLReactiveFormsModule} from './reactiveforms/tflreactive-forms/tflreactive-forms.module';
import { ContactFormValidComponent } from './reactiveforms/contact-form-valid/contact-form-valid.component';

@NgModule({
  declarations: [
    AppComponent,
    MasterComponent,
    SalveComponent,
    FlowersComponent,
    ContactFormValidComponent,
  

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CatalogModuleModule,
    SharedModule,
    MembershipModule,
    GraphicsModule,
    TemplateFormsModule,
    TFLReactiveFormsModule,
    ReusableModule,
    ObservableModule,
    SPAModule,
    Customodule
   
  ],
  
  bootstrap: [AppComponent]
})

export class AppModule { }
