//Q7: Write a program that reverses all the elements of an array

const numbers = [10,80,72,32,67,1000];

let reversedArray = [];
for(let i = numbers.length - 1; i>=0; i--){
    reversedArray.push(numbers[i]);
}

console.log(reversedArray);

//Using reversed built-in method

const reversedMethodArray = [...numbers].reverse();
console.log(reversedMethodArray);