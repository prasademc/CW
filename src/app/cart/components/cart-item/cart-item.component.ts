import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  @Input() id: number;
  @Input() image: string;
  @Input() title: string;
  @Input() quantity: number;
  @Input() brand: string;
  @Input() price: number;

  constructor() { }

  ngOnInit(): void {}

  removeItem(id:number) {
    console.log(id)
  }
}
