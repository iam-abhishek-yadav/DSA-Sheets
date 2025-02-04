
/*
class Node {
    int data;
    Node left;
    Node right;
    Node(int data) {
        this.data = data;
        left = null;
        right = null;
    }
}
*/

class Solution {
    int maxDiameter = 0;

    int diameter(Node root) {
        calculateDepth(root);
        return maxDiameter;
    }

    int calculateDepth(Node root) {
        if (root == null) return 0;

        int leftDepth = calculateDepth(root.left);
        int rightDepth = calculateDepth(root.right);

        maxDiameter = Math.max(maxDiameter, leftDepth + rightDepth);

        return 1 + Math.max(leftDepth, rightDepth);
    }
}
