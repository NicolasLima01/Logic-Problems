//-----------------------------------------------------------------------------------------------------
//                                       
//          Palindrome function
// 
//-----------------------------------------------------------------------------------------------------

let string = "Ana"; // string that will be verified if is a palindrome

let invertedStr = ""; // variable that will receive the inverted string

let array = string.split(""); //stores the characters from the string in the array

array.forEach(char => {
    //use the array to create the inverted string
    invertedStr = char.concat(invertedStr);
});

// checks whether the string is a palindrome and displays the result
console.log(string === invertedStr ? string + " is an palindrome" : string + " is not an palindrome");