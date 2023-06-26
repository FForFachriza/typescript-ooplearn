"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var Character = /** @class */ (function () {
    //   protected name: string;
    //   protected age: number;
    // name: string, age: number
    function Character() {
        Character.dateCreated = new Date().toLocaleString();
        // this.name = name;
        // this.age = age;
    }
    return Character;
}());
var Role = /** @class */ (function (_super) {
    __extends(Role, _super);
    function Role(role) {
        var _this = _super.call(this) || this;
        _this.role = role;
        return _this;
    }
    Role.prototype.getRole = function () {
        // console.log(this.role);
        return this.role;
    };
    return Role;
}(Character));
var Person = /** @class */ (function (_super) {
    __extends(Person, _super);
    function Person(name, age, role) {
        var _this = _super.call(this, role) || this;
        _this.name = name;
        _this.age = age;
        return _this;
    }
    Person.prototype.getData = function () {
        console.log("Name: ".concat(this.name, ", Age: ").concat(this.age, ", Role: ").concat(this.role, ", Tanggal Dibuat ").concat(Character.dateCreated));
    };
    return Person;
}(Role));
// const roles: string[] = ["Mage", "Warrior", "Assassin", "Tank", "Support"];
var mage = new Role("Mage");
var warrior = new Role("Warrior");
var assassin = new Role("Assassin");
var tank = new Role("Tank");
var support = new Role("Support");
var roles = [mage, warrior, assassin, tank, support];
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question("Apakah Mau Buat Character? [y/n] ", function (answer) {
    switch (answer.toLowerCase()) {
        case "y":
            console.log("Daftar Role yang tersedia:");
            roles.forEach(function (role, index) {
                console.log("".concat(index + 1, ". ").concat(role.getRole()));
            });
            rl.question("Pilih Role: ", function (answer) {
                var selectedRole = Number(answer) - 1;
                if (selectedRole >= 0 && selectedRole < roles.length) {
                    rl.question("Masukkan Nama: ", function (name) {
                        rl.question("Masukkan Umur: ", function (age) {
                            var person = new Person(name, Number(age), roles[selectedRole].getRole());
                            person.getData();
                            rl.close();
                        });
                    });
                }
                else {
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
