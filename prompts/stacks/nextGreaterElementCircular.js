/*
Write a function that takes an array of integers and returns a new array containing, at each index, the next element in the input array that's greater than the element at that index in the input array.

Your function should return a new array where outputArray[i] is the next element in the input array that's greater than inputArray[i]. If there's no such next greater element for a particular index, the value at that index in the output array should be -1. For example, given array = [1,2], your function should return [2,-1].

Additionally, your function should treat the input array as a circular array. A circular array wraps around itself as if it were connected end-to-end. So the next index after the last index in a ciruclar array is the first index. This means that

given array = [0, 0, 5, 0, 0, 3, 0, 0] the next greater element after 3 is 5.


*/

function nextGreaterElement(array) {
  const output = new Array(array.length).fill(-1);
	const stack = [];

	for (let i = 0; i < 2 * array.length; i++) {
    // using mod to accommodate indices once we go beyond the end of the array
		const circularIdx = i % array.length;

    // for some reason cannot assign array[stack[stack.length-1]] to variables
		while(stack.length > 0 && array[stack[stack.length-1]] < array[circularIdx]) {
			const top= stack.pop();
			output[top] = array[circularIdx];
		}
		stack.push(circularIdx);
	}
	return output;
}

