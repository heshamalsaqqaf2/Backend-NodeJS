/** 
 * @Close_Queue
 *  The close queue is reserved for functions associated with close event listeners. These events
 *  occur when a resource, such as a stream or an HTTP server, is closed, signaling that no further
 *  events will be emitted from that resource.
 * 
 *? Examples include:
 *   - The close event on a stream, which is triggered when the stream has been closed,
 *        indicating that no more data will be sent or received.
 *   - The close event on an HTTP server, which is emitted when the server shuts down.
 * 
 *  The close queue is the last queue in the event loop and is processed after all other queues are processed.
 * 
 * @summary
 *  Function: Execute registered callbacks for closure events such as:
 *      Server closure (server.close()).
 *      Closing connections (socket.on('close')).
 *      Closing files or streams (fs.createReadStream().on('close')).
 *      Objective: To perform cleanup tasks after closing resources.
*/

'use strict';

// TODO: ====================== Stream close ======================
const fs = require('fs');

const readableStream = fs.createReadStream('./date.txt');
readableStream.close();

readableStream.on('close', () => {
    console.log('This is from the readableStream close event callback');
});

// TODO: ====================== Shutting down an HTTP server ======================
const http = require('http');
const server = http.createServer((req, res) => {
    res.end('Hello World');
});
server.listen(3000, () => {
    console.log('Server running on port 3000');
});
// Shutting down the server after 5 seconds
setTimeout(() => {
    server.close(() => {
        console.log('Server closed!'); // Callback in Close Queue
    });
}, 5000);

// TODO: ====================== Example showing the order of execution: ======================
const server2 = require('http').createServer();
server2.on('request', (req, res) => {
    res.end('OK');
});
server2.listen(3000);
server2.on('close', (err) => {
    if (err) {
        console.error('Error closing server:', err);
        return;
    }
    console.log('Close Queue Callback');
});
setImmediate(() => {
    console.log('Check Queue Callback');
});
setTimeout(() => {
    server2.close();
}, 3000);