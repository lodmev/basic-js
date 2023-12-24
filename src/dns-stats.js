const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const domainsMap = new Map();
  for (adr of domains) {
    adr.split('.').reverse().reduce((acc, value) => {
      acc += '.' + value;
      add(acc);
      return acc;
    }, '');
  }
  function add(domain) {
    if (domainsMap.has(domain)) {
      domainsMap.set(domain, domainsMap.get(domain) + 1);
    } else {
      domainsMap.set(domain, 1)
    }
  }
  return Object.fromEntries(domainsMap);
}

module.exports = {
  getDNSStats
};
