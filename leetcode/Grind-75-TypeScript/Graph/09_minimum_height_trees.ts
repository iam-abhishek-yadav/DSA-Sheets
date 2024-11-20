function findMinHeightTrees(n: number, edges: number[][]): number[] {
    if (n === 1) return [0];

    const adjacencyList: number[][] = new Array(n).fill(null).map(() => []);
    for (const [a, b] of edges) {
        adjacencyList[a].push(b);
        adjacencyList[b].push(a);
    }

    const queue: number[] = [];
    for (let i: number = 0; i < n; i++) {
        if (adjacencyList[i].length === 1) {
            queue.push(i);
        }
    }

    while (n > 2) {
        const length: number = queue.length;
        n -= length;

        for (let i: number = 0; i < length; i++) {
            const node: number | undefined = queue.shift();
            if (node === undefined) break;

            const neighbor: number | undefined = adjacencyList[node].pop();
            if (neighbor === undefined) continue;
            
            const index: number = adjacencyList[neighbor].indexOf(node);
            if (index !== -1) {
                adjacencyList[neighbor].splice(index, 1);
            }

            if (adjacencyList[neighbor].length === 1) {
                queue.push(neighbor);
            }
        }
    }

    return queue;
}

