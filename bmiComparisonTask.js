// Write a JavaScript function to compare the BMI (Body Mass Index) of two persons and determine who has a higher BMI. If their BMIs are equal, indicate that as well.
/*1. Create a function calculateBMI(weight, height) that calculates BMI using the formula:
 BMI = weight (kg) / height (m)^2 */

const person1 = { name: "Alice", weight: 68, height: 1.65 };
const person2 = { name: "Bob", weight: 85, height: 1.75 };

function calculateBMI(weight, height) {
    let BMI = weight / (height ** 2).toFixed(2);
    return BMI;
}
/*2. Create another function compareBMI(person1, person2) where:
 - person1 and person2 are objects containing name, weight, and height */
function compareBMI(person1, person2) {
    const bmi1 = calculateBMI(person1.weight, person1.height);
    const bmi2 = calculateBMI(person2.weight, person2.height);
    if (bmi1 > bmi2) {
        return `${person1.name}'s BMI(${bmi1}) is higher than ${person2.name}'s BMI (${bmi2}).`;
    } else if (bmi1 < bmi2) {
        return `${person2.name}'s BMI(${bmi2}) is higher than ${person1.name}'s BMI (${bmi1})`
    }
}
console.log(compareBMI(person1, person2));

/*Similar Coding Question:
Write a function to calculate the total weekly earnings of two employees and determine who earns more. If they earn the same, indicate it.
Steps to Solve:
Create a function calculateEarnings(hours, hourlyRate) that calculates earnings:
Earnings = hours × hourlyRate
Earnings=hours×hourlyRate
Create another function compareEarnings(employee1, employee2) where:
employee1 and employee2 are objects containing name, hoursWorked, and hourlyRate.
The function should:
Compute weekly earnings for each employee using calculateEarnings.
Compare their earnings.
Return a string stating:
Who earns more, or
If both earn the same. 
const employee1 = { name: "Alice", hoursWorked: 40, hourlyRate: 20 };
const employee2 = { name: "Bob", hoursWorked: 35, hourlyRate: 25 };
"Alice earns $800.00, which is more than Bob's $875.00."
OR
"Alice and Bob earn the same weekly amount of $800.00." */
const employee1 = { name: "Alice", hoursWorked: 40, hourlyRate: 20 };
const employee2 = { name: "Bob", hoursWorked: 35, hourlyRate: 25 };

function compareEarnings(employee1, employee2) {
    let calculateEmployee1Earning = employee1.hoursWorked * employee1.hourlyRate;
    let calculateEmployee2Earning = employee2.hoursWorked * employee2.hourlyRate;
    if (calculateEmployee1Earning > calculateEmployee2Earning) {
        return `${employee1.name} earns $${calculateEmployee1Earning}, which is more than ${employee2.name}'s $${calculateEmployee2Earning}.`
    } else if (calculateEmployee1Earning < calculateEmployee2Earning) {
        return `${employee2.name} earns $${calculateEmployee2Earning}, which is more than ${employee1.name}'s $${calculateEmployee1Earning}.`
    }
    else {
        return `${employee1.name} and ${employee2.name} earn the same weekly amount of $800.00.`
    }
}
console.log(compareEarnings(employee1, employee2));