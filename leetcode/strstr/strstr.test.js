const strstr = require('./strstr');

// test('hello, ll', () => {
//   expect(strstr('hello', 'll')).toEqual(2);
// });

test('helloworl, world', () => {
  expect(strstr('helloworl', 'world')).toEqual(-1);
});

// test('aaaaa, bba', () => {
//   expect(strstr('aaaaa', 'bba')).toEqual(-1);
// });

// test('both empty', () => {
//   expect(strstr('', '')).toEqual(0);
// });
