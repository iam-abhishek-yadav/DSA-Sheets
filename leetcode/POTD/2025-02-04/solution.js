/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function (nums) {
	let max = 0,
		curr = nums[0]
	for (let i = 1; i < nums.length; i++) {
		if (nums[i] > nums[i - 1]) {
			curr += nums[i]
		} else {
			max = Math.max(max, curr)
			curr = nums[i]
		}
	}
	return Math.max(max, curr)
}
