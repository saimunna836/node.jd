
const http = require('http');
const server = http.createServer((req, res) => {
    res.end('Hello! CI/CD Pipeline is working!');
});
server.listen(3000);
