// version 1.01 - добавление переменных, улучшение читаемости кода.
function calc(operator, num1, num2) {

    const isNotArguments = !operator && !num1 && !num2
    const isNotNumber = typeof(num1) !== 'number' || typeof(num2) !== 'number'

    if (isNotArguments) {
        return 'unknown arguments'
    } else if (isNotNumber) {
        return 'Error'
    } else if (operator === 'add') {
        return num1 + num2
    } else if (operator === 'sub') {
        return num1 - num2
    } else if (operator === 'multi') {
        return num1 * num2
    } else if (operator === 'div') {
        return num1 / num2
    } else if (operator === 'mod') {
        return num1 % num2
    } else if (operator === 'mod') {
        return num1 % num2
    } else if (operator === 'exp') {
        return num1 ** num2
    } else {
         return 'unknown operation'
    }
}

//Error
console.log(calc())
console.log(calc('exp', 'fdg','dfgd'))
console.log(calc('exp', 10))
console.log(calc('exp'))
console.log(calc('wew',2,3))

// Math operation

console.log(calc('add', 2, 5))
console.log(calc('sub', 2, 5))
console.log(calc('multi', 10, 2))
console.log(calc('div', 10, 2))
console.log(calc('mod', 10, 3))
console.log(calc('exp', 10, 3))






