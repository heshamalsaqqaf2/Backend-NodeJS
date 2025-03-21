/**
 * @description
 *!  How HTTPS Works
 *   HTTPS wraps an encrypted layer (via SSL or, more commonly today, TLS) around standard HTTP
 *   communication, ensuring that data sent between the client (browser) and the server remains secure.
 * 
 *?  Here's how it protects data:
 **   1- Encryption: 
 *        HTTPS ensures that data exchanged between a web browser and a server is
 *        encrypted, preventing third parties from intercepting or reading it.
 **   2- Data Integrity: 
 *        The encryption also guarantees that the data transferred has not been altered
 *        or tampered with during transmission.
 **   3- Authentication:
 *        HTTPS verifies the identity of the website through SSL/TLS certificates.
 *        This ensures that users are connecting to the intended site and not a malicious imposter.
 * 
 *!  The HTTPS Handshake
 *   The HTTPS handshake process mirrors the SSL/TLS handshake but applies directly to securing HTTP traffic
 * 
 *?  Here's how it works:
 **   1- Initial Connection: 
 *        When a user visits an HTTPS website, the browser sends a request to
 *        the server, and the server responds by sending its SSL/TLS certificate.
 **   2- Certificate Validation: 
 *        The browser verifies the server’s certificate against trusted Certificate
 *        Authorities (CAs). If the certificate is valid, the connection proceeds.
 **   3- Key Exchange:
 *        Both the client and the server agree on encryption methods and exchange
 *        keys (via asymmetric encryption) to create a secure, shared session key.
 **   3- Secure Communication:
 *        Once the handshake is complete, the browser and server use the
 *        session key to encrypt all further communication, securing everything from web page data to
 *        user credentials.
 * 
*/
