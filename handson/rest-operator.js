const numbers = [1,2,3];
console.log(numbers);

const updatedNumbers = [...numbers, 4,5,6];
console.log(updatedNumbers);


const user = {
    name : "mahesh",
    city: "pune"
}
console.log(user);

const updatedUser = {
    ...user,
    city: "Mumbai"
}
console.log(updatedUser);


// Rest operator
const sum = (...numbers) => {
    return numbers.reduce((total, num)=> total +num, 0);
}

console.log(sum(10,20,30, 50));
