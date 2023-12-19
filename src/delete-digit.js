const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let minDigit;
  let minDigitIdx;
  const digits = n.toString().split('');
  if (digits[0] < digits[1]) {
    digits.splice(0,1);
    return Number(digits.join(''));
  }
  minDigit = digits[0];
  digits.forEach((digit, idx) => {
    if (digit < minDigit) {
      minDigit = digit;
      minDigitIdx = idx
    }
  });
  digits.splice(minDigitIdx, 1);
  return Number(digits.join(''));
}

module.exports = {
  deleteDigit
};
