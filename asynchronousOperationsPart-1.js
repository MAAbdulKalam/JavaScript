/* Task 1: Order of Execution
Create a script that prints the following using console.log:
1. "Start"
2. A setTimeout callback with 0ms delay that prints "Callback 1"
3. Another setTimeout callback with 10ms delay that prints "Callback 2"
4. "End" */

console.log('Start');
setTimeout(() => {
    console.log('callback1');
},0);
setTimeout(() => {
    console.log('callback2');
}, 10);
console.log('End');

/*Task 2: Nested Callbacks
Write a function fetchData that takes two callbacks: onSuccess and onError. Use
setTimeout to simulate an API request:
 If the request is successful, call onSuccess with data after 2 seconds.
 If the request fails (simulate with a random boolean), call onError after 2 seconds.  */
function fetchData(onSuccess, onError){
    setTimeout(() => {
        const isSuccess = Math.random() >=0.5;
        if (isSuccess) {
            const data = {message : 'Data Fetched Successfully!'};
            onSuccess(data);
        }else {
            const error = 'Error fetching data!';
            onError(error);
        }
    }, 2000);
}
fetchData(
    (data) => {
        console.log('Success :', data);
    },
    (error) => {
        console.log('Error :', error);
    }
)

/*Task 3: Using Promises with Event Loop
Create a script that:
1. Logs "Step 1".
2. Resolves a Promise and logs "Promise resolved".
3. Adds a setTimeout with a 0ms delay that logs "Timeout".
4. Logs "Step 2". */
console.log('Step 1');
Promise.resolve().then(() =>{
    console.log("Promise resolved");
});
setTimeout(() => {
    console.log("Timeout");
}, 0);

console.log('Step 2');

/*Task 4: Callback Hell
Simulate a series of dependent asynchronous tasks using nested callbacks. For example:
1. Task 1: Get user data (1 second).
2. Task 2: Fetch user orders (2 seconds).
3. Task 3: Process orders (1 second).  */

// callback hell, each task should be dependent on the completion of the previous one.
function callbackHell() {
    setTimeout(() => {
        console.log('Get user data');
        setTimeout(() => {
            console.log('Fetch user orders');
            setTimeout(() => {
                console.log('Process orders');
            }, 1000);
        }, 2000);
    }, 1000);    
}
callbackHell();

/*Task 5: Event Loop Blocking
Create a script that:
1. Starts with console.log("Start").
2. Includes a function that runs a heavy computation (e.g., a loop of 1 billion iterations).
3. Ends with console.log("End").  */
// console.log("Start");
// function heavyComputations() {
//     for (let i = 0; i < 1_000_000_000; i++) {
//         console.log(i);
//     }
//     console.log('Heavy computation done!');
// }
// heavyComputations();
// console.log("End");

/*Task 6: Timer Implementation
Create a simple countdown timer that:
1. Accepts a number of seconds as input.
2. Uses setInterval to count down every second.
3. Calls a callback function when the timer reaches 0. */

function setCountDownTimer(seconds, callback) {
    const intervalID = setInterval(() => {
        console.log(seconds);
        if(seconds === 0){
            clearInterval(intervalID);
            callback();
        }
        seconds --;
    }, 1000);
}
setCountDownTimer(5, () => console.log('Timer Finished!'));

/*Task 7: Calculator with Callbacks
Create a function calculator(a, b, operationCallback):
1. The operationCallback determines the operation (addition, subtraction, etc.).
2. Call operationCallback(a, b) and log the result. */
function calculator(a, b, operationCallback){
    const res = operationCallback(a,b);
    console.log('Result: ' , res);
}

function addition(a,b) {
    return a + b;
}
function subtraction(a,b) {
    return a - b;
}

calculator(5,3,addition);
calculator(5,3,subtraction);

/*Task 9: Sequential Async Operations
Simulate booking a movie ticket with callbacks:
1. Function selectMovie(movieName, callback) to select a movie.
2. Function bookTicket(movieName, callback) to book the ticket.
3. Function confirmBooking(ticketId, callback) to confirm the booking.  */
function selectMovie(movieName) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Movie selected: ${movieName}`);
            resolve(movieName);
        }, 1000);
    });
}
function bookTicket(movieName) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const ticketId = Math.floor(Math.random() * 1000);
            console.log(`Ticket booked for Movie : ${movieName}, Ticket ID : ${ticketId}`);
            resolve(ticketId);
        }, 2000);
    });
}
function confirmBooking(ticketId) {
    return new Promise((resolve) =>{
        setTimeout(() => {
            console.log(`Booking Confirmed for Ticket ID : ${ticketId}`);
            resolve();
        }, 1000);
    });
}
async function bookMovieWithAsyncAwait() {
    try {
        const movieName = await selectMovie('Dil Bechara');
        const ticketId = await bookTicket(movieName);
        await confirmBooking(ticketId);
        console.log("All operations completed successfully!");
    } catch (error) {
        console.error('Error: ', error);
    }
}
bookMovieWithAsyncAwait();

/*Task 10: Retry Logic
Write a function retry(operation, retries, callback):
1. operation is a function that may fail.
2. Retry the operation up to retries times.
3. If it succeeds, call the callback with the result.
4. If it fails after all retries, call the callback with an error.  */
function retry(operation, retries, callback) {
    function attempt(remainingRetries) {
        try {
            const result = operation(); 
            callback(null, result); 
        } catch (error) {
            if (remainingRetries > 0) {
                console.log(`Retrying... Remaining attempts: ${remainingRetries}`);
                attempt(remainingRetries - 1); 
            } else {
                callback(error, null);
            }
        }
    }

    attempt(retries); 
}

// Example operation that may fail
function unstableOperation() {
    if (Math.random() > 0.7) {
        return "Success!";
    } else {
        throw new Error("Operation failed");
    }
}

// Using the retry function
retry(unstableOperation, 3, (error, result) => {
    if (error) {
        console.log("All retries failed:", error.message);
    } else {
        console.log("Operation succeeded:", result);
    }
});


