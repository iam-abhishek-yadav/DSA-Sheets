class Solution {
    public int[] queryResults(int limit, int[][] queries) {
        int[] result = new int[queries.length];
        Map<Integer, Integer> ballToColor = new HashMap<>();
        Map<Integer, Integer> colorCount = new HashMap<>();

        for (int i = 0; i < queries.length; i++) {
            int ballId = queries[i][0];
            int newColor = queries[i][1];

            if (ballToColor.containsKey(ballId)) {
                int previousColor = ballToColor.get(ballId);
                colorCount.put(previousColor, colorCount.get(previousColor) - 1);
                if (colorCount.get(previousColor) == 0) {
                    colorCount.remove(previousColor);
                }
            }

            ballToColor.put(ballId, newColor);
            colorCount.put(newColor, colorCount.getOrDefault(newColor, 0) + 1);
            result[i] = colorCount.size();
        }

        return result;
    }
}