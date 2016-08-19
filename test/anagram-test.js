'use strict';
const test = require('tape');
const anagrams = require('./../challenges/anagrams.js');
test('anagram Tests ', (t) => {
  t.plan(4);
  const emptyArray = anagrams('');
  const numberArray = anagrams(2423);
  t.deepLooseEqual(numberArray, [], 'should handle only string inputs');
  t.equal(emptyArray[0], '', 'should handle empty string');
  let outputArray = anagrams('abc');
  const threeLetterArray = ['abc', 'acb', 'bac', 'bca', 'cab', 'cba'];
  t.deepLooseEqual(outputArray, threeLetterArray, 'should handle 3 letter input');
  outputArray = anagrams('HelloWorld');
  t.notEqual(outputArray.indexOf('eHllorWlod'), -1, 'should handle large words');
});
