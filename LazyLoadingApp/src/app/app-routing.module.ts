import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
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
