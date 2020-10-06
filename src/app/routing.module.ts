import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './shared/pages/main/main.component';
import { ProductIndexComponent } from './product/pages/product-index/product-index.component';
import { ProductDetailComponent } from './product/pages/product-detail/product-detail.component';
import { CartIndexComponent } from './cart/pages/cart-index/cart-index.component';

const routes: Routes = [
  {
    path: '', // main application route
    component: MainComponent,
    children: [
      // default
      { path: '', component: ProductIndexComponent },

      // Home
      { path: 'home', component: ProductIndexComponent },

      // Product
      { path: 'product/:id', component: ProductDetailComponent },

      // Cart
      { path: 'cart', component: CartIndexComponent },

      // undefined routes
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule { }

