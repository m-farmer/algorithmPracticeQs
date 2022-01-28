/*
Write a function that takes in a Binary Tree and returns a list of its branch sums ordered from leftmost branch sum to rightmost branch sum. A branch sum is the sum of all values in a Binary Tree branch. A Binary Tree branch is a path of nodes in a tree that starts at the root node and ends at any leaf node.

Each BinaryTree node has a value, left child node, and right child node.
*/


// constructor class for a node in a binary tree
// can also function as the root node if adding nodes manually (see below)
class Node {
  constructor(value) {
    this.value = value;
    this.left = this.right = null;
  }
}


const tree = new Node(10);
tree.left = new Node(7);
tree.left.left = new Node(5);
tree.left.right = new Node(8);
tree.left.left.left = new Node(3);
tree.left.left.right = new Node(6);

tree.right = new Node(15);
tree.right.left = new Node(13);
tree.right.right = new Node(17);
tree.right.left.left = new Node(11);
tree.right.left.right = new Node(14);

/*
                10
                / \
              7    15
             /\    /\
            5  8  13  17
           /\    / \
          3  6  11  14

          [25, 28, 25, 49, 52, 42]
*/

function branchSums(root, sum = 0, list = []) {

	if (!root) return; // if function is passed null or an empty object will return undefined or NaN

  // start at the root
	sum += root.value;

  // recursively traverse left branch until you reach a leaf node (prioritizes left branches)
	if (root.left) branchSums(root.left, sum, list)

  // once end of left branch has been reached, check for a right branch
	if (root.right) branchSums(root.right, sum, list)

  // push the sum to the array if you reach a leaf node
	if (!root.left && !root.right) list.push(sum);

	return list;
}

let newTree = new Node();

console.log(branchSums(tree))
console.log(branchSums(newTree))


