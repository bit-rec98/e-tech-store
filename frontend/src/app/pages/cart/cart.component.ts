import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgFor, NgIf, CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    NgFor,
    NgIf,
    CurrencyPipe,
    RouterLink
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css' 
})
export class CartComponent {
  cartItems = [
    {
      name: 'Premium Laptop Set',
      quantity: 2,
      price: 8499.99
    },
    {
      name: 'Premium Laptop Set',
      quantity: 2,
      price: 8499.99
    },
    {
      name: 'Premium Laptop Set',
      quantity: 2,
      price: 8499.99
    }
  ];

  shipping = 99.99;

  get subtotal() {
    return this.cartItems.reduce((sum, item) => sum + item.price, 0);
  }

  get total() {
    return this.subtotal + this.shipping;
  }

  removeItem(item: any) {
    this.cartItems = this.cartItems.filter(i => i !== item);
  }
}