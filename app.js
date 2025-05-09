const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.send("Hello from DevOps CI/CD Pipeline!");
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});