function minWindow(s: string, t: string): string {
    const map: Map<string, number> = new Map();
    for (const char of t) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    let left: number = 0;
    let right: number = 0;
    let min: number = Infinity;
    let minWindow: string = "";
    let req: number = map.size;

    while (right < s.length) {
        const char: string = s[right];
        if (map.has(char)) {
            map.set(char, (map.get(char) as number) - 1);
            if (map.get(char) === 0) {
                req--;
            }
        }

        while (req === 0) {
            const curr: number = right - left + 1;
            if (curr < min) {
                min = curr;
                minWindow = s.substring(left, right + 1);
            }

            const leftChar: string = s[left];
            if (map.has(leftChar)) {
                map.set(leftChar, (map.get(leftChar) as number) + 1);
                if (map.get(leftChar) as number > 0) {
                    req++;
                }
            }
            left++;
        }

        right++;
    }

    return minWindow;
}
