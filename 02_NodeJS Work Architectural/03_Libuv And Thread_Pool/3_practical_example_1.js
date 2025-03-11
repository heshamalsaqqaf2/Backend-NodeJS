'use strict';

// TODO: ====================== Async Non-Blocking Calls ======================
const fs = require('fs');

console.log('First');

fs.readFile('./date.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(`Error Read File: ${err}`);
        return;
    }
    console.log(`File Content: ${data}`);
});

console.log('Last');

/** 
 * @summary
 *  This show us how Node handles async operation.
 *  Node calls the async function in a non blocking way,
 *  continues with the rest of the code, and whenever the async function finished,
 *  the callback is executed. Node is able to do that by offloading the work to libuv thread pool.
*/