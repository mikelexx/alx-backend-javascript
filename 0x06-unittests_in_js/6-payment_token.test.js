const chai = require('chai');
const expect = chai.expect;
const getPaymentTokenFromAPI = require('./6-payment_token');
describe('getPaymentTokenFromAPI', function(){
  it('tests getPaymentTokenFromAPI Promise', function(done){
    this.timeout(0);
    getPaymentTokenFromAPI(true).then((data)=>{
      expect(data).to.eql({data: 'Successful response from the API' });
      done();
    }).catch(err=>done(err));
  })
})
