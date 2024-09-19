const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./2-calcul_chai');
describe('tests 1-calcul.js calculateNumber func', function(){
  describe('test addition rounds numbers then sums', function(){
    it('test SUM', function(){
    expect(calculateNumber('SUM', 1, 3)).to.equal(4);
    expect(calculateNumber('SUM', 1, 3.1)).to.equal(4);
    expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
    expect(calculateNumber('SUM', 1.2, 3)).to.equal(4);
    expect(calculateNumber('SUM', 1.7, 3)).to.equal(5);
    expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
    expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
    expect(calculateNumber('SUM', 1.5, 3.5)).to.equal(6);
    expect(calculateNumber('SUM', 1.7, 3.7)).to.equal(6);
    expect(calculateNumber('SUM', -1.7, -3.7)).to.equal(-6);
    });
  });
  describe('test subtraction rounds numbers then subtracts them', function(){
  it('testing SUBTRACT', function(){
    expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
    expect(calculateNumber('SUBTRACT', 1, 3.1)).to.equal(-2);
    expect(calculateNumber('SUBTRACT', 1, 3.7)).to.equal(-3);
    expect(calculateNumber('SUBTRACT', 1.2, 3)).to.equal(-2);
    expect(calculateNumber('SUBTRACT', 1.7, 3)).to.equal(-1);
    expect(calculateNumber('SUBTRACT', 1.2, 3.7)).to.equal(-3);
    expect(calculateNumber('SUBTRACT', 1.5, 3.7)).to.equal(-2);
    expect(calculateNumber('SUBTRACT', 1.5, 3.5)).to.equal(-2);
    expect(calculateNumber('SUBTRACT', 1.7, 3.7)).to.equal(-2);
    expect(calculateNumber('SUBTRACT', -1.7, -3.7)).to.equal(2);
  });
  })
  describe('test division rounds numbers then divides them', function(){
it('testing DIVIDE', function(){
    expect(calculateNumber('DIVIDE', 1, 5)).to.equal(0.2);
    expect(calculateNumber('DIVIDE', 1, 4.1)).to.equal(0.25);
    expect(calculateNumber('DIVIDE', 1, 3.7)).to.equal(0.25);
    expect(calculateNumber('DIVIDE', 1.2, 4)).to.equal(0.25);
    expect(calculateNumber('DIVIDE', 1.7, 4)).to.equal(0.5);
    expect(calculateNumber('DIVIDE', 1.2, 3.7)).to.equal(0.25);
    expect(calculateNumber('DIVIDE', 1.5, 3.7)).to.equal(0.5);
    expect(calculateNumber('DIVIDE', 1.5, 3.5)).to.equal(0.5);
    expect(calculateNumber('DIVIDE', 1.7, 3.7)).to.equal(0.5);
    expect(calculateNumber('DIVIDE', -1.7, -3.7)).to.equal(0.5);
    expect(calculateNumber('DIVIDE', -1.7, 0)).to.equal('Error');
  });
  });
});
