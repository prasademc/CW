import { Component, OnInit } from '@angular/core';

// Import Model
import { Product } from '../../../product/product.model';
import { CartItem } from '../../cart.model';

// import services
import { MessangerService } from '../../../shared/services/messanger.service';
import { ProductService } from '../../../product/product.service';

@Component({
  selector: 'app-cart-menu',
  templateUrl: './cart-menu.component.html',
  styleUrls: ['./cart-menu.component.scss'],
  providers: [
    ProductService,
  ]
})
export class CartMenuComponent implements OnInit {

  public cartItems: CartItem[] = [];

  public totalValue: number = 0;

  constructor(
    private messangerService: MessangerService,
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
    this.messangerService.getMsg().subscribe(
      productId => {
        if (productId > 0) {
          this.productService.getAllProducts().subscribe(
            products => {
              this.cartItems.push(products[products.findIndex(product => product.id === productId)]);
              this.getTotalPrice(this.cartItems);
            },
            error => {
              console.log('Data loading error');
            });
        }
      },
      error => {
        console.log('Data loading error');
      });
  }

  getTotalPrice(cartItems: CartItem[]): void {
    console.log(cartItems);
    this.totalValue = cartItems.map(cartItem => cartItem.price * cartItem.quantity).reduce(function (a, b) { return a + b; });
  }
}
