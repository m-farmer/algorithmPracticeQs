/*
Merge two sorted (singly) linked lists and return a new list. The new list should be made by splicing together the nodes of the first two lists.

eg input: 1->2->4, 1->3->4
output: 1->1->2->3->4->4

first, compare the first element in each list. these are the definitively smallest values in each list.

Whichever list we take from, we move the pointer forward.

Maybe one list is longer than the other. once we dont' have two things to compare any more, we have definitively one list left to go through.

 */

//dummy node to build list with pointer to beginning of dummy list.



class LinkedList {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function createList(nums) {
  let head = new LinkedList(nums[0]);
  let origHead = head;
  for (let i = 1; i < nums.length; i++) {
    head.next= new LinkedList(nums[i]);
    head = head.next;
    console.log(head)
  }
  return origHead;
}

let headOne = createList([2,4,6,8])
let headTwo = createList([1,3,5,7])


function mergeTwoLists(list1, list2) {

  if (list1 === null || list2 === null) {
    return list1 === null ? list2 : list1;
  }

  let p1 = list1.val <= list2.val ? list1 : list2;
  let p2 = p1 === list1 ? list2: list1;

  // head will be returned. As the pointers are changed around the head will be constant.
  let head = p1;
  // appending list2 to list1
  while(p1.next !== null && p2 !== null) {

    // the smallest value is already the first node; move on to p1.next
    if (p1.next.val <= p2.val) {
      p1 = p1.next;
    }

    else {
      let p3 = p1.next;
      p1.next = p2;
      p2 = p3;
    }
  }
  p1.next = p2;
  return head;
}

console.log(mergeTwoLists(headOne, headTwo))
