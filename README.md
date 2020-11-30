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
* number   -   1, 5.3, -10
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

```typescript
const person: {
  // "{}" specifies its an object holding two properties (name, age) of type string and number
  name: string,
  age: number
} = {
  name: 'Matthijs',
  age: 30
}
```