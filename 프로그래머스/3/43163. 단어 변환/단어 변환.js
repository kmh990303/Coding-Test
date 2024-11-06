function solution (begin, target, words) {
    if (!words.includes(target)) return 0;
    
    let minCount = 51;
    
    const visited = new Set();
    
    function compare(standard, str) {
        let cnt = 0
        
        for (let i = 0; i < standard.length; i++) {
            if (standard[i] === str[i]) cnt++;
        }
        
        return cnt === standard.length - 1;
    }
    
    function dfs (begin, count) {
        visited.add(begin);
        if (begin === target) {
            minCount = Math.min(minCount, count);
            return;
        } 
        
        for (let i = 0; i < words.length; i++) {
            if (!visited.has(words[i]) && compare(begin, words[i])) {
                visited.add(words[i]);
                dfs(words[i], count + 1);
                visited.delete(words[i]);
            }
        }
    } 
    
    dfs(begin, 0);
    
    return minCount === 51 ? 0 : minCount;
}