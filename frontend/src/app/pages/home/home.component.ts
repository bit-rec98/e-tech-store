import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule, RouterLink, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  categories = [
    {
      id: 'electronics',
      name: 'Electronics',
      icon: 'devices',
      description: 'Bulk electronics including smartphones, laptops, and accessories'
    },
    {
      id: 'clothing',
      name: 'Clothing',
      icon: 'checkroom',
      description: 'Wholesale clothing for all seasons and styles'
    },
    {
      id: 'furniture',
      name: 'Furniture',
      icon: 'chair',
      description: 'Quality furniture sets for offices and homes'
    },
    {
      id: 'food',
      name: 'Food & Beverage',
      icon: 'restaurant',
      description: 'Wholesale food and beverage supplies'
    }
  ];
}