const longestCommonPrefix = require('./longestCommonPrefix');

test('x = ["flower","flow","flight"]', () => {
  expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toEqual('fl');
});

// Explanation: There is no common prefix among the input strings.
test('x = ["dog","racecar","car"]', () => {
  expect(longestCommonPrefix(['dog', 'racecar', 'car'])).toEqual('');
});
