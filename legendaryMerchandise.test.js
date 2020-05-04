import {LegendaryMerchandise} from "./legendaryMerchandise";

describe("LegendaryMerchandiseTest", () => {
    test("it should return legendary merchandise string", () => {
        const legendaryMerchandise = new LegendaryMerchandise('Sulfuras', 2);
        const legendaryMerchandiseString = legendaryMerchandise.toString();
        expect(legendaryMerchandiseString).toEqual("Name: Sulfuras, SellIn: NA, Quality: 2");
    });

    test("it should not update its quality and sellIn", () => {
        const legendaryMerchandise = new LegendaryMerchandise('Sulfuras', 2);
        expect(legendaryMerchandise.sellIn).toEqual(Infinity);
        expect(legendaryMerchandise.quality).toEqual(2);
        legendaryMerchandise.updateQualityAndSellInByOneDay();
        expect(legendaryMerchandise.sellIn).toEqual(Infinity);
        expect(legendaryMerchandise.quality).toEqual(2);
    });
});