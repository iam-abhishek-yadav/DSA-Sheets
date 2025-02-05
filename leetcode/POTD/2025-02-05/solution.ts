function areAlmostEqual(s1: string, s2: string): boolean {
	const map = new Map<string, string>()
	let count = 0

	for (let i = 0; i < s1.length; i++) {
		if (s1[i] !== s2[i]) {
			count++
			map.set(s1[i], s2[i])
		}
		if (count > 2) return false
	}

	return (
		count === 0 || (count === 2 && [...map].every(([a, b]) => map.get(b) === a))
	)
}
