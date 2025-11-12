import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { ProductService } from './product.service';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { CounterComponent } from './counter/counter.component';
import { CreateComponent } from './create/create.component';
import { RouterModule } from '@angular/router';
 
@NgModule({
  declarations: [ UpdateComponent,
                  DeleteComponent,
                  CreateComponent],
  imports: [CommonModule,FormsModule,RouterModule],
  providers:[ProductService]  
})
export class CatalogModule { }