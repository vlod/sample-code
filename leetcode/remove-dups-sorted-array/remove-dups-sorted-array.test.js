const removeDuplicates = require('./remove-dups-sorted-array');

// finally nums = [1,2]
test('[1,1,2]', () => {
  expect(removeDuplicates([1, 1, 2])).toEqual(2);
});

// finally nums = [0,1,2,3,4]
test('[0,0,1,1,1,2,2,3,3,4]', () => {
  expect(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).toEqual(5);
});
