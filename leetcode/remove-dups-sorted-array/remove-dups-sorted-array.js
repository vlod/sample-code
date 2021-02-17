/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums) => {
  if (nums.length === 1) return 1;

  let currentPos = 0;

  for (let i = 1; i <= nums.length - 1; i++) {
    // console.debug(`i:[${i}] val:[${nums[i]}]`);
    if (nums[i] !== nums[currentPos]) {
      currentPos++;
      nums[currentPos] = nums[i];
    }
  }
  console.debug(`len:[${currentPos + 1}] nums: `, nums.slice(0, currentPos + 1));
  return currentPos + 1; // postition 1 is length 2 becz index start 0
};

module.exports = removeDuplicates;
