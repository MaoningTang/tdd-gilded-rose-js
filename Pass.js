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
        if(this.sellIn <= 10 && this.sellIn > 5){
            this.quality += 2*this.#growthRate;
        }
        if(this.sellIn <= 5 && this.sellIn > 0){
            this.quality += 3*this.#growthRate;
        }
        if(this.sellIn == 0){
            this.quality = 0;
        }
        this.sellIn--;
    }
}