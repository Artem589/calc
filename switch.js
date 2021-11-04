// version 1.02  - Использование конструкции switch
function calc(operator, num1, num2) {
  const isNotNumersValid = typeof num1 !== "number" || typeof num2 !== "number";
  const isNotArguments = !operator && !num1 && !num2;

  if (isNotArguments) {
    return "unknown arguments";
  } else if (isNotNumersValid) {
    return "Не число";
  }
  switch (operator) {
    case "add":
      return num1 + num2;
      break;
    case "sub":
      return num1 - num2;
      break;
    case "multi":
      return num1 * num2;
      break;
    case "div":
      return num1 / num2;
      break;
    case "mod":
      return num1 % num2;
      break;
    case "exp":
      return num1 ** num2;
      break;
    default:
      return "unknown operation";
  }
}

//Error
console.log(calc())
console.log(calc('exp', 'fdg','dfgd'))
console.log(calc('exp', 10))
console.log(calc('exp'))
console.log(calc('wew',2,3))

// // Math operation

console.log(calc('add', 2, 5))
console.log(calc('sub', 2, 5))
console.log(calc('multi', 10, 2))
console.log(calc('div', 10, 2))
console.log(calc('mod', 10, 3))
console.log(calc('exp', 3, 3))
