import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { NgFor, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    RouterLink,
    NgFor,
    CurrencyPipe
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products = [
    {
      id: 1,
      name: 'Premium Laptop',
      description: 'High-performance business laptops with latest specifications',
      price: 899.99,
      minOrderQuantity: 10,
      image: 'assets/laptop.jpg'
    },
    {
      id: 2,
      name: 'Office Chairs',
      description: 'Ergonomic office chairs with adjustable features',
      price: 199.99,
      minOrderQuantity: 20,
      image: 'assets/chair.jpg'
    },
    {
      id: 3,
      name: 'Wireless Earbuds',
      description: 'Premium wireless earbuds with noise cancellation',
      price: 79.99,
      minOrderQuantity: 50,
      image: 'assets/earbuds.jpg'
    }
  ];
}