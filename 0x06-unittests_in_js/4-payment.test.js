const Utils = require('./utils');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
describe('sendPaymentRequestToApi', function () {
  it('test the sendPaymentRequestToApi logs correct output', function () {
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber');
    const consoleLogStub = sinon.stub(console, 'log');
    calculateNumberStub.returns(10);
    sendPaymentRequestToApi(100, 20);
    sinon.assert.calledOnceWithExactly(calculateNumberStub, 'SUM', 100, 20);
    sinon.assert.calledOnceWithExactly(consoleLogStub, 'The total is: 10');
    calculateNumberStub.restore();
    consoleLogStub.restore();
  });
});
