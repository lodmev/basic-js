const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let commonCounter = 0;
  let longer = s1; 
  let shorter = s2;
  const longerCharsMap = {};
  if (s1.length < s2.length) {
    shorter = s1;
    longer = s2
  }
  for (const ch of longer) {
    if (Object.hasOwn(longerCharsMap, ch)) {
      longerCharsMap[ch] += 1;
    } else {
      longerCharsMap[ch] = 0;
    }
  }
  for (const ch of shorter) {
    if (Object.hasOwn(longerCharsMap, ch)) {
      if (longerCharsMap[ch] < 0) {
        continue;
      } else {
        commonCounter += 1;
        longerCharsMap[ch] -=1;
      }
    }
  }
  return commonCounter;
}

module.exports = {
  getCommonCharacterCount
};
