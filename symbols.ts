import { randomUUID } from "crypto";

// the parameter of the symbol is a label

const sym1 = Symbol();
const sym2 = Symbol();

console.log(sym1 == sym2); // false

// In these examples the symbols have the same label but it is not the same value

const sym3 = Symbol("cat");
const sym4 = Symbol("cat");

console.log(sym3); // Symbol(cat)
console.log(sym4); // Symbol(cat)

console.log(sym3 == sym4); // false

// class Person {
//   name: string;
//   age: number;

//   constructor(name: string, age: number, id: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

class Person {
  name: string;
  age: number;
  [id: symbol]: number; // Add index signature

  constructor(name: string, age: number, id: number) {
    this.name = name;
    this.age = age;
  }
}

const person3 = new Person("Pedro", 20, 1232352345);

const id = Symbol("id");

person3[id] = 12342452345;
console.log("Descrição");
console.log(id.description);

console.log(Object.getOwnPropertyNames(person3)); // name, age

console.log(Object.getOwnPropertySymbols(person3)); // Symbol(id)

// console.log(person3.id);
console.log(person3[id]);
