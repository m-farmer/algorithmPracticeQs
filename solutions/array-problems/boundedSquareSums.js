/*

You are given two lists of integers a and b as well as integers lower and upper. Return the number of pairs (i, j) such that lower ≤ a[i] * a[i] + b[j] * b[j] ≤ upper.

Constraints

0 ≤ n ≤ 100,000 where n is the length of a
0 ≤ m ≤ 100,000 where m is the length of b

Example 1
Input
a = [3, -1, 9]
b = [100, 5, -2]
lower = 7
upper = 99

Output:
4



Explanation:
We have the following pairs:

3 * 3 + 5 * 5 = 34
3 * 3 + -2 * -2 = 13
-1 * -1 + 5 * 5 = 26
9 * 9 + -2 * -2 = 85


*/

const boundedSquareSums = (a, b, lower, upper) => {

  //create copies of arrays with elements squared and sorted
  let aS = a.map(element => element**2).sort((a,b) => a-b);
  let bS = b.map(element => element**2).sort((a,b) => a-b);

  // subtracting numbers <= upper threshold - (numbers <= lower threshold-1 [so numbers < lower threshold])
  return helper(aS, bS, upper) - helper(aS, bS, lower-1);
}

const helper = (arrOne, arrTwo, threshold) => {
  let left = 0, right = arrTwo.length-1;
  let count = 0;

  while(left < arrOne.length && right >= 0) {
    if (arrOne[left] + arrTwo[right] <= threshold) {
      count += right + 1;
      left++;
    }
    else right--;
  }
  return count;
}


let a = [3, -1, 9]
let b = [100, 5, -2]
let lower = 7
let upper = 99

console.log(boundedSquareSums(a, b, lower, upper))

/*
other examples

a = [-2, 1, 98, 4]
b = [13, 3, -8, 10]
lower = 8
upper = 70

output: 5



a = [-2, 1, 98, 4]
b = [13, 3, -8, 10]
lower = 6
upper = 101

Output: 6
*/
