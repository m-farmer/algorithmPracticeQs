/*
Given an integer x, return true if x is a palindrome and false otherwise.

example:
x = 121 returns true
x = -121 returns false
*/


function isPalindrome(x) {

  let str = String(x);

  let left = 0, right = str.length-1;

  while(left <= right) {

    if (str[left] !== str[right] ) return false;
    else {
      left++;
      right--;
    }
  }
  return true;
}

console.log(isPalindrome(121))
