import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { CommonModule } from '@angular/common';
import { LazyDemoComponent } from './lazy-demo/lazy-demo.component';

const routes: Routes = [    { path: '', component: LazyDemoComponent }  ];

@NgModule({
  declarations: [
    LazyDemoComponent
  ],
  imports: [RouterModule.forChild(routes)], 
  exports: [RouterModule] 
})
export class LazyLoadingModule { }
