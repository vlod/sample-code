/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

// haystack = "hello", needle = "ll"
const strstr = (haystack, needle) => {
  if (haystack.length === 0 || needle.length === 0) return 0;

  let found;

  for (let i = 0; i < haystack.length; i++) {
    found = false;
    for (let j = 0; j < needle.length; j++) {
      // console.debug(`found:[${found}] comparing:[${i} + ${j}] [${haystack[i + j]}] with [${needle[j]}]`);
      if (i + j + 1 > haystack.length) return -1;

      if (haystack[i + j] !== needle[j]) {
        found = false;
        break;
      }
      else found = true;
    }

    if (found) return i;
  }

  return -1;
};

module.exports = strstr;
