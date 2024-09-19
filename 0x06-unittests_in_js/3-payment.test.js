const Utils = require('./utils');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
describe('sendPaymentRequestToApi', function(){
  it('tests if math used in sendPaymentRequestToApi is same Utils.calculateNumber', function(){
    calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);
    calculateNumberSpy.calledOnceWith('SUM', 100, 20);
    calculateNumberSpy.restore();
  })
})
