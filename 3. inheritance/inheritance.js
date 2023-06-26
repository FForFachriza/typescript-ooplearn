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
    Object.defineProperty(Animals.prototype, "$coordX", {
        get: function () {
            return this.coordX;
        },
        set: function (value) {
            this.coordX = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Animals.prototype, "$coordY", {
        get: function () {
            return this.coordY;
        },
        set: function (value) {
            this.coordY = value;
        },
        enumerable: false,
        configurable: true
    });
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
        /* `super.move();` is calling the `move()` method of the parent class (`Animals`) from within the
        `move()` method of the child class (`Cat`). This allows the child class to inherit and extend
        the behavior of the parent class. In this case, the `move()` method of `Cat` is adding a message
        to the console before calling the `move()` method of `Animals`, which logs the coordinates of
        the animal's movement. */
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
    Object.defineProperty(Floppa.prototype, "$owner", {
        set: function (value) {
            this.owner = value;
        },
        enumerable: false,
        configurable: true
    });
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
    Object.defineProperty(Sogga.prototype, "$owner", {
        set: function (value) {
            this.owner = value;
        },
        enumerable: false,
        configurable: true
    });
    Sogga.prototype.returnToOwner = function () {
        console.log("Kembali ke ".concat(this.owner));
    };
    return Sogga;
}(Cat));
/* The code is creating instances of the Floppa and Sogga classes, setting their coordinates and
owners, making them make noise, move, and return to their owners. It demonstrates the inheritance
and polymorphism features of TypeScript classes. */
var floppa = new Floppa();
floppa.$coordX = 123;
floppa.$coordY = 90390;
floppa.$owner = "Rusky";
floppa.makeNoise();
floppa.move();
floppa.returnToOwner();
var sogga = new Sogga();
sogga.$coordX = 123;
sogga.$coordY = 90390;
sogga.$owner = "Dimas";
sogga.makeNoise();
sogga.move();
sogga.returnToOwner();
