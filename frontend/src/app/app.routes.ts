import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => 
      import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'products',
    loadComponent: () => 
      import('./pages/products/products.component').then(m => m.ProductsComponent)
  },
  {
    path: 'products/:id',
    loadComponent: () => 
      import('./pages/product-detail/product-detail.component').then(m => m.ProductDetailComponent)
  },
  {
    path: 'cart',
    loadComponent: () => 
      import('./pages/cart/cart.component').then(m => m.CartComponent)
  },
  {
    path: 'orders',
    loadComponent: () => 
      import('./pages/orders/orders.component').then(m => m.OrdersComponent)
  },
  {
    path: 'profile',
    loadComponent: () => 
      import('./pages/profile/profile.component').then(m => m.ProfileComponent)
  },
  {
    path: 'auth',
    loadChildren: () => 
      import('./pages/auth/auth.routes').then(m => m.AUTH_ROUTES)
  }
];