/* The class "Cars" has private properties for type and speed, as well as methods for setting and
getting those properties and displaying car information. */
class Cars {
  private type: string;
  private speed: number;

  setType(type: string) {
    this.type = type;
  }

  getType() {
    return this.type;
  }

  setSpeed(speed: number) {
    if (speed <= 0) {
      console.log("Speed must be greater than 0");
      return;
    }

    this.speed = speed;
  }

  getSpeed() {
    return this.speed;
  }

  getCarInfo() {
    console.log(`Type: ${this.type}, Speed: ${this.speed}`);
  }
}

/* The code is creating a new instance of the `Cars` class and assigning it to the constant variable
`car`. It then sets the speed of the car to a negative value, which triggers a console log message
indicating that the speed must be greater than 0. It sets the type of the car to "Sedan" and then
calls the `getCarInfo()` method, which logs the type and speed of the car to the console. */
const car = new Cars();

car.setSpeed(-32131231);
car.setType("Sedan");
car.getCarInfo();
