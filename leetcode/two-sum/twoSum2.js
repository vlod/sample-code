/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = (nums, target) => {
  const lookup = {};
  // add val mapped to index
  for (let i = 0; i < nums.length; i++) {
    lookup[nums[i]] = i;
  }

  for (let i = 0; i < nums.length; i++) {
    const match = target - nums[i];
    const matchIndex = lookup[match];
    // console.log("### matchIndex for: ", matchIndex);
    if (matchIndex) {
      return [i, matchIndex];
    }
  }

  return [];
};

module.exports = twoSum;
