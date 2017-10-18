const quickSort = array => {
  if (array.length <= 1) {
    return array;
  }
  let left = [];
  let right = [];
  let pivot = array[array.length - 1];

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i])
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([2, 1, 40, 3, 8, 9]))
// console.log(quickSort([z, h, v, l, a, k]))



module.exports = quickSort;