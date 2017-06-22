/**
 * Run length encoding of a string
 *
 * Input : aaaabbcd
 * Output : a4b2c1d1
 *
 */

const src = 'aaaabbcd';
const results = [];

let currentLetter;
let currentLetterCount = 0;

// for (let i = 0; i < src.length-1; i++) {
for (const letter of src) {
  if (letter != currentLetter) {
    if (currentLetterCount !== 0) {
      results.push(currentLetter+currentLetterCount);
    }

    // we've switched letters, reset
    currentLetter = letter;
    currentLetterCount = 1;
  }
  else {
    currentLetterCount++;
  }
}
// we have one left over.. add it
results.push(currentLetter+currentLetterCount);

console.log(`results:${results.join('')}`);
