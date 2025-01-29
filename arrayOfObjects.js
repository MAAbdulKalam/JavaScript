/*Assignment
1. Given an array of student objects, write a function to sort the students in descending order based on their marks. */
let students = [
    { name: 'AshikG', class: 'Degree 3rd year', group: 'MPCs', section: 'A', marks: 97 },
    { name: 'AK', class: 'Degree 2rd year', group: 'BZC', section: 'A', marks: 88 },
    { name: 'Kisma', class: 'Degree 2rd year', group: 'MPCs', section: 'A', marks: 90 }
];

function sortingByMarks(students) {
    return students.sort((a, b) => b.marks - a.marks);
}
console.log(sortingByMarks(students));  // Sort in descending order 

/*2. Write a function that adds a new property (e.g., isAvailable: true) to all objects in
an array. */
function addPropertyToObject(array) {
    array.forEach(obj => {
        obj.isAvailable = true;  //add the new property to the each object
    });
    return array;
}

let items = [
    { itemNo: 1, name: 'phone', price: 10999 },
    { itemNo: 2, name: 'laptop', price: 44999 },
    { itemNo: 3, name: 'tablet', price: 27999 }
];

let updatedItems = addPropertyToObject(items);

console.log(updatedItems);

/*3. Write a function to group an array of people into categories based on their age
(child, adult, senior). */
function groupByAgeCategory(people) {
    let categories = {
        child: [],
        adult: [],
        senior: []
    };

    people.forEach(person => {
        if (person.age <= 12) {
            categories.child.push(person);
        }
        else if (person.age <= 60) {
            categories.adult.push(person);
        }
        else {
            categories.senior.push(person);
        }
    });
    return categories;
}

let people = [
    { name: 'aleem', age: '10' },
    { name: 'ak', age: '23' },
    { name: 'nani ma', age: '75' }
];

console.log(groupByAgeCategory(people))

/*4. Write a function to count how many times a specific value (e.g., a role) appears
in an array of objects. */

function countValueInObjects(array, key, value) {
    let count = 0;

    array.forEach(obj => {
        if (obj[key] === value) {
            count++;
        }
    });
    return count;
}
let employees = [
    { name: 'ak', role: 'developer' },
    { name: 'isha', role: 'designer' },
    { name: 'ahmed', role: 'developer' },
    { name: 'hameeda', role: 'manager' },
    { name: 'ashik', role: 'developer' }
];

let roleCount = countValueInObjects(employees, 'role', 'developer');
console.log(`The role 'developer' appears ${roleCount} times.`);

/*5. Write a function to find the object with the maximum or minimum value of a
specific property (e.g., highest salary). */
function findMaximumValue(array, key, findMaximum = true) {
    if (array.length === 0)
        return null;  //handle empty array case.

    return array.reduce((extreme, current) => {
        if (findMaximum) {
            return current[key] > extreme[key] ? current : extreme;
        }
        else {
            return current[key] < extreme[key] ? current : extreme;
        }
    });
}

const emp = [
    { name: 'ak', salary: 50000 },
    { name: 'shabbu', salary: 75000 },
    { name: 'lalla', salary: 60000 },
    { name: 'aymen', salary: 90000 }
];

const HighestSalaryEmp = findMaximumValue(emp, 'salary', true);
const lowestSalaryEmp = findMaximumValue(emp, 'salary', false);

console.log("highest salary of the employee : ", HighestSalaryEmp);
console.log("lowest salary of the employee : ", lowestSalaryEmp);

/*6. Write a function to remove duplicate objects from an array based on a specific
property (e.g., id). */
let hardware = [
    { id: 1, name: 'phone', price: 10999 },
    { id: 2, name: 'laptop', price: 44999 },
    { id: 3, name: 'tablet', price: 27999 },
    { id: 3, name: 'charger', price: 999 },
    { id: 4, name: 'boAt', price: 2999 },
    { id: 5, name: 'pouch', price: 199 }
];

