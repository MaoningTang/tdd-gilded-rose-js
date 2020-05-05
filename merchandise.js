export class Merchandise {

    constructor(name, sellIn, quality, depreciationRate) {
        this._name = name;
        this._sellIn = sellIn;
        this._quality = quality;
        this._depreciationRate = depreciationRate;
    }

    updateQualityAndSellInByOneDay() {
        this.sellIn -= 1;
        let newQuality;
        if (this._sellIn >= 0) {
            newQuality = this.quality - this.depreciationRate;
        } else {
            newQuality = this.quality - 2 * this.depreciationRate;
        }
        this.quality = newQuality;
    }

    get quality() {
        return this._quality;
    }

    set quality(value) {
        this._quality = value;
        if(value > 50){
            this._quality = 50;
        }
        if (value < 0){
            this._quality = 0;
        }
    }

    get sellIn() {
        return this._sellIn;
    }

    set sellIn(value) {
        this._sellIn = value;
    }

    get depreciationRate() {
        return this._depreciationRate;
    }
    get name() {
        return this._name;
    }

    toString() {
        return `Name: ${this.name}, SellIn: ${this.sellIn}, Quality: ${this.quality}`
    }
}