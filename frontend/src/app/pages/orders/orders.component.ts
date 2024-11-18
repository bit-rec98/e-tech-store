import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgFor, NgIf, CurrencyPipe, DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    NgFor,
    NgIf,
    CurrencyPipe,
    DatePipe,
    RouterLink
  ],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent {
  orders = [
    {
      id: 'ORD001',
      date: new Date(),
      status: 'shipped',
      itemCount: 2,
      total: 17099.98
    },
    {
      id: 'ORD002',
      date: new Date(Date.now() - 86400000),
      status: 'delivered',
      itemCount: 1,
      total: 8499.99
    }
  ];

  trackOrder(order: any) {
    // Implement tracking logic
    console.log('Tracking order:', order.id);
  }
}