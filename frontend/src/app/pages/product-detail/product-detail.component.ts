import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { NgFor, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    RouterLink,
    NgFor,
    CurrencyPipe
  ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css' 
})
export class ProductDetailComponent {
  product = {
    id: 1,
    name: 'Premium Laptop',
    description: 'High-performance business laptops with latest specifications. Perfect for enterprise deployment.',
    basePrice: 899.99,
    image: 'assets/laptop.jpg',
    sets: [
      {
        name: 'Starter Pack',
        quantity: 10,
        price: 8499.99,
        savings: 5
      },
      {
        name: 'Business Pack',
        quantity: 25,
        price: 20999.99,
        savings: 7
      },
      {
        name: 'Enterprise Pack',
        quantity: 50,
        price: 40999.99,
        savings: 10
      }
    ]
  };
}