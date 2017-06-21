/**
 * Reverse a string
 * @param {String} list
 * @example
 *
 * reverse("hello world")
 * // -> dlrow olleh
 */
function reverse(myString) {
  // console.log('reverse received:', myString);
  if (myString === undefined) {
    throw new Error("reverse() expects a non null string");
  }

  const results = [];

  let index = 0;
  for (var i = myString.length-1; i>=0; i--) {
    results.push( myString[i] );
  }
  return results.join('');
}

// Usage: node reverse.js
// fyi: using node v8.1.2
const textString = 'hello world';
const results = reverse(textString);

console.log('results:', results); // hello world -> dlrow olleh
