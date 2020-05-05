import {Merchandise} from './merchandise'

describe("MerchandiseTest", () => {
    test("it should return merchandise string", () => {
        const merchandise = new Merchandise('ordinary', 1, 3, 1);
        let merchandiseString = merchandise.toString();
        expect(merchandiseString).toEqual("Name: ordinary, SellIn: 1, Quality: 3");
    });

    test("it should update quality and sellIn by one day", () => {
        const merchandise = new Merchandise('ordinary', 1, 3, 1);
        expect(merchandise.name).toEqual('ordinary');
        expect(merchandise.sellIn).toEqual(1);
        expect(merchandise.quality).toEqual(3);
        merchandise.updateQualityAndSellInByOneDay();
        expect(merchandise.sellIn).toEqual(0);
        expect(merchandise.quality).toEqual(2);
    });

    test("it should double the depreciationRate when merchandise expired", () => {
        const merchandise = new Merchandise('ordinary', 0, 3, 1);
        expect(merchandise.name).toEqual('ordinary');
        expect(merchandise.sellIn).toEqual(0);
        expect(merchandise.quality).toEqual(3);
        merchandise.updateQualityAndSellInByOneDay();
        expect(merchandise.sellIn).toEqual(-1);
        expect(merchandise.quality).toEqual(1);
    });

    test("it should update its quality to value not smaller than 0", () => {
        const merchandise = new Merchandise('ordinary', 0, 1, 2);
        expect(merchandise.name).toEqual('ordinary');
        expect(merchandise.sellIn).toEqual(0);
        expect(merchandise.quality).toEqual(1);
        merchandise.updateQualityAndSellInByOneDay();
        expect(merchandise.sellIn).toEqual(-1);
        expect(merchandise.quality).toEqual(0);
    });
});