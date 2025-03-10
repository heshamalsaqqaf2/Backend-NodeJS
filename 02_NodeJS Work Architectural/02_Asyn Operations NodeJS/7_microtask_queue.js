/** 
 * @Microtask_Queue
 *  Last, but definitely not least, is the Microtask queue. The Microtask queue is a special type of
 *  queue that handles functions scheduled to run at the earliest opportunity, ahead of other
 *  asynchronous operations. The Microtask queue is processed at the start of the event loop
 *  iteration, but also between phases of the event loop. This queue is divided into two main parts:
 * 
 *?   1- process.nextTick Queue:
 *      This queue holds callbacks from process.nextTick function.
 *      These callbacks are given the highest priority and are processed before going to the Promise Queue.
 * 
 *?   2- Promise Queue
 *      The second part of the microtask queue deals with promises. Unlike typical
 *      asynchronous operations managed by the I/O or Timer queues, promises are initially stored
 *      as pending in JavaScript memory. Once the promise operation is completed, NodeJS
 *      updates the promise's state and places the associated callback in the microtask queue.
 * 
 *  As we mentioned earlier, the microtask queue is processed at the start of the event loop iteration
 *  starting with the nextTick queue and then the Promise queue. However due to the priority given to
 *  the microtask queue it is constantly checked after each phase of the event loop, that means after
 *  every queue is processed and before moving to the next queue, the Microtask queue is checked
 *  first and if there are any callbacks in the queue, they get processed. Also the microtask is
 *  checked between each callback execution in the timer and check queues.
 * */

'use strict';

// TODO: ===================== Examples Using process.nextTick =====================
console.log('Start');
process.nextTick(() => {
    console.log('nextTick callback 1');
});
console.log('End');

// TODO: ===================== Examples Using Promises =====================
console.log('Start');
process.nextTick(() => {
    console.log('nextTick callback');
});
Promise.resolve()
    .then(() => console.log("promise.resolve callback"));
console.log('End');