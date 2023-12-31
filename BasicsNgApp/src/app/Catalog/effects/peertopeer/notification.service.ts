import { Injectable } from '@angular/core';
import { Subject,Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private subject = new Subject<any>();

  constructor() { }

  sendCount(count:Number){
    this.subject.next({ amount: count });
  }

  getSource(): Observable<any> {
    return this.subject.asObservable();
}

}
