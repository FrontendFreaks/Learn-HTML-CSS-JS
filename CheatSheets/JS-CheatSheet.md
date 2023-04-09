# JavaScript CheatSheet

### ****Adding JavaScript to a web page****

JavaScript can be added to an HTML file using the script tag:

```jsx
<script src="script.js"></script>
```

### Comments in JavaScript

Single-line comments in JavaScript start with **`//`**, while multi-line comments start with **`/*`**and end with **`*/`**.

```jsx
// This is a single-line comment

/*
This is a multi-line comment
*/
```

### Printing to the console

You can print to the console in JavaScript using the **`console.log()`** function:

```jsx
console.log("Hello, world!");
```

### ****Variables in JavaScript****

Variables in JavaScript can be declared using **`let`**, **`const`**, or **`var`**.

```jsx
let x = 5; // a variable declared with let can be reassigned
const y = 10; // a variable declared with const cannot be reassigned
var z = 15; // a variable declared with var has function scope
```

### Declaring and assigning variables

Variables in JavaScript can be declared and assigned in the same line:

```jsx
let x = 5;
```

### Arithmetic Operators

JavaScript supports arithmetic operators such as addition, subtraction, multiplication, division, and modulus:

```jsx
let x = 5;
let y = 10;
let z = x + y; // addition
let a = x - y; // subtraction
let b = x * y; // multiplication
let c = y / x; // division
let d = y % x; // modulus
```

### Unary Operators

Unary operators are operators that work with only one operand. JavaScript supports several unary operators, such as increment, decrement, and negation:

```jsx
let x = 5;
let y = ++x; // increment
let z = --x; // decrement
let a = -x; // negation
```

### ****Conditional operators****

JavaScript supports conditional operators such as greater than, less than, equal to, and not equal to:

```jsx
let x = 5;
let y = 10;
let z = x > y; // greater than
let a = x < y; // less than
let b = x == y; // equal to
let c = x != y; // not equal to
```

### if-else statements

if-else statements are used in JavaScript to execute code based on a condition:

```jsx
let x = 5;
if (x > 10) {
  console.log("x is greater than 10");
} else if (x < 10) {
  console.log("x is less than 10");
} else {
  console.log("x is equal to 10");
}
```

### Switch Statements

switch statements are used in JavaScript to execute different code blocks based on different conditions:

```jsx
let day = "Monday";
switch (day) {
  case "Monday":
    console.log("Today is Monday");
    break;
  case "Tuesday":
    console.log("Today is Tuesday");
    break;
  default:
    console.log("Today is not Monday or Tuesday");
}
```

### ****Data types in JavaScript****

JavaScript supports several data types, such as string, number, boolean, null, and undefined:

```jsx
let x = "Hello, world!"; // string
let y = 5; // number
let z = true; // boolean
let a = null; // null
let b = undefined; // undefined
```

### Array Methods

```jsx
// Declaring an array
let fruits = ['apple', 'banana', 'orange'];

// Accessing elements of an array
console.log(fruits[0]); // Output: 'apple'
console.log(fruits[1]); // Output: 'banana'
console.log(fruits[2]); // Output: 'orange'

// Adding an element to the end of an array
fruits.push('grape');
console.log(fruits); // Output: ['apple', 'banana', 'orange', 'grape']

// Removing the last element of an array
fruits.pop();
console.log(fruits); // Output: ['apple', 'banana', 'orange']

// Adding an element to the beginning of an array
fruits.unshift('grape');
console.log(fruits); // Output: ['grape', 'apple', 'banana', 'orange']

// Removing the first element of an array
fruits.shift();
console.log(fruits); // Output: ['apple', 'banana', 'orange']

// Finding the index of an element in an array
console.log(fruits.indexOf('banana')); // Output: 1
console.log(fruits.indexOf('grape')); // Output: -1 (not found)
```

### Objects

An object is a collection of key-value pairs. The key is a string and the value can be any valid JavaScript data type. You can access the value of an object property using either dot notation or bracket notation.

```jsx
// Object using object literal notation
const person = {
  name: 'John Doe',
  age: 30,
  city: 'New York'
};

// Accessing object properties
console.log(person.name); // John Doe
console.log(person['age']); // 30

// Adding or updating object properties
person.email = 'johndoe@example.com';
person['phone'] = '123-456-7890';
console.log(person); // { name: 'John Doe', age: 30, city: 'New York', email: 'johndoe@example.com', phone: '123-456-7890' }
```

### For Loops

For loops are used to iterate over arrays or any iterable object in JavaScript. There are different types of for loops available in JavaScript

```jsx
// For loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// For/in loop for iterating over object properties
const person = {
  name: 'John Doe',
  age: 30,
  city: 'New York'
};

for (let prop in person) {
  console.log(`${prop}: ${person[prop]}`);
}

// For/of loop for iterating over iterable objects
const fruits = ['apple', 'banana', 'orange'];

for (let fruit of fruits) {
  console.log(fruit);
}
// There is difference b/w for(let fruit in fruits) vs as shown above
// `for...in` is used to iterate over properties of objects whereas `for...of` will iterate over values

for(let fruit in fruits){
  console.log(fruit); // O/P: 0 1 2 
}

// forEach method for iterating over arrays
fruits.forEach((fruit, index) => {
  console.log(`${index}: ${fruit}`);
});
```

### While Loop

A while loop will execute a block of code repeatedly as long as the specified condition remains true.

```jsx
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
```

### Do-while Loop

A do-while loop is similar to a while loop, but it will always execute the code block at least once, even if the condition is false.

```jsx
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 10);
```

### Functions in JavaScript

Functions are reusable blocks of code that can be called with different arguments. They can return a value or modify variables outside of their scope.

```jsx
function add(a, b) {
  return a + b;
}

const result = add(2, 3);
console.log(result); // 5
```

### Default parameters

Default parameters allow you to specify a default value for a function parameter in case no argument is passed in.

```jsx
function greet(name = "World") {
  console.log(`Hello, ${name}!`);
}

greet(); // Hello, World!
greet("John"); // Hello, John!
```

### Arrow Functions

Arrow functions are a shorthand way of creating functions in JavaScript. They have a more concise syntax and do not bind their own **`this`**value.

```jsx
const add = (a, b) => a + b;

const result = add(2, 3);
console.log(result); // 5
```

### Map method

**`map()`** creates a new array by applying a function to each element of the original array.

```jsx
const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6]
```

### Filter method

**`filter()`** creates a new array containing only the elements that pass a specified test function.

```jsx
const numbers = [1, 2, 3];
const even = numbers.filter(num => num % 2 === 0);
console.log(even); // [2]
```

### Reduce method

**`reduce()`** applies a function to each element of an array, resulting in a single output value.
```jsx
const numbers = [1, 2, 3];
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // 6
```

## Learn More about JS from here:

[![JavaScript Tutorial for Beginners](https://img.youtube.com/vi/9Shi7sbrHqY/sddefault.jpg)](https://www.youtube.com/watch?v=9Shi7sbrHqY&ab_channel=VishalRajput "JavaScript Tutorial for Beginners")
