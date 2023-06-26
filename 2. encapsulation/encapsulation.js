var Cars = /** @class */ (function () {
    function Cars() {
    }
    Cars.prototype.setType = function (type) {
        this.type = type;
    };
    Cars.prototype.getType = function () {
        return this.type;
    };
    Cars.prototype.setSpeed = function (speed) {
        if (speed <= 0) {
            console.log("Speed must be greater than 0");
            return;
        }
        this.speed = speed;
    };
    Cars.prototype.getSpeed = function () {
        return this.speed;
    };
    Cars.prototype.getCarInfo = function () {
        console.log("Type: ".concat(this.type, ", Speed: ").concat(this.speed));
    };
    return Cars;
}());
var car = new Cars();
car.setSpeed(-32131231);
car.setType("Sedan");
car.getCarInfo();
