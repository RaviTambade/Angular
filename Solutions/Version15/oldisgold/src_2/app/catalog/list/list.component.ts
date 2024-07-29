import { Component, OnInit } from '@angular/core';
import {Product} from '../product';
import { ProducthubService } from '../producthub.service';

@Component({
  selector: 'product-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  allproducts:Product[]; //declare variable

  constructor(private svc:ProducthubService) { } //dependency injection

  ngOnInit() { //invoke service
    this.allproducts=this.svc.getAllProducts();
  }

}
