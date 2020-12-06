// type AddFn = (a: number, b: number) => number
interface AddFn {
  (a:number, b:number): number
}

let add: AddFn;

add = (n1: number, n2: number) => n1 + n2;

interface Named {
  readonly name: string
  outputName?: string
}

interface Greetable extends Named{
  greet(phrase: string): void;
}

class PersonClass implements Greetable {
  name: string;
  age = 30;
  constructor(name: string) {
    this.name = name;
  }
  greet(phrase:string) {
    console.log(phrase + " " + this.name);
  }
}

let user1 = new PersonClass("Matt");

user1.greet("hi there - I am")