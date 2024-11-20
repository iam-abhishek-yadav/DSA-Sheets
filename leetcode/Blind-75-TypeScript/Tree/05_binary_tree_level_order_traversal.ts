function levelOrder(root: TreeNode | null): number[][] {
    const res: number[][] = [];
    const queue: TreeNode[] = [];

    if (root === null) return res;

    queue.push(root);

    while (queue.length > 0) {
        const levelSize: number = queue.length;
        const temp: number[] = [];

        for (let i = 0; i < levelSize; i++) {
            const node: TreeNode | undefined = queue.shift();
            if (node) {
                temp.push(node.val);
                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
            }
        }
        res.push(temp);
    }

    return res;
}
