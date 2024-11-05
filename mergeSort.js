const assert = require("assert");

const MergeSort = (function () {
  function sort(array) {
    if (array.length === 1) return array;
    const midPoint = Math.floor(array.length / 2);
    const left = array.slice(0, midPoint);
    const right = array.slice(midPoint);

    return mergeRec(sort(left), sort(right));
  }

  // iterative merging with helper
  function merge(left, right) {
    let i = 0;
    let j = 0;

    let sortedArr = [];

    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
        sortedArr.push(left[i]);
        i += 1;
      } else {
        sortedArr.push(right[j]);
        j += 1;
      }
    }

    if (i >= left.length) transmit(sortedArr, right, j);
    if (j >= right.length) transmit(sortedArr, left, i);

    return sortedArr;
  }

  function transmit(toArray, fromArray, fromPointer) {
    while (fromPointer < fromArray.length) {
      toArray.push(fromArray[fromPointer]);
      fromPointer += 1;
    }
  }

  // recursive merging
  function mergeRec(left, right) {
    if (left.length === 0) return right;
    if (right.length === 0) return left;

    if (left[0] < right[0])
      return [left[0]].concat(mergeRec(left.slice(1), right));
    else return [right[0]].concat(mergeRec(left, right.slice(1)));
  }

  return { sort };
})();

const numbersOne = [3, 2, 1, 13, 8, 5, 0, 1];
const numbersTwo = [105, 79, 100, 110];

assert.deepEqual(MergeSort.sort(numbersOne), [0, 1, 1, 2, 3, 5, 8, 13]);
assert.deepEqual(MergeSort.sort(numbersTwo), [79, 100, 105, 110]);
