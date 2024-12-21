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

