
interface UserInfo {
    name:string;
    age:number;

    displayInfo(name:string,age:number):string;
}

class User1 implements UserInfo{

    name: string;
    age: number;

    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }
    
    displayInfo():string {
        return `Your name is ${this.name} your age is ${this.age}`;
    }

}

const peopleInfo1:UserInfo = {
    name:"Tjay",
    age:18,
    displayInfo(name:string,age:number):string{
        return `Your name is ${name} and your age is ${age}`;
    }

}



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
let role : "Admin" | "Manager" | "Member" | 18;
role = "Manager" ;
role = 18;

// Literal Types + Type Aliases
type Status = "pending" | "approved" | "rejedted";
type Theme = "light" | "dark";

let myStatus:Status = "approved";
let myTheme:Theme;
myTheme = "dark";
myTheme = "light";

type HTTPMethod = "GET" | "POST" | "PUT" | "DELETE";
type Port = 3000 | 5000 | 8080;
let myMethod:HTTPMethod = "GET";
let myPort:Port = 3000;

// Type Guards----------------------------------------------------------------------------

function convert(value: string | number){
    
    if(typeof value === "string"){
        //แปลงตัวอักษรเป็นตัวพิมใหญ่
        console.log(value.toUpperCase());
    }
    else{
        //แปลงเป็นทศนิยม2ตำแหน่ง
        console.log(value.toFixed(2));
    }
}