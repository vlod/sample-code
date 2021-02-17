/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = (nums, val) => {
  let currentPos = 0;

  for (let i = 0; i <= nums.length - 1; i++) {
    if (nums[i] !== val) {
      nums[currentPos] = nums[i];
      // console.debug(`set nums[${currentPos}] to:[${val}] nums: ${JSON.stringify(nums)}`);
      currentPos++;
    }
  }
  console.debug(`currentPos:[${currentPos}] result:[${nums.slice(0, currentPos)}]`);
  return currentPos;
};

module.exports = removeElement;
