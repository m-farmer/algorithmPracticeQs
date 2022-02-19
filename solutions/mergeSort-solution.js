/*
HackerRank question for Twitch coding assessment
Implement the merge sort algorithm but count the number of times the right array is swapped with the left array and return the count
*/


//recursive solution
// haven't figured out the counting part yet

function mergeSort(arr) {

  console.log('arr', arr)
  // base case: array has been reduced to a single element
  if (arr.length <= 1) return arr;
  // Instructions stipulate that odd-number-length arrays will send middle index to the LEFT.
  const midPoint = Math.ceil(arr.length/2);
  const left = mergeSort(arr.slice(0,midPoint));
  const right = mergeSort(arr.slice(midPoint))

  return merge(left, right);

}

function merge(left, right) {

  console.log('merge runs:' )

  let output = [], count= 0;

  let leftIdx = 0, rightIdx = 0;


  while(leftIdx < left.length && rightIdx < right.length) {

    if (left[leftIdx] < right[rightIdx]) {
      output.push(left[leftIdx]);
      leftIdx++;
    } else {
      output.push(right[rightIdx]);
      rightIdx++;
      count += left.length-1;
      console.log('count', count)
    }
  }

  // if one array is longer than the other, append the remaining sorted elements to the array, whichever array it is
  // return copies of the slices so the original arrays aren't mutated
  // output.push(...left.slice(leftIdx), ...right.slice(rightIdx))

  while(leftIdx < left.length) {
    output.push(left[leftIdx]);
    leftIdx++;
  }

  while(rightIdx < right.length) {
    output.push(right[rightIdx]);
    rightIdx++;
  }

  return output;
}
console.log(mergeSort([4,9,3,1,7,3,59,0,-14]))
console.log(mergeSort([2, 1, 3, 1, 2]));
