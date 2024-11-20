function calculate(s: string): number {
    const stk: number[] = [];
    const n = s.length;
    let sign = 1;
    let ans = 0;

    for (let i = 0; i < n; ++i) {
        if (s[i] === ' ') continue;

        if (s[i] === '+') {
            sign = 1;
        } else if (s[i] === '-') {
            sign = -1;
        } else if (s[i] === '(') {
            stk.push(ans);
            stk.push(sign);
            ans = 0;
            sign = 1;
        } else if (s[i] === ')') {
            ans *= stk.pop()!;
            ans += stk.pop()!;
        } else {
            let x = 0;
            let j = i;
            while (j < n && !isNaN(Number(s[j])) && s[j] !== ' ') {
                x = x * 10 + (s[j].charCodeAt(0) - '0'.charCodeAt(0));
                j++;
            }
            ans += sign * x;
            i = j - 1;
        }
    }

    return ans;
}

