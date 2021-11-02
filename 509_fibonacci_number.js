// index:  [0] [1] [2] [3] [4] [5] [6] [7]
// number:  0   1   1   2   3   5   8   13

const fib = (n) => {
  // return fib_r(n);
  return fib_rm(n);
};

/**
 * Recursive with O(2^n) time complexity and O(n) space complexity.
 * @param {Number} n The index at which to calculate the fib number.
 * @returns The fibonacci number at index `n`.
 */
const fib_r = (n) => {
  if (n == 0) {
    return 0;
  }
  if (n <= 2) {
    return 1;
  }

  return fib_r(n - 1) + fib_r(n - 2);
};

/**
 * Recursive with O(n) time complexity and O(n) space complexity.
 * @param {Number} n The index at which to calculate the fib number.
 * @param {Object} memo An object that maps previously calculated indices to their answer.
 * @returns The fibonacci number at index `n`.
 */
const fib_rm = (n, memo = {}) => {
  if (n == 0) {
    return 0;
  }
  if (n <= 2) {
    return 1;
  }

  // check if we know the answer already
  if (n in memo) {
    return memo[n];
  }

  const answer = fib_rm(n - 1, memo) + fib_rm(n - 2, memo);
  memo[n] = answer; // remember the calculated value
  return answer;
};
