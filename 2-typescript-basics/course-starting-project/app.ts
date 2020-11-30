const add = (n1: number, n2: number): number => n1 + n2;

const printResult = (num: number): void => console.log("Result: " + num);

printResult(add(5, 12));

let combineValues: (a: number, b: number) => number;
combineValues = add;

console.log(combineValues(8, 8));

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 20, (result) => {
  console.log(result)
})