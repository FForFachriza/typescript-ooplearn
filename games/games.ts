export {};
import * as readline from "readline";

abstract class Character {
  static dateCreated: string;
  //   protected name: string;
  //   protected age: number;
  // name: string, age: number
  constructor() {
    Character.dateCreated = new Date().toLocaleString();
    // this.name = name;
    // this.age = age;
  }
}

class Role extends Character {
  protected role: string;

  constructor(role: string) {
    super();
    this.role = role;
  }

  getRole(): string {
    // console.log(this.role);
    return this.role;
  }
}

class Person extends Role {
  private name: string;
  private age: number;
  constructor(name: string, age: number, role: string) {
    super(role);
    this.name = name;
    this.age = age;
  }
  getData() {
    console.log(`Name: ${this.name}, Age: ${this.age}, Role: ${this.role}, Tanggal Dibuat ${Character.dateCreated}`);
  }
}

// const roles: string[] = ["Mage", "Warrior", "Assassin", "Tank", "Support"];

const mage = new Role("Mage");
const warrior = new Role("Warrior");
const assassin = new Role("Assassin");
const tank = new Role("Tank");
const support = new Role("Support");

const roles: Role[] = [mage, warrior, assassin, tank, support];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Apakah Mau Buat Character? [y/n] ", (answer) => {
  switch (answer.toLowerCase()) {
    case "y":
      console.log("Daftar Role yang tersedia:");
      roles.forEach((role, index) => {
        console.log(`${index + 1}. ${role.getRole()}`);
      });
      rl.question("Pilih Role: ", (answer) => {
        const selectedRole = Number(answer) - 1;

        if (selectedRole >= 0 && selectedRole < roles.length) {
          rl.question("Masukkan Nama: ", (name) => {
            rl.question("Masukkan Umur: ", (age) => {
              const person = new Person(name, Number(age), roles[selectedRole].getRole());
              person.getData();
              rl.close();
            });
          });
        } else {
          console.log("Pilihan Role tidak valid!");
          rl.close();
        }
      });

      break;
    case "n":
      console.log("Sorry! :(");
      rl.close();
      break;
    default:
      console.log("Invalid answer!");
      rl.close();
      break;
  }
});
