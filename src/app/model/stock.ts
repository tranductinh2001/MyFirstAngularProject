export class Stock {
    favorite: boolean = false;

    constructor(
        public name: string,

        public code: string,

        public price: number,

        public previousPrice: number) { }

    isPositiveChange(): boolean {

        return this.price >= this.previousPrice;

    }

    Calculate_stock_price_ratio(priceNew: number, priceOld: number): number {
        return ((priceNew - priceOld)/priceOld) * 100;
    }
}