import { Component, Input, OnInit } from '@angular/core';

//import services
import { MessangerService } from '../../../shared/services/messanger.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

  @Input() id: number = 0;
  @Input() title: string;
  @Input() brand: string;
  @Input() price: number;
  @Input() thumbnailUrl: string;

  constructor(private messangerService: MessangerService,) { }

  ngOnInit(): void {
  }

  addToCart(id:number) {
    this.messangerService.sendMsg(id);
  }
}
