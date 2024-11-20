function maxProduct(nums: number[]): number {
    let prefixProduct: number = 1;
    let suffixProduct: number = 1;
    let maxProduct: number = -Infinity;
    
    for (let i: number = 0; i < nums.length; i++) {
        if (prefixProduct === 0) prefixProduct = 1;
        if (suffixProduct === 0) suffixProduct = 1;

        prefixProduct *= nums[i];
        suffixProduct *= nums[nums.length - i - 1];

        maxProduct = Math.max(maxProduct, Math.max(prefixProduct, suffixProduct));
    }
    
    return maxProduct;
}

