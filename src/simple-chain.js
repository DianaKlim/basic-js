const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 throw new NotImplementedError('Not implemented');

const chainMaker = {

  array: [],


  getLength() {
    return this.array.length;
  },

  addLink(value) {
    this.array.push(value);
    return this
  },

  removeLink(position) {
    if (!Number.isInteger(position)) {
      throw Error("You can\'t remove incorrect link!");
    }
    if (position > this.array.length || position <= 0) {
      throw Error("You can\'t remove incorrect link!");
    }

    this.array.splice(position-1, 1);
    return this;
  },

  reverseChain() {
    this.array = this.array.reverse();
    return this;
  },

  finishChain() {
    if (this.array.length === 0) {
      return ''
    }
    return '( ' + this.array.join(' )~~( ') + ' )'
  }
};

module.exports = {
  chainMaker
};
