const reverseInteger = require('./reverseInteger');

/**
 * Input: x = 123
 * Output: 321
 */
test('x = 123', () => {
  expect(reverseInteger(123)).toEqual(321);
});

/**
* Input: x = -123
* Output: -321
*/
test('x = -123', () => {
  expect(reverseInteger(-123)).toEqual(-321);
});

/**
 * Input: x = 120
 * Output: 21
 */
test('x = 120', () => {
  expect(reverseInteger(120)).toEqual(21);
});
