import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
   list:any=[
      {"id": 12,  "title":"Lotus", "description": "Wedding flower","price":24 , "likes":800, "imageurl":"/assets/images/lotus.jpg"},
      {"id": 13,  "title":"Rose", "description": "Valentine flower","price":14, "likes":4000, "imageurl":"/assets/images/rose.jpg"},
      {"id": 14,  "title":"Jasmine", "description": "Smelling flower","price":3, "likes":9000, "imageurl":"/assets/images/jasmine.jpg"},
      {"id": 15,  "title":"Tulip", "description": "Beautiful flower","price":16, "likes":3000, "imageurl":"/assets/images/tulip.jpg"},
      {"id": 16,  "title":"Lily", "description": "Delicate flower","price":9,"likes":6000, "imageurl":"/assets/images/lily.jpg"},
      {"id": 17,  "title":"Marigold", "description": "Festival flower","price":4,"likes":56000, "imageurl":"/assets/images/marigold.jpg"}
  ];

  constructor() { }

  getAllProducts():any
  { return this.list; }
  
  getProductById(id:number):any
  { 
    console.log("selected product id="+ id);
    //return {id:6,title:'Lily',description:"wedding Flower",unitPrice:10, quantity:2300,likes:76,imageUrl:"./assets/images/gerbera.jpg"};
   return this.list.find((p:any)=>{ return p.id ==id});
  }
  
  updateProduct(prod:any):void
  {
    let index=this.list.findIndex((p:any)=> p.id==prod.id);
    if(index != -1)
     this.list[index]=prod;
  }
}
