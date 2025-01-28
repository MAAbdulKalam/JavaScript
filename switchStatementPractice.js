// Check the day is monday!!? 
let Day = "Monday";
switch (Day) {
    case 'Monday':
        console.log("WakeUp at 7AM!");
        break;
    case 'Tuesday':
    case 'Wednesday':
    case 'Thursday':
        console.log("WakeUp at 6AM!");
        break;
    case 'Friday':
        console.log("WakeUp at 5AM!");
        break;
    case 'Saturday':
    case 'Sunday':
        console.log("WakeUp at 8AM!");
        break;
    default:
        console.log("Have a sweet dreams!");
}

// check the current day 
let day;
switch(new Date().getDay()){
    case 0:
        day ="Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
}
console.log("The day is "+ day);


