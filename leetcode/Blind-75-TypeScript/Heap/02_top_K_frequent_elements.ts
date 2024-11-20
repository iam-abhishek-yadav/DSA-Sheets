function topKFrequent(nums: number[], k: number): number[] {
    const hashMap = new Map<number, number>();
    for (let num of nums) {
        hashMap.set(num, (hashMap.get(num) || 0) + 1);
    }

    const minHeap: [number, number][] = [];

    hashMap.forEach((freq, num) => {
        if (minHeap.length < k) {
            minHeap.push([freq, num]);
            if (minHeap.length === k) {
                buildMinHeap();
            }
        } else {
            if (freq > minHeap[0][0]) {
                minHeap[0] = [freq, num];
                minHeapify(0);
            }
        }
    });

    function buildMinHeap() {
        for (let i = Math.floor(k / 2) - 1; i >= 0; i--) {
            minHeapify(i);
        }
    }

    function minHeapify(i: number) {
        let smallest = i;
        const left = 2 * i + 1;
        const right = 2 * i + 2;

        if (left < k && minHeap[left][0] < minHeap[smallest][0]) {
            smallest = left;
        }

        if (right < k && minHeap[right][0] < minHeap[smallest][0]) {
            smallest = right;
        }

        if (smallest !== i) {
            swap(i, smallest);
            minHeapify(smallest);
        }
    }

    function swap(i: number, j: number) {
        const temp = minHeap[i];
        minHeap[i] = minHeap[j];
        minHeap[j] = temp;
    }

    const ans: number[] = [];
    for (let i = 0; i < k; i++) {
        ans.push(minHeap[i][1]);
    }

    return ans;
}

