const assert = require('assert');
const calculateNumber = require('./1-calcul');
describe('tests 1-calcul.js calculateNumber func', function(){
  describe('test addition rounds numbers then sums', function(){
    it('test SUM', function(){
    assert.equal(calculateNumber('SUM', 1, 3), 4);
    assert.equal(calculateNumber('SUM', 1, 3.1), 4);
    assert.equal(calculateNumber('SUM', 1, 3.7), 5);
    assert.equal(calculateNumber('SUM', 1.2, 3), 4);
    assert.equal(calculateNumber('SUM', 1.7, 3), 5);
    assert.equal(calculateNumber('SUM', 1.2, 3.7), 5);
    assert.equal(calculateNumber('SUM', 1.5, 3.7), 6);
    assert.equal(calculateNumber('SUM', 1.5, 3.5), 6);
    assert.equal(calculateNumber('SUM', 1.7, 3.7), 6);
    assert.equal(calculateNumber('SUM', -1.7, -3.7), -6);
    });
  });
  describe('test subtraction rounds numbers then subtracts them', function(){
  it('testing SUBTRACT', function(){
    assert.equal(calculateNumber('SUBTRACT', 1, 3), -2);
    assert.equal(calculateNumber('SUBTRACT', 1, 3.1), -2);
    assert.equal(calculateNumber('SUBTRACT', 1, 3.7), -3);
    assert.equal(calculateNumber('SUBTRACT', 1.2, 3), -2);
    assert.equal(calculateNumber('SUBTRACT', 1.7, 3), -1);
    assert.equal(calculateNumber('SUBTRACT', 1.2, 3.7), -3);
    assert.equal(calculateNumber('SUBTRACT', 1.5, 3.7), -2);
    assert.equal(calculateNumber('SUBTRACT', 1.5, 3.5), -2);
    assert.equal(calculateNumber('SUBTRACT', 1.7, 3.7), -2);
    assert.equal(calculateNumber('SUBTRACT', -1.7, -3.7), 2);
  });
  })
  describe('test division rounds numbers then divides them', function(){
it('testing DIVIDE', function(){
    assert.equal(calculateNumber('DIVIDE', 1, 5), 0.2);
    assert.equal(calculateNumber('DIVIDE', 1, 4.1), 0.25);
    assert.equal(calculateNumber('DIVIDE', 1, 3.7), 0.25);
    assert.equal(calculateNumber('DIVIDE', 1.2, 4), 0.25);
    assert.equal(calculateNumber('DIVIDE', 1.7, 4), 0.5);
    assert.equal(calculateNumber('DIVIDE', 1.2, 3.7), 0.25);
    assert.equal(calculateNumber('DIVIDE', 1.5, 3.7), 0.5);
    assert.equal(calculateNumber('DIVIDE', 1.5, 3.5), 0.5);
    assert.equal(calculateNumber('DIVIDE', 1.7, 3.7), 0.5);
    assert.equal(calculateNumber('DIVIDE', -1.7, -3.7), 0.5);
    assert.equal(calculateNumber('DIVIDE', -1.7, 0), 'Error');
  });
  })
  })
