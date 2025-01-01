//--------------------------------------------------------------------------------------------------
//                                  Convert Decimal to Binary
// 
// This algorithm convert a decimal number into it's equivalent to binary number
//--------------------------------------------------------------------------------------------------

Math.PI; // calling the library of math

let number = 4; //decimal number to be converted to binary
function decimal_to_binary(decimal) {
    let potency = Math.log2(decimal); //Gets the potency of the number
    let binary;
    let i = potency;
    do {
        if (decimal % Math.pow(2, potency) == 0) {
            binary = "1";
        }
        else {
            binary = binary + "1";
        }
        i--;
    }
    while (i > 0)
    return binary;
}

console.log(decimal_to_binary(number)); //output must be 100