import {LegendaryMerchandise} from "./legendaryMerchandise";

describe("LegendaryMerchandiseTest", () => {
    test("it should return legendary merchandise string", () => {
        const legendaryMerchandise = new LegendaryMerchandise('Sulfuras', 2);
        const legendaryMerchandiseString = legendaryMerchandise.toString();
        expect(legendaryMerchandiseString).toEqual("Name: Sulfuras, SellIn: NA, Quality: 2");
    });
});