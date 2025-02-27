/*Assignment
Basic Array Methods :
1. Create an array of numbers from 1 to 10. Use the push() method to add the number 11 to the
array. */
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.push(11);
console.log(numbers);

/*2. Use the pop() method to remove the last element from an array of fruits. */
let fruits = ['apple', 'mango', 'cherry', 'grapes', 'banana'];
console.log('removed fruit: ', fruits.pop());
console.log(fruits);

/* 3. Use shift() to remove the first element from an array of colors.*/
let colors = ['blue', 'green', 'maroon', 'pink'];
console.log('Removed color: ', colors.shift());
console.log(colors);

/* 4. Use unshift() to add a new element to the beginning of an array of animals.*/
let animals = ['lion', 'tiger', 'cat', 'dog'];
animals.unshift("elephant");
console.log(animals);

/*5. Create an array of five strings. Use the indexOf() method to find the position of a specific
string in the array. */
console.log(animals.indexOf("cat"));

/*Iteration Methods :

6. Use the forEach() method to log each element of an array of numbers. */
numbers.forEach(function (number) {
    console.log(number);
});
/*7. Use map() to create a new array of squared numbers from an array of integers. */
let squaredNumbers = numbers.map(function (number) {
    return number * number;
});
console.log(squaredNumbers);   //[ 1,  4,  9, 16,  25, 36, 49, 64, 81, 100, 121 ]
/*8. Use filter() to create a new array containing only the even numbers from an array. */
let FilterEven = numbers.filter(function (number) {
    return number % 2 === 0;
});
console.log(FilterEven);

//or 
// let FilterEven = numbers.filter(number => number % 2 === 0);
// console.log(FilterEven);

/*9. Use reduce() to find the sum of all elements in an array. */
let nmbrs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let reduceElements = nmbrs.reduce(function (acc, number) {
    return acc + number;
}, 0);
console.log(reduceElements);

/*10. Use some() to check if there are any negative numbers in an array. */
let negNumb = [-9, -7, -5, -3, -1, 0, 3, 5, 7];
let findNeg = negNumb.some(function (number) {
    return number < 0;
});
console.log(findNeg);  //true.

/*11. Use every() to verify if all numbers in an array are greater than zero. */
let GreaterThanZero = negNumb.every(function (number) {
    return number > 0;
});
console.log(GreaterThanZero);  //false.

// Advanced Array Methods :

/* 12. Use find() to get the first element in an array that is greater than 50.*/
let numbs = [30, 45, 60, 85, 20];
function numbsFinding() {
    let result = numbs.find(function (num) {   //find returns the first occurence of the value next to the condition.
        return num > 50;
    });
    return result;
}
console.log(numbsFinding());  //60

/*13. Use findIndex() to get the index of the first element in an array that is divisible by 5. */
let numbers2 = [12, 24, 35, 40, 55, 60, 75];
function findDivisibleBy5() {
    let index = numbers2.findIndex(function (num) {
        return num % 5 === 0;
    });
    return index;
}
console.log(findDivisibleBy5());
/*14. Use includes() to check if a specific value exists in an array of names. */
// let animals = ['lion', 'tiger', 'cat', 'dog'];
function checkValue() {
    let check = animals.includes("lion"); {
        console.log(check);
    }
}
checkValue();  //true

//or 

function checkValue(value) {
    let exists = animals.includes(value);
    return exists;
}
console.log(checkValue("lion"));  //true

/*15. Use join() to combine an array of words into a single string with spaces in between. */
console.log(animals.join('_'));

/*16. Use concat() to merge two arrays of numbers into one. */
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
// const mergedArray = array1.concat(array2);
console.log(array1.concat(array2));

/*17. Use slice() to extract a portion of an array of letters from index 2 to 5. */
// let numbers = [1,2,3,4,5,6,7,8,9,10];
console.log(numbers.slice(2, 5));

/*18. Use splice() to add three new elements at the third index of an array of fruits. */
let Totalfruits = ['apple', 'mango', 'cherry', 'grapes', 'banana'];
Totalfruits.splice(3, 0, 'guava', 'pineapple', 'orange');
console.log(Totalfruits);

/*19. Use splice() to remove two elements starting from index 4 in an array of countries. */
let countries = ['india', 'america', 'pakistan', 'srilanka', 'australia', 'africa'];
let splicedCountry = countries.splice(4, 2);
console.log(splicedCountry);
console.log(countries.sort().reverse());

