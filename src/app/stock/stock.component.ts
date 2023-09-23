import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})

export class StockComponent implements OnInit {

  public stock!: Stock;
  public stocks: Array<Stock> = new Array;

  constructor() { }

  ngOnInit() {
    this.stock = new Stock('Test Stock Company', 'TSC', 85, 80);
    this.stocks = [
      new Stock('Test Stock Company', 'TSC', 85, 80),
      new Stock('Test1 Stock Company', 'TSC', 85, 80),
      new Stock('Test2 Stock Company', 'TSC', 85, 80),
      new Stock('Test3 Stock Company', 'TSC', 85, 80),
    ];
  }

  toggleFavorite(event: Event, index: number) {
    console.log('We are toggling the favorite state for this stock'+ event + index);
    this.stock.favorite = this.stock.favorite;
    this.stocks[index].favorite = !this.stocks[index].favorite;
  }

}


