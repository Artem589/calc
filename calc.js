// version 1.0 - if,else
function calc(exp, num1, num2) {
//Проверка на отстуствие параметров
    if ((exp === undefined) && (num1 === undefined) && (num2 === undefined)) {
          console.log('Error1')
    } else
// Проверка значений операторов
   if ((exp !== 'sum') && (exp !=='subt') && (exp !=='mult') && (exp !=='dev') && (exp !=='mod') && (exp !== 'elev')) {
         console.log('unknown operation')
// Проверка на "число" в параметрах
   } else 
if((typeof(num1) !== 'number') || (typeof(num2) !== 'number')) {
          console.log('Error2')
    }    
 //Условия для выражений   
      else if (exp === 'sum') {
        return num1 + num2
    } else if (exp === 'subt') {
        return num1 - num2
    } else if (exp === 'mult') {
        return num1 * num2
    } else if (exp === 'dev') {
        return num1 / num2
    } else if (exp === 'mod') {
        return num1 % num2 
    } else if (exp === 'elev') {
        return num1**num2
    } else {
        console.log('unknow')
    }
}
   


//Проверка - Вывод.

calc()                    //Отсутствие параметров  
calc(1,4)             //Не правильный оператор
calc('sum','sdd','zxzxzx') //Если значение "не число"


console.log(calc('sum',4,3))            //Сумма
console.log(calc('subt', 1, 2))         //Вычитание
console.log(calc('mult', 1, 2))         //Умножение
console.log(calc('dev', 1, 2))          //Деление
console.log(calc('mod', 1, 2))          //Остаток от деления
console.log(calc('elev', 2, 2))         //Возведение в степень


                                                                                  



