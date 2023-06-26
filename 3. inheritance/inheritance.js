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
/* The class Animals defines properties and methods for animals, including health, hunger, coordinates,
eating, sleeping, moving, and making noise. */
var Animals = /** @class */ (function () {
    function Animals() {
    }
    Animals.prototype.setCoordX = function (coordX) {
        this.coordX = coordX;
    };
    Animals.prototype.setCoordY = function (coordY) {
        this.coordY = coordY;
    };
    Animals.prototype.eat = function () {
        console.log("Aku Lagi Makan");
    };
    Animals.prototype.sleep = function () {
        console.log("Aku Lagi Tidur");
    };
    Animals.prototype.move = function () {
        console.log("Aku Bergerak dari Koordinat ".concat(this.coordX, " dan ").concat(this.coordY));
    };
    Animals.prototype.makeNoise = function () {
        console.log("Aku bersuara");
    };
    return Animals;
}());
/* The Cat class extends the Animals class and has methods to make noise and move. */
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.makeNoise = function () {
        console.log("Miaww");
    };
    Cat.prototype.move = function () {
        console.log("Sedang berjalan dengan paw mungilku");
        _super.prototype.move.call(this);
    };
    return Cat;
}(Animals));
/* The Floppa class extends the Cat class and has a private owner property with methods to set the
owner and return to the owner. */
var Floppa = /** @class */ (function (_super) {
    __extends(Floppa, _super);
    function Floppa() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Floppa.prototype.setOwner = function (owner) {
        this.owner = owner;
    };
    Floppa.prototype.returnToOwner = function () {
        console.log("Kembali ke ".concat(this.owner));
    };
    return Floppa;
}(Cat));
/* The Sogga class extends the Cat class and has a private owner property with methods to set the owner
and return the cat to its owner. */
var Sogga = /** @class */ (function (_super) {
    __extends(Sogga, _super);
    function Sogga() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sogga.prototype.setOwner = function (owner) {
        this.owner = owner;
    };
    Sogga.prototype.returnToOwner = function () {
        console.log("Kembali ke ".concat(this.owner));
    };
    return Sogga;
}(Cat));
/* The code is creating instances of the Floppa and Sogga classes, setting their coordinates and
owners, making them make noise, move, and return to their owners. It demonstrates the inheritance
and polymorphism features of TypeScript classes. */
var floppa = new Floppa();
floppa.setCoordX(200);
floppa.setCoordY(900);
floppa.setOwner("Dimas");
floppa.makeNoise();
floppa.move();
floppa.returnToOwner();
var sogga = new Sogga();
sogga.setCoordX(213);
sogga.setCoordY(90390);
sogga.setOwner("Rusky");
sogga.makeNoise();
sogga.move();
sogga.returnToOwner();
