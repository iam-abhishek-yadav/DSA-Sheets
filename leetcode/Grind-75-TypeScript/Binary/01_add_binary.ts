function addBinary(a: string, b: string): string {
    let i: number = a.length - 1;
    let j: number = b.length - 1;
    let ans: number[] = [];
    let carry: number = 0;

    while (i >= 0 || j >= 0 || carry) {
        carry += (i >= 0 ? parseInt(a[i]) : 0);
        carry += (j >= 0 ? parseInt(b[j]) : 0);
        ans.push(carry % 2);
        carry = Math.floor(carry / 2);
        i--;
        j--;
    }

    return ans.reverse().join('');
}

