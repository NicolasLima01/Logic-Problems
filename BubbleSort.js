//-----------------------------------------------------------------------------------------------------
//                                       BubbleSort.js
//
//The BubbleSort algorithm is a sorting function that orders a array of numbers from the smallest 
//to the largest. The algorithm compares the first two elements of the array and swaps them if the
//first element is greater than the second element. The algorithm continues to compare the next two
//until the end of the array is reached. The algorithm then repeats the process until all the elements
//are in order.
//-----------------------------------------------------------------------------------------------------

let numbers = [3, 2, 1]; //args of numbers

function BubbleSort(...args) { //allows the function to treat an indefinite number of arguments as an array 
    for (let i = 0; i < args.length; i++) { //loop to iterate(repeat) through the array
        for (let j = 0; j < args.length; j++) { //loop to compare the elements of the array
            if (args[j + 1] < args[j]) {
                let value = args[j + 1];
                args[j + 1] = args[j];
                args[j] = value;
            }            
        }
    }
    return args; //returns the sorted array
}
console.log(BubbleSort(...numbers)); //prints the sorted list of numbers

