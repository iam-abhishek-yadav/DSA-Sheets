function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    if (lists === null || lists.length === 0) return null;
    return mergeList(lists, 0, lists.length - 1);
}

function mergeList(lists: Array<ListNode | null>, start: number, end: number): ListNode | null {
    if (start === end) return lists[start];
    const mid = (start + end) >> 1;
    const left = mergeList(lists, start, mid);
    const right = mergeList(lists, mid + 1, end);
    return merge(left, right);
}

function merge(head1: ListNode | null, head2: ListNode | null): ListNode | null {
    const dummy = new ListNode(-1);
    let curr: ListNode = dummy;

    while (head1 !== null && head2 !== null) {
        if (head1.val < head2.val) {
            curr.next = head1;
            head1 = head1.next;
        } else {
            curr.next = head2;
            head2 = head2.next;
        }
        curr = curr.next;
    }

    if (head1 !== null) curr.next = head1;
    if (head2 !== null) curr.next = head2;

    return dummy.next;
}
