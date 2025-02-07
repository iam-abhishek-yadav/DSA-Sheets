func queryResults(limit int, queries [][]int) []int {
    result := []int{}
    ballToColor := make(map[int]int)
    colorCount := make(map[int]int)

    for _, query := range queries {
        ballId, newColor := query[0], query[1]

        if prevColor, exists := ballToColor[ballId]; exists {
            colorCount[prevColor]--
            if colorCount[prevColor] == 0 {
                delete(colorCount, prevColor)
            }
        }

        ballToColor[ballId] = newColor
        colorCount[newColor]++
        result = append(result, len(colorCount))
    }

    return result
}