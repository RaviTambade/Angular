import { Injectable } from '@angular/core';
import {Product} from './product';

@Injectable()
export class ProducthubService {
   products: Product[];
  constructor() {
    this.products=[
      new Product("Gerbera", "Wedding flower",10,5000,2300,"./assets/images/gerbera.jpg"),
      new Product("Rose", "Valentine flower",20,5000,2300,"./assets/images/gerbera.jpg"),
      new Product("Jasmine", "Smelling flower",100,5000,2300,"./assets/images/gerbera.jpg"),
      new Product("Tulip", "Festival flower",28,5000,2300,"./assets/images/gerbera.jpg"),
      new Product("Lotus", "Wedding flower",19,5000,2300,"./assets/images/gerbera.jpg"),
      new Product("Marigold", "Wedding flower",130,5000,2300,"./assets/images/gerbera.jpg"),
      new Product("Carnation", "Wedding flower",120,5000,2300,"./assets/images/gerbera.jpg")
    ];
   }

   getAllProducts():Product[]{
     return this.products;
   }
   getProduct(id:number){
     return this.products[id];
   }

   insert(newProduct:Product){
       this.products.push(newProduct);
   }
}
