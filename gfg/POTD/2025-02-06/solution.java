
/*
class Node {
    int data;
    Node left, right;

    Node(int key) {
        data = key;
        left = right = null;
    }
}
*/


class Solution {
    private static int searchValue(int[] inorder, int value, int s, int e) {
        for (int i = s; i <= e; i++) {
            if (inorder[i] == value) {
                return i;
            }
        }
        return -1;
    }

    private static Node buildTreeHelper(int[] inorder, int[] preorder, int[] preIndex, int s, int e) {
        if (s > e) {
            return null;
        }

        Node root = new Node(preorder[preIndex[0]]);
        preIndex[0]++;

        int index = searchValue(inorder, root.data, s, e);

        root.left = buildTreeHelper(inorder, preorder, preIndex, s, index - 1);
        root.right = buildTreeHelper(inorder, preorder, preIndex, index + 1, e);

        return root;
    }

    public static Node buildTree(int[] inorder, int[] preorder) {
        int[] preIndex = {0};
        return buildTreeHelper(inorder, preorder, preIndex, 0, inorder.length - 1);
    }
}
