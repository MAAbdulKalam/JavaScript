/*Assignment
1. Current Date and Time: Write a program to display the current date and time in the format YYYY-MM-DD HH:mm:ss. */
const now = new Date();
// Extract components : 
const year = now.getFullYear();
const month = now.getMonth() + 1;
const day = now.getDate();
const hours = now.getHours();
const min = now.getMinutes();
const sec = now.getSeconds();
// const ms = now.getMilliseconds();
console.log(`${year}-${month}-${day} ${hours}:${min}:${sec}`);

/*2. Day of the Week: Create a function that takes a date as input and returns the day of the week (e.g., "Monday"). */
function DayOfTheWeek(date) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayIndex = date.getDay();
    return days[dayIndex];
}
const today = new Date();
console.log(DayOfTheWeek(today));

/*3. Days Between Two Dates: Write a function to calculate the number of days between two given dates. */
function CalculatebetweenTwoDays() {
    const StartDate = new Date('2024-12-20');
    const endDate = new Date('2024-12-27');

    const timeDifference = endDate - StartDate;  //converting to milliseconds.
    const daysDifference = timeDifference / (1000 * 3600 * 24);  //converting milliseconds to days.
    return daysDifference;
}
const GapBetweenDates = CalculatebetweenTwoDays();
console.log(`The number of days between two given dates : ${GapBetweenDates} days.`);

/*4. Add Days to Date: Write a function that takes a date and a number of days as input and
returns a new date after adding the specified days. */
function addDaystoDate(date, daysToAdd) {
    const newDate = new Date(date);  //copy of original date.
    newDate.setDate(newDate.getDate() + daysToAdd); //adding the days
    return newDate;
}
const currentDate = new Date('2024-12-27');
const newDate = addDaystoDate(currentDate, 7);
console.log(newDate);

/*5. Age Calculator: Write a program that calculates a person's age based on their birthdate. */
function AgeCalculator() {
    const birthDate = new Date('2005-05-05');  //19.65
    const currentDate = new Date();

    const timeDifference = currentDate - birthDate;
    const yearsDifference = timeDifference / (1000 * 3600 * 24 * 365.25);  //considering leap years.
    return yearsDifference;
}
const calculateMyAge = AgeCalculator();
console.log(`My age is : ${calculateMyAge.toFixed(2)}`);

/*6. Time Since: Create a program that shows how many years, months, and days have passed since a given date. */
function timeSince() {
    const givenDate = new Date('2001-10-26');
    const currentDate = new Date();

    const timeDifference = currentDate - givenDate;
    const daysDifference = timeDifference / (1000 * 3600 * 24);
    const years = Math.floor(daysDifference / 365.25);
    const months = Math.floor((daysDifference % 365.25) / 30.44);
    const remainingDays = Math.floor((daysDifference % 365.25) % 30.44);  //remaining days after subtracting years and months.
    return `${years} years, ${months} months, and ${remainingDays} days`;
}
const betweenDays = timeSince();
console.log(`Gap b/w the given date is: ${betweenDays}.`);

/*7. Date Formatter: Write a function to format a given date into DD/MM/YYYY format. */
function DateFormatter(date) {
    const d = date.getDate();
    const m = date.getMonth() + 1; // Get the month (0-based, so add 1)
    const y = date.getFullYear();

    return `${d}/${m}/${y}`;
}
const specificDate = new Date("2024-12-27");
console.log(DateFormatter(specificDate));

/*8. Leap Year Checker: Write a function that checks if a given year is a leap year. */
function leapYearChecker(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return `${year} is a leap year!`;
    } else {
        return `${year} is not a leap year!`
    }
};
console.log(leapYearChecker(2024));
console.log(leapYearChecker(2023));
console.log(leapYearChecker(2020));

/*9. Countdown Timer: Create a program to display the countdown to a future event (e.g., New Year’s Day). */
// function countdownTimer() {
//     const futureEventDate = new Date('2025-01-01T00:00:00');  // New Year's Day 2025
//     const interval = setInterval(function() {
//         const currentDate = new Date();
//         const timeDifference = futureEventDate - currentDate;
//         if (timeDifference <= 0) {
//             clearInterval(interval);
//             console.log('The event has started!');
//             return;
//         }
//         // Calculate days, hours, minutes, and seconds
//         const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
//         const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
//         const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

//         console.log(`${days}d ${hours}h ${minutes}m ${seconds}s`);

//     }, 1000);  // 1000 milliseconds = 1 second.
// }
// countdownTimer();

/*10. Compare Dates: Write a function to check whether one date is before or after another date. */
function compareDates() {
    const checkDate1 = new Date('2023-09-04');
    const checkDate2 = new Date('2023-10-26');

    if (checkDate1.getTime() > checkDate2.getTime()) {
        return `The ${checkDate1} will come after the ${checkDate2}`;
    } else if (checkDate1.getTime() < checkDate2.getTime()) {
        return `The ${checkDate1} will come before the ${checkDate2}`;
    } else {
        return `Both the ${checkDate1} & ${checkDate2} are equal.`;
    }
}
console.log(compareDates());

