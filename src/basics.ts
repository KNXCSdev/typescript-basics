function adder(n1: number, n2: number, showResult: boolean, phrase: string) {
  // if (typeof n1 !== "number" || typeof n2 !== "number") {
  //   throw new Error("Incorrect Input");
  // }

  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }

  return;
}

const number1 = 5;
const number2 = 2.8;
const printResultt = true;
const resultPhrase = "Result is: ";

adder(number1, number2, printResultt, resultPhrase);
