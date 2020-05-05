import {AgedMerchandise} from "./agedMerchandise";

describe("AgedMerchandiseTest", () => {
    test("it should return aged merchandise string", () => {
        const agedMerchandise = new AgedMerchandise('Aged Brie', 1,1);
        const agedMerchandiseString = agedMerchandise.toString();
        expect(agedMerchandiseString).toEqual("Name: Aged Brie, SellIn: Infinity, Quality: 1");
    });

    test("it should update quality by one day", () => {
        const agedMerchandise = new AgedMerchandise('Aged Brie', 1,1);
        expect(agedMerchandise.name).toEqual('Aged Brie');
        expect(agedMerchandise.sellIn).toEqual(Infinity);
        expect(agedMerchandise.quality).toEqual(1);
        agedMerchandise.updateQualityAndSellInByOneDay();
        expect(agedMerchandise.sellIn).toEqual(Infinity);
        expect(agedMerchandise.quality).toEqual(2);
    });

    test("it should update its quality to value not grater than 50", () => {
        const agedMerchandise = new AgedMerchandise('Aged Brie', 49,10);
        expect(agedMerchandise.name).toEqual('Aged Brie');
        expect(agedMerchandise.sellIn).toEqual(Infinity);
        expect(agedMerchandise.quality).toEqual(49);
        agedMerchandise.updateQualityAndSellInByOneDay();
        expect(agedMerchandise.sellIn).toEqual(Infinity);
        expect(agedMerchandise.quality).toEqual(50);
    });
});