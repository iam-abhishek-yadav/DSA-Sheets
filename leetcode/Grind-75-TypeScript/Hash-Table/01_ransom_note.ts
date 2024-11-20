function canConstruct(ransomNote: string, magazine: string): boolean {
    const map: Map<string, number> = new Map();
    
    for (const char of magazine) {
        map.set(char, (map.get(char) || 0) + 1);
    }
    
    for (const char of ransomNote) {
        if (!map.get(char) || map.get(char) === 0) return false;
        map.set(char, (map.get(char) as number) - 1);
    }
    
    return true;
}
