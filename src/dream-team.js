const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let name = '';
  if (typeof(members) !== 'object' || members === null) {
    return false
  } 
  else { 
    for (let i = 0; i < members.length ; i++) {
    if (typeof(members[i]) === 'string') { 
      members[i] = members[i].trim();
      console.log(members[i])
      name += members[i][0].toUpperCase();
    } ;
  }
  var nameSplit = name.split('');
  let membersSorted = nameSplit.sort().join('').replace(/\s+/g, '');
  return membersSorted ;
}
}

module.exports = {
  createDreamTeam
};
