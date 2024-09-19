const express = require('express');
const app = express();
app.use(express.json());
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
app.get('/available_payments', (_, res) => {
  const paymentMethods = {
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  };
  res.send(paymentMethods);
});
app.post('/login', (req, resp) => {
  const userName = req.body.userName;
  resp.send(`Welcome ${userName}`);
});
module.exports = app;
