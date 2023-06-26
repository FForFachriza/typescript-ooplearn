/* The class "Person" defines properties and a method for a person object. */
class Person {
  name: string;
  age: number;
  isMarried: boolean = false;

  greet() {
    console.log("Hello");
  }
}

/* The code is creating a new instance of the `Person` class and assigning it to the constant variable
`dimas`. Then, it sets the `name`, `age`, and `isMarried` properties of the `dimas` object. Finally,
it calls the `greet()` method of the `dimas` object, which logs "Hello" to the console. */
const dimas = new Person();

dimas.name = "Dimas";
dimas.age = 20;
dimas.isMarried = false;
dimas.greet();
