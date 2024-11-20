function isValidBST(root: TreeNode | null): boolean {
    let prev: TreeNode | null = null;

    const dfs = (node: TreeNode | null): boolean => {
        if (!node) {
            return true;
        }

        if (!dfs(node.left)) {
            return false;
        }

        if (prev && prev.val >= node.val) {
            return false;
        }

        prev = node;

        if (!dfs(node.right)) {
            return false;
        }

        return true;
    };

    return dfs(root);
};
