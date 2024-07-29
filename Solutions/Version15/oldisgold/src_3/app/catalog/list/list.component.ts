import { Component, OnInit } from '@angular/core';
import { ProducthubService } from '../producthub.service';
import { Product } from '../product';

@Component({
  selector: 'product-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  allProducts:Product[];  //declare variable

  constructor(private  svc:ProducthubService) { } //dependency Injection
  
  ngOnInit() {
  this.allProducts=this.svc.getAllProducts();
  //invoke service
  }
}