function canJump(nums: number[]): boolean {
    let jump: number = nums[0];

    for (let i: number = 1; i < nums.length; i++) {
        if (jump === 0) {
            return false;
        }
        jump--;
        jump = Math.max(jump, nums[i]);
    }

    return true;
}
