import {Merchandise} from "./merchandise";

export class LegendaryMerchandise extends Merchandise {

    constructor(name, quality) {
        super(name, Infinity, quality, 0);
    }

    toString() {
        return `Name: ${this.name}, SellIn: NA, Quality: ${this.quality}`
    }

    updateQualityAndSellInByOneDay() {
        return;
    }
}