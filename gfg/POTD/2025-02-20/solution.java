class Solution {
    public ArrayList<Double> getMedian(int[] arr) {
        ArrayList<Double> result = new ArrayList<>();
        PriorityQueue<Integer> up = new PriorityQueue<>();
        PriorityQueue<Integer> dn = new PriorityQueue<>(Collections.reverseOrder());

        for (int ve : arr) {
            up.offer(ve);
            ve = up.poll();
            dn.offer(ve);
            ve = dn.poll();
            
            if (up.size() == dn.size()) {
                result.add((double) ve);
                up.offer(ve);
            } else if (up.size() > dn.size()) {
                result.add((up.peek() + (double) ve) / 2);
                dn.offer(ve);
            } else {
                result.add(((-dn.peek() + (double) ve) / 2));
                up.offer(ve);
            }
        }
        return result;
    }
}