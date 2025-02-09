/*
Node defined as
class Node{
    int data;
    Node left,right;
    Node(int d){
        data=d;
        left=right=null;
    }
}
*/
class Solution {
    // Function to return the maximum path sum from any node in a tree.
    public int calculateMaxPathSum(Node node, int[] globalMax) {
        if (node == null) return 0;
        
        int leftSubtreeSum = Math.max(calculateMaxPathSum(node.left, globalMax), 0);
        int rightSubtreeSum = Math.max(calculateMaxPathSum(node.right, globalMax), 0);
        
        globalMax[0] = Math.max(globalMax[0], leftSubtreeSum + rightSubtreeSum + node.data);
        
        return node.data + Math.max(leftSubtreeSum, rightSubtreeSum);
    }
    
    public int findMaxSum(Node root) {
        int[] globalMax = new int[1];
        globalMax[0] = Integer.MIN_VALUE;
        calculateMaxPathSum(root, globalMax);
        return globalMax[0];
    }
}