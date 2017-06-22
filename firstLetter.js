/**
 * String containing first letter of every word in a given string with spaces
 *
 * Input : str = "geeks for     geeks"
 * Output : gfg
 */

// const srcString = 'happy   coding';
const srcString = 'geeks for     geeks';
const results = [];

for (const item of srcString.split(/\s/)) {
  if (item.length > 0) {
    results.push(item[0])
  }
}
console.log(`results: ${results.join('')}`);
