function cloneGraph(node: _Node | null): _Node | null {
	if (!node) return null;
    
    const visited: Map<Node, Node> = new Map();
    const queue: Node[] = [node];
    
    visited.set(node, new Node(node.val));
    
    while (queue.length > 0) {
        const curr: Node | undefined = queue.shift();
        
        if (curr) {
            for (let neighbor of curr.neighbors) {
                if (!visited.has(neighbor)) {
                    queue.push(neighbor);
                    const newNeighbor = new Node(neighbor.val);
                    visited.set(neighbor, newNeighbor);
                }
                const newNode = visited.get(curr);
                if (newNode) {
                    newNode.neighbors.push(visited.get(neighbor)!);
                }
            }
        }
    }
    
    return visited.get(node)!;
};
