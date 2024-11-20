function reorderList(head: ListNode | null): void {
    if (!head || !head.next) return;

    let slow: ListNode | null = head;
    let fast: ListNode | null = head;

    while (fast.next !== null && fast.next.next !== null) {
        slow = slow.next!;
        fast = fast.next.next;
    }

    let prev: ListNode | null = null;
    let curr: ListNode | null = slow.next;
    slow.next = null;

    while (curr !== null) {
        let nextNode: ListNode | null = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextNode;
    }

    let first: ListNode | null = head;
    let second: ListNode | null = prev;

    while (second !== null) {
        let nextFirst: ListNode | null = first!.next;
        let nextSecond: ListNode | null = second.next;
        first!.next = second;
        second.next = nextFirst;
        first = nextFirst;
        second = nextSecond;
    }
}
