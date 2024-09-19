const request = require('request');
const chai = require('chai');
const expect = chai.expect;
describe('test / api endpoint', function(){
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
