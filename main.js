const {VigenereCipheringMachine} = require('./src/vigenere-cipher.js');
const str = 'attack at dawn!';
const key = 'alphonse'
const encStr = 'AEIHQX SX DLLU!'
const vcm = new VigenereCipheringMachine();
console.log(vcm.encrypt(str, key));
console.log(vcm.decrypt(encStr, key));

