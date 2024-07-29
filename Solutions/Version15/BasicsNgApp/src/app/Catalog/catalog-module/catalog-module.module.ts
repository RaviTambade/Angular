import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from '../detail/detail.component';
import {FormsModule} from '@angular/forms';
import { ListComponent } from '../list/list.component';
import { DeleteComponent } from '../delete/delete.component';
import { UpdateComponent } from '../update/update.component';
import { ListService } from '../listservice';
import { CounterComponent } from '../counter/counter.component';
import {SellinglistComponent} from "../sellinglist/sellinglist.component";
import { Customodule } from '../../custom/customodule';
import {  TunnelParentComponent } from '../effects/tunnel/parent/parent.component';
import {  TunnelChildComponent } from '../effects/tunnel/child/child.component';

import { BubbleChildComponent } from '../effects/bubble/child/child.component';
import { BubbleParentComponent } from '../effects/bubble/parent/parent.component';

 


//Decorator: meta data , extra information for framework to understand
@NgModule({
  imports: [    //imports only modules:  which are inbuilt or custom modules
    CommonModule,
    FormsModule,
    Customodule
  ],
  declarations: [DetailComponent,ListComponent,
                 UpdateComponent,DeleteComponent,
                 CounterComponent,SellinglistComponent,
                 TunnelParentComponent,TunnelChildComponent,
                 BubbleChildComponent, BubbleParentComponent
  ], // declare component, pipes, directives
  exports:[DetailComponent,ListComponent,
           UpdateComponent,DeleteComponent,SellinglistComponent,
           TunnelParentComponent,TunnelChildComponent,
          BubbleChildComponent, BubbleParentComponent],  //publish component, pipes, directives
 
         // publish services
  providers:[ListService]  
})
export class CatalogModuleModule { }
