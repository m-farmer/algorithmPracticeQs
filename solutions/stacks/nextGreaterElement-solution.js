/*

Write a function, nextGreater, accepts an array and returns an array containing the next greater element (NGE) for every element.

The NGE for an element x is the first element that is larger than x on the right side of the array.
Elements for which no greater element exists will have an NGE of -1.
Examples
const array = [4, 5, 2, 25];
console.log(nextGreater(array)); // expect [5, 25, 25, -1]

const array2 = [13, 7, 6, 12];
console.log(nextGreater(array2)); // expect [-1, 12, 12, -1]

*/


function nextGreater(array) {

  // filling array with -1's saves a 'push' step
  let nge = Array(array.length).fill(-1), stack = [];

  for (let i = 0; i < array.length; i++) {
    const elem = array[i];
    let j = stack.length-1;

    // while stack is not []
    while(j >= 0) {
      let prevIdx = stack[j];
        // we are working backwards from the current element.
        // the stack holds the indices of previous elements.
        // if the index in the stack (which is closest to this current element) points to an element that is smaller than our current element, we will update that index in the nge array with the current element (eg, 4 is at index [0] in the array. since 4 < 5, the index at nge [0] will be updated to 5), and remove that element (4 at index [0]) from the stack.
      // We will then continue to hunt down our stack to see if this element is in fact larger than all the rest.
      // Otherwise, we break
      if (array[prevIdx] < elem ) {
        nge[prevIdx] = elem;
        stack.pop();
        j--;
      } else break;
    }
    stack.push(i);
  }
  return nge;
}

console.log(nextGreater([4, 5, 2, 25]))
