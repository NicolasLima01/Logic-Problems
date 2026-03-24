/* 

    Prime Number

*/

let i = 2

while (i <= 10) {

    let prime = true;

    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            prime = false;
        }
    }

    if (prime == true) {
        console.log(i + " é primo");
    }

    i = i + 1;

}