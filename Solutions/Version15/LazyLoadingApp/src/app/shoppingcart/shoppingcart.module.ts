import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { ItemComponent } from './item/item.component';
import { RouterModule,Routes } from '@angular/router';

const routes: Routes = [    { path: '', component: CartComponent }  ];

@NgModule({
  declarations: [
    CartComponent,
    ItemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ShoppingcartModule { }
