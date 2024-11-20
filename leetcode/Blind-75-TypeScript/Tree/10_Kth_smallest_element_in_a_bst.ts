function kthSmallest(root: TreeNode | null, k: number): number {
    let result: number = -1;

    const dfs = (node: TreeNode | null): boolean => {
        if (!node) {
            return false;
        }

        if (dfs(node.left)) {
            return true;
        }

        k--;
        if (k === 0) {
            result = node.val;
            return true;
        }

        return dfs(node.right);
    };

    dfs(root);
    return result;
}
