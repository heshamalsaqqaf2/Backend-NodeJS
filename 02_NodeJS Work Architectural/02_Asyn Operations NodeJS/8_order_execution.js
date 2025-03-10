/**  
 * @Microtask_Queue  
 * - Handles highest-priority callbacks:  
 *   - process.nextTick() (Node.js-specific).  
 *   - Promise resolutions (then/catch/finally).  
 * - Executes immediately after the current operation completes and before moving to the next phase of the Event Loop.  
 * - Runs between every phase (e.g., after Timers, before I/O).  
 * - Example: A Promise.then() inside a setTimeout will execute right after the setTimeout callback, before the Event Loop proceeds to the next phase.  
 * - Warning: Infinite microtasks (e.g., recursive Promise.then()) can block the Event Loop indefinitely.  

* @Timers_Queue
* - Handles scheduled callbacks from setTimeout and setInterval.  
* - Executes in the first phase of the Event Loop (after Microtasks).  
* - Callbacks run in FIFO order (oldest timer first).  
* - Note: Timers are not guaranteed to execute at exact delays due to CPU load or blocked threads.  
* - Example: A setTimeout(fn, 0) callback runs after microtasks but before I/O operations.  

* @IO_Callbacks_Queue  
* - Processes completed I/O operations:  
*   - File system reads/writes (e.g., fs.readFile).  
*   - Network requests (e.g., HTTP responses).  
* - Executes in the second phase of the Event Loop (after Timers).  
* - Non-blocking: I/O operations are delegated to the OS kernel, freeing the main thread.  
* - Example: A fs.readFile callback is added to this queue once the file is fully read.  

* @Poll_Phase  
* - Retrieves new I/O events and adds their callbacks to the I/O Queue.  
* - Blocks and waits for I/O operations if all queues are empty.  
* - Executes after I/O Callbacks and before the Check Phase.  
* - Primary role: Synchronize the Event Loop with pending I/O operations.  
* - Example: If a file read takes 2 seconds, the Poll Phase waits until it completes and adds its callback to the I/O Queue.  

* @Check_Queue  
* - Executes setImmediate callbacks.  
* - Runs in the fifth phase of the Event Loop (after Poll).  
* - Designed to run after I/O operations but before Close callbacks.  
* - Use case: Defer heavy tasks to avoid blocking I/O operations.  
* - Example: A setImmediate callback inside an I/O operation runs after the I/O completes but before the Event Loop restarts.  

* @Close_Queue  
* - Handles cleanup tasks for closed resources:  
*   - socket.on('close').  
*   - stream.on('close').  
*   - server.close().  
* - Executes in the final phase of the Event Loop.  
* - Guarantee: Runs after all other phases in the current cycle.  
* - Example: Closing a database connection triggers a callback here to free up resources.  

* @Event_Loop_Behavior  
* 1. Order of Execution:  
*    - Microtasks (after every phase) → Timers → I/O → Poll → Check → Close.  
* 2. Prioritization:  
*    - Microtasks interrupt the Event Loop to run immediately after each phase.  
*    - Macrotasks (Timers/I/O/Check/Close) follow the phase order.  
* 3. Non-blocking Design:  
*    - The Loop cycles continuously, processing tasks from queues asynchronously.  
*    - Long tasks are split into chunks (e.g., using setImmediate) to avoid blocking.  
* 4. Key Insight:  
*    - setImmediate runs after I/O, while setTimeout(0) runs before I/O (if the timer is ready).  
*/

'use strict';
const fs = require('fs');

console.log('Start');

// Timers Phase: setTimeout callback
setTimeout(() => {
    console.log('setTimeout');

    // Adding to the Microtask Queue from within setTimeout
    process.nextTick(() => {
        console.log('nextTick inside setTimeout');
    });

    Promise.resolve().then(() => {
        console.log('Promise inside setTimeout');
    });
}, 0);
// Check Phase: setImmediate callback
setImmediate(() => {
    console.log('setImmediate');

    // Adding to the Microtask Queue from within setImmediate
    process.nextTick(() => {
        console.log('nextTick inside setImmediate');
    });

    Promise.resolve().then(() => {
        console.log('Promise inside setImmediate');
    });
});

// I/O Callbacks Phase: File read (simulating an I/O operation)
fs.readFile(__filename, () => {
    console.log('I/O callback');

    // Adding to the Microtask Queue from within I/O callback
    process.nextTick(() => {
        console.log('nextTick inside I/O callback');
    });

    Promise.resolve().then(() => {
        console.log('Promise inside I/O callback');
    });
});

// Close Callbacks Phase: simulating a close callback
const readable = fs.createReadStream(__filename);
readable.close(() => {
    console.log('close callback');
});

console.log('End');
/** 
 * @output
    Start
    End
    setTimeout
    nextTick inside setTimeout
    Promise inside setTimeout
    setImmediate
    nextTick inside setImmediate
    Promise inside setImmediate
    close callback
    I/O callback
    nextTick inside I/O callback
    Promise inside I/O callback
*/