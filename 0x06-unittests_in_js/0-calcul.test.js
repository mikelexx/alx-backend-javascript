const assert = require('assert');
const calculateNumber = require('./0-calcul');
describe('test summing rounded numbers', function(){
  it('checks if numbers are rounded then summed', function(){
    assert.equal(calculateNumber(1, 3), 4);
    assert.equal(calculateNumber(1, 3.1), 4);
    assert.equal(calculateNumber(1, 3.7), 5);
    assert.equal(calculateNumber(1.2, 3), 4);
    assert.equal(calculateNumber(1.7, 3), 5);
    assert.equal(calculateNumber(1.2, 3.7), 5);
    assert.equal(calculateNumber(1.5, 3.7), 6);
    assert.equal(calculateNumber(1.5, 3.5), 6);
    assert.equal(calculateNumber(1.7, 3.7), 6);
    assert.equal(calculateNumber(-1.7, -3.7), -6);
  })
});
