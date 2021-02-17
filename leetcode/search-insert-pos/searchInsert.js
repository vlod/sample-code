/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// nums = [1,3,5,6], target = 2
const searchInsert = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    // console.debug(`processing:[${i}]: ${nums[i]}`);
    if (nums[i] === target || nums[i] > target) return i;
  }
  // greater than the last digit
  return nums.length;
};

module.exports = searchInsert;
