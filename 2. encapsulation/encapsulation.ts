/* The class "Cars" has private properties for type and speed, as well as methods for setting and
getting those properties and displaying car information. */
class Cars {
  private type: string;
  private speed: number;

  public get $type(): string {
    return this.type;
  }

  public set $type(value: string) {
    this.type = value;
  }

  public get $speed(): number {
    return this.speed;
  }

  public set $speed(value: number) {
    if (value < 0) {
      console.log("Speed must be greater than 0");
      return;
    }
    this.speed = value;
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

car.$speed = -10;
car.$type = "Sedan";
car.getCarInfo();
