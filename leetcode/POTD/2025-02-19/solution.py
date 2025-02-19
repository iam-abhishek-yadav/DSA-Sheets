class Solution:
    def getHappyString(self, n: int, k: int) -> str:
        res = []

        def helper(s: str) -> bool:
            return all(s[i] != s[i - 1] for i in range(1, len(s)))

        def gen_permut(s: str):
            if len(s) == n:
                if helper(s):
                    res.append(s)
                return
            for ch in "abc":
                gen_permut(s + ch)

        gen_permut("")
        return res[k - 1] if len(res) >= k else ""