const http = require('http');

const port = 8000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, world!');
});

server.listen(port, () => {
  console.log(`Server is running on ${port}`);
});