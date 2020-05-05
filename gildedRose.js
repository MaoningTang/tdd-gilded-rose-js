export class GildedRose {

    constructor(merchandises) {
        this._merchandises = merchandises;
    }

    get merchandises() {
        return this._merchandises;
    }

    updateQuality() {
        for (let i = 0; i < this._merchandises.length; i++) {
            this._merchandises[i].updateQualityAndSellInByOneDay();
        }
    }
}