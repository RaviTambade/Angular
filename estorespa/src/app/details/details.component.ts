import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

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
  product = { name: 'Rose', price:9};

}
