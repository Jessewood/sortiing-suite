const assert = require('chai').assert;
const expect  = require('chai').expect;
const bubbleSort = require('../scripts/bubble.js')


describe('bubbleSort tests', () => {

  it('should be a function', () => {
    assert.isFunction(bubbleSort);
  })

  it('should sort a small array of numbers with bubbleSort', () => {
    const numbers = [4, 3, 2, 1];
    expect( bubbleSort(numbers) ).to.deep.equal( [1, 2, 3, 4] );
  })

  // it('should sort an array of 10,000 numbers', () => {

  // })
})