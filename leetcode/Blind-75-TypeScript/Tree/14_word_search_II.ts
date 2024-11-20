class Trie {
    children: (Trie | null)[];
    ref: number;

    constructor() {
        this.children = new Array(26).fill(null);
        this.ref = -1;
    }

    insert(word: string, ref: number): void {
        let node: Trie | null = this;
        for (let i = 0; i < word.length; i++) {
            const c = word.charCodeAt(i) - 97;
            if (!node.children[c]) {
                node.children[c] = new Trie();
            }
            node = node.children[c];
        }
        node.ref = ref;
    }
}

function findWords(board: string[][], words: string[]): string[] {
    const trie = new Trie();
    const m = board.length;
    const n = board[0].length;
    const ans: string[] = [];
    const dirs: number[] = [-1, 0, 1, 0, -1];

    for (let i = 0; i < words.length; ++i) {
        trie.insert(words[i], i);
    }

    const dfs = (node: Trie, i: number, j: number) => {
        const char = board[i][j];
        const idx = char.charCodeAt(0) - 97;
        
        if (!node.children[idx]) {
            return;
        }
        
        node = node.children[idx]!;
        
        if (node.ref !== -1) {
            ans.push(words[node.ref]);
            node.ref = -1;
        }
        
        board[i][j] = '#';
        
        for (let k = 0; k < 4; ++k) {
            const x = i + dirs[k];
            const y = j + dirs[k + 1];
            
            if (x >= 0 && x < m && y >= 0 && y < n && board[x][y] !== '#') {
                dfs(node, x, y);
            }
        }
        
        board[i][j] = char;
    };

    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            dfs(trie, i, j);
        }
    }

    return ans;
}

