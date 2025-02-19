func getHappyString(n int, k int) string {
    var res []string
    generate("", n, &res)
    if len(res) < k {
        return ""
    }
    return res[k-1]
}

func generate(s string, n int, res *[]string) {
    if len(s) == n {
        *res = append(*res, s)
        return
    }
    for _, ch := range []rune{'a', 'b', 'c'} {
        if len(s) == 0 || rune(s[len(s)-1]) != ch {
            generate(s+string(ch), n, res)
        }
    }
}
