/**
 * @Thread_Pool
 *  When JavaScript's single main thread encounters an asynchronous task, it delegates this task to libuv.
 *  Libuv then handles the task using either native async mechanisms or the thread pool.
 *  The default thread pool has //! 4 threads, meaning it can handle up to 4 asynchronous operations
 *  concurrently. If a fifth operation is initiated, it will have to wait for one of the
 *  existing threads to become available.
 *  
 *?  Types of Tasks Using the Thread Pool
 *   The thread pool in libuv is used for both I/O-intensive and CPU-intensive tasks.
 **    1- I/O-Intensive Tasks  
 *          - DNS: dns.lookup(), dns.lookupService().
 *          - Async File System: All file system APIs except fs.FSWatcher()
 *                               and those that are explicitly synchronous.
 **    2- I/O-Intensive Tasks  
 *          - Crypto: crypto.pbkdf2(), crypto.scrypt(), crypto.randomBytes(),
 *                    crypto.randomFill(), crypto.generateKeyPair().
 *          - Zlib: All zlib APIs except those that are explicitly synchronous.
 
 *?  Adjusting the Thread Pool Size
 *   You can increase the thread pool size to handle more concurrent asynchronous operations
 *   using the process.env object:
 **     - process.env.UV_THREADPOOL_SIZE = 6;
 *
 *   However, increasing the thread pool size indefinitely won't necessarily speed up task execution.
 *   This is because libuv tries to distribute threads across the available CPU cores.
 *   For example, with 8 CPU cores, if you increase the thread pool size to 16, each core will have to handle 2 threads.
 *   This increases the CPU's task-switching overhead, potentially slowing down task completion.
 *   Hence, the optimal thread pool size is limited by the number of available CPU cores.
 * 
 *?  Network Requests and the Event Loop
 *   Network requests, such as HTTP requests, do not use the thread pool.
 *   Instead, they rely on the event loop and the underlying operating system for non-blocking I/O.
 *   When a network request is made, the event loop handles it without blocking the main thread.
 *   Once the response is ready, the event loop processes the result and executes the callback.
 *   For database queries, they are run in the DB process.From Node's perspective these are just network calls,
 *   and would not block the thread, and would behave like an HTTP request.
*/

'use strict';
const os = require('os');

const systemInfo = os.cpus();
console.log('System Info:', systemInfo);

const defaultThreads = os.cpus().length;
console.log('Default Threads:', defaultThreads);

const availableProcessors = os.availableParallelism();
console.log('Default Threads:', availableProcessors);

//? Adjusting the Thread Pool Size
// const customThreads = process.env.UV_THREADPOOL_SIZE = 6;
// console.log('Custom Threads:', customThreads);