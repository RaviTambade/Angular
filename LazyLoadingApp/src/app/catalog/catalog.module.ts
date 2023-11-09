import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { RouterModule,Routes } from '@angular/router';

const routes: Routes = [    { path: '', component: ListComponent }  ];

@NgModule({
  declarations: [
    ListComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
   RouterModule.forChild(routes), 
  ]
})
export class CatalogModule { }
