import {AgedMerchandise} from "./agedMerchandise";
import {Pass} from "./Pass";

describe("PassTest", () => {
    test("it should return legendary merchandise string", () => {
        const pass = new Pass('Backstage pass', 11,1,1);
        const passString = pass.toString();
        expect(passString).toEqual("Name: Backstage pass, SellIn: 11, Quality: 1");
    });

    test("it should reduce its sellIn and increase its quality by one when sellIn grater then 10", () => {
        const pass = new Pass('Backstage pass', 11,1,1);
        pass.updateQualityAndSellInByOneDay();
        expect(pass.sellIn).toEqual(10);
        expect(pass.quality).toEqual(2);
    });
});