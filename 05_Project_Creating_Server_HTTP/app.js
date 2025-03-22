// Import HTTP and File System module
const http = require('node:http');
const fs = require('node:fs');

// Create a Server
const server = http.createServer((request, response) => {
    fs.readFile('index.html', 'utf8', (err, data) => {
        if (err) {
            response.writeHead(500, { 'Content-Type': 'text/plain' });
            response.end('Error Loading File.');
            return;
        }
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(data);
    });
});

// Start the server
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}.`);
});
