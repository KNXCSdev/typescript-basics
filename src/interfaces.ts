//NOTE An interface describes the structure of an object
//NOTE We can use it to describe how an object should look like
//NOTE It only exist in typescript, not in vanilla JavaScript
//NOTE Unless a class we won't use it as a blueprint, just as a custom type (more or less?)
//NOTE We can't assign values as in initialization

// type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number;
}

let addIn: AddFn;

addIn = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Named {
  readonly name: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age = 30;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
}

let user1: Greetable;

user1 = new Person("Max");
// user1.name = 'Manu';

user1.greet("Hi there - I am");
console.log(user1);
