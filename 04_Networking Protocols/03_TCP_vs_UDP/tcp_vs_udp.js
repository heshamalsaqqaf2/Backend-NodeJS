/** 
 ** @description
 *!  TCP
 *    TCP (Transmission Control Protocol) is a connection-oriented protocol that ensures data is
 *    transmitted reliably. It establishes a connection between the sender and receiver before any data
 *    is transferred and guarantees that all packets arrive in order and without errors.
 *    This makes TCP ideal for applications where data integrity is essential, such as web servers and databases.
 *?    For instance, a NodeJS server handling a large number of client requests relies on TCP
 *    to ensure that each request is accurately received and processed in the correct sequence.
 * 
 *!  UDP
 *    In contrast, UDP (User Datagram Protocol) is connectionless and does not provide guarantees
 *    about packet delivery or order. This makes UDP faster and more suitable for applications where
 *    speed is more important than reliability. UDP is commonly used in real-time applications such as
 *    online gaming or video streaming, where a small amount of data loss is acceptable but low latency
 *    is crucial. For example, a live video streaming service might use UDP to transmit video frames, as
 *    the occasional lost frame is less disruptive than the delay caused by retransmitting lost packets.
*/