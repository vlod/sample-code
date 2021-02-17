const lookup = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,

  IV: 4,
  IX: 9,
  XL: 40,
  XC: 90,
  CD: 400,
  CM: 900,
};

/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = (txt) => {
  let readPos = 0;
  let total = 0;

  while (readPos < txt.length) {
    console.debug(`found: ${txt[readPos]}`);

    if (readPos !== txt.length - 1) {
      const token = `${txt[readPos]}${txt[readPos + 1]}`;
      const val = lookup[token];
      if (val) { // first+second token is valid
        // console.debug(`token: ${token} val:${val}`);
        total += val;
        readPos++; // need to skip extra token
      }
      // first+second token is not a valid
      else total += lookup[txt[readPos]];
    }
    else {
      total += lookup[txt[readPos]];
    }
    readPos++;
  }
  return total;
};

module.exports = romanToInt;
