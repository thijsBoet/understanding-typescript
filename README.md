# Understanding TypeScript 2020
### What is TypeScript
* TS is a JavaScript superset (language building upon JS)
* Adds new features and advantages to JS
* TypeScript Compiles to JavaScript
### Why should you user TypeScript
* Far less error prone then regular JS
* Adds types
* Next-gen JS features (compiled down for older browsers)
* Adds Non JS features like Interfaces and Generics
* Adds Meta-programming features like Decorators
* Rich configurable compiler
* Modern tooling that even helps in non-TypeScript Projects
## TypeScript Basics
### Primitive types in TS (all lower-case)
* number   -   1, 5.3, -10 (integers, floats, negative values)
* string   -   "Hi", 'Hello', `Template literals`
* boolean  -   true, false (No truthy or falsy values)
```typescript
const add = (n1: number, n2: number, showResult: boolean, phrase: string) => {
  const result = n1 + n2
  showResult ? console.log(phrase + result) : result;
};

const number1 = "5";
const number2 = 2.8;
const printResult = true;
const resultPhrase = "Result is: ";

const result = add(+number1, +number2, printResult, resultPhrase)
```
### Reference types in TS
* object   {age: 30}
* Arrays   [1,2,3]
* typescript infers types used in objects/arrays, but they can also be specified.
### New types in TS
* Tuple  [2,'author'] array of fixed length and type
* enum - enum {NEW, OLD}
* any - any kind
* unknown - unknown type (a bit more restrictive then any, therefore better)
* never - 
```typescript
// enum names start with a Capital letter and it's convention to use all caps 
enum Status {ADMIN, READ_ONLY, AUTHOR} (ADMIN=0, READ_ONLY=1, AUTHOR=2)
// Can also be given custom values, even strings
enum State {AL=52, AK=12, AZ=35, AR='Arkansas'}
const person: {
  // "{}" specifies its an object holding properties (name, age, hobbies) of type string and number
  name: string;
  age: number;
  hobbies: string[]; // any[] for array with any type
  role: [number, string] // tuple type

} = {
  name: 'Matthijs',
  age: 30,
  hobbies: ['Programming', 'Playing guitar', 'Watching movies', 'Cooking'],
  role: [2, 'author'],
  status: Status.ADMIN // 0
}
for (const hobby of person.hobbies) {
  console.log(hobby)
}
```
* We can combine multiple types (aka Union types) using the | character
```typescript
const combine = (input1: number | string, input2: number | string) => 
```
* We can create our own types with type aliases
```typescript
type numbersAndStrings = number | string
const combine = (input1: numbersAndStrings, input2: numbersAndStrings) => 
```
### Functions
* You can specify the return type in a function (usually inferred)
```typescript
const add = (n1: number, n2: number):number => n1 + n2;
```
* TS uses the void keyword if a function doesn't have a return statement
```typescript
const printResult = (num: number): void => console.log("Result: " + num);
```
* Using the Function keyword we can specify a function type
```typescript
const printResult: Function = (num: number): void => console.log("Result: " + num);
```
* We can even specify the structure of the function
```typescript
let combineValues: (a:number, b:number) => number
combineValues = add;
```
* Using never is used when it never exits the function (like throw error)
```typescript
function generateError(message: string, code: number) {
  throw {
    message: message,
    errorCode: code
  }
}

const result = generateError('An error occurred!', 404)
console.log(result)
```
## Typescript compiler
### Watch Mode
* We use watch mode to compile TS files on the fly to JS
```javascript
tsc app.ts -w
```
* To compile multiple files in an entire project folder
```javascript
tsc --init // only once, creates tsconfig.json file
tsc -w // to watch folder
```
### Configuring tsconfig.json
* tsconfig.js tells TS how TS should be compiled
* We can add an "exclude" array to exclude certain files from compilation
```json
  },
  "exclude" : [
    "node_modules", // would be default without array
    "analytics.ts",
    "*.dev.ts" // every file that ends with .dev.ts
  ]
}
```
* An "include" array does the inverse and excludes all files that are not listed
### Basic compilerOptions
* "target" sets the targeted ECMA standard
* "allowJs" allows JS files to be compiled
* "checkJS" reports errors in JS files
* "sourceMap" included the TS files in modern browsers for debugging
* "outDir" sets to what folder the JS files should be compiled to
* "rootDir" sets the root directory wherefrom TS files should be compiled like "./src"
* "removeComments" remove comments (smaller files)
* "noEmitOnError" files are not compiled when errors are thrown in TS
### Code quality options
* "noUnusedLocals" Reports on unused local variables
* "noUnusedParameters" Reports on unused
* "noImplicitReturns" Report error when not all code paths in function return a value.
## OOP refresher
### Classes
* Classes are blueprints for objects, they define how objects look like and which properties and methods they have.
* An object is an instantiation of such a class (Might be an Product, User, Cart etc blueprint/class)
* This way we can quickly replicate multiple objects with the same structure and methods
* TS adds private, protected, static and types to classes
```javascript
class Department {
  // defines property and type
  name: string;
  // sets the name field to the constructors argument
  constructor(n: string) {
    // must use this keyword for local class variables
    this.name = n;
  }
  // indicates to TS that this should always refer to the Department class
  describe(this: Department) {
    console.log("Department: " + this.name);
  }
  // You can set properties and methods to private using the private keyword
  // It is now only accessible from inside the class with addEmployee
  private employees: string[] = [];
  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department("Accounting");

accounting.describe();
accounting.addEmployee("Max");
accounting.addEmployee("Manuel");
accounting.printEmployeeInformation();
```
* Shorthand initialization of class
```javascript
class Person {
  // We can add readonly to values that should not be changed
  constructor(public readonly id: string, public name: string) {
    
  }
}
const karl = new Person('1', 'Karl')
console.log(karl)
```
### Inheritance
* We can inherit features from other classes using the extends keyword
```javascript
class ITDepartment extends Department {
  // to add new arguments use the super keyword with the new argument
  constructor(id: string, public admins: string[]) {
    super(id);
  }
}

const IT = new ITDepartment("2", ["mark", "jessie"]);
console.log(IT)

class HRDepartment extends Department {
  private lastReport: string;
  // We can use a get method to access private properties outside a class
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found.");
  }
  // We can use a set method to create private value outside a class
  set mostRecentReport(value: string) {
    this.addReport(value)
  }
  constructor(id: string, private reports: string[]) {
    super(id);
    this.lastReport = reports[0];
  }
  addEmployee(name: string) {
    if (name === "max") {
      return;
    }
    this.employees.push(name);
  }
  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }
  printReports() {
    console.log(this.reports);
  }
}

const HR = new HRDepartment('3', []);
HR.addReport("Quarterly report on Mr. Willson's illicit hacking activities");
HR.addEmployee("Susan")
HR.printReports();
HR.printEmployeeInformation();
// Must set getter/setter function as a property not as a function
HR.mostRecentReport = "Report on Elliot illicit hacking activities aka Mr. Robot";
console.log(HR.mostRecentReport);
```
* We can create our own static methods/properties where we don't have to extend the department class
```javascript
class Department {
  static currentYear = 2020
  // We can't access static methods/properties with the this keyword within the class
  console.log(Department.currentYear)
  static createEmployee(name:string) {
    return {name: name}
  }
}
const newEmpoyee = Department.createEmployee("Ellen");
console.log(Department.currentYear, newEmpoyee)
```
* If We want to create a method on all inheriting classes we create an abstract class and method
```javascript
abstract class Department {
  abstract describe(this.Department): void;
}
class HRDepartment extends Department {
  // This abstracted class should be implemented on every extended class
  describe(){
    console.log('HR Department - ID ' + this.id)
  }
}
```
* But the base abstract "class Department" can now no longer be instantiated itself 
## Interfaces
* Interfaces describe the structure of an object
* We create interfaces with the interface keyword which only exists in TS not regular javascript
* We don't use this as a blueprint such as in a class, but as a custom type
```typescript
interface PersonInterface {
  name: string;
  age: number;
}
```
* We can now type check an object
```typescript
let user1: PersonInterface

user1 = {
  name: "Matt",
  age: 39,
  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  }
}

user1.greet('Hi there - I am')
```
* Interfaces are more specific/clearly (build for objects/classes) and types are more flexible
* An interface can be used as a contract a class has to adhere to. Using the implements keyword
```typescript
interface Greetable {
  name: string;
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
```
* Interfaces are often used to share functionality amongst different classes
* You can add the readonly modifier to an interface, but not public, private and abstract
* We can even use inheritance to interfaces
```typescript
interface Named {
  readonly name: string
}

interface Greetable extends Named{
  greet(phrase: string): void;
}
```
* We can use interfaces as an alternative to function types
```typescript
// type AddFn = (a: number, b: number) => number
interface AddFn {
  (a:number, b:number): number
}
let add: AddFn;

add = (n1: number, n2: number) => n1 + n2;
```
* We can add optional properties using a question-mark
```typescript
interface Named {
  readonly name: string
  outputName?: string
}
```
* We can also add optional properties to classes
```typescript
class Person {
  name?: string
}
constructor(n?:string) {
  if(n){
    this.name = name
  }
}
```