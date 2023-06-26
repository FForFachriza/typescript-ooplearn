var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.greet = function () {
        console.log("Hello");
    };
    return Person;
}());
var dimas = new Person();
dimas.name = "Dimas";
dimas.age = 20;
dimas.isMarried = false;
dimas.greet();
