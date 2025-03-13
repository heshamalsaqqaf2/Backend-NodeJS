// The events module returns a class called EventEmitter
const EventEmitter = require("node:events");
const emitter = new EventEmitter();

// Add an event handler (a function) that's triggered when the event is fired
emitter.on("place-order", (type, date) => {
    console.log(`Order received for ${type} on ${date}`);
});

// Emit an event. The emit method takes the name of the event to emit
emitter.emit("place-order", "delivery", new Date().toLocaleString());


// Todo: ===================== Using Http Module =====================
const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World');
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
    http.get(`http://localhost:${PORT}`, (res) => {
        res.setEncoding('utf8');
        let data = '';

        res.on('data', (chunk) => {
            data += chunk;
        });
        res.on('end', () => {
            console.log('Received data:', data);
            server.close(() => {
                console.log('Server closed');
            });
        }).on('error', (err) => {
            console.error('Error with request:', err);
        });
    });
});


