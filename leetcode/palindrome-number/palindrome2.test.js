const isPalindrome = require('./palindrome2');

/**
 * Input: x = 12531
 * Output: true
 */
test('x = 12531', () => {
  expect(isPalindrome(12531)).toEqual(false);
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

/**
 * Input: x = 124421
 * Output: true
 */
test('x = 124421', () => {
  expect(isPalindrome(124421)).toEqual(true);
});
