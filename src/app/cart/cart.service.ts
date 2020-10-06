import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//Import model
import { Product } from '../product/product.model';
import { CartItem } from './cart.model';

// load environment variables
import { environment } from '../../environments/environment';


@Injectable()
export class CartServiceService {

  private apiEndPoint = '';

  constructor(private http: HttpClient) {
    this.apiEndPoint = environment.apiEndpoint + 'cart';
  }

  getCartProducts(): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(this.apiEndPoint).pipe(
      map((result: any[]) => {
        let cartItems: CartItem[] = [];

        for (let item of result) {
          let productExists = false

          for (let i in cartItems) {
            if (cartItems[i].productId === item.product.id) {
              cartItems[i].quantity++
              productExists = true
              break;
            }
          }

          if (!productExists) {
            cartItems.push(new CartItem(item.id, item.product));
          }
        }

        return cartItems;
      })
    );
  }

  addToCart(product: Product): Observable<any> {
    return this.http.post(this.apiEndPoint, { product });
  }
}
