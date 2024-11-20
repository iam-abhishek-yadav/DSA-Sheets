function pacificAtlantic(heights: number[][]): number[][] {
    if (!heights || heights.length === 0 || heights[0].length === 0) {
        return [];
    }
    
    const result: number[][] = [];
    const rows = heights.length;
    const cols = heights[0].length;
    const pacific: boolean[][] = new Array(rows).fill(null).map(() => new Array(cols).fill(false));
    const atlantic: boolean[][] = new Array(rows).fill(null).map(() => new Array(cols).fill(false));

    const dfs = (mark: boolean[][], prevHeight: number, r: number, c: number) => {
        if (r < 0 || r >= rows || c < 0 || c >= cols || mark[r][c] || heights[r][c] < prevHeight) {
            return;
        }
        mark[r][c] = true;
        dfs(mark, heights[r][c], r + 1, c);
        dfs(mark, heights[r][c], r - 1, c);
        dfs(mark, heights[r][c], r, c + 1);
        dfs(mark, heights[r][c], r, c - 1);
    };

    for (let i = 0; i < rows; i++) {
        dfs(pacific, Number.MIN_SAFE_INTEGER, i, 0);
    }
    for (let i = 0; i < cols; i++) {
        dfs(pacific, Number.MIN_SAFE_INTEGER, 0, i);
    }

    for (let i = 0; i < rows; i++) {
        dfs(atlantic, Number.MIN_SAFE_INTEGER, i, cols - 1);
    }
    for (let i = 0; i < cols; i++) {
        dfs(atlantic, Number.MIN_SAFE_INTEGER, rows - 1, i);
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (pacific[i][j] && atlantic[i][j]) {
                result.push([i, j]);
            }
        }
    }

    return result;
}

