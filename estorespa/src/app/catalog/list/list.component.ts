import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterModule, RouterOutlet} from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService } from '../product.service';
import { CounterComponent } from '../counter/counter.component';

@Component({
  selector: 'app-list',
  standalone:true,
  imports:[CommonModule, RouterModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
products:any[]=[]
   

  constructor(private svc:ProductService,
              private router: Router,
              private route: ActivatedRoute) {  }

  ngOnInit() {
    this.products = this.svc.getAllProducts();
  }


  goToProduct(id:number): void {
    console.log(id);
    this.router.navigate(['./details',id]);
  }
}
