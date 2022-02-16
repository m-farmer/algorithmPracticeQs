/*
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time.

DO NOT USE THE DIVISION OPERATOR (what makes this a 'medium' problem)

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]

*/

// first method: two separate loops (one for numbers to left of index, one for numbers right of index)

function productExceptSelf(nums) {

  let leftTotal = 1, rightTotal=1, left = [];

  let rightIdx = nums.length-1, right = [];

  let complete = [];

  for (let leftIdx = 0; leftIdx < nums.length; leftIdx++) {


    if (leftIdx !== 0)  leftTotal *= nums[leftIdx-1];
    if (rightIdx !== nums.length-1) rightTotal *= nums[rightIdx+1];

    left.push(leftTotal);
    right.unshift(rightTotal);

    rightIdx--;


}



  for (let i = 0; i < nums.length; i++) {

    complete.push(left[i] * right[i])
  }

  return complete;

}

console.log(productExceptSelf([1,2,3,4]))
