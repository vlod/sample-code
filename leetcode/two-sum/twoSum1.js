/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/**
 * 2+7
 * 2+11
 * 2+15
 *
 * 7+11
 * 7+15
 *
 * 11+15
 */

// Complexity Analysis
//  Time complexity: O(n^2).
//    For each element, we try to find its complement by looping through the rest of array which takes O(n) time.
//    Therefore, the time complexity is O(n^2).
//  Space complexity: O(1).

const twoSum = (nums, target) => {
  let readPos = 1;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = readPos; j < nums.length; j++) {
      // console.log(`calc: ${nums[i]} + ${nums[j]}`);
      if (nums[i] + nums[j] === target) return [i, j];
    }
    readPos++;
  }
  return [];
};

module.exports = twoSum;
