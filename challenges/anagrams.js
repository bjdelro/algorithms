'use strict';
/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example:
  * let result = anagrams('abc');
  * console.log(result); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */
function reorderString(newString, string, output) {
  if (string === '') {
    output.push(newString);
    return output;
  }
  for (let i = 0; i < string.length; i++) {
    reorderString(newString + string[i], string.slice(0, i) + string.slice(i + 1), output);
  }
}

function anagrams(string) {
  const output = [];
  reorderString('', string, output);
  return output;
}

module.exports = anagrams;
