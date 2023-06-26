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

  getRole() {
    console.log(this.role);
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

const roles: string[] = ["Mage", "Warrior", "Assassin", "Tank", "Support"];

for (const role of roles) {
  const listrole = new Role(role);
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Apakah Mau Buat Character? [y/n/z] ", (answer) => {
  switch (answer.toLowerCase()) {
    case "y":
      console.log("Daftar Role yang tersedia:");
      roles.forEach((role, index) => {
        console.log(`${index + 1}. ${role}`);
      });
      rl.question("Pilih Role: ", (answer) => {
        const selectedRole = Number(answer) - 1;

        if (selectedRole >= 0 && selectedRole < roles.length) {
          rl.question("Masukkan Nama: ", (name) => {
            rl.question("Masukkan Umur: ", (age) => {
              const person = new Person(name, Number(age), roles[selectedRole]);
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
