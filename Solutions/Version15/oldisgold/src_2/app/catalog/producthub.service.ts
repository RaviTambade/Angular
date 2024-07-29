import { Injectable } from '@angular/core';
import {Product} from './product';

@Injectable()
export class ProducthubService {

  products:Product[];

  constructor() { 
    this.products=[
      new Product("Gerbera","Wedding flower", 10,5000,2300,"./assets/images/gerbera.jpg"),
      new Product("Rose","Wedding flower", 10,5000,2300,"./assets/images/gerbera.jpg"),
      new Product("lotus","Wedding flower", 10,5000,2300,"./assets/images/gerbera.jpg"),
      new Product("Jasmine","Wedding flower", 10,5000,2300,"./assets/images/gerbera.jpg"),
      new Product("Tulip","Wedding flower", 10,5000,2300,"./assets/images/gerbera.jpg"),
      new Product("Marigold","Wedding flower", 10,5000,2300,"./assets/images/gerbera.jpg"),
      new Product("Carnation","Wedding flower", 10,5000,2300,"./assets/images/gerbera.jpg")
    ];
  }

  getAllProducts():Product[]{
    return this.products;
  }

  getProduct(id:number){
    return this.products[id];
  }
}
