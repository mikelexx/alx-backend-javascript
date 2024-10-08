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
