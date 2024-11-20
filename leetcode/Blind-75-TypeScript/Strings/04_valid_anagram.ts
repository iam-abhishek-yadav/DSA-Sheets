function isAnagram(s: string, t: string): boolean {
    return s.toLowerCase().split('').sort().join('') === t.toLowerCase().split('').sort().join('');
}

