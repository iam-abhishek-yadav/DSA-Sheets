// Problem Statement:
// You are given an array arr of size n - 1 that contains distinct integers in the range from 1 to n (inclusive).
// This array represents a permutation of the integers from 1 to n with one element missing.
// Your task is to identify and return the missing element.
//
// Examples:
//
// Input: arr[] = [1, 2, 3, 5]
// Output: 4
// Explanation: All the numbers from 1 to 5 are present except 4.
//
// Input: arr[] = [8, 2, 4, 5, 3, 7, 1]
// Output: 6
// Explanation: All the numbers from 1 to 8 are present except 6.
//
// Input: arr[] = [1]
// Output: 2
// Explanation: Only 1 is present so the missing element is 2.
//
// Constraints:
// 1 ≤ arr.size() ≤ 10^6
// 1 ≤ arr[i] ≤ arr.size() + 1

// Solution:

/**
 * @param {number[]} arr - The input array containing numbers from 1 to n with one number missing
 * @returns {number} - The missing number in the array
 */

class Solution {
	// Function to find the missing number in the array
	missingNumber(arr) {
		const n = arr.length + 1 // Total numbers expected (including the missing number)
		const expectedSum = (n * (n + 1)) / 2 // Sum of first n natural numbers
		const actualSum = arr.reduce((total, num) => total + num, 0) // Sum of numbers in the array
		return expectedSum - actualSum // The difference gives the missing number
	}
}

/*
**Time Complexity**: O(n)
- `reduce` iterates through the array once to calculate the sum, which is O(n).

**Space Complexity**: O(1)
- The algorithm uses a constant amount of extra space (just a few variables to store sums).
*/
