import {Merchandise} from "./merchandise";
import {LegendaryMerchandise} from "./legendaryMerchandise";
import {AgedMerchandise} from "./agedMerchandise";
import {Pass} from "./pass";
import {GildedRose} from "./gildedRose";

const merchandises = [
    new Merchandise('Ordinary1', 5, 20, 1),
    new LegendaryMerchandise('Sulfuras', 100),
    new AgedMerchandise('Aged Brie', 13, 1),
    new Pass('Backstage pass', 20,10,1)
];

const app = new GildedRose(merchandises)

const stdin = process.openStdin();

const message = '==========================\n' +
                'Press \'Enter\' to continue.\n' +
                '==========================\n';

console.log(app.toString());
console.log(message);

stdin.addListener("data", function(d) {
    app.updateQuality();
    console.log(app.toString());
    console.log(message);
});
