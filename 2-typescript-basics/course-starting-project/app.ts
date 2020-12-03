let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Matt"
if (typeof userInput === 'string') {
  userName = userInput;
}

function generateError(message: string, code: number) {
  throw {
    message: message,
    errorCode: code
  }
}

const result = generateError('An error occurred!', 404)
console.log(result)