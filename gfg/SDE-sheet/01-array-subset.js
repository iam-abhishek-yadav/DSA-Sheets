// Problem Statement:
// Given two arrays: a[] and b[], where both arrays may contain duplicate elements.
// The task is to determine whether array b is a subset of array a.
// It's important to note that both arrays can be unsorted.
// Additionally, each occurrence of a duplicate element within an array is considered a separate element of the set.
//
// Examples:
// Input: a[] = [11, 7, 1, 13, 21, 3, 7, 3], b[] = [11, 3, 7, 1, 7]
// Output: Yes
// Explanation: b[] is a subset of a[]
//
// Input: a[] = [1, 2, 3, 4, 4, 5, 6], b[] = [1, 2, 4]
// Output: Yes
// Explanation: b[] is a subset of a[]
//
// Input: a[] = [10, 5, 2, 23, 19], b[] = [19, 5, 3]
// Output: No
// Explanation: b[] is not a subset of a[]
//
// Constraints:
// 1 <= a.size(), b.size() <= 10^5
// 0 <= a[i], b[j] <= 10^6

// Solution:

/**
 * @param {number[]} a - The first array
 * @param {number[]} b - The second array
 * @returns {boolean} - True if `b` is a subset of `a`, otherwise false
 */

class Solution {
	isSubset(a, b) {
		// Step 1: Create a frequency map for all elements in array `a`
		const map = new Map()
		for (const num of a) {
			map.set(num, (map.get(num) || 0) + 1) // Increment the count for each number
		}

		// Step 2: Check if all elements in array `b` are present in the frequency map
		for (const num of b) {
			// If the number is not in the map or its count is 0, return false
			if (!map.has(num) || map.get(num) === 0) return false
			map.set(num, map.get(num) - 1) // Decrement the count
		}

		// If all elements of `b` are accounted for, return true
		return true
	}
}

/*
**Time Complexity**: O(n + m)
- O(n) to iterate through array `a` and build the frequency map.
- O(m) to iterate through array `b` and check for subset conditions.
- Total: O(n + m), where `n` is the size of array `a` and `m` is the size of array `b`.

**Space Complexity**: O(n)
- The frequency map stores up to `n` entries for the elements in array `a`.
*/
