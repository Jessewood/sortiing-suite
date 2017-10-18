const assert = require('chai').assert;
const expect  = require('chai').expect;
const mergeSort = require('../scripts/merge.js');


describe('Merge sort tests', () => {

  it('should be a function', () => {
    assert.isFunction(mergeSort);
  })

  it('should sort a small array of numbers with mergeSort', () => {
    const numbers = [4, 3, 2, 1];
    expect( mergeSort(numbers) ).to.deep.equal( [1, 2, 3, 4] );
  }) 
  //  it('should sort a small array of numbers with mergeSort', () => {
  //   expect( mergeSort(hugeArray10000) ).to.deep.equal( hugeArray10000.sort((a,b) => a-b));
  // })
})