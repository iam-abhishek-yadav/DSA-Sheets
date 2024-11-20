function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    const inorderMap: Map<number, number> = new Map();
    const length: number = inorder.length;

    for (let i = 0; i < length; ++i) {
        inorderMap.set(inorder[i], i);
    }

    const constructTree = (preStart: number, inStart: number, size: number): TreeNode | null => {
        if (size <= 0) {
            return null;
        }

        const rootValue: number = preorder[preStart];
        const inorderIndex: number = inorderMap.get(rootValue)!;
        const leftSize: number = inorderIndex - inStart;

        const leftSubtree: TreeNode | null = constructTree(preStart + 1, inStart, leftSize);
        const rightSubtree: TreeNode | null = constructTree(preStart + leftSize + 1, inorderIndex + 1, size - leftSize - 1);

        return new TreeNode(rootValue, leftSubtree, rightSubtree);
    };

    return constructTree(0, 0, length);
};
