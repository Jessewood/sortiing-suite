const assert = require('chai').assert;
const expect  = require('chai').expect;
const quickSort = require('../scripts/quick.js');
const randomNumberArray = require('../scripts/randomNumberGen');
// const letters = require('../scripts/sortedLetters.js');
// const sortedLetters = require('../scripts/sortedLetters.js');

describe('Quick sort tests', () => {

  it('should be a function', () => {
    assert.isFunction(quickSort);
  })

  it('should sort a small array of numbers with quickSort', () => {
    const numbers = [4, 3, 2, 1];
    expect( quickSort(numbers) ).to.deep.equal( [1, 2, 3, 4] );
  })

  it('should sort an array of 10,000 numbers', () => {
    let newArray = randomNumberArray(10000, 10000)
    let sortedArray = quickSort(newArray)
    for (let i = 0; i < sortedArray.length; i++) {
      expect(sortedArray[i] < sortedArray[i + 1], true )
    }
  })

  it('should sort an array of 100,000 numbers', () => {
    let newArray = randomNumberArray(100000, 10000)
    let sortedArray = quickSort(newArray)
    for (let i = 0; i < sortedArray.length; i++) {
      expect(sortedArray[i] < sortedArray[i + 1], true )
    }
  })

  it('should sort an array of 1,000,000 numbers', () => {
    let newArray = randomNumberArray(1000000, 1000000)
    let sortedArray = quickSort(newArray)
    for (let i = 0; i < sortedArray.length; i++) {
      expect(sortedArray[i] < sortedArray[i + 1], true)
    }
  })

  it('should sort letters', () => {
    let letters = ['z', 'l', 'g', 'a', 'k'];
    let sortedLetters = ['a', 'g', 'k', 'l', 'z', ]
    expect( quickSort(letters) ).to.deep.equal(sortedLetters);
  })
})