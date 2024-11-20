function isValid(s: string): boolean {
    const stack: string[] = [];
    
    for (const char of s) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
            continue;
        }

        const top: string | undefined = stack.pop();
        
        if ((char === ')' && top === '(') || 
            (char === '}' && top === '{') || 
            (char === ']' && top === '[')) {
            continue;
        } else {
            return false;
        }
    }
    
    return stack.length === 0;
}

