/*
Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. The function should find all triplets in the array that sum up to the target sum and return a two-dimensional array of all these triplets. The numbers in each triplet should be ordered in ascending order, and the triplets themselves should be ordered in ascending order with respect to the numbers they hold.

If no three numbers sum up to the target sum, the function should return an empty array
*/

//pointer solution --> nested loops
// O(n^2) time complexity, O(n) space complexity
function sumThree(array, target) {

  array.sort((a, b) => a-b);

  let i = 0, list = [];
  while(i < array.length) {
    let current = array[i], leftIdx = i+1, rightIdx = array.length-1;

    while(leftIdx < rightIdx) {
      let left = array[leftIdx], right = array[rightIdx];
      if (current + left + right === target) {
        list.push([current, left, right]);
        leftIdx++;
        rightIdx--;
      }
      else if (current + left + right < target ) leftIdx++;
      else rightIdx--;
    }
    i++;
  }
  return list;
}

console.log(sumThree([5, 8, 4, 9, 1, 12, 10, 3, 6], 13))
