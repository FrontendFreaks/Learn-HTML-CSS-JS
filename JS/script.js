let name = "Vishal" // this is my comment

/*
this is 
my mutliline comment

sdfsd

sdf

*/

// printing to the console 
// console.log("Hello World");
// console.log(1)

// let, var, const 
let x; // declare variable x
x = 3; // assign value 3 to variable x
// let x = 3; // declare variable x and assign value 3 to it


console.log(x);
x = 2;
console.log(x);


const pi = 3.14;
console.log(pi);

// arithmetic operator

let num1 = 4;
let num2 = 2;

console.log("the value of ", num1, " + ", num2, " is ", num1 + num2);
console.log("the value of ", num1, " - ", num2, " is ", num1 - num2);
console.log("the value of ", num1, " * ", num2, " is ", num1 * num2);
console.log("the value of ", num1, " / ", num2, " is ", num1 / num2);
console.log("the value of ", num1, " ** ", num2, " is ", num1 ** num2);

// uniary operator
console.log(num1);
console.log(num1++); // post increament: num1 will be printing 4 then it become 5
console.log(num1--); // post decreament: print 5, and then num1 is 4
console.log(--num1); // pre decreament: it become 3, print 3
console.log(++num1); // pre increament

// conditional operator

// =, assignment operator
let z = 4;

// ==, equals to, it only check value
console.log(6 == 6);

// ===, strictly equal to, it is checking both value and type
console.log(6 === "6")

// conditional operator
console.log(5 > 6); // greater than operator
console.log(6 >= 5); // greater than equals to 
console.log(5 < 6); // less than operator
console.log(6 <= 5); // less than equal to 

// bitwise operator
//  | or
//  & and 
//  ^ xor 
//  ~ complement

// conditionals
// 1. if .. else if .. else

let age = 80;
if(age >= 60){
    console.log("You are older");
}
else if(age >= 18) {
    console.log("you are adult");
}
else{
    console.log("you are teen")
}

// switch
let day = "Monday";
switch(day){
    case "Monday":
        console.log("today is monday");
        break;

    case "Sunday":
        console.log("today is sunday");
        break;

    case "Tuesday":
        console.log("today is Tuesday");
        // break;
    default:
        console.log("invalid day");
}

// data types
let num = 3; // number
let float = 3.134; // number
let course = "Frontend Developer Essential Course" // string
let canVote = false; // boolean
let vishal; // undefined
// NaN 
// console.log(typeof(NaN))


// ARray
let marks = [23, 20, 19]

console.log(marks);
marks.push(18) // add at the end of the array
console.log(marks)
marks.pop(); // remove from the end of the array
console.log(marks)
marks.shift(); // remove from start of the array
console.log(marks);
marks.unshift(24)
console.log(marks);
console.log(marks.indexOf(20))


// Object
let car = {
    length: 4,
    price: 500,
    "full name": "Tata motors",
    name: "tata"
}

console.log(car)

// access properties of objects
console.log(car.length)
console.log(car.price)
console.log(car["full name"])


let mathsMarks = [9, 10, 8, 7];
let total = 0;


// for(statement 1; statement 2; statement 3){
//     // statement 1: Initialise
//     // statement 2: conditional statements
//     // statement 3: change the value
// }
for (let index = 0; index < mathsMarks.length; index++) {
    total = total + mathsMarks[index];
}

// console.log(total)

// mathsMarks.forEach(addMarks());

// for in
for (const key in car) {
    console.log(key, car[key]);
}

// for of, to iterate over iteratable items
let course1 = "javascript course"
for (const iterator of course) {
    console.log(iterator)
}


// while loop
let i=10;
while(i < 10){
    console.log(i);
    i++;
}


// do while
i = 10;
do {
    console.log(i);
    i++;
} while (i < 10);

// let $1 = 4;
// function
let hello = name =>  console.log("Hello", name)
let add = (x, y) => x+y

console.log(add(2,3))
const friends = ["John", "Vishal", "JavaScript"];
hello();
friends.forEach((elements) => hello(elements))

// Map, filter and reduce 
let arr = [2,4,6,8];

let arr2 = arr.map((item) => item = item*2)
let arr3 = arr.filter((item) => item > 5)
let product = arr.reduce((total, curr) => total * curr)
console.log(product)

console.log(arr3)
console.log(arr2)
console.log(arr);