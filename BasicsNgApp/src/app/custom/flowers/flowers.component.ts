import { Component, OnDestroy, OnInit } from '@angular/core';
import { FlowerService } from '../flower.service';
import { Observable, Subscription } from 'rxjs';
import { Flower } from '../flower';

@Component({
  selector: 'app-flowers',
  templateUrl: './flowers.component.html',
  styleUrls: ['./flowers.component.css']
})
export class FlowersComponent implements OnInit,OnDestroy{

  flowersChannel:Subscription|undefined;
  flowers:Flower[]=[];
  //flowers:Observable<Flower[]>|undefined;
  constructor(private svc:FlowerService){
  }



  ngOnInit(): void {

    this.flowersChannel=this.svc.getFlowers().subscribe(
      (data)=>{
        this.flowers=data;
      }
    )

   // this.flowers=this.svc.getFlowers();
  }

  ngOnDestroy() {
    this.flowersChannel?.unsubscribe();
  }

  onAdd():any{
    this.svc.insert( { id: 7, title: 'Aaster', unitprice: 12 },);
  }
}
