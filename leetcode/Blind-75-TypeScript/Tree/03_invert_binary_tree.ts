function invertTree(root: TreeNode | null): TreeNode | null {
    const dfs = (node: TreeNode | null): void => {
        if (!node) return;
        [node.left, node.right] = [node.right, node.left];
        dfs(node.left);
        dfs(node.right);
    };

    dfs(root);
    return root;
}
