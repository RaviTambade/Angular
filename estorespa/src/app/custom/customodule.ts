import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { SellingflowersPipe } from "./sellingflowerpipe";
import { HiddenDirective } from "./customdirectivehidden";
import { IfDirective } from "./customdirectiveif";
import { UnderlineDirective } from "./customdirectiveunderline";
import { ReasonablePipe } from "./sellingflowerpipe";
import { FlowersComponent } from "./flowers/flowers.component";
import { CommonModule } from "@angular/common";
@NgModule({
    declarations: [ 
                    SellingflowersPipe,
                    ReasonablePipe,
                    HiddenDirective,
                    IfDirective,
                    UnderlineDirective,
                    FlowersComponent
                ],
    exports: [      SellingflowersPipe,
                    HiddenDirective,
                    IfDirective,
                    UnderlineDirective,
                    ReasonablePipe ,
                    FlowersComponent
             ],
    imports:[ CommonModule],

    providers:[ ],
})
export class Customodule{}