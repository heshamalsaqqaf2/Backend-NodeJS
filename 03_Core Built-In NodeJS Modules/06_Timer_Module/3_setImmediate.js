/** 
 * @description
 *!  setImmediate()
 *   setImmediate is used to execute a function as soon as the current event loop cycle finishes.
 * 
 * @summary
 *   When you use setImmediate(), the callback will be executed after the current operations in the
 *   event loop have completed, but before it handles new events like timers or I/O operations in the
 *   next iteration. Unlike setTimeout, which waits for a delay, setImmediate executes the callback
 *   after the current event loop cycle is completed, making it useful for prioritizing tasks.
*/

setImmediate(() => {
    console.log('setImmediate callback');
});


