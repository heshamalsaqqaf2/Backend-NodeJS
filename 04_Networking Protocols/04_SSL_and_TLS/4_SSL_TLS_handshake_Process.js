/**
 * @description
 *!  SSL/TLS Handshake Process
 *   SSL/TLS protocols handle the handshake process, which is used to establish a secure
 *   connection between the client (browser) and the server (website). This handshake determines
 *   how data will be encrypted and ensures both parties are who they claim to be.
 * 
 *?  Here’s a simplified breakdown of the process:
 **   1- ClientHello: 
 *       The browser sends a request to the server, listing the encryption methods (cipher suites) it supports.
 **   2- ServerHello: 
 *       The server responds with its SSL/TLS certificate and its chosen encryption method.
 **   3- Certificate Verification:
 *       The browser checks the server’s certificate against trusted Certificate Authorities (CAs). If it’s valid, the process continues.
 **   4- Key Exchange:
 *       The client and server agree on a session key for symmetric encryption (a faster encryption method).
 **   5- Secure Communication:
 *       From here on, all communication between the browser and the server is encrypted using the agreed-upon session key.
*/
