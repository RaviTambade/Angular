import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";
import {SignInComponent} from './sign-in/sign-in.component';
import { ProductAbstractComponent } from "./product-abstract/product-abstract.component";
import { ProductAbstractEventComponent } from './product-abstract-event/product-abstract-event.component';
import { ProductCustomValidatorComponent } from './product-custom-validator/product-custom-validator.component';

@NgModule({
    declarations: [
        SignInComponent,
        ProductAbstractComponent,
        ProductAbstractEventComponent,
        ProductCustomValidatorComponent, 
          
    ],
    exports: [
        SignInComponent,
        ProductAbstractComponent,
        ProductAbstractEventComponent,
        ProductCustomValidatorComponent
    ],
    imports:[
        BrowserModule,
        ReactiveFormsModule
    ],

    providers:[ ],
})
export class ReactiveModule{}