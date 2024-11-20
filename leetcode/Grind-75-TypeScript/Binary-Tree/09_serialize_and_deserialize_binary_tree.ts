const serialize = (root: TreeNode | null): string => {
    return encode(root, '');
};

const deserialize = (data: string): TreeNode | null => {
    const dataArray: string[] = data.split(',');
    return decode(dataArray);
};

const encode = (root: TreeNode | null, str: string): string => {
    if (root === null) {
        str += '#,';
    } else {
        str += root.val + ',';
        str = encode(root.left, str);
        str = encode(root.right, str);
    }
    return str;
};

const decode = (dataList: string[]): TreeNode | null => {
    if (dataList[0] === '#') {
        dataList.shift();
        return null;
    }

    const root = new TreeNode(parseInt(dataList[0]));
    dataList.shift();
    root.left = decode(dataList);
    root.right = decode(dataList);

    return root;
};
