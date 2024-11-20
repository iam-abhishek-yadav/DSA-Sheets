function trap(height: number[]): number {
    if (height.length < 3) return 0;

    let left = 0;
    let right = height.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    let waterTrapped = 0;

    while (left < right) {
        leftMax = Math.max(leftMax, height[left]);
        rightMax = Math.max(rightMax, height[right]);

        if (leftMax < rightMax) {
            waterTrapped += leftMax - height[left];
            left++;
        } else {
            waterTrapped += rightMax - height[right];
            right--;
        }
    }

    return waterTrapped;
}
