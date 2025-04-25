/*Assignment
1. Convert and Combine Types :
 -> Declare a string "10" and a number 5. Add them together to see the result.
 -> Use typecasting to ensure the result is 15 (a number). 
*/
let a = "10";
let b = 5;
console.log(a + b); //output : 105
// typecasting - converting one data type to another using methods like Number(), String(), or Boolean().
console.log(parseInt(a) + b); //output : 15
console.log(Number(a) + b); //output : 15

/*2. Type Identification :
 -> Declare variables of the following types:
o String
o Number
o Boolean
o Undefined
o Null
 ->Use typeof to print the type of each variable. 
 */
let p = "Rajinikanth";
console.log(p);  //output : Rajinikanth
console.log(typeof p);  //output : string

let q = 57;
console.log(q);  //output : 57
console.log(typeof q); //output : number

let r = 3;
let s = 8;
console.log(r === s); //output : false
console.log(r < s);  //output : true

let t;
console.log(t); //output : undefined
console.log(typeof t); //output : undefined

let u = null;
console.log(u); //output : null
console.log(typeof u); //output : object

/*3. String to Number :
 ->Create a string "123.45".
 ->Convert it into:
o An integer
o A float
 ->Print the results with their types */
let num1 = "123.45";
//converting it into an integer and float: 
console.log(parseInt(num1));  //output : 123
console.log(parseFloat(num1));  //output : 123.45

/*4. Boolean Type Conversion :
 ->Given the values 0, "false", null, undefined, and [], convert each to a boolean using Boolean().
 ->Log the results. 
*/
console.log(Boolean(0));  //output : false
console.log(Boolean(false)); //output : false
console.log(Boolean(null)); //output : false
console.log(Boolean(undefined)); //output : false
console.log(Boolean([])); //output : true
console.log(Boolean(1)); //output : true
console.log(Boolean(true)); //output : true
console.log(Boolean(' ')); //output : true
console.log(Boolean(10.5)); //output : true
console.log(Boolean(" ")); //output : true

/*5. Template Literals with Type Coercion :
 ->Declare a variable age as 25 and name as "John".
 ->Use template literals to print "John is 25 years old" with proper type coercion.  */
let Name = "John";
let age = 25;
console.log(`${Name} is ${age} years old`); //output : Using template literals
console.log(Name + " is " + age + " years old "); //output : Using string concatenation

/*6. Automatic Type Conversion :
 ->Create the following expressions and log their results:
o "5" * 3
o "5" - 2
o "5" + 2
o "5" / 2
 ->Explain why the results differ. 
 */
let numb1 = "5" * 3;
console.log(numb1); //output : 15
let numb2 = "5" - 2;
console.log(numb2); //output : 3
let numb3 = "5" + 2;
console.log(numb3); //output : 52
let numb4 = "5" / 2;
console.log(numb4); //output : 2.5
/*   -> here js performs type coercion which means the automatic conversion of a value from one data type to another. 
     -> converts strings into numbers 
     -> the + operator performs string concatenation if the one operand is string. */

/*7. Parse and Compare Types :
 ->Parse the string "100px" into a number using parseInt.
 ->Compare the parsed value with the string "100" using both == and ===.
 ->Log the results and explain the difference. 
 */
let x = "100px";
console.log(parseInt(x)); //output : 100
console.log("100" == 100);  //output : true  --> here it compares the values after converting them to the same type.
console.log("100" === 100); //output : false --> here it compares both values and data type. so it is false.

/*8. NaN and Type Checking :
 ->Create a variable with the value of "hello" / 2.
 ->Check if the result is NaN using isNaN and Number.isNaN. Log the results. 
 */
let checkNum = "hello" / 2;
console.log(checkNum); //output : NaN
console.log(isNaN(checkNum)); //output : true
console.log(Number.isNaN(checkNum)); //output : true
console.log(Number(checkNum)); //output : NaN

/*9. Number to String Conversion :
 ->Declare a number 12345.
 ->Convert it into a string using:
    o The String() method
    o The .toString() method
 ->Log the results and their types.  */
let number = 12345;
console.log(String(number)); //output : 12345 -> converts number to a string. this is global function.
console.log(number.toString()); //output : 12345 -> converts the number to a string as well. but specifically on numbers.

/*10. Falsy and Truthy :
 ->Create an array with the following values: [0, "", null, undefined, "hello", 42, [], {}].
 ->Use if statements to check whether each value is truthy or falsy.
 -> Log the results with appropriate messages. */
var check = [0, "", null, undefined, "hello", 42, [], {}];
var check = [];
if (!check) {
    console.log(`${check} is falsy!`); //output : 0 is falsy.
} else {
    console.log(`${check} is truthy!`);
}

// console.log(age); //undefined
// // console.log(num5); //Cannot access 'num5' before initializion
// // console.log(sadhik);  //Cannot access 'num5' before initializion
// var age = 5;
// let num5 = 15;
// const sadhik = "bhaya";

// console.log(age); 
// console.log(num5); 
// console.log(sadhik);   
// let person = [fname= "Ak", lname = "kalam"];
// console.log(person.replace);

































