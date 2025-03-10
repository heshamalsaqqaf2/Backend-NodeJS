/** 
 * @IO_Queue
 *  The check queue, also known as the immediate queue, is responsible for executing callback
 *  functions immediately after all callbacks in the I/O queue have been processed. The
 *  setImmediate function is used to add functions to this queue, ensuring they run after the I/O
 *  operations have completed.
 * 
 * @summary
 *  !const fs = require('fs'); The download is synchronized and does not cause this issue
*/

'use strict';

const fs = require('fs');

// TODO: ================= Postpone a task until after I/O Operations has finished =================
//  1. Read File (I/O Operation)
fs.readFile('./date.txt', 'utf8', (err, data) => {
    console.log('File has been read'); // I/O Callback

    // 2. Process the data after making sure the I/O is complete
    setImmediate(() => {
        console.log('Start processing data...');
        const processedData = data.toUpperCase();
        console.log('processed Data:\n', processedData);
    });
});
console.log('The programme is running...');

// TODO: ================= A void blocking the Event Loop with heavy tasks =================
function processLargeArray(array) {
    let index = 0;
    function processChunk() {
        // 1. Process a portion of the array (100 elements at a time)
        const end = Math.min(index + 100, array.length);
        for (; index < end; index++) {
            // Simulate a heavy task (such as analyzing data)
            array[index] = array[index] * 2;
        }
        // 2. If processing is not complete, schedule the next part
        if (index < array.length) {
            setImmediate(processChunk); //? <-- Here's the usage
        } else {
            console.log('The matrix has been fully processed (after several Event Loop cycles)');
        }
    }
    processChunk();
}
// Simulation of a 10,000-element array
const bigArray = new Array(10000).fill(2);
processLargeArray(bigArray);
console.log('The app responds to other requests...');

// TODO: ===================== ❌ A wrong example that obscures the Event Loop =====================
function processArrayBlocking(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i] * 2; // Heavy Duty
    }
    console.log('Processed');
}
processArrayBlocking(new Array(100000).fill(2)); // It will block the app for seconds
console.log('This line will not appear until the process is finished');