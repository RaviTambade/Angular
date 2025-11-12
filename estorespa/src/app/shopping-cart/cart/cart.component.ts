import { Component } from '@angular/core';
import { Item as CartItem } from '../models/Item';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
 cartItems: CartItem[] = [];
  totalPrice = 0;

  constructor() {}

  loadCart() {}

  removeItem(id: number) { }

  clearCart() { }
}