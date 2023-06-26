export {};

/* The `abstract class Hero` is defining a blueprint for a hero character in a game. It has properties
for `hunger` and `health`, and methods for `attack`, `move`, and `eat`. The `attack` method is
marked as `abstract`, which means that any class that extends `Hero` must implement its own version
of the `attack` method. The `move` and `eat` methods have default implementations, but can be
overridden by any class that extends `Hero`. */
abstract class Hero {
  hunger: number;
  health: number;

  abstract attack(): void;
  move() {
    console.log("Im Moving");
  }
  eat() {
    console.log("Im Eating");
  }
}

/* The `abstract class Mage` is extending the `Hero` class and adding a new property `mana` to it. This
means that any class that extends `Mage` will have access to the `hunger`, `health`, and `mana`
properties, as well as the `attack`, `move`, and `eat` methods defined in the `Hero` class. However,
since `Mage` is also an abstract class, it cannot be instantiated directly and must be extended by
another class that implements its abstract methods. */
abstract class Mage extends Hero {
  mana: number;
}

/* The code defines two classes, Knight and Archer, which extend a Hero class and have their own unique
attack methods and properties. */
class Knight extends Hero {
  shield: number;

  attack(): void {
    console.log("Im Swinging With A Sword");
    this.shield -= 1;
  }
}

class Archer extends Hero {
  arrow: number;

  attack(): void {
    console.log("Firing An Arrow");
    this.arrow -= 1;
  }
}

/* The Wizard class extends the Mage class and has an attack method that decreases mana and logs a
message. */
class Wizard extends Mage {
  attack() {
    this.mana -= 1;
    console.log("Wizard Attack")
  }
}

// const archer: Hero = new Archer();
// const knight: Hero = new Knight();
// const mage: Hero = new Mage();

// const heros: Hero[] = [archer, knight, mage];

// for (const hero of heros) {
//     hero.attack()
// }

const wizard = new Wizard();
wizard.attack();