import { Product } from '../product/product.model';

export class CartItem {
  id: number;
  productId: number;
  productName: string;
  quantity: number;
  price: number;

  constructor(id: number, product: Product, quantity = 1) {
    this.id = id;
    this.productId = product.id;
    this.productName = product.title;
    this.price = product.price;
    this.quantity = quantity;
  }
}
