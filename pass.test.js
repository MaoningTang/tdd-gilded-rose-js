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

    test("it should reduce its sellIn by one and increase its quality by two when sellIn smaller then 10 and grater then 5", () => {
        const pass = new Pass('Backstage pass', 10,1,1);
        pass.updateQualityAndSellInByOneDay();
        expect(pass.sellIn).toEqual(9);
        expect(pass.quality).toEqual(3);
    });

    test("it should reduce its sellIn by one and increase its quality by three when sellIn smaller then 5 and grater then 0", () => {
        const pass = new Pass('Backstage pass', 5,1,1);
        pass.updateQualityAndSellInByOneDay();
        expect(pass.sellIn).toEqual(4);
        expect(pass.quality).toEqual(4);
    });

    test("it should set quality to 0 when pass expired", () => {
        const pass = new Pass('Backstage pass', 0,1,1);
        pass.updateQualityAndSellInByOneDay();
        expect(pass.sellIn).toEqual(-1);
        expect(pass.quality).toEqual(0);
    });
});