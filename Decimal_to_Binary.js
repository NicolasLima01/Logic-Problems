//--------------------------------------------------------------------------------------------------
//                                  Convert Decimal to Binary
// 
// This algorithm convert a decimal number into it's equivalent to binary number
//--------------------------------------------------------------------------------------------------

Math.PI; // calling the library of math

let number = 4; //decimal number to be converted to binary
function decimal_to_binary(decimal) {
    let potency = Math.log2(decimal); //Gets the potency of the number
    let binary = "0";
    switch (potency) {
        case 0:
            break;
    }
    return binary;
}

console.log(decimal_to_binary(number)); //output must be 100