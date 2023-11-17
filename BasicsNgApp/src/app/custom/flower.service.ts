import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Flower } from './flower';

@Injectable({
    providedIn: 'root',
  })
export class FlowerService {

    private flowers: Flower[] = [
        { id: 1, title: 'Gerbera', unitprice: 10 },
        { id: 2, title: 'Rose', unitprice: 15 },
        { id: 3, title: 'Jasmine', unitprice: 10 },
        { id: 4, title: 'Lotus', unitprice: 25 },
      ];

      private subject = new BehaviorSubject<Flower[]>(this.flowers);

    constructor() {}

    getFlowers():Observable<Flower[]>{
        return this.subject.asObservable();
    }
    insert(flower:any){
        this.flowers.push(flower);
    }
}
   
