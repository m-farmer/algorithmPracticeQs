
const mergeSortInversions = (arr) => {


  // base case: once array has been divided up into single elements, return a single element and initialize the count to 0.
  if (arr.length <= 1) return [arr, 0];

  let midPoint = Math.ceil(arr.length/2);

  let [left, leftCount] = mergeSortInversions(arr.slice(0, midPoint));
  let [right, rightCount] = mergeSortInversions(arr.slice(midPoint));

  let merged = [];

  let leftIdx = 0, rightIdx = 0, inversions = 0 + leftCount + rightCount;

  while(leftIdx < left.length && rightIdx < right.length) {
    if (left[leftIdx] <= right[rightIdx]) {
      merged.push(left[leftIdx]);
      leftIdx++;
    } else {
      merged.push(right[rightIdx]);
      rightIdx++;
      inversions += left.length - leftIdx;
    }
  }

  console.log('merged', merged)

  merged = merged.concat(left.slice(leftIdx));
  merged = merged.concat(right.slice(rightIdx));

  return [merged, inversions];
}

console.log(mergeSortInversions([4,9,3,1,7,3,59,0,-14]))
console.log(mergeSortInversions([2, 1, 3, 1, 2]));
