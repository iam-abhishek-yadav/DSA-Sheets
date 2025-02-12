class Solution {
    ArrayList<Integer> sortedElements;

    // Return the Kth smallest element in the given BST
    public int kthSmallest(Node root, int k) {
        sortedElements = new ArrayList<>();
        traverseInorder(root);
        if (sortedElements.size() >= k) {
            return sortedElements.get(k - 1);
        }
        return -1;
    }

    void traverseInorder(Node root) {
        if (root == null) {
            return;
        }
        traverseInorder(root.left);
        sortedElements.add(root.data);
        traverseInorder(root.right);
    }
}