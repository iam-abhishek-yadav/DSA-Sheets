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
    public int sumK(Node root, int k) {
        Map<Integer, Integer> prefixSumMap = new HashMap<>();
        prefixSumMap.put(0, 1);
        return countPaths(root, 0, k, prefixSumMap);
    }

    private int countPaths(Node node, int currentSum, int k, Map<Integer, Integer> prefixSumMap) {
        if (node == null) return 0;

        currentSum += node.data;
        int pathCount = prefixSumMap.getOrDefault(currentSum - k, 0);

        // Update prefix sum map
        prefixSumMap.put(currentSum, prefixSumMap.getOrDefault(currentSum, 0) + 1);

        // Recur for left and right subtrees
        int leftPathCount = countPaths(node.left, currentSum, k, prefixSumMap);
        int rightPathCount = countPaths(node.right, currentSum, k, prefixSumMap);

        // Backtrack by removing the current sum entry
        prefixSumMap.put(currentSum, prefixSumMap.get(currentSum) - 1);
        if (prefixSumMap.get(currentSum) == 0) {
            prefixSumMap.remove(currentSum);
        }

        return pathCount + leftPathCount + rightPathCount;
    }
}