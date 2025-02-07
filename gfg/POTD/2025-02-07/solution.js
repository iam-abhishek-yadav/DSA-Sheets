/**
 * @param {Node} root
 * @returns {number[]}
 */

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
	inOrder(root) {
		let result = []
		this.traverse(root, result)
		return result
	}

	traverse(node, result) {
		if (!node) return
		this.traverse(node.left, result)
		result.push(node.data)
		this.traverse(node.right, result)
	}
}
