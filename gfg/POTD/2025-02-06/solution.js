/*
class Node
{
    constructor(x){
        this.key = x;
        this.left = null;
        this.right = null;
    }
}
*/

/**
 * @param {number[]} inorder
 * @param {number[]} preorder
 * @return {Node}
 */
class Solution {
	searchValue(inorder, value, s, e) {
		for (let i = s; i <= e; i++) {
			if (inorder[i] === value) return i
		}
		return -1
	}

	buildTreeHelper(inorder, preorder, preIndex, s, e) {
		if (s > e) return null

		let root = new Node(preorder[preIndex[0]])
		preIndex[0]++

		let index = this.searchValue(inorder, root.key, s, e)

		root.left = this.buildTreeHelper(inorder, preorder, preIndex, s, index - 1)
		root.right = this.buildTreeHelper(inorder, preorder, preIndex, index + 1, e)

		return root
	}

	buildTree(inorder, preorder) {
		let preIndex = [0]
		return this.buildTreeHelper(
			inorder,
			preorder,
			preIndex,
			0,
			inorder.length - 1
		)
	}
}
