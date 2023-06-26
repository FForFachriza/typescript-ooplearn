"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// Polymorphism: The ability to call the same method on different objects and each object responding in their own way.
var Hero = /** @class */ (function () {
    function Hero() {
    }
    Hero.prototype.move = function () {
        console.log("Im Moving");
    };
    Hero.prototype.eat = function () {
        console.log("Im Eating");
    };
    return Hero;
}());
var Mage = /** @class */ (function (_super) {
    __extends(Mage, _super);
    function Mage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Mage;
}(Hero));
var Knight = /** @class */ (function (_super) {
    __extends(Knight, _super);
    function Knight() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Knight.prototype.attack = function () {
        console.log("Im Swinging With A Sword");
        this.shield -= 1;
    };
    return Knight;
}(Hero));
var Archer = /** @class */ (function (_super) {
    __extends(Archer, _super);
    function Archer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Archer.prototype.attack = function () {
        console.log("Firing An Arrow");
        this.arrow -= 1;
    };
    return Archer;
}(Hero));
var Wizard = /** @class */ (function (_super) {
    __extends(Wizard, _super);
    function Wizard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Wizard.prototype.attack = function () {
        this.mana -= 1;
        console.log("Wizard Attack");
    };
    return Wizard;
}(Mage));
// const archer: Hero = new Archer();
// const knight: Hero = new Knight();
// const mage: Hero = new Mage();
// const heros: Hero[] = [archer, knight, mage];
// for (const hero of heros) {
//     hero.attack()
// }
var wizard = new Wizard();
wizard.attack();
