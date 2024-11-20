var solution = function(isBadVersion: any) {
  return function(n: number): number {
    let low: number = 1;
    let high: number = n;
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      const ans = isBadVersion(mid);
      if (ans) high = mid - 1;
      else low = mid + 1;
    }
    return low;
  };
};
