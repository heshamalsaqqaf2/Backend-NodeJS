/** 
 * @Event_Loop
 * 
 * There is a big debate and some misunderstanding when it come to JavaScript is it synchronous or asynchronous? 
 * Let’s start by defining the terms:
 **  Synchronous: 
 *      Tasks are performed one after another, and each operation must be finished before the next one starts. 
 *      Due to this, it can lead to idle waiting periods and inefficient use of time and resources.
 **  Asynchronous: 
 *      Tasks can start before other tasks finish. The program can handle other operations during waiting periods,
 *      leading to better utilization of time/resources and improved performance.
 * 
 * 
 **  JavaScript is synchronous, blocking and single threaded.
 *   That means that JS runs code line by line and waits for each operation to complete before starting the next operation.
 *   It has a single thread meaning it cannot run two things in parallel.
 *   However, you might have heard that JS can handle asynchronous tasks - how can it do that if it is sync,
 *   blocking and single threaded? This is where the event loop and JS runtime come into play.
 *   JS does not run in vacuum so it needs a runtime: either the browser runtime or in NodeJS runtime.
 *   It is the features of the runtime, specifically the event loop, that gives JS its asynchronous capabilities.
 *   Even though JS by itself is synchronous, in real life scenarios it is asynchronous and non-blocking -
 *   let’s explore that further.
 * 
 * 
 **  Imagine you're at a busy restaurant with only one waiter.
 *   This waiter is responsible for taking orders, delivering food, and processing payments.
 *   While it might sound chaotic, the waiter can manage multiple tasks by not sticking around
 *   waiting for each action to complete. This analogy is very similar to how NodeJS operates.
 * 
 * 
 **  The call stack is like a to-do list for our waiter.
 *   Every time a function is called, it's added to the top of this stack.
 *   The function is then executed, and once finished, it is removed from the stack.
 *   This ensures tasks are processed one at a time, maintaining order.
 *   What if an task in the waiter’s to-do list takes time? The waiter will start it,
 *   write down what he needs to do when the task is done, and move on to the next task.
 *   Similarly, NodeJS will call an async method, register the callback
 *   (the function that needs to be executed when the task is done), and move on to process other requests.
 * 
 * 
 **  Now, consider the event loop as the restaurant manager who ensures the waiter isn't overwhelmed.
 *   When the waiter initiates a task that might take a while,
 *   this task is handed over to a different person like the cook, allowing the waiter to continue with other orders.
 *   When the cook finishes his order, the manager will coordinate the task that needs to be done by the waiter
 *   (picking up the food and serving it) and ask the waiter to process the task whenever he is free.
 *   This analogy holds true for NodeJS.
 * 
 * 
 **  The Event Loop is a C program that coordinates the execution of synchronous and asynchronous code in NodeJS
 *   and it is what gives JS its async capabilities. The event loop is alive as long as the NodeJS
 *   application is running.It works in iterations (or loops) where in every iteration,
 *   it goes through different queues that holds different type of
 *   callbacks and process them in a specific order.
 * 
 * 
 **  One very important point to note is that the Event Loop doesn’t start processing callbacks until
 *   all synchronous code is executed. When Node goes through a function call it gets added to the call stack.
 *   If the call is synchronous it blocks the main thread until it is executed completely and popped off the stack.
 *   If it is an asynchronous call like a file read operation or a network call,
 *   the callback is registered and the async task is started in the background
 *   and the async function is popped off the stack.
 * 
 * 
 **  When an async task completes, its callback gets added to the appropriate
 *   queue of tasks that needs to be handled by the main thread.
 *   The event loops observes the queue and the main thread call stack to coordinate
 *   when the call back will be executed.The event loop continuously checks if the call stack
 *   is empty and only then,it takes control and start looping through the queue and process the callbacks
 *   by pushing them onto the call stack. This cycle ensures that asynchronous tasks
 *   are handled promptly without blocking the main thread.
 * 
 * 
 * @Types_Queues
 *  1- MicroTask Queue => Higher priority => Contains //? [ promises, MutationObserver ]
 *  2- MacroTask Queue => Lower priority => Contains //? [ setTimeout, setInterval, I/O operations ]
 * 
 * 
 * @summary
 *    Each then adds a new microtask
 *    Long tasks in the Call Stack prevent Event Loop from working
 * 
*/

'use strict';

// Todo: Event Loop
console.log('Start 1');
setTimeout(() => {
    console.log('Response Server [ Web APIs ] 3');
}, 3000);
console.log('End 2');


// Todo: Types Queues
// MicroTask Queue And MacroTask Queue
Promise.resolve().then(() => console.log('Promise!'));  //? MicroTask =>  First Output
setTimeout(() => console.log('Timeout!'), 0);           //? MacroTask =>  Second Output


// Todo: Example:
console.log('Script Start');

setTimeout(() => {
    console.log('setTimeout');
}, 0);

Promise.resolve().then(() => {
    console.log('Promise 1');
}).then(() => {
    console.log('Promise 2');
});

console.log('Script End');
/** 
 * @Output
    Script start
    Script end
    Promise 1
    Promise 2
    setTimeout
*/

//! Wrong Example:
function block() {
    const start = Date.now();
    while (Date.now() - start < 5000) { }
}
block(); // It will stop the app for 5 seconds
//Todo Solution: Break long tasks into chunks using setTimeout or Web Workers
