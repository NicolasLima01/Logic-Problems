/* 

    Prime Number

*/

let i = 2 //initiats in 2 to not count the number 1

while (i <= 100) {

    let prime = true;

    // loop to verify if the number is prime
    for (let j = 2; j < i; j++) {

        // if the number is divisible, it is not a prime number
        if (i % j === 0) {
            prime = false;
        }

    }

    // verifies if the number is prime, prints the text
    if (prime == true) {
        console.log(i + " is a prime number");
    }

    i = i + 1;

}