/**
 * @param {number} x
 * @return {boolean}
 */

const isPalindrome = (x) => {
  if (x < 0) return false;

  // reverse number
  let num = x;
  const reservedNum = [];

  while (num > 0) {
    // console.log('#### pushing: ', num % 10);
    reservedNum.push(num % 10);
    num = Math.floor(num / 10);
  }

  // convert back to number
  let newNum = 0;
  let multiplier = 1;
  while (reservedNum.length !== 0) {
    newNum += reservedNum.pop() * multiplier;
    multiplier *= 10;
  }

  console.log('#### newNum: ', newNum);

  // if the subtraction is zero it's a pali
  return newNum - x === 0;
};

module.exports = isPalindrome;
