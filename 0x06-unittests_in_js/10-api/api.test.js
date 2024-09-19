const request = require('request');
const chai = require('chai');
const expect = chai.expect;
describe('test `/` endpoint', function(){
  it('correct status code and response body', function(done){
    request('http://localhost:7865', (err, resp, body)=>{
      expect(resp.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
      if(err){
        done(err);
      }
      })
  })
})
describe('test `/cart/:id` endpoint', function(){
  it('test response status code and output `:id` is multidigit number', function(done){
    request('http://localhost:7865/cart/123', (err, resp, body)=>{
      expect(resp.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 123');
      done();
      if(err){
        done(err);
      }
      })
  })
  it('test response status code and output `:id` is singel digit number', function(done){
    request('http://localhost:7865/cart/1', (err, resp, body)=>{
      expect(resp.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 1');
      done();
      if(err){
        done(err);
      }
      })
  })
  it('test for status code when `:id` is Not a number', function(done){
    request('http://localhost:7865/cart/invalid', (err, resp, _)=>{
      expect(resp.statusCode).to.be.equal(404);
      done();
      if(err){
        done(err);
      }
      })
  })
  it('test for status code when `:id` is string mixed with digits', function(done){
    request('http://localhost:7865/cart/a23a', (err, resp, _)=>{
      expect(resp.statusCode).to.be.equal(404);
      done();
      if(err){
        done(err);
      }
      })
  })
  it('test for status code when `:id` is string mixed with digits', function(done){
    request('http://localhost:7865/cart/23a', (err, resp, _)=>{
      expect(resp.statusCode).to.be.equal(404);
      done();
      if(err){
        done(err);
      }
      })
  })
  it('test for status code when `:id` is string mixed with digits', function(done){
    request('http://localhost:7865/cart/a23', (err, resp, _)=>{
      expect(resp.statusCode).to.be.equal(404);
      done();
      if(err){
        done(err);
      }
      })
  })
})
describe('test the `/login` endpoint', function(){
  it('test correct output', function(done){
    this.timeout(0);
    request({
      method: 'POST',
      uri: 'http://localhost:7865/login',
      json: true,
      body: {
        userName: 'Betty'
      }
    }, (err, resp, body)=>{
      expect(body).to.be.equal('Welcome Betty');
      expect(resp.statusCode).to.be.equal(200);
      done();
      if(err){
        done(err);
      }
    });
  });
})
describe('test `/available_payments` endpoint', function(){
  it('test correct output', function(done){
  this.timeout(0);
    request.get('http://localhost:7865/available_payments', (err, resp, body)=>{
      expect(resp.statusCode).to.equal(200);
      expect(JSON.parse(body)).to.deep.equal(
        {
          payment_methods: {
            credit_cards: true,
            paypal: false
          }
        }
      );
      done();
      if (err){
        done(err);
      }
      })
  })
})