function checkDuplicate() {
    const uniqueitems = hardware.filter((item, index, self) => {
        return index === self.findIndex((t)=> (
            t.id === item.id 
        ));
    });
    return uniqueitems;
}
const uniqueHW = checkDuplicate(hardware);
console.log(uniqueHW);

/*7. Write a function to generate a summary report from an array of transactions,
including total transactions and total revenue. */
function generateSummaryReport(transactions) {
    

    const totalTransaction = transactions.length;

    const totalRevenue = transactions.reduce((sum, transactions) => sum + transactions.amount, 0 );
    return{
        totalTransaction: totalTransaction,
        totalRevenue: totalRevenue
    };
}
const transactions = [
    { id: 1, description: 'Sale 1', amount: 100 },
    { id: 2, description: 'Sale 2', amount: 200 },
    { id: 3, description: 'Sale 3', amount: 150 }
];

const summaryReport = generateSummaryReport(transactions);
console.log(summaryReport);

/*8. Write a function to find all tasks that are overdue based on their dueDate. */
function findOverdueTasks(tasks) {
   const today = new Date;
   const overdueTasks = tasks.filter(task => {
    const dueDate = new Date(task.dueDate);
    return dueDate < today;
   });
   return overdueTasks;
}
const tasks = [
    { id: 1, name: 'Task 1', dueDate: '2024-12-12' },
    { id: 2, name: 'Task 2', dueDate: '2024-12-19' },
    { id: 3, name: 'Task 3', dueDate: '2024-12-25' }
];
const overdueTasks = findOverdueTasks(tasks);
console.log(overdueTasks);

/*9. Create a search function that finds objects in an array by matching any property
(case-insensitive). */
function searchObjects(array, searchTerm) {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return array.filter(obj => {
        return Object.values(obj).some(value =>
            String(value).toLowerCase().includes(lowerCaseSearchTerm)
        );
    });
}

const data = [
    { id: 1, name: 'shiny', role: 'Developer' },
    { id: 2, name: 'shabbu', role: 'Designer' },
    { id: 3, name: 'pandu', role: 'Manager' }
];1

const results = searchObjects(data, 'dev');
console.log(results); // Output: [{ id: 1, name: 'Alice', role: 'Developer' }]

/*10.Write a function to find all records in an array where a specific property is
missing or null. */
function findRecordProperty(array, property) {
    return array.filter(item => !(property in item) || item[property] === null);
} 

const data2 = [
    { id: 1, name: 'ak', role: 'Developer' },
    { id: 2, name: 'balaji' }, // 'role' property is missing
    { id: 3, name: 'kisma', role: null }, // 'role' is explicitly set to null
    { id: 4, name: 'munisekhar', role: 'Manager' }
];

const recordWithMissingArray = findRecordProperty(data2, 'role');
console.log(recordWithMissingArray);

/*11.Given an array of product reviews, write a function to calculate the average rating
of a product. */
function averageRatings(reviews) {
    if (reviews.length===0) 
        return 0;
    const totalRating = reviews.reduce((sum, ratings) => 0, reviews.rating);
    return  totalRating / reviews.length;
}

const reviews = [
    { user: 'ak', rating: 4 },
    { user: 'isha', rating: 5 },
    { user: 'ahmed', rating: 3 }
];
const AvgRatingsOfProduct = averageRatings(reviews);
console.log(AvgRatingsOfProduct);

/*12.Write a function to calculate the total inventory value based on the price and
quantity of each product.  */
function totalInventory(products) {
   return products.reduce((total, product) => total + (product.price * product.quantity),0);
}

const products = [
    { pro1: 'soap', price: 40 , quantity: 100 },
    { pro2: 'brush', price: 25  , quantity: 25 },
    { pro3: 'toothpaste', price: 30 , quantity: 50  }
];

const totalValue = totalInventory(products);
console.log(`Total Inventory Value: ₹${totalValue}`);


