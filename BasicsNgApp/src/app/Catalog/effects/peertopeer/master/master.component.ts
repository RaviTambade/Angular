import { Component } from '@angular/core';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-master-peer',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent {

  count:number=0;

  constructor(private svc: NotificationService) {}
  
  transfer() {  }

  increment() { 
    this.count++;
    this.svc.increment(this.count);
   }
 
   decrement(){
    this.count--;
    this.svc.increment(this.count);
  
   }
}
