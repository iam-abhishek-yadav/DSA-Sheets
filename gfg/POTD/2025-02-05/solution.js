/*
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/

class Solution {
	/**
	 * @param {Node} node
	 * @return {void}
	 */
	// Function to convert a binary tree into its mirror tree.
	mirror(node) {
		// your code here
		if (!node) return

		;[node.left, node.right] = [node.right, node.left]

		this.mirror(node.left)
		this.mirror(node.right)
	}
}
