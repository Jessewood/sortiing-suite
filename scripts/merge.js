function mergeSort( array ) {
  if (array.length <= 1) {
    return array;
  }
  const midpoint = Math.floor(array.length / 2);
  const left = array.slice(0, midpoint);
  const right = array.slice(midpoint, array.length);
  //console.log(a);
  //console.log(b);
  return merge(mergeSort(left), mergeSort(right));
}

function merge( left, right ) {
  let result = [];
  //console.log('merge happening');
  while ( left.length && right.length) {
    if( left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
    while (left.length) {
      result.push(left.shift());
    }
    while ( right.length) {
      result.push(right.shift());
    }
    return result;
  }

module.exports = mergeSort;