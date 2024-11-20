var merge = function(nums1, m, nums2, n) {
    let [idx1, idx2, mergedIndex] = [m-1, n-1, m+n-1];
    while(idx1 >= 0 && idx2 >= 0){
        if(nums1[idx1] >= nums2[idx2]){
            nums1[mergedIndex--] = nums1[idx1--];
        } else {
            nums1[mergedIndex--] = nums2[idx2--];
        }
    }
    while(idx2 >= 0) nums1[mergedIndex--] = nums2[idx2--];
};
