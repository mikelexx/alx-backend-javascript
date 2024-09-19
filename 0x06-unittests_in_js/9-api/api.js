const express = require('express');
const app = express();
app.listen(7865, () => {
  console.log('API available on localhost port 7865');
});
app.get('/', (_, res) => {
  res.send('Welcome to the payment system');
});
app.get('/cart/:id', (req, res) => {
  const id = Number(req.params.id);
  if (!isNaN(id)) {
    res.send(`Payment methods for cart :${id}`);
  } else {
    res.status(404).send();
  }
});
module.exports = app;
