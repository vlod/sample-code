/**
 * @param {number} x
 * @return {number}
 */

const reverseInteger = (x) => {
  const limit = 2147483648; // 2**32 / 2 (as it's signed)
  const k = x < 0 ? -1 : 1; // used to capture the sign

  const n = Number(String(Math.abs(x)).split('').reverse().join(''));
  return n > limit ? 0 : n * k;
};

module.exports = reverseInteger;
