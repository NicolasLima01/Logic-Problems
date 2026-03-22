/* 

    Even or Odd Function.

*/

let number = 125;

function evenOrOdd(num){

    // returns true if the number is even and returns false if odd
    return num % 2 === 0 ? true : false
}

//Verifies the result and print if it is Even or Odd
console.log(evenOrOdd(number) ? "Even" : "Odd");