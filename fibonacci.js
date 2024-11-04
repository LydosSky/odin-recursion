/*
  return first num fibonacci number inside of a array
  using iteration.
 */
function fibs(num) {
  const nums = [0, 1];

  if (num === 0) return [];
  if (num === 1) return [0];

  for (let i = 2; i < num; i++) {
    if (!(i - 2 < 0) && !(i - 1 < 0)) nums[i] = nums[i - 1] + nums[i - 2];
  }

  return nums;
}
