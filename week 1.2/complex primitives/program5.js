// Q5: Write a program to print the biggest number in an array
const arrayOfNumbers = [12, 23, 25, 21, 51, 16, 99, 102, 17];

// Loop Approach
let biggestNumber = arrayOfNumbers[0];
for (let i = 0; i < arrayOfNumbers.length; i++) {
    if (biggestNumber < arrayOfNumbers[i]) {
        biggestNumber = arrayOfNumbers[i];
    }
}

console.log(biggestNumber);


//Array method approach
const sortedArray = arrayOfNumbers.sort((a, b) => a - b);
console.log(sortedArray[sortedArray.length - 1]);

//another approach
const biggestNumberInTheArray = arrayOfNumbers.reduce((max, current ) => {
    return (current > max) ? current : max;
}, arrayOfNumbers[0]);
console.log(biggestNumberInTheArray);

//another approach
const biggestNumberUsingMath = Math.max(...arrayOfNumbers);
console.log(biggestNumberUsingMath);

//reduce approach
const biggestNumberUsingReduce = arrayOfNumbers.reduce((max, current) => {
    return (current > max) ? current : max;
}, arrayOfNumbers[0]);
console.log(biggestNumberUsingReduce);

