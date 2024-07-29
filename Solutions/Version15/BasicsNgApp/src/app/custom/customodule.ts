import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { SellingflowersPipe } from "./sellingflowerpipe";
import { HiddenDirective } from "./customdirectivehidden";
import { IfDirective } from "./customdirectiveif";
import { UnderlineDirective } from "./customdirectiveunderline";
import { ReasonablePipe } from "./sellingflowerpipe";
 
@NgModule({
    declarations: [ 
                    SellingflowersPipe,
                    ReasonablePipe,
                    HiddenDirective,
                    IfDirective,
                    UnderlineDirective
                ],
    exports: [      SellingflowersPipe,
                    HiddenDirective,
                    IfDirective,
                    UnderlineDirective,
                    ReasonablePipe 
             ],
    imports:[ BrowserModule],

    providers:[ ],
})
export class Customodule{}