/*11. Find the Maximum and Minimum: Write a program to find the maximum and
minimum numbers in an array using Math.max() and Math.min(). */
function findMaxAndMin(numbs) {
    const MaxNum = Math.max(...numbs);
    const MinNum = Math.min(...numbs);

    return { MaxNum, MinNum };
}
const numbs = [1, 2, 3, 4, 5];
console.log(findMaxAndMin(numbs));   // and also we can easily code with one more method also ..that is ...

function maxAndMin(digits) {
    return [maxDig = Math.max(...digits), minDig = Math.min(...digits)];
}
const res = maxAndMin([1, 2, 3, 4, 5, 6, 7]);
console.log(`Maximum: ${res[0]} & Minimum: ${res[1]}.`);

/*12. Circle Area and Circumference: Create a function to calculate the area and 
circumference of a circle given its radius.*/
function calculateArea(radius) {
    const area = Math.PI * radius * radius;  //area = = πr²
    const circumference = 2 * Math.PI * radius; //circumference = 2πr
    return { area, circumference };
}
const radius = 3;
const result = calculateArea(radius);
console.log(`For a circle with radius ${radius}:`);
console.log(`Area: ${result.area.toFixed(2)}`); // Rounded to 2 decimal places
console.log(`Circumference: ${result.circumference.toFixed(2)}`);

/*13. Random Number Generator: Write a function to generate a random number between two given numbers. */
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let a = 1;
let b = 100;
let randomNum = generateRandomNumber(a, b);
console.log(`Random number between ${a} and ${b} is - ${randomNum}`);

/*14. Decimal Rounding: Write a function that rounds a given number to the nearest integer,
one decimal place, and two decimal places. */
function decimalRounding(number1) {
    const nearestInt = Math.round(number1);
    const oneDecimal = Math.round(number1 * 10) / 10;
    const twoDecimal = Math.round(number1 * 100) / 100;
    return {
        nearestInt,
        oneDecimal,
        twoDecimal,
    };
}
const number1 = 5.574;
const resultedNumbers = decimalRounding(number1);
console.log(`The original number is ${number1}.`)
console.log(`Nearest integer : ${resultedNumbers.nearestInt}.`);
console.log(`One decimal place : ${resultedNumbers.oneDecimal}.`);
console.log(`Two decimal place : ${resultedNumbers.twoDecimal}.`);

/*16. Password Generator: Write a program to generate a random password of a given
length using letters, numbers, and special characters. */
function generatePassword(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';
    let password = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
}
const passwordLength = 12;
const password = generatePassword(passwordLength);
console.log(`Generated password : ${password}`);

/*17. Random Color Generator: Write a function to generate a random RGB color code (e.g., rgb(123, 45, 67)). */
function generaterandomRGBcolor() {
    const R = Math.floor(Math.random() * 256);
    const G = Math.floor(Math.random() * 256);
    const B = Math.floor(Math.random() * 256);

    return `RGB ${R}, ${G}, ${B}`;
}
const randomColor = generaterandomRGBcolor();
console.log(`Random RGB color code: ${randomColor}`);

/*18. Lottery Number Picker: Create a program to generate a list of 6 unique random numbers for a lottery ticket.*/
function generateLotteryNumberPicker() {
    const randomNumb = new Set(); //uniqueness

    while (randomNumb.size < 6) {
        const randomValue = Math.floor(Math.random() * 50) + 1; //range b/w 1-50.
        randomNumb.add(randomValue); //Add the number to the set (duplicate will ignore).
    }
    return Array.from(randomNumb);  //converting set to an array.
}
const lotteryNumber = generateLotteryNumberPicker();
console.log(`Lottery numbers are: ${lotteryNumber.join(", ")}`);

/*19. Flip a Coin: Write a program to simulate a coin flip and return "Heads" or "Tails". */
function flipCoin() {
    const resultOfCoin = Math.random() < 0.5 ? 'Heads' : 'Tails';
    return resultOfCoin;
}
const coinGame = flipCoin();
console.log(`The coin flips to ${coinGame}`);

/*20. Generate Random Hex Color: Write a function to generate a random hexadecimal color code (e.g., #a3f4b2). */
function randomHexColor() {
    const firstTwo = Math.floor(Math.random() * 255).toString(16).padStart(2, '0');
    const middleTwo = Math.floor(Math.random() * 255).toString(16).padStart(2, '0');
    const endTwo = Math.floor(Math.random() * 255).toString(16).padStart(2, '0');

    return `#${firstTwo}${middleTwo}${endTwo}`;
}
const randomHexadecimalColor = randomHexColor();
console.log(`Random hexadecimal color: ${randomHexadecimalColor}`);

/*toString(16):

The .toString(16) method converts a number into hexadecimal (base-16 format). In hexadecimal, numbers are represented using 0-9 and A-F. So, when a number between 0 and 15 is converted:
Numbers 0-9 will be represented as 0-9.
Numbers 10-15 will be represented as A-F (for example, 10 becomes A, 15 becomes F). */

/*padStart(2, '0'):

The padStart(2, '0') method ensures that the string has a length of at least 2 characters. If the string is shorter than 2 characters, it will add padding at the start of the string with '0' (or any other character you specify).
This is important because when converting a number to hexadecimal, you might get a 1-character result (for example, a for 10 or f for 15), but color codes always need 2 characters. */


