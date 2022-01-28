/*
Write a function that takes in a non-empty array of distinct integers and a target value. If any two numbers in the input array sum up to the target, the function should return an array of those numbers in any order. Otherwise return an empty array.

The target sum can only be found by adding two distinct integers together, not adding an integer to itself.
*/

// naive solution
// time complexity O(n^2)
// space complexity O(n)
function twoNumberSumLoop(arr, sum) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) return true;
    }
  }
  return false;
}

// pointer solution (aka racheting)
// time complexity O(n * log(n))
// space complexity O(1)
function twoNumberSum(array, targetSum) {
  array.sort((a, b) => a - b);
  let first = 0,
    last = array.length - 1,
    list = [];

  while (first < last) {
    if (array[first] + array[last] === targetSum) {
      list.push(array[first], array[last]);
      first++;
      last--;
    } else if (array[first] + array[last] < targetSum) first++;
    else last--;
  }
  return list;
}

console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10));

// solution using a hash table
// time complexity O(n)
// space complexity O(n)
function twoNumberSumHash(array, target) {
  let hash = {},
    list = [];
  for (let i = 0; i < array.length; i++) {
    if (hash[target - array[i]]) list.push(array[i], target - array[i]);
    else hash[array[i]] = true;
  }
  return list;
}

console.log(twoNumberSumHash([3, 5, -4, 8, 11, 1, -1, 6], 10));

// YET ANOTHER SOLUTION using a has table
// this one involves pushing the INDICES of the numbers that add up to the target
// Which is why it needs to be specified that the value in a key-value pair could be zero or else it won't register
// also for this Leetcode problem it was specified that there was only one correct pair.
function twoSumHashTwo(nums, target) {
  let hash = {};

  for (let i = 0; i < nums.length; i++) {
    let elem = nums[i];
    let otherNum = target - elem;

    if (hash[otherNum] || hash[otherNum] === 0) return [i, hash[otherNum]];
    else hash[elem] = i;
  }
  return [];
}
