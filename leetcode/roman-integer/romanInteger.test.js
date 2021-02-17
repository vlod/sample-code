const romanInteger = require('./romanInteger');

test('x = III', () => {
  expect(romanInteger('III')).toEqual(3);
});

test('x = IV', () => {
  expect(romanInteger('IV')).toEqual(4);
});

test('x = IX', () => {
  expect(romanInteger('IX')).toEqual(9);
});

// // Explanation: L = 50, V= 5, III = 3
test('x = LVIII', () => {
  expect(romanInteger('LVIII')).toEqual(58);
});

// // Explanation: M = 1000, CM = 900, XC = 90 and IV = 4
test('x = MCMXCIV', () => {
  expect(romanInteger('MCMXCIV')).toEqual(1994);
});
