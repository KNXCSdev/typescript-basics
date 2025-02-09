function add(n1: number, n2: number) {
  return n1 + n2;
}

//void says that the function doesn`t return a value
function printResult(num: number): void {
  console.log("Result: " + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

let combineValues: (a: number, b: number) => number;

combineValues = add;

console.log(combineValues(5, 5));

addAndHandle(10, 20, (result) => {
  console.log(result);
});
