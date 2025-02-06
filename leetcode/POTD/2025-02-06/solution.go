func tupleSameProduct(nums []int) int {
    length := len(nums)
    productMap := make(map[int]int)

    // Step 1: Calculate all products of pairs
    for first := 0; first < length-1; first++ {
        for second := first + 1; second < length; second++ {
            product := nums[first] * nums[second]
            productMap[product]++
        }
    }

    // Step 2: Count the frequency of each product
    result := 0
    for _, freq := range productMap {
        if freq > 1 {
            result += freq * (freq - 1) * 4
        }
    }

    return result
}