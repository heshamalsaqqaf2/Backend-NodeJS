/** 
 * @Timer_Queue
 *  NodeJS incorporates a Timer module that allows for asynchronous execution of code after a
 *  specified delay. This module includes functions like setTimeout() and setInterval(),
 *  which are essential for handling time-based operations in NodeJS applications.
 *  It's important to note that these timer functions are not native to JavaScript itself,
 *  but rather are provided by the NodeJS runtime environment.
 *  
 *  When a timer function is called, NodeJS doesn't block the execution of other code. Instead,
 *  it registers the callback function and continues with the next operation.
 *  Once the specified time has elapsed, the callback is placed in the timer queue,
 *  ready to be processed by the event loop. This mechanism enables NodeJS to
 *  manage time-related tasks efficiently without impeding the execution of other parts of the application.
 * 
*/


console.log('Start');

setTimeout(() => {
    console.log('Timer Callback (Event Queue)');
}, 0);

console.log('End');

// Output:
// Start
// End
// Timer Callback (Event Queue)