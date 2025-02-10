func clearDigits(s string) string {
    result := []rune{}
	for _, char := range s {
		if unicode.IsDigit(char) {
			if len(result) > 0 {
				result = result[:len(result)-1]
			}
		} else {
			result = append(result, char)
		}
	}
	return string(result)
}