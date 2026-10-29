const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Hello from my Node.js server!');
});

server.listen(4000, '0.0.0.0', () => {
    console.log('App running on port 4000');
});
