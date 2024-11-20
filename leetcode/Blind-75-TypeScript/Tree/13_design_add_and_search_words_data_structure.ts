class TrieNode {
    children: { [char: string]: TrieNode };
    isEndOfWord: boolean;

    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class WordDictionary {
    root: TrieNode;

    constructor() {
        this.root = new TrieNode();
    }

    addWord(word: string): void {
        let node: TrieNode = this.root;
        for (const char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

    search(word: string): boolean {
        const dfs = (node: TrieNode, index: number): boolean => {
            if (!node) {
                return false;
            }
            if (index === word.length) {
                return node.isEndOfWord;
            }

            const char = word[index];

            if (char === '.') {
                for (const nextChar in node.children) {
                    if (dfs(node.children[nextChar], index + 1)) {
                        return true;
                    }
                }
            } else {
                if (dfs(node.children[char], index + 1)) {
                    return true;
                }
            }

            return false;
        };

        return dfs(this.root, 0);
    }
}

