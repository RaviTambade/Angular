import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrandingComponent } from "./styleclass-directive/styleclass-directive.component";
import { InbuiltPipeComponent } from "./inbuilt-pipe/inbuilt-pipe.component";
import { JsonPipeComponent } from "./inbuilt-pipe/jsonpipe";
import { NumberPipeComponent } from "./inbuilt-pipe/decimalpipe";
import { ConditionalComponent } from "./conditional/conditional.component";
import { AsyncPipeComponent } from "./inbuilt-pipe/async.pipe";
import { CommonModule } from "@angular/common";
 
@NgModule({
    declarations: [
        BrandingComponent,
        InbuiltPipeComponent,
        JsonPipeComponent,
        AsyncPipeComponent,
        NumberPipeComponent,
        ConditionalComponent
    ],
    exports: [
        BrandingComponent,
        InbuiltPipeComponent,
        JsonPipeComponent,
        AsyncPipeComponent,
        NumberPipeComponent,
        ConditionalComponent
    ],
    imports:[ CommonModule],

    providers:[ ],
})
export class SharedModule{}