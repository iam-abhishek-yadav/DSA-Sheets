function updateMatrix(mat: number[][]): number[][] {
    const m = mat.length;
        const n = mat[0].length;
        const distances: number[][] = new Array(m).fill(null).map(() => new Array(n).fill(Infinity));
        const queue: number[][] = [];
        
        // Initialize distances and add cells with 0 to the queue
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (mat[i][j] === 0) {
                    distances[i][j] = 0;
                    queue.push([i, j]);
                }
            }
        }
        
        const directions: number[][] = [[-1, 0], [1, 0], [0, -1], [0, 1]];
        
        while (queue.length > 0) {
            const cell = queue.shift()!;
            const row = cell[0];
            const col = cell[1];
            
            for (const dir of directions) {
                const newRow = row + dir[0];
                const newCol = col + dir[1];
                
                if (newRow >= 0 && newRow < m && newCol >= 0 && newCol < n) {
                    if (distances[newRow][newCol] > distances[row][col] + 1) {
                        distances[newRow][newCol] = distances[row][col] + 1;
                        queue.push([newRow, newCol]);
                    }
                }
            }
        }
        
        return distances;
};
