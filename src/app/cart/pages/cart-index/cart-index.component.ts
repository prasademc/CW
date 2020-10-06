import { Component, OnInit } from '@angular/core';

//Import models
import { Product }  from '../../../product/product.model';

@Component({
  selector: 'app-cart-index',
  templateUrl: './cart-index.component.html',
  styleUrls: ['./cart-index.component.scss']
})
export class CartIndexComponent implements OnInit {

  quantity: number = 0;
  subtotal: number = 0;
  total: number = 0;

  public cartItems: Product[] = [
    {
      id: 1,
      title: "Blue Stripe Stoneware Plate",
      brand: "Kiriko",
      category: "plate",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.",
      price: 25,
      image: "/assets/images/blue.jpg",
      quantity: 2
    }, {
      id: 2,
      title: "Hand Painted Blue Flat Dish",
      brand: "Kiriko",
      category: "plate",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.",
      price: 40,
      image: "/assets/images/hand-painted.jpg",
      quantity: 3
    }
  ];

  constructor() { }

  ngOnInit(): void {}

  getQuantity(quantity: number) {
    return this.quantity = quantity
  }

  /**
   * Add item from cart
   * @param quantity
   */
  add(quantity: number) {
    this.quantity++;
  }

  /**
   * Remove item from cart
   * @param quantity
   */
  remove(quantity: number) {
    if (quantity > 0) {
      this.quantity--;
    }
  }

}
