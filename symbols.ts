import { randomUUID } from "crypto";

// the parameter of the symbol is a label

const sym1 = Symbol();
const sym2 = Symbol();

// console.log(sym1 === sym2); // false

// In these examples the symbols have the same label but it is not the same value

const sym3 = Symbol("cat");
const sym4 = Symbol("cat");

console.log(sym3); // Symbol(cat)
console.log(sym4); // Symbol(cat)

//console.log(sym3 == sym4); // false

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
    this[Symbol("id")] = id;
  }
}

const person3 = new Person("Pedro", 20, 1232352345);

// const id = Symbol("id");

// person3[id] = 12342452345; another way to attribute a symbol to person
// console.log("Descrição");
// console.log(id.description);

console.log(Object.getOwnPropertyNames(person3)); // name, age

console.log(Object.getOwnPropertySymbols(person3)); // Symbol(id)
console.log(person3);

// console.log(person3.id);
// console.log(person3[id]);

// Symbols give unique values but that is not always the case

// const sym1 = Symbol.for("")

const sym5 = Symbol.for("cat"); // it is a global symbol, so that can reference in another variable
const sym6 = Symbol.for("cat");

console.log(sym5, sym6);
// console.log(sym5 == sym6); // true

// USE CASES

// Use case 1

// const RED = 'red'
// const ORANGE = 'orange'
// const YELLOW = 'yellow'
// const GREEN = 'green'
// const BLUE = 'blue'
// const cat = 'cat'

const RED = Symbol("red");
const ORANGE = Symbol("orange");
const YELLOW = Symbol("yellow");
const GREEN = Symbol("green");
const BLUE = Symbol("blue");
const cat = Symbol("blue");

function getThreatLevel(color: symbol) {
  switch (color) {
    case RED:
      return "severe";
    case ORANGE:
      return "high";
    case YELLOW:
      return "elevated";
    case GREEN:
      return "guarded";
    case BLUE:
      return "low";
    default:
      return "unknown";
  }
}

console.log(getThreatLevel(BLUE)); // low
console.log(getThreatLevel(cat)); // unknown

// this function use symbols which are unique values to represent colors, that's why it is a good use case
