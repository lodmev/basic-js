const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
const A_CODE = 65;
const Z_CODE = 90;
class VigenereCipheringMachine {
  constructor(type) {
    this.direct = type === undefined ? true : type;
  }
  encrypt(str, key) {
    if (str === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }
    let res = [];
    const sEncoder = symbolEncoder(key.toUpperCase());
    for (const symbol of str.toUpperCase()) {
      res.push(sEncoder(symbol));
    }
    if (!this.direct) {
      res = res.reverse();
    }
    return res.join('');
  }
  decrypt(str, key) {
    if (str === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }
    const sDecoder = symbolDecoder(key.toUpperCase());
    let res = [];
    for (const symbol of str.toUpperCase()) {
      res.push(sDecoder(symbol));
    }
    if (!this.direct) {
      res = res.reverse();
    }
    return res.join('');
  }
}

function symbolEncoder(key) {
  let counter = 0;
  return function (symbol) {
    const code = symbol.codePointAt();
    if (code < A_CODE || code > Z_CODE) {
      return symbol;
    }
    const keyCode = key[counter % key.length].codePointAt();
    counter += 1;
    return String.fromCodePoint(((code + keyCode) % 26) + A_CODE);
  };
}

function symbolDecoder(key) {
  let counter = 0;
  return function (symbol) {
    const code = symbol.codePointAt();
    if (code < A_CODE || code > Z_CODE) {
      return symbol;
    }
    const keyCode = key[counter % key.length].codePointAt();
    counter += 1;
    const difference = code - keyCode;
    if (difference < 0) {
      return String.fromCodePoint(26 + difference + A_CODE);
    }
    return String.fromCodePoint((difference % 26) + A_CODE);
  };
}

module.exports = {
  VigenereCipheringMachine,
};
