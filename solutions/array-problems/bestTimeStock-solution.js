/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. Otherwise return 0.

You must buy BEFORE you sell.

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.

Example 2:

Input: prices = [7,6,4,3,1]
Output: 0


*/


function maxProfit(prices) {

  let profit = 0, min = Infinity;

  for (let i = 0; i < prices.length; i++) {

    if (prices[i] < min) min = prices[i];
    else if (prices[i] - min > profit ) profit = prices[i] - min;
  }
  return profit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]))
