const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(/*date*/) {
  // throw new NotImplementedError('Not implemented');
  if (Object.prototype.toString.call(date) !== '[object Date]' || date === '[new Date()]') {
    return 'Invalid date!'
  }
  let month = date.getMonth();
  if (month === 12 || month === 1 || month === 2) {
    return 'winter'
  }
  if (month === 3 || month === 4 || month === 5) {
    return 'spring'
  }
  if (month === 6 || month === 7 || month === 8) {
    return 'summer'
  }
  if (month === 9 || month === 10 || month === 11) {
    return 'autumn'
  }
}

module.exports = {
  getSeason
};
