"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* The `abstract class Character` is defining a blueprint for a character that has properties `hunger`
and `health`, and a method `eat()` that must be implemented by any class that extends it. The
`abstract` keyword indicates that this class cannot be instantiated directly, but must be extended
by another class that provides an implementation for the `eat()` method. */
var Character = /** @class */ (function () {
    function Character() {
    }
    return Character;
}());
/* The class Spy implements both the Hero and Enemy interfaces and has properties for hunger and
health, as well as a method to decrease hunger. */
var Spy = /** @class */ (function () {
    function Spy() {
    }
    Spy.prototype.eat = function () {
        this.hunger -= 1;
    };
    return Spy;
}());
var hero = new Spy();
var enemy = new Spy();
