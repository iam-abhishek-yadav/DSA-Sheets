function maxProfit(prices: number[]): number {
    if (prices.length === 1) return 0;
    let max: number = 0;
    for (let i: number = 1; i < prices.length; i++) {
        max = Math.max(max, prices[i] - prices[0]);
        prices[0] = Math.min(prices[0], prices[i]);
    }
    
    return max;
}
