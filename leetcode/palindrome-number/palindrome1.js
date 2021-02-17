/**
 * @param {number} x
 * @return {boolean}
 */

const isPalindrome = (x) => {
  if (x < 0) return false;

  const num = String(x).split('');
  let leftPos = 0;
  let rightPos = num.length - 1;

  // console.log(`comparing:[${num[leftPos]}] with ${num[rightPos]}`);
  while (leftPos !== rightPos) {
    if (num[leftPos] !== num[rightPos]) {
      return false;
    }
    leftPos++;
    rightPos--;
  }
  return true;
};

module.exports = isPalindrome;