// Sorting and Reversing :

/*20. Use sort() to arrange an array of strings alphabetically. */
console.log(animals.sort());

/*21. Use sort() to sort an array of numbers in descending order. */
console.log(numbers.sort().reverse());

/*22. Use reverse() to reverse the order of elements in an array of numbers.  */
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers.reverse());  //[ 1, 10, 11, 2, 3, 4,  5,  6, 7, 8, 9 ]

/*Set-Like Methods :

23. Use flat() to flatten a nested array of numbers to a single level. */
let nestedArr = [1, 2, [3, 4, [5, 6, [7, 8, [9, 0]]]]];
console.log(nestedArr.flat(Infinity));  // [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

/*24. Use flatMap() to map each element of an array to a new value and flatten the result. */
let num1 = [1, 2, 3];
let res = num1.flatMap(num => [num, num * 2]);
console.log(res);

/*25. Use from() to create an array from a string of characters. */
let js = "javascript";
console.log(Array.from(js));

/*26. Use of() to create a new array from a list of individual arguments.*/
let numeric = Array.of(1, 2, 3, 4, 5, 6, 7);
console.log(numeric);  //[1, 2, 3, 4, 5, 6, 7] 

// Array Buffer Methods :

/*27. Use fill() to replace all elements in an array with the value "JavaScript".*/
let language = ['reactJs', 'html', 'css', 'python'];
console.log(language.fill('javascript', 0, 4)); //[ 'javascript', 'javascript', 'javascript', 'javascript' ]

/*28. Use copyWithin() to copy a sequence of array elements within the same array. */
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers.copyWithin(0, 3, 5));

/*29. Use isArray() to verify whether a given variable is an array. */
// const array1 = [1, 2, 3];
console.log(Array.isArray(array1));  //true

// Combining Methods :
/*30. Use map() and reduce() together to find the sum of squares of an array of numbers. */
// let nmbrs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sumOfSquares = nmbrs.map(function (number) {
    return number * number;
})
.reduce(function (acc, square) {
    return acc + square;
},0);
console.log(sumOfSquares);  //385

/*31. Use filter() and map() to create a new array of names that start with a specific letter,
transformed to uppercase. */
// let countries = ['india', 'america', 'pakistan', 'srilanka', 'australia', 'africa'];
// let countries = ['india', 'america', 'pakistan', 'srilanka', 'australia', 'africa'];
const specificLetter = "a";

const filteredAndUppercaseNames = countries
  .filter(name => name.trim().toLowerCase().startsWith(specificLetter.toLowerCase())) // Trim and check case-insensitively
  .map(name => name.toUpperCase());                                                  // Convert to uppercase

console.log(filteredAndUppercaseNames);




// 32. Use sort() and reverse() together to arrange an array in ascending order and then reverse it.
// let numeric = [1, 2, 3, 4, 5, 6, 7];
console.log(numeric.sort((a, b) => a - b).reverse());

// Practice with Multiple Arrays :
/*33. Create two arrays of student scores. Use concat() to combine them and reduce() to
calculate the average score. */
let mark1 = [75, 57, 93];
let mark2 = [89, 90, 67];
let total = mark1.concat(mark2);
// console.log(mark1.concat(mark2));
console.log(total);
let totalScore = total.reduce((acc, score) => acc + score, 0);
let averageScore = totalScore / total.length;
console.log("Total score: ", total);  //Total score:  [ 75, 57, 93, 89, 90, 67 ]        
console.log("Average score: ", averageScore);  //Average score:  78.5

/*34. Create an array of numbers and a second array of their corresponding square roots. Merge them
into an array of objects with properties number and sqrt. */
// let numbers = [1, 4, 9, 16, 25];  
let squareRoots = numbers.map(num => Math.sqrt(num));  // Array of square roots

// Merge them into an array of objects
let result = numbers.map((num, index) => {
    return {
        number: num,
        sqrt: squareRoots[index]
    };
});

console.log(result);

/*Challenge Tasks :
35. Implement a function that takes two arrays and returns a new array with unique elements present
in either array (union).  */
let Challenge1 = [1, 2, 3, 4, 5];
let Challenge2 = [2, 4, 6, 8];
let newChallenge = [...new Set(Challenge1.concat(Challenge2))];  //Set allows only unique values.(...spread operator used to convert it back to an array.)
console.log(newChallenge);







