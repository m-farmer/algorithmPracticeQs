/*

The Fibonacci sequence is defined as: the first number of the sequence is 0, the second number is 1, and the nth number is the sum of the (n-1)th and (n-2)th numbers.

Write a function that takes an integer n and returns the nth Fibonacci number.

The sequence is often defined as the 0th number (F0) is 0, (F1) is 1, (F2) is 1.

0, 1, 1, 2, 3, 5, 8, 13, 21, 34  55

0  1  2  3  4  5  6   7   8   9  10

constraints 0 <= n


Example:

fib(5) --> 5
fib(6) ---> 8
fib(10) --> 55

Keep in mind possible alternatives to a brute force recursion solution.

*/


// brute force recursion fibonacci
// time complexity: O(n^2). Making recursive calls that split two subtrees
// space complexity: O(n). It's the height of the call stack. fib(n-1) finishes completely before fib(n-2)
function fib(num) {
  if (num === 1 || num === 0 ) return num;
  else return fib(num -1) + fib(num - 2);
}

// recursion + memoization:
// time complexity: O(n) (computing up to the nth fib)
// space complexity: O(n) (storing up to the nth fib)

let globalHashMap = {};
function fibMem(n) {
  if (n <=  1 ) return n;
  else if (globalHashMap[n]) return globalHashMap[n];
  else {
    globalHashMap[n]  = fibMem(n-1) + fibMem(n-2);
    return globalHashMap[n]
  }
}

// iterative tabulation --> bottom-up fib
// time complexity: O(n). computing up to nth fib
// space complextiy: O(n). storing up to nth fib

function cacheTab(n) {
  let cache= [0, 1];
  for (let i = 2; i < n; i++) {
    let sum = cache[i-1] + cache[i-2];
    cache.push(sum);
  }
  return cache[cache.length-1];
}
