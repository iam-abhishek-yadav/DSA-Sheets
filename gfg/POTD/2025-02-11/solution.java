// User function Template for Java

class Solution {
   
    // Function to check whether a Binary Tree is BST or not.
    boolean isBST(Node root) {
        return helper(root,Integer.MAX_VALUE,Integer.MIN_VALUE);
    }
    Boolean helper(Node root,int max,int min){
        if(root==null){
            return true;
        }
         
         if(root.data<min||root.data>max){
             return false;
         }
         
        return helper(root.left,root.data,min)&&helper(root.right,max,root.data); 

    }
    
}