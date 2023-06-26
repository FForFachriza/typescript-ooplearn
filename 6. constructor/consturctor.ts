export {};

/* The class "Character" keeps track of the hunger and health of characters and counts the number of
instances created. */
class Character {
  static characterCount: number = 0;
  private hunger: number;
  private health: number;

  constructor(hunger: number, health: number) {
    Character.characterCount += 1;
    console.log(`Chara ke ${Character.characterCount}`);
    this.hunger = hunger;
    this.health = health;
  }

  setHunger(hunger: number) {
    this.hunger = hunger;
  }
  setHealth(health: number) {
    this.health = health;
  }
  getHunger(): number {
    return this.hunger;
  }
  getHealth(): number {
    return this.health;
  }
}

/* The Hero class extends the Character class and adds a heroId property with corresponding getter and
setter methods. */
class Hero extends Character {
  private heroId: number;

  /**
   * This is a constructor function that initializes the hero's id, hunger, and health properties.
   * @param {number} id - The id parameter is a number that represents the unique identifier of a hero.
   * @param {number} hunger - The hunger parameter is a number that represents the level of hunger of
   * the hero. It could be a value between 0 and 100, where 0 means the hero is not hungry at all and
   * 100 means the hero is extremely hungry.
   * @param {number} health - The health parameter is a number that represents the current health level
   * of the hero.
   */
  constructor(id: number, hunger: number, health: number) {
    super(hunger, health);
    this.heroId = id;
  }

  setHeroId(id: number) {
    this.heroId = id;
  }
  getHeroId(): number {
    return this.heroId;
  }
}

const jeff = new Hero(Date.now(), 312031031023, 31231313);
const jeff2 = new Hero(Date.now(), 312031031023, 31231313);
const jeff3 = new Hero(Date.now(), 312031031023, 31231313);
const jeff4 = new Hero(Date.now(), 312031031023, 31231313);
const jeff35 = new Hero(Date.now(), 312031031023, 31231313);
const jeff5 = new Hero(Date.now(), 312031031023, 31231313);
// const Kai = new Hero();
// Kai.setHealth(190)
// Kai.setHeroId(3123131)
// Kai.setHunger(312313123)
// Kai.getData()
