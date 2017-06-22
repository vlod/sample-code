/**
 * Find uncommon characters of the two strings
 *
 * Input : str1 = "characters"
 *         str2 = "alphabets"
 * Output : b c l p r
 *
 * Input : str1 = "geeksforgeeks"
 *         str2 = "geeksquiz"
 * Output : f i o q r u z
 */

const src1 = 'characters';
const src2 = 'alphabets';

// split each of the strings into an array of characters
const src1List = src1.split("");
const src2List = src2.split("");

// and populate a Set from them
const src1Set = new Set(src1List);
const src2Set = new Set(src2List);

const resultSet = new Set();

// add letters in src1 which are not in src2
for (const letter of src1List) {
  if (!src2Set.has(letter)) {
    resultSet.add(letter);
  }
}

// add letters in src2 which are not in src1
for (const letter of src2List) {
  if (!src1Set.has(letter)) {
    resultSet.add(letter);
  }
}

console.log('results:', resultSet);
