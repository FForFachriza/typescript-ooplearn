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
/* The class "Hero" has properties for hunger and health, and methods for attacking, moving, and
eating. */
var Hero = /** @class */ (function () {
    function Hero() {
    }
    Hero.prototype.attack = function () {
        console.log("Im Attacking");
    };
    Hero.prototype.move = function () {
        console.log("Im Moving");
    };
    Hero.prototype.eat = function () {
        console.log("Im Eating");
    };
    return Hero;
}());
/* The code defines three classes, Mage, Knight, and Archer, each with their own unique attack method
and associated properties. */
var Mage = /** @class */ (function (_super) {
    __extends(Mage, _super);
    function Mage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Mage.prototype.attack = function () {
        console.log("Casting A Spell");
        this.mana -= 1;
    };
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
/* The Wizard class extends the Mage class and adds a spell property and an attack method that casts a
spell and decreases the spell count. */
var Wizard = /** @class */ (function (_super) {
    __extends(Wizard, _super);
    function Wizard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Wizard.prototype.attack = function () {
        _super.prototype.attack.call(this);
        console.log("Im Casting A Spell");
        this.spell -= 1;
    };
    return Wizard;
}(Mage));
/* The class "Clan" has a private array of "Hero" objects and methods to set and execute an attack for
each hero in the array. */
var Clan = /** @class */ (function () {
    function Clan() {
    }
    Clan.prototype.setHeroes = function (heros) {
        this.heros = heros;
    };
    Clan.prototype.attack = function () {
        for (var _i = 0, _a = this.heros; _i < _a.length; _i++) {
            var hero = _a[_i];
            hero.attack();
        }
    };
    return Clan;
}());
/* The code is creating instances of the `Mage`, `Knight`, `Archer`, and `Wizard` classes, and adding
them to an array of `Hero` objects called `heros`. It then creates a `Clan` object and sets the
`heros` array as its private `heros` property. Finally, it calls the `attack()` method on the `clan`
object, which in turn calls the `attack()` method on each `Hero` object in the `heros` array. It
also calls the `attack()` method on the `wizard` object, which is an instance of the `Wizard` class. */
var mage = new Mage();
var knight = new Knight();
var archer = new Archer();
var wizard = new Wizard();
var heros = [mage, knight, archer];
var clan = new Clan();
clan.setHeroes(heros);
clan.attack();
wizard.attack();
