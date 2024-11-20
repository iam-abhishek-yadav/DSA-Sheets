class MedianFinder {
    private arr: number[];

    constructor() {
        this.arr = [];
    }

    addNum(num: number): void {
        let left = 0;
        let right = this.arr.length;
        while (left < right) {
            let mid = (left + right) >> 1;
            if (num > this.arr[mid]) left = mid + 1;
            else right = mid;
        }
        this.arr.splice(left, 0, num);
    }

    findMedian(): number {
        let mid = this.arr.length >> 1;
        if (this.arr.length & 1) {
            return this.arr[mid];
        } else {
            return (this.arr[mid - 1] + this.arr[mid]) / 2;
        }
    }
}

