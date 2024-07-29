import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ProducthubService} from './producthub.service';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { InsertComponent } from './insert/insert.component';
import { CounterComponent } from './counter/counter.component';
import { CatalogLoginComponent } from './catalog-login/catalog-login.component';
import { CustomModule } from '../custom/custommodule';
import { HiddenDirective } from '../custom/customdirectivehidden';
 
@NgModule({

  //components are part of module
  declarations: [ DetailComponent,
                  ListComponent, 
                  UpdateComponent,
                  DeleteComponent,
                  InsertComponent,
                  CounterComponent,
                  CatalogLoginComponent
                  
                 ],
  //These components can be used outside of the module
  exports:[ListComponent,
           InsertComponent,DetailComponent,CatalogLoginComponent,HiddenDirective
          ],
                  //external modules to be imported
  imports: [
    CommonModule,
    FormsModule,
    CustomModule,    
  ],
  providers:[ProducthubService]  ///services
})
export class CatalogModule { }
