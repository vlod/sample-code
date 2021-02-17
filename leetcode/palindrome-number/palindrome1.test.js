const isPalindrome = require('./palindrome1');

/**
 * Input: x = 121
 * Output: true
 */
test('x = 121', () => {
  expect(isPalindrome(121)).toEqual(true);
});

/**
 * Input: x = -121
 * Output: false
 */
test('x = -121', () => {
  expect(isPalindrome(-121)).toEqual(false);
});

/**
 * Input: x = 10
 * Output: false
 */
test('x = 10', () => {
  expect(isPalindrome(10)).toEqual(false);
});

/**
 * Input: x = 101
 * Output: true
 */
test('x = 101', () => {
  expect(isPalindrome(101)).toEqual(true);
});

/**
 * Input: x = 1001
 * Output: true
 */
test('x = 1001', () => {
  expect(isPalindrome(101)).toEqual(true);
});
