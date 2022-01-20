/*

Write a function that returns an array of all prime numbers within a given interval (2, n). This is known as a sieve.

*/

// using hash table

function allPrimesHash(n) {

  const hash = {};
  // start at 2; 1 is not a prime number
  for (let i = 2; i <= n; i++) {
    hash[i] = true;
  }


  for (let i = 2; i <= n; i++) {
    for (let j = i*2; j <= n; j+=i) {
      hash[j] = false;
    }
  }

  const answer = [];
  for (let number in hash) {
    if (hash[number]) answer.push (number);
  }
  return answer;
}

console.log(allPrimesHash(33));
