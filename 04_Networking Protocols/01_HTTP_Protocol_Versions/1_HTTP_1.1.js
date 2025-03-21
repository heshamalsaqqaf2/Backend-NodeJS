/** 
 * @description
 *!  Http/1.1 Version
 *    HTTP/1.1 was the dominant version for many years. It establishes a new TCP connection for each
 *    request, which can be inefficient when loading multiple resources on a single page. For instance, if
 *    a web page contains several images, CSS files, and JavaScript files, HTTP/1.1 would need to open
 *    multiple connections to fetch all these resources, resulting in
 *    increased latency and slower page load times.
 * 
 *?  The protocol has several limitations:
 **    - Head-of-line blocking: the server must respond before the client can send the next request
 **    - Lack of prioritization: requests are processed in the order they are received
 **    - Verbose headers: each request and response contains a large number of headers
 *
 *   These issues significantly impact performance, particularly on the modern web.
*/
