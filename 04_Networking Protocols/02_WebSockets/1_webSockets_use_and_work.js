/** 
 * @description
 *!  Why WebSockets are Used
 *?   1- Real-Time Communication:
 *       WebSockets are ideal for applications requiring real-time
 *       updates, such as chat applications, live notifications, or gaming platforms. They allow for
 *       instantaneous data exchange.
 *?   2- Reduced Latency:
 *       Since WebSocket connections remain open, there is no need for the
 *       overhead associated with establishing new connections for each request. This reduces
 *       latency and improves performance.
 *?   3- Efficient Data Transfer:
 *       WebSockets use a single, long-lived connection, which is more
 *       efficient for continuous data flow compared to the repetitive handshakes and headers in
 *       traditional HTTP.
 *?   4- Bidirectional Communication:
 *       Both the client and server can send messages independently
 *       of each other, enabling interactive features and live updates.
 * 
 *!  How WebSockets Work
 *?   1- Handshake:
 *       The client initiates a WebSocket connection by sending an HTTP request with
 *       an Upgrade header to the server. The server responds with a success status code, and the
 *       connection is established as a WebSocket connection.
 *?   2- Data Transfer:
 *       Once the connection is open, data can be sent in both directions using
 *       WebSocket frames. These frames contain the actual data being transferred, and the
 *       connection remains open until explicitly closed by either party.
 *?   3- Closure:
 *       Either the client or server can close the WebSocket connection by sending a close
 *       frame, which signals that no more data will be sent.
*/
