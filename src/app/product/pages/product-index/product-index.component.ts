import { Component, OnInit } from '@angular/core';

//Import service
import { ProductService } from '../../product.service';

//Impport models
import { Product } from '../../product.model';

@Component({
  selector: 'app-product-index',
  templateUrl: './product-index.component.html',
  styleUrls: ['./product-index.component.scss'],
  providers: [
    ProductService,
  ]
})
export class ProductIndexComponent implements OnInit {

  products: Product[] = [];

  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(
      data => {
        this.products = data;
      },
      error => {
        console.log('Data loading error');
      });
  }
}
