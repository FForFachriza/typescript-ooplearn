/* The class "Cars" has private properties for type and speed, as well as methods for setting and
getting those properties and displaying car information. */
var Cars = /** @class */ (function () {
    function Cars() {
    }
    Object.defineProperty(Cars.prototype, "$type", {
        get: function () {
            return this.type;
        },
        set: function (value) {
            this.type = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cars.prototype, "$speed", {
        get: function () {
            return this.speed;
        },
        set: function (value) {
            if (value < 0) {
                console.log("Speed must be greater than 0");
                return;
            }
            this.speed = value;
        },
        enumerable: false,
        configurable: true
    });
    Cars.prototype.getCarInfo = function () {
        console.log("Type: ".concat(this.type, ", Speed: ").concat(this.speed));
    };
    return Cars;
}());
/* The code is creating a new instance of the `Cars` class and assigning it to the constant variable
`car`. It then sets the speed of the car to a negative value, which triggers a console log message
indicating that the speed must be greater than 0. It sets the type of the car to "Sedan" and then
calls the `getCarInfo()` method, which logs the type and speed of the car to the console. */
var car = new Cars();
car.$speed = -10;
car.$type = "Sedan";
car.getCarInfo();
