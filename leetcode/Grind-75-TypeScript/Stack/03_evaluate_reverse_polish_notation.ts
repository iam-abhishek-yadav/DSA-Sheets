function evalRPN(tokens: string[]): number {
    const stack: number[] = [];

    for (const token of tokens) {
        if (token === '+' || token === '-' || token === '*' || token === '/') {
            const num1 = stack.pop()!;
            const num2 = stack.pop()!;
            switch (token) {
                case '+':
                    stack.push(num2 + num1);
                    break;
                case '-':
                    stack.push(num2 - num1);
                    break;
                case '*':
                    stack.push(num2 * num1);
                    break;
                case '/':
                    stack.push(Math.trunc(num2 / num1));
                    break;
            }
        } else {
            stack.push(Number(token));
        }
    }

    return stack.pop()!;
}
