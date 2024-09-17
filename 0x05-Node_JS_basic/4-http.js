const http = require('http');

const app = http.createServer((_, res) => {
  res.end('Hello Holberton School!');
});
module.exports = app.listen(1245);
