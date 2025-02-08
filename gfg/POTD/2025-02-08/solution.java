
// User function Template for Java
/*
class Node
{
    int data;
    Node left, right;

    public Node(int d)
    {
        data = d;
        left = right = null;
    }
}
*/

class Solution {
    List<Integer> leftBorder = new ArrayList<>();
    List<Integer> rightBorder = new ArrayList<>();
    List<Integer> leafNodes = new ArrayList<>();

    ArrayList<Integer> boundaryTraversal(Node root) {
        leftBorder.add(root.data);
        traverseLeftBorder(root.left);
        traverseRightBorder(root.right);
        ArrayList<Integer> result = new ArrayList<>();
        result.addAll(leftBorder);
        result.addAll(leafNodes);
        result.addAll(rightBorder);
        return result;
    }

    void traverseLeftBorder(Node node) {
        if (node == null) {
            return;
        }
        if (node.left == null && node.right == null) {
            leafNodes.add(node.data);
            return;
        }
        leftBorder.add(node.data);
        if (node.left != null) {
            traverseLeftBorder(node.left);
            collectLeafNodes(node.right);
        } else {
            traverseLeftBorder(node.right);
        }
    }

    void collectLeafNodes(Node node) {
        if (node == null) {
            return;
        }
        if (node.left == null && node.right == null) {
            leafNodes.add(node.data);
            return;
        }
        collectLeafNodes(node.left);
        collectLeafNodes(node.right);
    }

    void traverseRightBorder(Node node) {
        if (node == null) {
            return;
        }
        if (node.left == null && node.right == null) {
            leafNodes.add(node.data);
            return;
        }
        if (node.right != null) {
            collectLeafNodes(node.left);
            traverseRightBorder(node.right);
        } else {
            traverseRightBorder(node.left);
        }
        rightBorder.add(node.data);
    }
}
