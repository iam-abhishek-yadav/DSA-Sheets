func countBadPairs(nums []int) int64 {
    length := len(nums)
    adjustedValues := make([]int, length)
    
    for i := 0; i < length; i++ {
        adjustedValues[i] = nums[i] - i
    }
    
    sort.Ints(adjustedValues)
    
    var goodPairs, currentCount int64 = 0, 1
    
    for i := 1; i < length; i++ {
        if adjustedValues[i] == adjustedValues[i-1] {
            currentCount++
        } else {
            goodPairs += (currentCount * (currentCount - 1)) / 2
            currentCount = 1
        }
    }
    
    goodPairs += (currentCount * (currentCount - 1)) / 2
    totalPairs := int64(length) * int64(length-1) / 2

    return totalPairs - goodPairs
}