func areAlmostEqual(s1 string, s2 string) bool {
    r1, r2 := []rune(s1), []rune(s2)
    var diff [][2]rune

    for i := range r1 {
        if r1[i] != r2[i] {
            diff = append(diff, [2]rune{r1[i], r2[i]})
            if len(diff) > 2 {
                return false
            }
        }
    }

    return len(diff) == 0 || (len(diff) == 2 && diff[0][0] == diff[1][1] && diff[0][1] == diff[1][0])
}