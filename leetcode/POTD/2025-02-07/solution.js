/**
 * @param {number} limit
 * @param {number[][]} queries
 * @return {number[]}
 */
var queryResults = function (limit, queries) {
	const result = []
	const ballToColor = new Map()
	const colorCount = new Map()

	for (const [ballId, newColor] of queries) {
		if (ballToColor.has(ballId)) {
			const previousColor = ballToColor.get(ballId)
			colorCount.set(previousColor, colorCount.get(previousColor) - 1)
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
