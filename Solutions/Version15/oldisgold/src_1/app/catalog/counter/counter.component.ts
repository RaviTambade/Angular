import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
//step 1 : Create Counter component using ng generate
@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  //Step 2 define custom prpoperty and custom event
  @Input() count:number;
  @Output() update=new EventEmitter();
  
  constructor() { }
  ngOnInit() {
  }
  //step 3 : raise events and send data to subscriber
  increment(){
    this.count++;
    this.update.emit({count:this.count});
  }
  decrement(){
    this.count--;
    this.update.emit({count:this.count});
  }
}