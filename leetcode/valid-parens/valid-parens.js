const lookup = {
  ')': '(',
  '}': '{',
  ']': '[',
};

/**
 * @param {string} s
 * @return {boolean}
 */
const isValidParen = (s) => {
  const parenStack = [];

  for (let i = 0; i <= s.length - 1; i++) {
    // console.debug('### processing: ', s[i]);

    // opening brackets get pushed to the stack
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      parenStack.push(s[i]);
    }
    // deal with closing bracket, lookup matching bracket and pop last one of the stack
    else if (s[i] === ')' || s[i] === '}' || s[i] === ']') {
      const matchingBracket = lookup[s[i]];
      const candidateBracket = parenStack.pop();
      if (candidateBracket !== matchingBracket) return false;
    }
  }

  return parenStack.length === 0; // empty means brackets were matched and popped
};

module.exports = isValidParen;
