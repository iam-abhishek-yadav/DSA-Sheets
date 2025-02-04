function maxAscendingSum(nums: number[]): number {
	let max: number = 0,
		curr: number = nums[0]

	for (let i: number = 1; i < nums.length; i++) {
		if (nums[i] > nums[i - 1]) {
			curr += nums[i]
		} else {
			max = Math.max(max, curr)
			curr = nums[i]
		}
	}

	return Math.max(max, curr)
}
