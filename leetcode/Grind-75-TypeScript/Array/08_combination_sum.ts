function combinationSum(candidates: number[], target: number): number[][] {
    candidates.sort((a, b) => a - b);
    const ans: number[][] = [];
    const temp: number[] = [];

    const backtrack = (index: number, remaining: number): void => {
        if (remaining === 0) {
            ans.push([...temp]);
            return;
        }
        if (index >= candidates.length || remaining < candidates[index]) return;

        backtrack(index + 1, remaining);

        temp.push(candidates[index]);
        backtrack(index, remaining - candidates[index]);
        temp.pop();
    }

    backtrack(0, target);
    return ans;
}
