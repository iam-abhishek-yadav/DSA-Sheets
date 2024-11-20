interface TimeStamp {
    value: string,
    time: number
}

class TimeMap {
    private map: Map<string, TimeStamp[]>;

    constructor() {
        this.map = new Map();
    }

    set(key: string, value: string, timestamp: number): void {
        let timeStamps: TimeStamp[] | undefined = this.map.get(key);

        const timeStamp: TimeStamp = { value: value, time: timestamp };

        if (!timeStamps) {
            timeStamps = [timeStamp];
            this.map.set(key, timeStamps);
        } else {
            timeStamps.push(timeStamp);
        }
    }

    get(key: string, timestamp: number): string {
        const timeStamps: TimeStamp[] | undefined = this.map.get(key);

        if (!timeStamps) return '';

        return this.binarySearchForTimeStamp(timestamp, timeStamps);
    }

    private binarySearchForTimeStamp(timestamp: number, timestamps: TimeStamp[]): string {
        let left: number = 0;
        let right: number = timestamps.length - 1;
        let closest: number | null = null;

        while (left <= right) {
            const middle: number = Math.floor((left + right) / 2);

            if (timestamps[middle].time === timestamp) return timestamps[middle].value;
            else if (timestamps[middle].time < timestamp) {
                closest = middle;
                left = middle + 1;
            } else {
                right = middle - 1;
            }
        }

        return closest === null ? '' : timestamps[closest].value;
    }
}

