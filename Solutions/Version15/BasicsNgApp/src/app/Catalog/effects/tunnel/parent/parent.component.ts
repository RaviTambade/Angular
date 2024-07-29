import { Component, ViewChild } from '@angular/core';
import { TunnelChildComponent } from '../child/child.component';

@Component({
  selector: 'tunnel-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class TunnelParentComponent {
  @ViewChild(TunnelChildComponent,{static:true}) child:TunnelChildComponent|undefined;

  //constructor( public child:TunnelChildComponent){}

  //event handlers belong to Parent Component
  increment() { 
   if(this.child )
    this.child.increment();
  }

  decrement(){
    if(this.child )
    this.child.decrement();
  } 
}
