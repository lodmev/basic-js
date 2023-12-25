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
  if (!(members instanceof Array)) {
    return false;
  }
  let res = [];
  for (const member of members) {
    parseName(member)
  }
  /* 
   * @param {String}
   */ 
  function parseName(name) {
    if (typeof name  !== 'string') {
      return;
    }
    res.push(name.toUpperCase().trim().slice(0, 1))
    /*
    for (n of name.toUpperCase().split(' ')) {
      res.push(n.slice(0,1));
    }
    */
  }
  return res.sort().join('');
}

module.exports = {
  createDreamTeam
};
