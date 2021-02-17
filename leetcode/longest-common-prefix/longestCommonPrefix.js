/**
 * @param {string[]} strs
 * @return {string}
 */
// ["flower","flow","flight"]
const longestCommonPrefix = (strs) => {
  const results = [];
  let currentPos = 0;

  while (1) {
    let currentToken = strs[0][currentPos];
    console.debug('currentToken: ', currentToken);

    // go thru each word
    for (let i = 1; i < strs.length; i++) {
      // ran out of letters
      if (currentPos > strs[i].length - 1) {
        // console.debug('ran out of letters for: ', i);
        return results.join('');
      }

      if (strs[i][currentPos] !== currentToken) {
        // console.debug('found mismatch:', strs[i][currentPos], ' i: ', i);
        return results.join('');
      }
    }
    results.push(currentToken);
    currentPos++;
    currentToken = strs[0][currentPos];
  }
};

module.exports = longestCommonPrefix;
