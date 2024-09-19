const sendPaymentRequestToApi =require('./4-payment');
const sinon = require('sinon');
describe('sendPaymentRequestToApi', function(){
  this.beforeEach(function(){
    consoleLogSpy = sinon.spy(console, 'log');
  })
  this.afterEach(function(){
    consoleLogSpy.restore();
  })
  it('test sendPaymentRequestToApi output', function(){
    sendPaymentRequestToApi(100, 20);
    sinon.assert.calledOnceWithExactly(consoleLogSpy, 'The total is: 120');
  });
  it('test sendPaymentRequestToApi output', function(){
    sendPaymentRequestToApi(10, 10);
    sinon.assert.calledOnceWithExactly(consoleLogSpy, 'The total is: 20');
  });
})
