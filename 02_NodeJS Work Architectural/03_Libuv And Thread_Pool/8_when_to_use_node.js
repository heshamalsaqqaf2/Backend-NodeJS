/**
 * @Thread_Pool
 *  Now that we know how Node works and handles sync and async operations, we can begin to
 *  consider the ideal use cases for NodeJS. Think about scenarios where tasks involve a lot of
 *  waiting, like reading from a database or making API requests.
 *  
 *?  NodeJS is ideal for I/O-intensive operations such as:
 **    - Reading/writing to databases
 **    - Making network requests
 **    - Interacting with APIs
 **    - Real-time applications like chat servers or live updates  
 
 *?  However, NodeJS is not suitable for CPU-intensive tasks such as:
 **     - Complex computations
 **     - Data processing
 **     - Machine learning tasks
 *
 *   Blocking the main thread with heavy computation will degrade performance, much like our waiter
 *   being stuck with a single demanding customer while ignoring others.
*/