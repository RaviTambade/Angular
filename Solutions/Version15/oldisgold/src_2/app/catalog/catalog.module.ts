import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { ProducthubService } from './producthub.service';

@NgModule({
  //components are part of module
  declarations: [DetailComponent, 
                 ListComponent, 
                 UpdateComponent, 
                 DeleteComponent],

                 //These components can be used outside of the module
                 exports:[ListComponent],
  imports: [
    CommonModule
  ],
providers:[ProducthubService] //service
  
})
export class CatalogModule { }
