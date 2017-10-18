const assert = require('chai').assert;
const expect  = require('chai').expect;
const insertionSort = require('../scripts/insertion.js')

describe('Insertion sort tests', () => {
  it('should be a function', () => {
    assert.isFunction(insertionSort);
  })

  it('should sort a small array of numbers with insertionSort', () => {
    const numbers = [5, 4, 3, 2];
    expect( insertionSort(numbers) ).to.deep.equal( [2, 3, 4, 5] );
  })
})