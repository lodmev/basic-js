const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if ( !(arr instanceof Array) ) {
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  }
  const wasPreviouslyDelete = [];
  const result = Array(...arr);
  for (let i = 0; i < result.length; i += 1) {
    switch (result[i]) {
      case '--discard-prev':
        // delete prev and current control sequence
        if (result[i - 1] && !wasPreviouslyDelete[i]) {
        result.splice(i - 1, 2);
        } else {
          result.splice(i,1);
        }
        break;
      case '--discard-next':
        // delete next and current control sequence
        result.splice(i, 2);
        wasPreviouslyDelete[i] = true;
        i -= 1;
        break;
      case '--double-next':
        //replace current control sequence for next element
        if (result[i + 1]) {
        result.splice(i, 1, result[i + 1])
        } else {
          result.splice(i,1);
        }
        break;
      case '--double-prev':
        //replace current control sequence for prev element
        console.log(wasPreviouslyDelete[i]);
        if (result[i - 1] && !wasPreviouslyDelete[i]) {
        result.splice(i, 1, result[i - 1])
        } else {
          result.splice(i,1);
        }
        break;
    }
  }
  return result;
}

module.exports = {
  transform
};
