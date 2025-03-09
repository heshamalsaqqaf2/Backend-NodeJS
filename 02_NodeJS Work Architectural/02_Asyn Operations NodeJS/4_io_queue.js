/** 
 * @IO_Queue
 *  I/O operations are tasks that require interaction with external devices or systems, such as reading
 *  and writing files or making network requests. These operations are handled asynchronously by
 *  NodeJS, which manages them after the synchronous code has finished executing. Since
 *  JavaScript itself does not have direct access to the computer's internal systems, it delegates
 *  these tasks to NodeJS to be managed in the background. Once an I/O operation is complete, it is
 *  placed in the I/O callback queue. From there, the event loop transfers it to the call stack for
 *  execution, ensuring that the task is processed without blocking the main thread.
 *  
*/
'use strict';

// TODO: ============================ File Read Operation  ============================
import fs from 'fs';

fs.readFile('./date.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file: ', err);
        return;
    }
    console.log('File Content:', data, '\n');
});
console.log('This message is logged first, before the file content is read.');


// TODO: ============================ HTTP Request Operation ============================
import https from "https";

https.get('https://jsonplaceholder.typicode.com/users/1', (response) => {
    let data = '';

    response.setEncoding('utf8');
    if (response.statusCode !== 200) {
        console.error(`Request failed. Status Code: ${response.statusCode}`);
        // Consume remaining data to avoid memory leaks
        response.resume();
        return;
    }
    response.on('data', (chunk) => {
        data += chunk;
    });
    response.on('end', () => {
        try {
            const parsedData = JSON.parse(data);
            console.log('Received data:', parsedData);
        } catch (err) {
            console.error('Error parsing JSON:', err);
        }
    });

}).on('error', (err) => {
    console.error('Error with request:', err);
});

console.log('This message is logged first, before the HTTP response is received.');
