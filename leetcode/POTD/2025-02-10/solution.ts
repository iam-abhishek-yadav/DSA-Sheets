function clearDigits(s: string): string {
	let result: string = ""
	for (const char of s) {
		if (/[0-9]/.test(char)) {
			if (result.length > 0) {
				result = result.slice(0, -1)
			}
		} else {
			result += char
		}
	}
	return result
}
