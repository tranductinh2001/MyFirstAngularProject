import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})

export class StockComponent implements OnInit {

  public stock: Stock;

  constructor() { }

  ngOnInit() {
    this.stock = new Stock('Test Stock Company', 'TSC', 85, 80);
  }

  toggleFavorite(event) {
    console.log('We are toggling the favorite state for this stock', event);
    this.stock.favorite = this.stock.favorite;
  }
}


