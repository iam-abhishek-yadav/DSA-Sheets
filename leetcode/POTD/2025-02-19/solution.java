class Solution {
    public String getHappyString(int n, int k) {
        List<String> res = new ArrayList<>();

        generate("", n, res);
        return res.size() < k ? "" : res.get(k - 1);
    }

    private void generate(String s, int n, List<String> res) {
        if (s.length() == n) {
            res.add(s);
            return;
        }
        for (char ch : new char[]{'a', 'b', 'c'}) {
            if (s.isEmpty() || s.charAt(s.length() - 1) != ch) {
                generate(s + ch, n, res);
            }
        }
    }
}
