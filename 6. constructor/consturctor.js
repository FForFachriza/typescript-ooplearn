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
var Character = /** @class */ (function () {
    function Character(hunger, health) {
        Character.characterCount += 1;
        console.log("Chara ke ".concat(Character.characterCount));
        this.hunger = hunger;
        this.health = health;
    }
    Character.prototype.setHunger = function (hunger) {
        this.hunger = hunger;
    };
    Character.prototype.setHealth = function (health) {
        this.health = health;
    };
    Character.prototype.getHunger = function () {
        return this.hunger;
    };
    Character.prototype.getHealth = function () {
        return this.health;
    };
    Character.characterCount = 0;
    return Character;
}());
var Hero = /** @class */ (function (_super) {
    __extends(Hero, _super);
    function Hero(id, hunger, health) {
        var _this = _super.call(this, hunger, health) || this;
        _this.heroId = id;
        return _this;
    }
    Hero.prototype.setHeroId = function (id) {
        this.heroId = id;
    };
    Hero.prototype.getHeroId = function () {
        return this.heroId;
    };
    return Hero;
}(Character));
var jeff = new Hero(Date.now(), 312031031023, 31231313);
var jeff2 = new Hero(Date.now(), 312031031023, 31231313);
var jeff3 = new Hero(Date.now(), 312031031023, 31231313);
var jeff4 = new Hero(Date.now(), 312031031023, 31231313);
var jeff35 = new Hero(Date.now(), 312031031023, 31231313);
var jeff5 = new Hero(Date.now(), 312031031023, 31231313);
// const Kai = new Hero();
// Kai.setHealth(190)
// Kai.setHeroId(3123131)
// Kai.setHunger(312313123)
// Kai.getData()
