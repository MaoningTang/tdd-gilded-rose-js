import {AgedMerchandise} from "./agedMerchandise";

describe("AgedMerchandiseTest", () => {
    test("it should return aged merchandise string", () => {
        const agedMerchandise = new AgedMerchandise('Aged Brie', 1,1);
        const agedMerchandiseString = agedMerchandise.toString();
        expect(agedMerchandiseString).toEqual("Name: Aged Brie, SellIn: Infinity, Quality: 1");
    });
});