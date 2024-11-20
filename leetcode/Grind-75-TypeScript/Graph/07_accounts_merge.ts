function accountsMerge(accounts: string[][]): string[][] {
    let n: number = accounts.length;
    let p: number[] = new Array(n).fill(0).map((_, index) => index);

    const find = (x: number, p: number[]): number => {
        if (p[x] !== x) {
            p[x] = find(p[x], p);
        }
        return p[x];
    };

    let emailId: Map<string, number> = new Map();

    for (let i: number = 0; i < n; ++i) {
        let account: string[] = accounts[i];
        let name: string = account[0];
        for (let j: number = 1; j < account.length; ++j) {
            let email: string = account[j];
            if (emailId.has(email)) {
                p[find(i, p)] = find(emailId.get(email)!, p);
            } else {
                emailId.set(email, i);
            }
        }
    }

    let mp: Map<number, Set<string>> = new Map();

    for (let i: number = 0; i < n; ++i) {
        let account: string[] = accounts[i];
        for (let j: number = 1; j < account.length; ++j) {
            let email: string = account[j];
            mp.set(find(i, p), (mp.get(find(i, p)) || new Set()).add(email));
        }
    }

    let res: string[][] = [];

    for (let [key, value] of mp.entries()) {
        let t: string[] = Array.from(value);
        t.sort();
        t.unshift(accounts[key][0]);
        res.push(t);
    }

    return res;
}

