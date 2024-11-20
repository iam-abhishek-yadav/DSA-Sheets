function maxPathSum(root: TreeNode | null): number {
    let max: number = -Infinity;

    const dfs = (node: TreeNode | null): number => {
        if (!node) return 0;

        const left: number = Math.max(0, dfs(node.left));
        const right: number = Math.max(0, dfs(node.right));
        
        max = Math.max(max, left + right + node.val);

        return Math.max(left, right) + node.val;
    };

    dfs(root);
    return max;
}
