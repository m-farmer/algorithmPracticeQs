/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string ''.

Example:

Input: strs = ["flower","flow","flight"]
Output: "fl"

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

*/

function longestCommonPrefix(arr) {

  let currentString = "";

  for (let letterIdx = 0; letterIdx < arr[0].length; letterIdx++) {

    let wordIdx = 0;

    // slice up to the current letter (inclusive)
    currentString = arr[wordIdx].slice(0, letterIdx +1);

    // iterate through each word, compare the slice of each word
    while(wordIdx < arr.length) {
      if (arr[wordIdx].slice(0, letterIdx +1) === currentString) {
        wordIdx++;
      }
      // if the current slices don't match, return the previous slice
      else return currentString.slice(0, currentString.length-1);
    }
  }
  return currentString;
}
