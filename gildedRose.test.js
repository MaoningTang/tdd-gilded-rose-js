import {GildedRose, gildedRose} from './gildedRose'
import {Merchandise} from "./merchandise";
import {AgedMerchandise} from "./agedMerchandise";
import {LegendaryMerchandise} from "./legendaryMerchandise";
import {Pass} from "./pass";

describe("GildedRoseTest", () => {

    test("it should update merchandises", () => {
        const merchandises = [
            new Merchandise('Ordinary1', 1, 1, 1),
            new LegendaryMerchandise('Sulfuras', 2),
            new AgedMerchandise('Aged Brie', 1, 1),
            new Pass('Backstage pass', 11,1,1)
        ];
        const merchandisesResult = [
            new Merchandise('Ordinary1', 0, 0, 1),
            new LegendaryMerchandise('Sulfuras', 2),
            new AgedMerchandise('Aged Brie', 2, 1),
            new Pass('Backstage pass', 10,2,1)
        ];
        const gildedRose = new GildedRose(merchandises);
        gildedRose.updateQuality();
        expect(gildedRose.merchandises).toEqual(merchandisesResult);
    });

    test("it should update day", () => {
        const merchandises = [];
        const gildedRose = new GildedRose(merchandises);
        expect(gildedRose.day).toEqual(0);
        gildedRose.updateQuality();
        expect(gildedRose.day).toEqual(1);
    });
});