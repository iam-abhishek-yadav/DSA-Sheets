function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    const heap: [number, ListNode][] = [];

    for (const list of lists) {
        if (list !== null) {
            heap.push([list.val, list]);
        }
    }

    const dummy = new ListNode(-1);
    let curr = dummy;

    heap.sort((a, b) => a[0] - b[0]);

    while (heap.length > 0) {
        const [val, node] = heap.shift()!;

        curr.next = node;
        curr = curr.next;

        if (node.next !== null) {
            heap.push([node.next.val, node.next]);
            heap.sort((a, b) => a[0] - b[0]);
        }
    }

    return dummy.next;
}
