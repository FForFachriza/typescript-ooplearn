/* The class Animals defines properties and methods for animals, including health, hunger, coordinates,
eating, sleeping, moving, and making noise. */
class Animals {
  health: number;
  hunger: number;
  protected coordX: number;
  protected coordY: number;

  setCoordX(coordX: number) {
    this.coordX = coordX;
  }

  setCoordY(coordY: number) {
    this.coordY = coordY;
  }

  eat() {
    console.log("Aku Lagi Makan");
  }
  sleep() {
    console.log("Aku Lagi Tidur");
  }
  move() {
    console.log(`Aku Bergerak dari Koordinat ${this.coordX} dan ${this.coordY}`);
  }
  makeNoise() {
    console.log("Aku bersuara");
  }
}

/* The Cat class extends the Animals class and has methods to make noise and move. */
class Cat extends Animals {
  makeNoise(): void {
    console.log("Miaww");
  }
  move(): void {
    console.log("Sedang berjalan dengan paw mungilku");
    /* `super.move();` is calling the `move()` method of the parent class (`Animals`) from within the
    `move()` method of the child class (`Cat`). This allows the child class to inherit and extend
    the behavior of the parent class. In this case, the `move()` method of `Cat` is adding a message
    to the console before calling the `move()` method of `Animals`, which logs the coordinates of
    the animal's movement. */
    super.move();
  }
}

/* The Floppa class extends the Cat class and has a private owner property with methods to set the
owner and return to the owner. */
class Floppa extends Cat {
  private owner: string;

  setOwner(owner: string) {
    this.owner = owner;
  }

  returnToOwner() {
    console.log(`Kembali ke ${this.owner}`);
  }
}

/* The Sogga class extends the Cat class and has a private owner property with methods to set the owner
and return the cat to its owner. */
class Sogga extends Cat {
  private owner: string;

  setOwner(owner: string) {
    this.owner = owner;
  }

  returnToOwner() {
    console.log(`Kembali ke ${this.owner}`);
  }
}

/* The code is creating instances of the Floppa and Sogga classes, setting their coordinates and
owners, making them make noise, move, and return to their owners. It demonstrates the inheritance
and polymorphism features of TypeScript classes. */
const floppa = new Floppa();
floppa.setCoordX(200);
floppa.setCoordY(900);
floppa.setOwner("Dimas");
floppa.makeNoise();
floppa.move();
floppa.returnToOwner();

const sogga = new Sogga();
sogga.setCoordX(213);
sogga.setCoordY(90390);
sogga.setOwner("Rusky");
sogga.makeNoise();
sogga.move();
sogga.returnToOwner();
