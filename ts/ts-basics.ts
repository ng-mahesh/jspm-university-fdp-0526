
let username:string = "Mahesh B.";
console.log(username);
let marks: number = 85;
let isPass: boolean = true;

let usersArr: string[] =["abc", "xyz"];
let userIds: number[] = [1,2,3,4,5];


// marks = "90";

// any
let roll_no: any;

roll_no = 1;
roll_no = "one";
roll_no = true;

const myFunction = (a: number,b: number):string => {
    return `result is as : ${a+b}`;
}

myFunction(10, 20);


