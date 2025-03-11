'use strict';

// TODO: ====================== HTTP Server with Network Requests ======================
const https = require("https");

// const MAX_CALLS = 16;
const MAX_CALLS = 2;
const start = Date.now();

for (let i = 0; i < MAX_CALLS; i++) {
    https
        .request("https://www.google.com", (response) => {
            response.on('data', () => { });
            response.on('end', () => {
                console.log(`Request: ${i + 1}`, Date.now() - start);
            });
        }).end();
}

/** 
 * @summary
 *  Here, we create an HTTPS server. This server contacts www.google.com and receives the response.
 *  When the response is fully received, we log how much time it took for the request.
 *  By default, the number of threads in the thread pool is 4 - we will leave it unchanged
 *  and start by sending one request. The time taken to receive the response
 *  was 128 ms (might be slightly different for you depending on your internet).
 *  Now let’s change the MAX_CALLS constant to 2, the time taken for each request is around 120.
 *  Let’s change that to 16, more than the number of threads available, the time taken is around 130.
 *  We can conclude from that experiment is that Network requests are independent on the number of threads.
 *  If the thread pool was used, sending more requests than our number of threads should have resulted
 *  in longer response time. As we learned, network requests do not use the thread pool so increasing the
 *  number of threads will make no difference in the speed of our request. Libuv instead delegates the work
 *  to the operating system kernel and whenever possible, it will poll the kernel
 *  and see if the request has completed
*/