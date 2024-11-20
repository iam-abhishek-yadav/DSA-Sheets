function letterCombinations(digits: string): string[] {
    if (!digits) return [];
    
    const digitToLetters: { [key: string]: string[] } = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z']
    };

    const result: string[] = [];

    const backtrack = (combination: string, nextDigit: number): void => {
        if (combination.length === digits.length) {
            result.push(combination);
            return;
        }
        const curr: string = digits[nextDigit];
        const letters: string[] = digitToLetters[curr];
        for (const letter of letters) {
            backtrack(combination + letter, nextDigit + 1);
        }
    };

    backtrack('', 0);
    return result;
}
