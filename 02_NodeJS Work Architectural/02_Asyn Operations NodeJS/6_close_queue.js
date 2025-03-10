/** 
 * @Close_Queue
 *  The close queue is reserved for functions associated with close event listeners. These events
 *  occur when a resource, such as a stream or an HTTP server, is closed, signaling that no further
 *  events will be emitted from that resource.
 *? Examples include:
 *   - The close event on a stream, which is triggered when the stream has been closed,
 *        indicating that no more data will be sent or received.
 *   - The close event on an HTTP server, which is emitted when the server shuts down.
 * 
 *  The close queue is the last queue in the event loop and is processed after all other queues are processed.
*/

'use strict';

// TODO: ====================== Stream close ======================
const fs = require('fs');

const readableStream = fs.createReadStream('./date.txt');

readableStream.close();

readableStream.on('close', () => {
    console.log('This is from the readableStream close event callback');
});