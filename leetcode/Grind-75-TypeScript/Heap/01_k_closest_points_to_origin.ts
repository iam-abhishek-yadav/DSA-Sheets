function kClosest(points: number[][], k: number): number[][] {
    return points.sort((a: number[], b: number[]) => {
        const getDistance = (point: number[]): number => Math.sqrt(Math.pow(point[0], 2) + Math.pow(point[1], 2));
        return getDistance(a) - getDistance(b);
    }).slice(0, k);
}
