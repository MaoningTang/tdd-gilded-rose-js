import {Merchandise} from "./merchandise";

export class AgedMerchandise extends Merchandise {
    growthRate

    constructor(name, quality, growthRate) {
        super(name, Infinity, quality, 0);
        this.growthRate = growthRate;
    }

    updateQualityAndSellInByOneDay() {
        this.quality += this.growthRate;
    }
}