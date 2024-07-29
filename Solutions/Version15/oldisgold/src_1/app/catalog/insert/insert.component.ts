import { Component, OnInit } from '@angular/core';
import {Product} from '../product';
import { ProducthubService } from '../producthub.service';

@Component({
  selector: 'product-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {
  //data member
  theProduct:Product;

  constructor(private svc:ProducthubService) { }

  //component life cycle event handler 
  ngOnInit() {
     this.theProduct=new Product(" ",
                            " ",
                            0,0,0,"");
  }

  //Event Handler
  onInsert(){
    console.log(this.theProduct);
    this.svc.insert(this.theProduct)
  }
}