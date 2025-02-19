/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getHappyString = function (n, k) {
	let res = []

	const helper = (s) => {
		for (let i = 1; i < s.length; i++) {
			if (s[i] === s[i - 1]) return false
		}
		return true
	}

	const genPermut = (s) => {
		if (s.length === n) {
			if (helper(s)) res.push(s)
			return
		}
		for (let ch of ["a", "b", "c"]) {
			genPermut(s + ch)
		}
	}

	genPermut("")
	return res.length < k ? "" : res[k - 1]
}
