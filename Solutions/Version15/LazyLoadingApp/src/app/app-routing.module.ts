import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {  
    path: 'catalog',  
    loadChildren: () => import('./catalog/catalog.module')  
    .then(m => m.CatalogModule)  
 },   

 {  
  path: 'shoppingcart',  
  loadChildren: () => import('./shoppingcart/shoppingcart.module')  
  .then(m => m.ShoppingcartModule)  
},   

{  
  path: 'billing',  
  loadChildren: () => import('./billing/billing.module')  
  .then(m => m.BillingModule)  
},  
{  
  path: 'lazy-loading',  
  loadChildren: () => import('./lazy-loading/lazy-loading.module')  
  .then(m => m.LazyLoadingModule)  
},   

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
