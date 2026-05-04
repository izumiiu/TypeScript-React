"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User1 {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    displayInfo() {
        return `Your name is ${this.name} your age is ${this.age}`;
    }
}
const peopleInfo1 = {
    name: "Tjay",
    age: 18,
    displayInfo(name, age) {
        return `Your name is ${name} and your age is ${age}`;
    }
};
const user1 = new User1("Tjay", 18);
const user2 = new User1("Poom", 19);
console.log(user1.displayInfo());
console.log(user2.displayInfo());
console.log(peopleInfo1.displayInfo("boss", 19));
// Type Union-----------------------------------------------------
// type dog = string | number;
// let theDog:dog = "scopydoo";
// let theCat:dog = 12;
// Literal Types----------------------------------------------------
let role;
role = "Manager";
role = 18;
let myStatus = "approved";
let myTheme;
myTheme = "dark";
myTheme = "light";
let myMethod = "GET";
let myPort = 3000;
// Type Guards----------------------------------------------------------------------------
function convert(value) {
    if (typeof value === "string") {
        //แปลงตัวอักษรเป็นตัวพิมใหญ่
        console.log(value.toUpperCase());
    }
    else {
        //แปลงเป็นทศนิยม2ตำแหน่ง
        console.log(value.toFixed(2));
    }
}
//# sourceMappingURL=app.js.map