const express = require('express');
const app = express();
app.listen(7865, () => {
  console.log('API available on localhost port 7865');
});
app.get('/', (_, res) => {
  res.send('Welcome to the payment system');
});
app.get('/cart/:id([0-9]+)', (req, res) => {
  const id = req.params.id;
  res.send(`Payment methods for cart ${id}`);
});
module.exports = app;
