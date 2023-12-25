const { chainMaker } = require('./src/simple-chain.js');
console.log(chainMaker.addLink(null).addLink(false).addLink(22).reverseChain().reverseChain().removeLink(2))

