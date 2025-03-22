// Import HTTP module
const http = require('node:http');

const server = http.createServer((req, res) => {
    // Handle different HTTP methods
    if (req.url === '/api/users') {
        switch (req.method) {
            case 'GET':
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: 'Get all users' }));
                break;
            case 'POST':
                res.writeHead(201, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: 'Create a new user' }));
                break;
            case 'PUT':
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: 'Update an existing user' }));
                break;
            case 'DELETE':
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: 'Delete a user' }));
                break;
            default:
                res.writeHead(405, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: 'Method not allowed' }));
        }
        // Handle other routes
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Not found' }));
    }
});

// Start the server and listen on port 3000
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
