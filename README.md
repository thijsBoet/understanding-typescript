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