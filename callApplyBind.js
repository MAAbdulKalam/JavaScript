/*Assignment
1. Simple Method Borrowing:
Write two objects with a common method. Use the call method to borrow the method
from one object and execute it in the context of the other object. */
const person1 = {
    firstName: 'Abdul',
    lastName: 'Kalam'
};
// calling this function ...
let printFullName = function (hometown, state) {
    console.log("I'm " + this.firstName + " " + this.lastName + " from " + hometown + ", " + state);
}

printFullName.call(person1, 'Nagari', 'Andhra Pradesh');

const person2 = {
    firstName: 'Mohmad',
    lastName: 'Ashik'
};

// function borrowing ...
printFullName.call(person2, 'Hi-Tech City', 'Telangana');  //call method
printFullName.apply(person2, ['Hi-Tech City', 'Telangana']);  //apply method
let printDetails = printFullName.bind(person2, 'Hi-Tech City', 'Telangana'); //bind method
console.log(printDetails);
printDetails();

/*2. Function with Parameters:
Create a function that takes multiple arguments. Use the call method to invoke it with
different objects and pass the arguments explicitly. */
function printMyDetails(name, age, address) {
    console.log(`My name is ${name}, I am ${age} years old, and I live in ${address}.`);
}
printMyDetails.call(null, 'ak', 23, 'chittoor') //no object..so null here.
printMyDetails.call(null, 'Mohmad Ashik', 24, 'Hi-Tech City');

/*3. Using call for Polymorphism:
Create a parent object with a method and invoke it on a child object using call. */
// Parent object with a method : 
const parentObj = {
    showDetails: function () {
        console.log(`My name is ${this.name}, and I have completed my graduation in ${this.education} in the year ${this.GraduateYear}`);
    }
}
// Child object with a method : 
const childObj = {
    name: 'shiny',
    education: 'B.Com (CA)',
    GraduateYear: 2024
}
// Invoking the parent method using `call` on child objects : 
parentObj.showDetails.call(childObj);  //"My name is Shiny, and I have completed my graduation in B.Com (CA) in the year 2024."

/*4. Dynamic Context Switching:
Write a generic greet function. Use call to dynamically switch between greeting
multiple user objects. */
function greet(greeting) {
    console.log(`${greeting}, ${this.name}`);
}
const user1 = { name: 'Kisma' };
const user2 = { name: 'Balaji' };
const user3 = { name: 'Giri' };

greet.call(user1, 'Hello');
greet.call(user2, 'Hi');
greet.call(user3, 'Welcome');

/*5. Math Operations:
Create a function to calculate the area of a rectangle. Use call to invoke it with
different objects containing length and width properties. */
function calculateArea() {
    return this.length * this.width;
}
const rectangle1 = { length: 10, width: 20 };
const rectangle2 = { length: 5, width: 10 };
const rectangle3 = { length: 2, width: 5 };

const area1 = calculateArea.call(rectangle1);
const area2 = calculateArea.call(rectangle2);
const area3 = calculateArea.call(rectangle3);

console.log(area1);   //200
console.log(area2);   //50
console.log(area3);   //10

/*6. Simple Argument Array:
Create a function that calculates the sum of an array. Use apply to pass the array as an
argument. */
const calculate = {
    sumCalculate: function () {
        return this.reduce((sum, num) => sum + num, 0);
    }
}
const arr1 = [20, 40, 60];
const arr2 = [10, 20, 30];

const sum1 = calculate.sumCalculate.apply(arr1);
const sum2 = calculate.sumCalculate.apply(arr2);

console.log(`sum of the arr1 is ${sum1}`);
console.log(`sum of the arr2 is ${sum2}`);

/*7. Min/Max Finder:
Write an array of numbers and use Math.min and Math.max with apply to find the
minimum and maximum values. */
const numbers = [1, 2, 3, 4, 5];

console.log(Math.max(...numbers));   //The spread syntax is a shorter way of writing the apply
console.log(Math.min(...numbers));

function getMaxOfArray(num) {      //finding max Array value using apply method.
    return Math.max.apply(null, num); //The first argument of apply is the value of this. bcuz, null is safe.
}

