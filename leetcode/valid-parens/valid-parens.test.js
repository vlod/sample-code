const isValidParen = require('./valid-parens');

test('s = ()', () => {
  expect(isValidParen('()')).toEqual(true);
});

test('s = ()[]{}', () => {
  expect(isValidParen('()[]{}')).toEqual(true);
});

test('s = (]', () => {
  expect(isValidParen('(]')).toEqual(false);
});

test('s = ([)]', () => {
  expect(isValidParen('([)]')).toEqual(false);
});

test('s = {[]}', () => {
  expect(isValidParen('{[]}')).toEqual(true);
});
