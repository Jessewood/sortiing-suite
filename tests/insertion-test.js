const assert = require('chai').assert;
const expect  = require('chai').expect;
const insertionSort = require('../scripts/insertion.js');
const randomNumberArray = require('../scripts/randomNumberGen');
const letters = require('../scripts/sortedLetters.js');
const sortedLetters = require('../scripts/sortedLetters.js');

describe('Insertion sort tests', () => {
  it('should be a function', () => {
    assert.isFunction(insertionSort);
  })

  it('should sort a small array of numbers with insertionSort', () => {
    const numbers = [5, 4, 3, 2];
    expect( insertionSort(numbers) ).to.deep.equal( [2, 3, 4, 5] );
  })

  it('should sort an array of 10,000 numbers', () => {
    let newArray = randomNumberArray(10000, 10000)
    let sortedArray = insertionSort(newArray)
    for (let i = 0; i < sortedArray.length; i++) {
      expect(sortedArray[i] < sortedArray[i + 1], true)
    }
  })

  it('should sort an array of 20,000 numbers', () => {
    let newArray = randomNumberArray(20000, 20000)
    let sortedArray = insertionSort(newArray)
    for (let i = 0; i < sortedArray.length; i++) {
      expect(sortedArray[i] < sortedArray[i + 1], true)
    }
  })

    it('should sort letters', () => {
    expect( insertionSort(letters) ).to.deep.equal(sortedLetters);
  })
})