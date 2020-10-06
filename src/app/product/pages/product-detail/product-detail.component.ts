import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Import services
import { ProductService } from '../../product.service';
import { MessangerService } from '../../../shared/services/messanger.service';

// Import model
import { Product } from '../../product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  providers: [
    ProductService
  ]
})
export class ProductDetailComponent implements OnInit {

  public productId: number;
  public count: number = 0;
  public title: string;
  public image: string;
  public brand: string;
  public price: number;
  public description: string;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private messangerService: MessangerService,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      // current plant id
      this.productId = +params.id;

      this.getProducts(this.productId);
    });
  }

  /**
   * Add item from cart
   * @param count
   */
  add(count: number) {
    this.count++;
  }

  /**
   * Remove item from cart
   * @param count
   */
  remove(count: number) {
    if (count > 0) this.count--;
  }

  addToCart(productId: number) {
    this.messangerService.sendMsg(productId);
  }

  /**
   * Get all product
   * @param productId
   */
  private getProducts(productId: number) {
    this.productService.getAllProducts().subscribe(
      data => {
        ({ title: this.title, image: this.image, brand: this.brand, price: this.price, description: this.description, id: this.productId } = data[data.findIndex(product => product.id === productId)]);
      },
      error => {
        console.log('Data loading error');
      }
    );
  }
}
