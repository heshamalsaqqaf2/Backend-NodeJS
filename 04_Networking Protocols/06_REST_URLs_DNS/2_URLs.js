/**
 * @description
 *!  URLs (Uniform Resource Locators)
 *   A URL is the address used to access resources on the web. It consists of several parts: the
 *   protocol (HTTP or HTTPS), the domain name, and optionally the port and path. URLs enable
 *   clients to locate and request specific resources from a server.
 * 
 *   In NodeJS, working with URLs is essential for handling and routing requests. The url module
 *   allows you to parse and manipulate URLs to extract relevant information.
*/

const url = require('node:url');
let urlPath = new URL('https://example.com:8000/path?name=alice');

console.log(urlPath.hostname);
console.log(urlPath.port);
console.log(urlPath.pathname);
console.log(urlPath.searchParams.get('name'));