 import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { CounterComponent } from '../counter/counter.component';
 
@Component({
  selector: 'app-details',
  standalone:true,
  imports:[CounterComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  currentProductId:any;
  @Input () product: Product|undefined;

  constructor(private router:Router,private route: ActivatedRoute, 
              private productService: ProductService) {  }
  
  ngOnInit() { 
    this.currentProductId=this.route.snapshot.paramMap.get("id");
    this.product=this.productService.getProductById(this.currentProductId);
  };
 
  onUpdate(data:any){
     if(this.product != undefined)
        this.product.likes=data.count;
      this.productService.updateProduct(this.product);
   }
   
  addToCart():void {
    let id=this.currentProductId;
    console.log("Adding to cart product with id:", id);
    this.router.navigate(['./addtocart/', id]);
  }

  goToUpdate(): void {
   let  id=this.currentProductId;
   console.log("Updating product with id:", id);
   this.router.navigate(['./update/', id]);
  }

  goToDelete(id:number): void {
    console.log("Deleting product with id:", id);
    this.router.navigate(['./delete/', id]);
  }
   // ngIf
  isLoggedIn = true;
  userName = 'Ravi';

  // ngFor
  products = [
    { name: 'Rose', price: 12 },
    { name: 'Lotus', price: 25 },
    { name: 'Gerbera', price: 8 },
  ];

  // ngSwitch
  status = 'outofstock';

  // ngModel
  promoCode = '';

  // Dynamic styling
  //product = { name: 'Rose', price:9};

}