console.log(getMaxOfArray([1, 2, 3]));

function getMinOfArray(num) {      //finding min Array value using apply method.
    return Math.min.apply(null, num);
}
const numbers1 = [11, 21, 13, 43, 5];
console.log(getMinOfArray(numbers1));

/*8. Merging Arrays:
Write a function to merge two arrays. Use apply to dynamically merge multiple arrays
using the concat method. */

// const mergingArr = {
//     concatMethod : function () {
//         const concatArrays = num1.concat(num2);
//         return concatArrays;
//     }
// };
// const num1 = [1,2,3,4,5];
// const num2 = [6,7,8,9];

// const Combine1 = mergingArr.concatMethod.apply(num1);

// console.log(Combine1);

const mergingArr = {
    concatMethod: function (...arrays) {   //The arrays parameter is spread to allow dynamic merging of any number of arrays.
        return Array.prototype.concat.apply(this, arrays);
    },
};
const num1 = [1, 2, 3, 4, 5];
const num2 = [6, 7, 8, 9];
const num3 = [10, 11, 12];

const Combined = mergingArr.concatMethod.apply(num1, [num2, num3]);
console.log(Combined);

/*9. Using apply for String Operations:
Create a function that counts the occurrences of a character in a string. Use apply to
invoke the function with strings of different lengths. */
const CountOfChars = {
    CharacterCount: function (char) {
        return this.split('').filter((c) => c === char).length;
    },
};

const string1 = 'Abdul kalam';
const string2 = 'Missile Man';

const countInString1 = CountOfChars.CharacterCount.apply(string1, ['a']);
const countInString2 = CountOfChars.CharacterCount.apply(string2, ['e']);

console.log(countInString1);   //2
console.log(countInString2);   //1

/*10. Dynamic Invocation:
Write a generic calculate function and use apply to pass different sets of numbers for
calculations dynamically. */
const genericCalculate = {
    calculations: function (operation, numbers) {
        return operation(numbers);
    },
};

const numb1 = [2, 4, 6];
const numb2 = [1, 3, 5, 7];

function sum(numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}

function product(numbers) {
    return numbers.reduce((acc, num) => acc * num, 1);
}

const sumOfNumbers1 = genericCalculate.calculations(sum, numb1);
const productOfNumbers2 = genericCalculate.calculations(product, numb2);

console.log(`Sum of numbers1: ${sumOfNumbers1}`);
console.log(`Product of numbers2: ${productOfNumbers2}`);

/*11. Partial Application:
Write a multiply function. Use bind to create a new function that always multiplies by
a fixed number (e.g., multiplyByFive). */
let multiply = function (x, y) {
    console.log(x * y);
}
let multiplyByFive1 = multiply.bind(null, 5);  // Fix x as 5
let multiplyByFive2 = multiply.bind(null, 5);
let multiplyByFive3 = multiply.bind(null, 5);

multiplyByFive1(5);
multiplyByFive2(2);
multiplyByFive3(1);

/*12. Event Handling:
Attach a click event to a button. Use bind to pass additional arguments to the event
handler.*/

/*13. Method Binding in Classes:
Create a class with a method. Use bind to ensure the method retains the correct context
when passed as a callback. */

/*14. Currying with bind:
Create a function that takes three parameters. Use bind to prefill some parameters and
return a new function.*/
// Step 1: Create a function that takes three parameters.
function CurryingWithBind(greet, name, punctuations) {
    return `${greet}, ${name}${punctuations}`;
}
const ex1 = CurryingWithBind.bind(null, 'hello');  // Step 2: Use bind to prefill some parameters.
const ex2 = CurryingWithBind.bind(null, 'Assalamalaikum', 'Ammi');

console.log(ex1('AK', '!'));   // Step 3: Call the returned functions with the remaining parameters.
console.log(ex2('!'));

/*15. Setting this in Timers:
Write an object with a method and use bind to ensure it can access its context correctly
inside setTimeout. */
const myObj = {
    name: 'ak',
    age: 23
};
const myBoundMethod = function (objProp) {
    console.log(arguments.length > 0 ? this[objProp] : this);
}.bind(myObj);
myBoundMethod();   //calls directly ...Logs the entire object: { name: 'ak', age: 23 }
myBoundMethod('name'); //ak.
// setTimeout(() => myBoundMethod('age'), 1000);  // 23 (after 1 second).

