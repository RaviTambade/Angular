import { Component, OnInit, OnDestroy } from '@angular/core';
import { NotificationService } from '../notification.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-slave-peer',
  templateUrl: './salve.component.html',
  styleUrls: ['./salve.component.css'],
})
export class SalveComponent implements OnInit, OnDestroy {
  subscriptionIncrement: Subscription | undefined;
  count: Number = 0;
  constructor(private svc: NotificationService) {}

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
