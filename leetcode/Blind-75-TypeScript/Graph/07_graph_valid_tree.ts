function validTree(n: number, edges: number[][]): boolean {
    const parent = new Array(n).fill(0).map((_, index) => index);

    function find(x: number): number {
        if (parent[x] !== x) {
            parent[x] = find(parent[x]);
        }
        return parent[x];
    }

    for (const [a, b] of edges) {
        const parentA = find(a);
        const parentB = find(b);

        if (parentA === parentB) {
            return false;
        }

        parent[parentA] = parentB;
        n--;
    }

    return n === 1;
}

