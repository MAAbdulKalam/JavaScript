// check if a number is even or odd using the ternary operator.
let num = 56;
let check = (num%2===0)? "Even" : "Odd" ; 
console.log(check);

// if a person is old enough to vote (age 18 or above) using a ternary operator.
let age = 23;
let Vote=(age>=18)? "eligible" : "not eligible";
console.log(Vote);

// Check if a number is positive, negative, or zero using a ternary operator.
let checking=(num>0)? "+ve" : (num<0)? "-ve" : "0";
console.log(checking);

// Check if a student passed or failed based on their marks using a ternary operator.
// Passing marks are 40 or above.
let marks = 75;
let result= (marks>=40)? "pass" : "fail";
console.log(result);

// Check if a number is divisible by 5 using a ternary operator.
let divisible= (num%5 ===0)? "Divisible by 5" : "Not divisible by 5";
console.log(divisible);

// Check if a number is divisible by 7 using a ternary operator.
let modulus= (num%7===0)? "Divisible by 7" : "Not Divisible by 7";
console.log(modulus);

// check a person is a minor or an adult based on their age using a ternary operator.
let ak = 23;
let akAge= (ak>=18)? "Adult" : "Minor" ;
console.log(akAge);

// Check if a year is a leap year or not using a ternary operator.
let year = 1996;
let isLeapYear= (year%4===0 && (year%100 !==0 || year%400===0)) ? "Leap Yr" : "Not a Leap";
console.log(isLeapYear);


