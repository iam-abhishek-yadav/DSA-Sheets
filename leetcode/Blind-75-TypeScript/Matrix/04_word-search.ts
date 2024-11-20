function exist(board: string[][], word: string): boolean {
    const m: number = board.length;
    const n: number = board[0].length;
    const dirs: number[] = [-1, 0, 1, 0, -1];

    const backtrack = (i: number, j: number, k: number): boolean => {
        if (k === word.length - 1) return board[i][j] === word[k];
        if (board[i][j] !== word[k]) return false;

        const originalChar: string = board[i][j];
        board[i][j] = '0';

        for (let d = 0; d < 4; d++) {
            const x: number = i + dirs[d];
            const y: number = j + dirs[d + 1];
            const isValid: boolean = x >= 0 && x < m && y >= 0 && y < n;

            if (isValid && board[x][y] !== '0' && backtrack(x, y, k + 1)) {
                return true;
            }
        }

        board[i][j] = originalChar;
        return false;
    };

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (backtrack(i, j, 0)) return true;
        }
    }

    return false;
}

