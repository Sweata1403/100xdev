//Q1: Write a program prints all the even numbers in an array
const ages =[ 10, 20, 22, 25, 1000];
for (let i=0; i<=ages.length; i++){
    if(ages[i % 2 ==0]){
        if(ages[i] % 2 === 0){
            console.log(ages[i]);
        }
    }
}