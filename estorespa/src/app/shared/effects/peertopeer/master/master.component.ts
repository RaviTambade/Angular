import { Component } from '@angular/core';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-master-peer',
  standalone:true,
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent {

  count:number=0;

  constructor(private svc: NotificationService) {}
  
  transfer() {  }

  increment() { 
    this.count++;
    this.svc.sendCount(this.count);
   }
 
   decrement(){
    this.count--;
    this.svc.sendCount(this.count);
  
   }
}
