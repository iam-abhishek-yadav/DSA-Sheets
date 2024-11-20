function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
    const words: Set<string> = new Set(wordList);
    const queue: string[] = [beginWord];
    let ans: number = 1;

    while (queue.length > 0) {
        ans++;
        const queueSize: number = queue.length;

        for (let i: number = 0; i < queueSize; i++) {
            let s: string | undefined = queue.shift();
            if (!s) continue;

            let chars: string[] = s.split('');
            for (let j: number = 0; j < chars.length; j++) {
                const originalChar: string = chars[j];
                for (let k: number = 0; k < 26; k++) {
                    chars[j] = String.fromCharCode('a'.charCodeAt(0) + k);
                    const transformedWord: string = chars.join('');
                    
                    if (!words.has(transformedWord)) continue;
                    if (transformedWord === endWord) return ans;
                    
                    queue.push(transformedWord);
                    words.delete(transformedWord);
                }
                chars[j] = originalChar;
            }
        }
    }
    
    return 0;
}

