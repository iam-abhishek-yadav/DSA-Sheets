function queryResults(limit: number, queries: number[][]): number[] {
	const result: number[] = []
	const ballToColor = new Map<number, number>()
	const colorCount = new Map<number, number>()

	for (const [ballId, newColor] of queries) {
		if (ballToColor.has(ballId)) {
			const previousColor = ballToColor.get(ballId)!
			colorCount.set(previousColor, colorCount.get(previousColor)! - 1)
			if (colorCount.get(previousColor) === 0) {
				colorCount.delete(previousColor)
			}
		}

		ballToColor.set(ballId, newColor)
		colorCount.set(newColor, (colorCount.get(newColor) || 0) + 1)
		result.push(colorCount.size)
	}

	return result
}
