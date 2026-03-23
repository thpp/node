const http = require('http');

const server = http.createServer((req, res) => {
  res.write('Ola Mundo!');
  res.end();
});

server.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});