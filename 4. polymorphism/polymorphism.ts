/* The class "Hero" has properties for hunger and health, and methods for attacking, moving, and
eating. */
class Hero {
  hunger: number;
  health: number;

  attack() {
    console.log("Im Attacking");
  }
  move() {
    console.log("Im Moving");
  }
  eat() {
    console.log("Im Eating");
  }
}

/* The code defines three classes, Mage, Knight, and Archer, each with their own unique attack method
and associated properties. */
class Mage extends Hero {
  mana: number;

  override attack(): void {
    console.log("Casting A Spell");
    this.mana -= 1;
  }
}

class Knight extends Hero {
  shield: number;

  override attack(): void {
    console.log("Im Swinging With A Sword");
    this.shield -= 1;
  }
}

class Archer extends Hero {
  arrow: number;

  override attack(): void {
    console.log("Firing An Arrow");
    this.arrow -= 1;
  }
}

/* The Wizard class extends the Mage class and adds a spell property and an attack method that casts a
spell and decreases the spell count. */
class Wizard extends Mage {
  spell: number;

  override attack(): void {
    console.log("Im Casting A Spell");
    this.spell -= 1;
  }
}

/* The class "Clan" has a private array of "Hero" objects and methods to set and execute an attack for
each hero in the array. */
class Clan {
  private heros: Hero[];

  setHeroes(heros: Hero[]) {
    this.heros = heros;
  }

  attack() {
    for (const hero of this.heros) {
      hero.attack();
    }
  }
}

/* The code is creating instances of the `Mage`, `Knight`, `Archer`, and `Wizard` classes, and adding
them to an array of `Hero` objects called `heros`. It then creates a `Clan` object and sets the
`heros` array as its private `heros` property. Finally, it calls the `attack()` method on the `clan`
object, which in turn calls the `attack()` method on each `Hero` object in the `heros` array. It
also calls the `attack()` method on the `wizard` object, which is an instance of the `Wizard` class. */
const mage: Hero = new Mage();
const knight: Hero = new Knight();
const archer: Hero = new Archer();
const wizard: Mage = new Wizard();

const heros: Hero[] = [mage, knight, archer];
const clan = new Clan();

clan.setHeroes(heros);
clan.attack();
wizard.attack();
