function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    const dfs = (root1: TreeNode | null, root2: TreeNode | null): boolean => {
        if (!root1 && !root2) {
            return true;
        }
        if (!root1 || !root2) {
            return false;
        }
        return root1.val === root2.val && dfs(root1.left, root2.left) && dfs(root1.right, root2.right);
    };

    if (!root) {
        return false;
    }

    return dfs(root, subRoot) || isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};
