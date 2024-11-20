function findMin(nums: number[]): number {
    let low: number = 0;
    let high: number = nums.length - 1;
    let ans: number = Infinity;

    while (low <= high) {
        let mid: number = Math.floor((low + high) / 2);

        if (nums[low] <= nums[high]) {
            return Math.min(ans, nums[low]);
        }

        if (nums[low] <= nums[mid]) {
            ans = nums[low];
            low = mid + 1;
        } else {
            ans = nums[mid];
            high = mid - 1;
        }
    }

    return ans;
}
