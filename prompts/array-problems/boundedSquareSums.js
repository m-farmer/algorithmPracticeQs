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
