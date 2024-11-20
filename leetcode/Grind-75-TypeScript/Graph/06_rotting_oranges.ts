function orangesRotting(grid: number[][]): number {
    const m: number = grid.length;
    const n: number = grid[0].length;
    let count: number = 0;
    const queue: number[][] = [];

    for (let i: number = 0; i < m; i++) {
        for (let j: number = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                count++;
            } else if (grid[i][j] === 2) {
                queue.push([i, j]);
            }
        }
    }

    let res: number = 0;
    const dris: number[] = [1, 0, -1, 0, 1];

    while (count !== 0 && queue.length !== 0) {
        for (let i: number = queue.length; i > 0; i--) {
            const [x, y]: number[] = queue.shift()!;
            for (let j: number = 0; j < 4; j++) {
                const newX: number = x + dris[j];
                const newY: number = y + dris[j + 1];
                if (newX >= 0 && newX < m && newY >= 0 && newY < n && grid[newX][newY] === 1) {
                    grid[newX][newY] = 2;
                    queue.push([newX, newY]);
                    count--;
                }
            }
        }
        res++;
    }

    if (count !== 0) {
        return -1;
    }
    return res;
}

