import {Merchandise} from "./merchandise";

export class Pass extends Merchandise {
    #growthRate

    constructor(name, sellIn, quality, growthRate) {
        super(name, sellIn, quality, 0);
        this.#growthRate = growthRate;
    }

    updateQualityAndSellInByOneDay() {
        if(this.sellIn > 10){
            this.quality += this.#growthRate;
        }
        this.sellIn--;
    }
}