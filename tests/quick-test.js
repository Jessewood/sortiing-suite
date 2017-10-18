const assert = require('chai').assert;
const expect  = require('chai').expect;
const quickSort = require('../scripts/quick.js')

describe('Quick sort tests', () => {

  it('should be a function', () => {
    assert.isFunction(quickSort);
  })

  it('should sort a small array of numbers with quickSort', () => {
    const numbers = [4, 3, 2, 1];
    expect( quickSort(numbers) ).to.deep.equal( [1, 2, 3, 4] );
  })

  // it('should sort a small array of numbers with quickSort', () => {
  //   expect( quickSort(hugeArray10000) ).to.deep.equal( hugeArray10000.sort((a,b) => a-b))
  // });

})