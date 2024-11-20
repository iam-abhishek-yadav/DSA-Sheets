class Solution {
  findNumOfProvinces(roads: number[][], n: number): number {
    const ds = new DisjointSet(n);

    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        if (roads[i][j] === 1) {
          if (ds.findParent(i) !== ds.findParent(j)) {
            ds.union(i, j);
          }
        }
      }
    }

    return ds.getNumOfProvinces();
  }
}

class DisjointSet {
  parent: number[];
  rank: number[];

  constructor(n: number) {
    this.parent = new Array(n).fill(0).map((_, index) => index);
    this.rank = new Array(n).fill(0);
  }

  findParent(i: number): number {
    if (this.parent[i] !== i) {
      this.parent[i] = this.findParent(this.parent[i]);
    }
    return this.parent[i];
  }

  union(u: number, v: number): void {
    let rootU = this.findParent(u);
    let rootV = this.findParent(v);

    if (rootU !== rootV) {
      if (this.rank[rootU] > this.rank[rootV]) {
        this.parent[rootV] = rootU;
      } else if (this.rank[rootU] < this.rank[rootV]) {
        this.parent[rootU] = rootV;
      } else {
        this.parent[rootV] = rootU;
        this.rank[rootU]++;
      }
    }
  }

  getNumOfProvinces(): number {
    const set = new Set(this.parent.map(p => this.findParent(p)));
    return set.size;
  }
}

