/*
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

You cannot change the length of the array. You must have the result placed in the first part of the array nums. If there are k elements after removing duplicates, then the first k elements of nums shoul dhold the final result. It does not matter what fills the rest of the array.

NO COPYING, new sets, or pushing onto new arrays.

Example 1:

Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
Example 2:

Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
*/

function removeDuplicates (nums) {
  if (nums.length === 0)  return 0;
  let i = 0, j = 1;
  while(j < nums.length) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j]
    }
    j++;
  }
  return i+1;
}

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))
console.log(removeDuplicates([-1,0,0,0,0,3,3]))
