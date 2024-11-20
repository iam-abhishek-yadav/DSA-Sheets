function encode(strs: string[]): string {
    let ans: string = '';
    for (let s of strs) {
        ans += String.fromCharCode(s.length) + s;
    }
    return ans;
}

function decode(s: string): string[] {
    let ans: string[] = [];
    let i: number = 0;
    const n: number = s.length;
    
    while (i < n) {
        let size: number = s.charCodeAt(i++);
        ans.push(s.substring(i, i + size));
        i += size;
    }
    
    return ans;
}

