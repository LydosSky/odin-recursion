const assert = require("node:assert");

/*
  return first num fibonacci number inside of a array
  using iteration.
 */
function fibs(num) {
  const nums = [];

  for (let i = 0; i < num; i++) {
    nums.push(fib(i));
  }

  return nums;
}

/*
  Returns nth fibonacci number
 */
function fib(num) {
  function helper(first, second, nth) {
    return nth <= 0 ? first : helper(second, first + second, nth - 1);
  }
  return helper(0, 1, num);
}

/*
  return first num fibonacci number inside of a array
  using recursion.
 */
function fibsRec(num) {
  if (num <= 0) return [];
  return fibsRec(num - 1).concat([fib(num - 1)]);
}

assert.equal(fib(0), 0);
assert.equal(fib(1), 1);
assert.equal(fib(2), 1);
assert.equal(fib(8), 21);
assert.deepEqual(fibs(8), [0, 1, 1, 2, 3, 5, 8, 13]);
assert.deepEqual(fibs(1), [0]);
assert.deepEqual(fibs(0), []);
assert.deepEqual(fibs(2), [0, 1]);
assert.deepEqual(fibsRec(8), [0, 1, 1, 2, 3, 5, 8, 13]);
assert.deepEqual(fibsRec(1), [0]);
assert.deepEqual(fibsRec(2), [0, 1]);
assert.deepEqual(fibsRec(0), []);
