type numbersAndStrings = number | string

function combine(
  input1: number | string,
  input2: numberString,
  resultType: "as-number" | "as-text"
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultType === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
  // if (resultType === 'as-number') {
  //   return parseFloat(result)
  // } else {
  //   return result.toString();
  // }
}

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedStringAges = combine("30", "26", "as-number");
console.log(combinedStringAges);

const combinedName = combine("Thijs", " Boet", "as-text");
console.log(combinedName);
