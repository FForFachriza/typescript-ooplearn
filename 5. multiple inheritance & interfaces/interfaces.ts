export {}

/* The `abstract class Character` is defining a blueprint for a character that has properties `hunger`
and `health`, and a method `eat()` that must be implemented by any class that extends it. The
`abstract` keyword indicates that this class cannot be instantiated directly, but must be extended
by another class that provides an implementation for the `eat()` method. */
abstract class Character {
  hunger: number;
  health: number;

  abstract eat(): void;
}

/* The `interface Hero` is extending the `Character` abstract class and adding a new property `heroId`
of type `number`. This means that any class that implements the `Hero` interface must also implement
the properties and methods defined in the `Character` abstract class, as well as the `heroId`
property. */
interface Hero extends Character {
  heroId: number;
}

/* The `interface Enemy` is extending the `Character` abstract class and adding a new property
`enemyId` of type `number`. This means that any class that implements the `Enemy` interface must
also implement the properties and methods defined in the `Character` abstract class, as well as the
`enemyId` property. This allows for more specific types of characters to be defined and used in the
program. */
interface Enemy extends Character {
  enemyId: number;
}

/* The class Spy implements both the Hero and Enemy interfaces and has properties for hunger and
health, as well as a method to decrease hunger. */
class Spy implements Hero, Enemy {
  heroId: number;
  enemyId: number;
  hunger: number;
  health: number;

  eat(): void {
    this.hunger -= 1;
  }
}

const hero: Hero = new Spy()
const enemy: Enemy = new Spy();
