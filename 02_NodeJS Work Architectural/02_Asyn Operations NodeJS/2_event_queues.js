/** 
 * @Event_Queues
 *  In the previous section we mentioned that Node places callbacks in queues and that there are
 *  different type of queues. A queue is a popular data structure in programming that operates on the
 *  principle of FIFO (First In, First Out). Similar to how queues in real life work like in a supermarket,
 *  where the first customer entering the queue at the checkout counter will be the first customer
 *  leaving the store. Event Queues is an ordered list of asynchronous operations where an
 *  asynchronous operation is inserted at the end of the queue and is removed from the front of the
 *  queue. This differs from the stack data structure which operates on the LIFO (Last In, First Out)
 *  principle, where elements are both inserted and removed from the end of the stack.
 * 
 *  There are 5 queues that get checked by the event loop in every iteration of the loop: timer, I/O,
 *  check, close, and microtask.We will explore and discuss each of these in the following modules. 
*/


