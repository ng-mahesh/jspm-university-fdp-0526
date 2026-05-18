// VAR vs let/const

// var = function scope
var name = "Mahesh";
var name = "JSPM College"; //allowed 
// console.log(name);

// let = block scope 
let marks = 85;
// let marks = 80; //Gets an error
// console.log(marks);

// Const can not reassigned.
const uni = "JSPM Uni";
// const uni = "Pune Uni"; //Gets an error
// console.log(unisersity);


if(true){
    let uni = "Pune Uni";
    console.log(uni);    
}