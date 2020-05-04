import {Merchandise} from "./merchandise";

export class AgedMerchandise extends Merchandise {
    constructor(name, quality) {
        super(name, Infinity, quality, 0);
    }

    toString() {
        return `Name: ${this.name}, SellIn: ${this.sellIn}, Quality: ${this.quality}`
    }
}