/*16. Combining call, apply, and bind:
Write a logging function. Use call, apply, and bind to dynamically switch between
different objects and scenarios.*/
function greet(greeting, punctuation) {
    console.log(`${greeting}, ${this.name}${punctuation}`);
}
const people1 = { name: 'Ahmed Bhasha' };
const people2 = { name: 'Hameeda Bhanu' };

greet.call(people1, 'Hello', '!');
greet.call(people2, 'Hi', '...');

greet.apply(people1, ['Good Morning', '.']);
greet.apply(people2, ['Good Evening', '!!!']);

const greetAhmed = greet.bind(people1, 'Assalamalaikkum');
greetAhmed(' Ji!');

/*17. Inheritance Simulation:
Create a parent function and simulate inheritance using call and bind. */
// parent Function : 
function parentFunction(name, age) {
    this.name = name;
    this.age = age;
}
parentFunction.prototype.greet = function () {
    console.log(`Hello, my name is ${this.name}, and I am ${this.age} years old.`);
};
// Child Function : 
function childFunction(name, age, grade) {
    parentFunction.call(this, name, age);
    this.grade = grade;
};

childFunction.prototype = Object.create(parentFunction.prototype);
childFunction.prototype.constructor = childFunction;

childFunction.prototype.study = function () {
    console.log(`${this.name} is studying in ${this.grade}.`);
};

const child1 = new childFunction("AK", 15, "10th Grade");
const child2 = new childFunction("Kalam", 10, "5th Grade");

child1.greet();
child1.study();

child2.greet();
child2.study();

/*18. Chaining Contexts:
Write a function and chain multiple call and apply invocations to demonstrate
dynamic context switching.*/
function displayFullName(prefix, suffix) {
    console.log(`${prefix} ${this.fname} ${this.lname} ${suffix}`);
}

const context1 = { fname: 'ak', lname: 'Shaik' };
const context2 = { fname: 'Shiny', lname: 'Shaik' };

displayFullName.call(context1, 'Hello', '!');
displayFullName.call(context2, 'Hi', '...');

displayFullName.apply(context1, ['greetings', 'dear!']);
displayFullName.apply(context2, ['welcome', 'dear!']);

/*19. Function Borrowing with Predefined Context:
Borrow a method from one object using call or apply and create a bound version using
bind. */
const Myname = function borrowing() {
    console.log(`My name is ${this.name} and i'm from ${this.from}`);
}
const Myself = {name : 'Abdul Kalam', from : 'Chittoor Dist.'};

Myname.call(Myself); // Output: My name is Abdul Kalam and I'm from Chittoor Dist.
Myname.apply(Myself); // Output: My name is Abdul Kalam and I'm from Chittoor Dist.

const boundMyname = Myname.bind(Myself);

boundMyname(); // Output: My name is Abdul Kalam and I'm from Chittoor Dist.

/*20. Performance Comparison:
Write a benchmark to compare the performance of call, apply, and bind in a repetitive
task. */
function displayFullName(prefix, suffix) {
    console.log(`${prefix} ${this.fname} ${this.lname} ${suffix}`);
}
const content1 = { fname: 'ak', lname: 'Shaik' };
const content2 = { fname: 'Shiny', lname: 'Shaik' };

console.time('call');
for (let i = 0; i < 10; i++) {
    displayFullName.call(content1, 'Hello', '!');
    displayFullName.call(content2, 'Hi', '...');
}
console.timeEnd('call');

console.time('apply');
for (let i = 0; i < 10; i++) {
    displayFullName.apply(content1, ['greetings', 'dear!']);
    displayFullName.apply(content2, ['welcome', 'dear!']);
}
console.timeEnd('apply');

console.time('bind');
const boundFunction = displayFullName.bind(content1);
for (let i = 0; i < 10; i++) {
    boundFunction('Hello', '!');
}
console.timeEnd('bind');
