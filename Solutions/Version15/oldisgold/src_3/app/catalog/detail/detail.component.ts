import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProducthubService } from '../producthub.service';

@Component({
  selector: 'product-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  theProduct:Product;

  status:boolean=false;
  constructor(private svc:ProducthubService) { }
  //component life cycle event handler 
  ngOnInit() {
     this.theProduct=this.svc.getProduct(1);
     console.log(this.theProduct)
  }

  //Event Handler
  onUpdate(){ this.status=true; }
  onRemove(){ this.status=false; }
  onAddToCart(){  }
  //step 6    implement  onCounterUpdate event handler in Detail component
  onCounterUpdate(data:any){
    this.theProduct.likes=data.count;
  }
}