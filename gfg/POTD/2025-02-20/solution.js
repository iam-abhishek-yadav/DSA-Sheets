/**
 * @param {number[]} arr
 * @returns {number[]}
 */

class Solution {
	getMedian(arr) {
		let result = []
		let up = [],
			dn = []

		for (let ve of arr) {
			up.push(ve)
			up.sort((a, b) => a - b)
			ve = up.shift()

			dn.push(-ve)
			dn.sort((a, b) => a - b)
			ve = -dn.shift()

			if (up.length === dn.length) {
				result.push(ve)
				up.push(ve)
			} else if (up.length > dn.length) {
				result.push((up[0] + ve) / 2)
				dn.push(-ve)
			} else {
				result.push((-dn[0] + ve) / 2)
				up.push(ve)
			}
		}
		return result
	}
}
