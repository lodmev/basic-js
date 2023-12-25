const {VigenereCipheringMachine} = require('./src/vigenere-cipher.js');
const str = 'attack at dawn!';
const key = 'alphonse'
const vcm = new VigenereCipheringMachine();
console.log(vcm.encrypt(str, key));

