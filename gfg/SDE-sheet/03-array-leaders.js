// Problem Statement:
// You are given an array arr of positive integers. Your task is to find all the leaders in the array.
// An element is considered a leader if it is greater than or equal to all elements to its right.
// The rightmost element is always a leader.
//
// Examples:
//
// Input: arr = [16, 17, 4, 3, 5, 2]
// Output: [17, 5, 2]
// Explanation: Note that there is nothing greater on the right side of 17, 5 and, 2.
//
// Input: arr = [10, 4, 2, 4, 1]
// Output: [10, 4, 4, 1]
// Explanation: Note that both of the 4s are in output, as to be a leader an equal element is also allowed on the right side.
//
// Input: arr = [5, 10, 20, 40]
// Output: [40]
// Explanation: When an array is sorted in increasing order, only the rightmost element is leader.
//
// Input: arr = [30, 10, 10, 5]
// Output: [30, 10, 10, 5]
// Explanation: When an array is sorted in non-increasing order, all elements are leaders.
//
// Constraints:
// 1 <= arr.size() <= 10^6
// 0 <= arr[i] <= 10^6

// Solution:

/**
 * @param {number[]} a - The input array of numbers
 * @returns {number[]} - The array containing the leader elements
 */

class Solution {
	// Function to find the leaders in the array
	leaders(a) {
		const arr = []
		arr.push(a[a.length - 1]) // The last element is always a leader

		// Traverse the array from right to left
		for (let i = a.length - 2; i >= 0; i--) {
			// If the current element is greater than or equal to the first leader
			if (a[i] >= arr[0]) {
				arr.unshift(a[i]) // Add the element to the front of the leaders array
			}
		}

		return arr
	}
}

/*
**Time Complexity**: O(n)
- The loop runs once through the array, starting from the second last element and moving to the first, which is O(n).

**Space Complexity**: O(n)
- The space complexity is O(n) because the result array stores the leader elements.
*/
