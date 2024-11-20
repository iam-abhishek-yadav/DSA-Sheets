function longestConsecutive(nums: number[]): number {
    let max = 0;
    const set = new Set(nums);

    for (const num of set) {
        if (!set.has(num - 1)) {
            let x = num;
            let curr = 1;

            while (set.has(x + 1)) {
                x++;
                curr++;
            }

            max = Math.max(max, curr);
        }
    }

    return max;
}
