/* 

    Factorial Function.

*/

let number = 5;

function factorial(num) {

    // variable that stores the product of the multiplications
    let result = 1; //starts with 1 to not repeat the first product

    //loops to calculate the factorial result
    for (num; num > 0; num--) {
        result = result * num;
    }

    return result;
}

console.log(factorial(number));