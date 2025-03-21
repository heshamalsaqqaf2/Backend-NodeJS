/**
 * @description
 *!  REST (Representational State Transfer)
 *   REST, or Representational State Transfer, is an architectural style for designing networked
 *   applications. It leverages HTTP methods and standard web protocols to facilitate communication
 *   between clients (like web browsers) and servers. REST is widely used in web services and APIs to
 *   provide a scalable and stateless communication protocol.
 * 
 *?  Key Concepts of REST:
 **   1- Resources: 
 *        In REST, data and functionalities are represented as resources, which are
 *        identified by URLs (Uniform Resource Locators). For example, in an API for a bookstore,
 *        resources might include /books, /authors, and /genres.
 **   2- HTTP Methods: 
 *        RESTful APIs use standard HTTP methods to perform operations on resources:
 *TODO     - GET: Retrieve data from the server (e.g., get a list of books).
 *TODO     - POST: Create a new resource (e.g., add a new book).
 *TODO     - PUT: Update an existing resource (e.g., update book details).
 *TODO     - DELETE: Remove a resource (e.g., delete a book).
 **   3- Statelessness:
 *        Each request from a client to the server must contain all the information
 *        needed to understand and process the request. The server does not store any client context
 *        between requests, which makes REST APIs scalable and easier to manage.
 **   4- JSON/XML Formats:
 *        REST typically uses JSON or XML to format the data exchanged
 *        between clients and servers. JSON is more common due to its simplicity and ease of use.
 **   5- Uniform Interface:
 *        REST APIs have a consistent and predictable interface. This uniformity
 *        simplifies the design and use of the API, as clients can interact with various resources in a
 *        standardized way.
 * 
 *?  How RESTful APIs Work:
 **   1- Client Request: 
 *        The client sends an HTTP request to a RESTful API endpoint. For example, a
 *        GET request to /books might request a list of all books.
 **   2- Server Processing: 
 *        The server processes the request based on the HTTP method and the endpoint
 *        It retrieves or manipulates the resource as specified.
 **   3- Response: 
 *        The server sends back an HTTP response, usually in JSON or XML format.
 *        The response includes the requested data or a confirmation of the action performed.
 * 
 *?  Benefits of REST
 **   1- Scalability: 
 *        Statelessness and a clear separation of concerns make REST APIs scalable.
 **   2- Flexibility: 
 *        Clients and servers can evolve independently, as long as they adhere to the API contract.
 **   3- Ease of Use: 
 *        The use of standard HTTP methods and status codes makes REST easy to understand and implement.
 * 
 *?  Benefits of REST
 *   REST is often compared to SOAP (Simple Object Access Protocol) and GraphQL. Unlike SOAP,
 *   which is more rigid and complex, REST is simpler and uses standard HTTP methods. GraphQL, on
 *   the other hand, allows clients to request specific data, which can be more flexible but also more
 *   complex than REST.
*/
