var preorderTraversal = function(root) {
    const result = [];
    let current = root;

    while (current) {
        if (!current.left) {
            result.push(current.val);
            current = current.right;
        } else {
            let predecessor = current.left;
            while (predecessor.right && predecessor.right !== current) {
                predecessor = predecessor.right;
            }

            if (!predecessor.right) {
                result.push(current.val);
                predecessor.right = current;
                current = current.left;
            } else {
                predecessor.right = null;
                current = current.right;
            }
        }
    }

    return result;
};
