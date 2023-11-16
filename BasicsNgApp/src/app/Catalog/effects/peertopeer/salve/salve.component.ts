import { Component, OnInit, OnDestroy } from '@angular/core';
import { NotificationService } from '../notification.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-slave-peer',
  templateUrl: './salve.component.html',
  styleUrls: ['./salve.component.css'],
})
<<<<<<< HEAD
export class SalveComponent implements OnInit {

  subscriptionIncrement: Subscription|undefined;
  count:Number=0;
  
  constructor(private svc:NotificationService){
  }
=======
export class SalveComponent implements OnInit, OnDestroy {
  subscriptionIncrement: Subscription | undefined;
  count: Number = 0;
  constructor(private svc: NotificationService) {}
>>>>>>> 3547711487a3567d1e80c6b2b27d2aa2f047d86c

  ngOnInit() {
    //Observers
    this.subscriptionIncrement = this.svc.getSource().subscribe((cnt) => {
      this.count = cnt.amount;
    });
  }

  ngOnDestroy(): void {
    this.subscriptionIncrement?.unsubscribe();
  }
}
