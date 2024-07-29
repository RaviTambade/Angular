import { Component, Input, ViewChild } from '@angular/core';
import { BubbleChildComponent } from '../child/child.component';

@Component({
  selector: 'bubble-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class BubbleParentComponent {
 
  @Input() likes:number=0;
 
  constructor() { }
  ngOnInit() {
    this.likes=0;
   }
  //at parent level we have defined only event handler
  onUpdate(data:any){
      this.likes=data.count;
  }
}
