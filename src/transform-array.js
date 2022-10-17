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
function transform(/*arr*/) {
  // throw new NotImplementedError('Not implemented');
  let copyArr = [...arr];
  if (!Array.isArray(copyArr)) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }

  if (copyArr.includes("--discard-prev") || copyArr.includes('--discard-next') || copyArr.includes('--double-next') || copyArr.includes('--double-prev')) {

    let newArr = [];
    for (let i = 0; i < copyArr.length; i++) {
      if (copyArr[i] === '--double-next') {
        copyArr[i] = copyArr[i + 1];
      }
      else if (copyArr[i + 1] === '--discard-prev') {
        delete copyArr[i];
        delete copyArr[i + 1];
      }
      else if (copyArr[i] === '--discard-next') {
        delete copyArr[i + 1];
        delete copyArr[i];
      }
      else if (copyArr[i + 1] === '--double-prev') {
        copyArr[i + 1] = copyArr[i];
      }

      newArr.push(copyArr[i]);
    }
    return newArr.filter(Number)
  }
  else {
    return arr
  }

}

module.exports = {
  transform
};
