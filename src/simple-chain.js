const { NotImplementedError } = require('../extensions/index.js');
const util = require('util');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain : [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(value === undefined ? '' : value);
    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number' || position - 1 < 0 || position -1 >= this.chain.length ) {
      process.stdout.write(util.format(this.chain, position));
      this.chain = [];
      throw new Error('You can\'t remove incorrect link!');
    }
    this.chain.splice(position - 1, 1)
    return this
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    let res = [];
    for (let i = 0; i < this.chain.length; i += 1) {
      res.push(`( ${this.chain[i]} )`)
    }
    this.chain = [];
    return res.join('~~');
  }
};

module.exports = {
  chainMaker
};
