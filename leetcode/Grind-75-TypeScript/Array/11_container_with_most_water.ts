function maxArea(height: number[]): number {
    let left: number = 0;
    let right: number = height.length - 1;
    let max: number = 0;

    while (left < right) {
        const currentArea: number = Math.min(height[left], height[right]) * (right - left);
        max = Math.max(max, currentArea);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return max;
}
