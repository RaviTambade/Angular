import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReceiptComponent } from './receipt/receipt.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { RouterModule,Routes } from '@angular/router';

const routes: Routes = [    { path: '', component: InvoiceComponent }  ];

 @NgModule({
  declarations: [
    ReceiptComponent,
    InvoiceComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes), 
  ]
})
export class BillingModule { }
