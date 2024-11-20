function minMeetingRooms(intervals: number[][]): number {
    const n: number = 1000010;
    const delta: number[] = new Array(n).fill(0);
    
    for (const [start, end] of intervals) {
        ++delta[start];
        --delta[end];
    }
    
    let res: number = delta[0];
    
    for (let i: number = 1; i < n; ++i) {
        delta[i] += delta[i - 1];
        res = Math.max(res, delta[i]);
    }
    
    return res;
}

