//Q6: Write a program that prints all the male people’s first name given a complex object

const allUsers =[{
    firstName: "Rahul",
    gender: "male"
}, {
    firstName: "Sweata",
    gender: "female"
}, {
    firstName: "Rajarshi",
    gender: "male" 
}, {
    firstName: "Suvangi",
    gender: "female"
}];

//using for loop
for(let i=0; i<allUsers.length; i++){
    if(allUsers[i]["gender"]==='male'){
        console.log(allUsers[i]["firstName"]);
    }
}