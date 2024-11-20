function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    const graph: number[][] = new Array(numCourses).fill(0).map(() => []);
    const inDegree: number[] = new Array(numCourses).fill(0);
    
    for (const [course, prerequisite] of prerequisites) {
        graph[prerequisite].push(course);
        inDegree[course]++;
    }
    
    const queue: number[] = [];
    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] === 0) {
            queue.push(i);
        }
    }
    
    let count = 0;
    while (queue.length > 0) {
        const curr = queue.shift();
        count++;
        for (const neighbor of graph[curr!]) {
            if (--inDegree[neighbor] === 0) {
                queue.push(neighbor);
            }
        }
    }
    
    return count === numCourses;
};

