const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const separator = options.separator ? options.separator : '+';
  const addSep = options.additionSeparator ? options.additionSeparator : '|';
  let addition = '';
  if (options.addition !== undefined) {
    addition = repeat(options.addition, options.additionRepeatTimes, addSep);
  }
  let strWithAddition = ''.concat(str).concat(addition);
  return repeat(strWithAddition, options.repeatTimes, separator);
  function repeat(str, times, sep) {
    let res = '';
    if (times && times >= 2) {
      for (let i = 1; i < times; i += 1) {
        res = res.concat(str).concat(sep);
      }
      res = res.concat(str)
    } else {res = str;}
    return res;
  }
}

module.exports = {
  repeater
};
