import { Component, EventEmitter, Input, Output, } from '@angular/core';

@Component({
  selector: 'bubble-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class BubbleChildComponent {
  @Input() count:number=0;
  @Output() update=new EventEmitter();

  constructor() {
    this.count=0;
   }
  ngOnInit() {

  }
   //Event handlers
    increment(){ 
      this.count++;
      this.update.emit({count:this.count});
    }
    decrement(){
      this.count--;
      this.update.emit({count:this.count});
    }
}

