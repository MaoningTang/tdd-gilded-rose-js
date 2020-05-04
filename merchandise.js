export class Merchandise {
    name
    sellIn
    quality

    constructor(name, sellIn, quality, depreciationRate) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }

    toString() {
        return `Name: ${this.name}, SellIn: ${this.sellIn}, Quality: ${this.quality}`
    }

}