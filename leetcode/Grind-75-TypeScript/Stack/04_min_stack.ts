class MinStack {
    private stack: { val: number; min: number }[];

    constructor() {
        this.stack = [];
    }

    push(val: number): void {
        if (this.stack.length === 0) {
            this.stack.push({ val: val, min: val });
        } else {
            const min = Math.min(this.stack[this.stack.length - 1].min, val);
            this.stack.push({ val: val, min: min });
        }
    }

    pop(): void {
        if (this.stack.length > 0) {
            this.stack.pop();
        }
    }

    top(): number | null {
        if (this.stack.length > 0) {
            return this.stack[this.stack.length - 1].val;
        }
        return null;
    }

    getMin(): number | null {
        if (this.stack.length > 0) {
            return this.stack[this.stack.length - 1].min;
        }
        return null;
    }
}

