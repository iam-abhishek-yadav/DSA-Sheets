class LRUCache {
    private capacity: number;
    private cache: Map<number, number>;

    constructor(capacity: number) {
        this.capacity = capacity;
        this.cache = new Map<number, number>();
    }

    get(key: number): number {
        if (this.cache.has(key)) {
            const val = this.cache.get(key)!;
            this.cache.delete(key);
            this.cache.set(key, val);
            return val;
        }
        return -1;
    }

    put(key: number, value: number): void {
        this.cache.delete(key);
        this.cache.set(key, value);
        if (this.cache.size > this.capacity) {
            const firstKey = this.cache.keys().next().value;
            this.cache.delete(firstKey);
        }
    }
}
