import {Merchandise} from './merchandise'

describe("MerchandiseTest", () => {
    test("it should return merchandise string", () => {
        const merchandise = new Merchandise('ordinary', 1, 3, 1);
        let merchandiseString = merchandise.toString();
        expect(merchandiseString).toEqual("Name: ordinary, SellIn: 1, Quality: 3");
    });
});