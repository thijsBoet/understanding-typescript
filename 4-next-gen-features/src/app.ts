// ES6 features as a fresher up
// Arrow functions
const add = (a: number, b: number) => a + b;
const printOutput: (a: string | number) => void = output => console.log(output);

printOutput(add(2, 5));

const button = document.querySelector('button');
if (button) {
  button.addEventListener("click", event => console.log(event))
}

// spread operator (pulls out all the elements out of the array or object)
const hobbies = ["sports", "cooking", "other hobbies"];
const activeHobbies = ["hiking", ...hobbies];

activeHobbies.push(...hobbies);
console.log(activeHobbies)

const person = { firstName: 'Matthijs', age: 39 }
const copiedPerson = { ...person }
console.log(copiedPerson)

// rest operator (gives an unlimited amount of arguments)
const addUnlimitedAmountOfValues = (...numbers: number[]) => {
  numbers.reduce((currentResult, currentValue) => {
    return currentResult + currentValue
  }, 0);
};

const addedNumbers = addUnlimitedAmountOfValues(5, 10, 2, 3.7);
console.log(addedNumbers)

// Can also be more explicit by using tuples
// const addTuples = (...numbers: [number, number, number]) => 

// Array Destructuring (assigns values from array/object to variable names)
const [hobby1, hobby2, ...remainingHobbies] = hobbies
// ...remainingHobbies creates an new array with all the remaining hobbies
// firstName: userName reassigns value
const { firstName: userName, age } = person;
console.log(userName, age);