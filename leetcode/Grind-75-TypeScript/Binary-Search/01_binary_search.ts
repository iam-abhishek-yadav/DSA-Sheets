function search(nums: number[], target: number): number {
    let low: number = 0;
    let high: number = nums.length-1;
    while(low <= high){
        const mid = (low + high) >> 1;
        if(nums[mid] === target) return mid;
        if(nums[mid] < target) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
};
