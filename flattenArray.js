/**
 * Flattens an array
 * @param {Array} list
 * @example
 *
 * flatten([[1,[], 2,[3, [22,33]]],4])
 * // -> [ 1, 2, 3, 22, 33, 4 ]
 */
function flatten(list) {
  // console.log('flatten received:', list);
  if (list === undefined) {
    throw new Error("flatten() expects a non null list");
  }

  const results = [];
  for (const item of list) {
    // if we have another array, then recurse
    if (item instanceof Array) {
      for (const f of flatten(item)) { // as we get back an array
        results.push(f);
      }
    }
    else {
      results.push(item);
    }
  }
  return results;
}

// Usage: node flattenArray.js
// fyi: using node v8.1.2
const srcArray = [[1,[], 2,[3, [22,33]]],4];
const results = flatten(srcArray);

console.log('results:', results); // [ 1, 2, 3, 22, 33, 4 ]
