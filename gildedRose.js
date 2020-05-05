export class GildedRose {
    constructor(merchandises) {
        this._day = 0;
        this._merchandises = merchandises;
    }

    get merchandises() {
        return this._merchandises;
    }

    get day() {
        return this._day;
    }

    updateQuality() {
        for (let i = 0; i < this._merchandises.length; i++) {
            this._merchandises[i].updateQualityAndSellInByOneDay();
        }
        this._day++;
    }
}