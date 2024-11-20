function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
	if(root === null) return null;
    if(root.val === p.val || root.val === q.val) return root;
    const leftLCA : TreeNode | null = lowestCommonAncestor(root.left, p, q);    
    const rightLCA : TreeNode | null= lowestCommonAncestor(root.right, p, q);  
    if(leftLCA !== null && rightLCA !== null) return root;
    return (leftLCA !== null) ? leftLCA : rightLCA;  
};
