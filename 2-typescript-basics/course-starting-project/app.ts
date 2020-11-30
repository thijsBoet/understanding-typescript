// const person: {
//   name: string,
//   age: number
//   hobbies: string[]
// } = {
const person = {
  name: 'Matthijs',
  age: 30,
  hobbies: ['Programming', 'Playing guitar', 'Watching movies', 'Cooking'],
  role: [2, 'author']
}

console.log(person)

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase())
}