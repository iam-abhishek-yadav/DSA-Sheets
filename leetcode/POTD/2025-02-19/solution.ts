function getHappyString(n: number, k: number): string {
	let res: string[] = []

	const helper = (s: string): boolean => {
		for (let i = 1; i < s.length; i++) {
			if (s[i] === s[i - 1]) return false
		}
		return true
	}

	const genPermut = (s: string): void => {
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
