// version 1.03 - применение объекта
function calc(operator, num1, num2) {
  const isNotArguments = !operator && !num1 && !num2;
  const isNotNumersValid = typeof num1 !== "number" || typeof num2 !== "number";

  let operations = {
    add: num1 + num2,
    sub: num1 - num2,
    multi: num1 * num2,
    div: num1 / num2,
    mod: num1 % num2,
    exp: num1 ** num2,
  };

  if (isNotArguments) {
    return "unknown arguments";
  } else if (isNotNumersValid) {
    return "Не число";
  } else if (operator in operations) {
    return operations[operator];
  } else {
    return "unknown operation";
  }
}

// Error
console.log(calc());
console.log(calc("exp", "fdg", "dfgd"));
console.log(calc("exp", 10));
console.log(calc("exp"));
console.log(calc("wew", 2, 3));

// // Math operation

calc("add", 2, 5);
calc("sub", 2, 5);
console.log(calc("multi", 10, 2));
console.log(calc("div", 10, 2));
console.log(calc("mod", 10, 3));
console.log(calc("exp", 3, 3));
