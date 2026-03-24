/*

    FizzBuzz

*/

let i = 1 // sets the initial value of counter variable

while (i <= 100) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }
    else if (i % 3 === 0) {
        console.log("Fizz");
    }
    else if (i % 5 === 0) {
        console.log("Buzz");
    }
    else {
        console.log("0");
    }

    i = i + 1; //iterates the counter variable

}