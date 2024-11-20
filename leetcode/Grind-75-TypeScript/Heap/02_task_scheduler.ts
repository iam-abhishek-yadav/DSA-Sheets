function leastInterval(tasks: string[], n: number): number {
    const cnt: number[] = new Array(26).fill(0);
    let x: number = 0;
    
    for (let i: number = 0; i < tasks.length; i++) {
        let c: number = tasks[i].charCodeAt(0) - 'A'.charCodeAt(0);
        ++cnt[c];
        x = Math.max(x, cnt[c]);
    }
    
    let s: number = 0;
    for (let v of cnt) {
        if (v === x) {
            ++s;
        }
    }
    
    return Math.max(tasks.length, (x - 1) * (n + 1) + s);
}

