import { Component, } from '@angular/core';

@Component({
  selector: 'tunnel-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class TunnelChildComponent {
  count=0;

  increment(){
    this.count++;
  }

  decrement(){
    this.count--;
  }
}
