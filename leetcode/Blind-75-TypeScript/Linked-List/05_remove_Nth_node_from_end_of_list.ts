function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    const dummy = new ListNode(0, head);
    let slow: ListNode = dummy;
    let fast: ListNode = dummy;

    for (let i = 0; i < n; i++) {
        fast = fast.next!;
    }

    while (fast.next !== null) {
        slow = slow.next!;
        fast = fast.next;
    }

    slow.next = slow.next!.next;
    return dummy.next;
}
