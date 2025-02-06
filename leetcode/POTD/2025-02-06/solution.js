/**
 * @param {number[]} nums
 * @return {number}
 */
var tupleSameProduct = function (nums) {
	const length = nums.length
	const productList = []

	// Step 1: Calculate all products of pairs
	for (let first = 0; first < length - 1; first++) {
		for (let second = first + 1; second < length; second++) {
			productList.push(nums[first] * nums[second])
		}
	}

	// Step 2: Count the frequency of each product
	const productCount = new Map()
	for (const product of productList) {
		productCount.set(product, (productCount.get(product) || 0) + 1)
	}

	let result = 0
	for (const freq of productCount.values()) {
		if (freq > 1) {
			result += freq * (freq - 1) * 4
		}
	}

	return result
}
