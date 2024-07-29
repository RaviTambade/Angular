import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  currentProductId:number;

  ngOnInit() {  }

  constructor(private router: Router, private route: ActivatedRoute) {  }


  addToCart(id:string):void {

    console.log(" adding to cart");

    this.router.navigate(['./addtocart/', id]);
  }

  goToUpdate(id:string): void {
  this.router.navigate(['./update/', id]);
  }

  goToDelete(id:string): void {
    this.router.navigate(['./delete/', id]);
  }
}