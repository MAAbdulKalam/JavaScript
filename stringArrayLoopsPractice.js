/*String Methods & Functions :
How do you find the length of a string in JavaScript? Provide an example. */
let message = "Hello world, My name is AK and i love cats & cats are very beautiful!";
console.log(message.length);

/*What is the difference between slice(), substring(), and substr()? Explain with examples. */
console.log(message.slice(0, 5)); //slice(start, end) slice out the particular string into a new string.
console.log(message.substring(0, 11)); //substring(start , end).
console.log(message.substr(5, 12));  //substr ( from, length) ..Gets a substring beginning at the specified location and having the specified length.

/*Write a function that takes a string and returns it reversed.*/
function reversedString(str) {
    return str.split('').reverse().join(''); //Split string into array, reverse it, and join it back to a string.
}
message = reversedString(message);
console.log(message);

/*How can you convert a string to uppercase and lowercase in JavaScript? */
console.log(message.toUpperCase()); //Converts all the alphabetic characters in a string to uppercase.
console.log(message.toLowerCase()); //Converts all the alphabetic characters in a string to lowercase.

/*How do you replace a substring in a string? What is the difference between replace() and replaceAll()? */
console.log(message.replace("AK", "M A Abdul Kalam")); // A string containing the text to replace.
console.log(message.replaceAll("cats", "Dogs")); // A string containing the text to replace for every successful match of searchValue in this string

/*Array Methods & Functions :
What is the difference between push() and pop() in arrays? Provide an example. */
let fruits = ["Apple", "Mango", "Banana", "Orange"];
console.log(fruits.push("Grapes")); //Appends new elements to the end of an array, and returns the new length of the array.
console.log(fruits); //Grapes added at the end of the array.

console.log(fruits.pop()); //Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
console.log(fruits);  //Grapes has been removed from the array.

/*How do you iterate over an array using forEach()? Write an example to print each element of an array. */
fruits.forEach(fruit => {
    console.log(fruit); // Print each element in the array
});

/*What is the use of the join() method in arrays? Write an example to join array elements into a string.*/
console.log(fruits.join()); // A string used to separate one element of the array from the next in the resulting string. If omitted, the array elements are separated with a comma.

/*Loops :
What is the difference between for, while, and do...while loops in JavaScript? Provide examples. */
for (let x = 1; x <= 5; x++) {
    console.log(x);
}

let y = 1;
while (y <= 5) {
    y++
}
console.log(y); //6

let p = 2;
let q = 0;
let r;
do {
    r = p + q;
    q++;
} while (r <= 10);
console.log(r); //11

/*Write a for loop to print numbers from 1 to 10. */
for (let index = 1; index <= 10; index++) {
    console.log(index);  //1, 2, 3, 4, 5, 6, 7, 8, 9, 10
}

/*Explain the difference between for...of and for...in loops with examples. */
let subject = "Javascript";
let text = " ";
let Numbers = [5, 7, 3, 8, 57, 75];

// Using for...of to iterate over characters in a string
for (const sampleX of subject) {
    text += sampleX;
    console.log(sampleX); // Prints each character in the string
}

// Using for...of to iterate over values in an array
for (const sampleY of Numbers) {
    text += sampleY;
    console.log(sampleY); // Prints the values in the array (5, 7, 3, 8, 57, 75)
}

/*Write a program using a while loop to calculate the factorial of a given number.*/
// Program to calculate factorial using while loop

// Input: Get a number from the user
// let number = parseInt(prompt("Enter a positive integer: "));

// // Initialize variables
// let factorial = 1;
// let i = 1;

// // Calculate factorial using a while loop
// while (i <= number) {
//     factorial *= i;
//     i++;
// }

// // Output the result
// console.log(`The factorial of ${number} is ${factorial}`);

/*How do you use the break and continue statements in loops? Write examples for both. */
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log(`${i} is === ${i}`);
        break;
    }
    console.log(i);
}

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue; //skip the even numbers
    }
    console.log(i)
}

for (let i = 1; i <= 10; i++) {
    if (i % 3 === 0) {
        console.log("skipping the number divisible by 3:", i);
        continue;
    }
    else if (i > 6) {
        console.log("stopping the loop at i =", i);
        break;
    }
    console.log(i);
}
/*Explain the difference between map() and filter() methods in arrays with examples.*/
let numSearch = [1, 2, 3, 4, 5];
//map() :
const doubled = numSearch.map(num => num * 2);
console.log(doubled);
console.log(numSearch);

//filter() :
const filtered = numSearch.filter(num => num%2===0);
console.log(filtered); 
console.log(numSearch); 

//Both methods can be combined for more complex operations :
const doubledEven = numSearch.map(num => num*2).filter(num => num%2===0);
console.log(doubledEven);
console.log(numSearch); 



























