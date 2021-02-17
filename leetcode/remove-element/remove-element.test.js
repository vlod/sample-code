const removeElement = require('./remove-element');

// Output: 2,becz  nums = [2,2]
test('nums = [3,2,2,3], val = 3', () => {
  expect(removeElement([3, 2, 2, 3], 3)).toEqual(2);
});

// Output: 5, becz nums = [0,1,4,0,3]
test('nums = [0,1,2,2,3,0,4,2], val = 2', () => {
  expect(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)).toEqual(5);
});
