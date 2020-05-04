export class Merchandise {
    name
    sellIn
    quality
    depreciationRate

    constructor(name, sellIn, quality, depreciationRate) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
        this.depreciationRate = depreciationRate;
    }

    updateQualityAndSellInByOneDay() {
        this.sellIn--;
        if (this.sellIn >= 0) {
            this.quality -= this.depreciationRate;
        } else {
            this.quality -= 2 * this.depreciationRate;
        }
    }

    toString() {
        return `Name: ${this.name}, SellIn: ${this.sellIn}, Quality: ${this.quality}`
    }
}