//Q2: Write a program that greets a person based on their gender. (If else) 

function greet(name, gender){
    if(gender=='male'){
        console.log(`Hello ${name} sir`);
    }else{
        console.log(`Hello ${name} ma'am`);
    }
}

greet('Rahul', 'male');
greet('Sweata', 'female');