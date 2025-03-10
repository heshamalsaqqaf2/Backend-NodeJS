/**
 * @What_Libuv
 *  When an asynchronous operation is initiated, such as a database query or file read, the operation
 *  is offloaded to the libuv library, which handles the operation using the underlying OS mechanisms.
 *  Once the operation completes, the callback associated with it is pushed to the appropriate queue.
 *  The event loop then ensures these callbacks are executed in the right order.
 *  Now you might be wondering what is Libuv?
 * 
 *  You might be surprised that NodeJS, a JS runtime, is built on top of libraries that use C and C++!
 *  As fascinating as this is, it is not surprising since JS is not designed to handle low level operations
 *  like reading files, handling network requests or interacting with databases in an asynchronous
 *  manner. These tasks are inherently system-level operations that involve working directly with the
 *  operating system's kernel and hardware. Writing this kind of low-level, performance-critical code
 *  directly in JavaScript (an interpreted language) would be inefficient and impractical. C, on the
 *  other hand, is a compiled language that offers fine-grained control over system resources and
 *  memory, making it ideal for this purpose. Libuv is an open-source, cross-platform library written in
 *  C. It is crucial for handling asynchronous operations in NodeJS by abstracting away the logic
 *  required for non-blocking operations. Libuv achieves this by using a thread pool and the event
 * loop that we discussed above, which is part of Libuv.
 * 
 * @How_Libuv_Works
 *  Libuv's primary goal is to ensure that JavaScript's main thread is not blocked by time-consuming
 *  tasks. It does this by offloading these tasks to its thread pool or by using OS kernel
 *  (native async mechanisms).
*/
