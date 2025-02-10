//Custom types to basically store multiple types in one variable to not repeat number | string
type Combinablee = number | string;

function combine(n1: Combinablee, n2: Combinablee, resultType: "as-number" | "as-text") {
  let result;
  if ((typeof n1 === "number" && typeof n2 === "number") || resultType === "as-number") {
    result = +n1 + +n2;
  } else {
    result = n1.toString() + n2.toString();
  }
  return result;
  // if (resultType === "as-number") {
  //   return +result;
  // } else {
  //   return result.toString();
  // }
}

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);
