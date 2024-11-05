function solution (numbers, target) {  
    let start = numbers[0];
    let cnt = 0;
    let sum = 0;
    
    function dfs (sum, number, idx) {
        if (idx < numbers.length) {
            dfs (sum + number, numbers[idx + 1], idx + 1);
            dfs (sum - number, numbers[idx + 1], idx + 1);
        }
        
        if (sum === target && idx >= numbers.length) cnt++;
    }  
    
    dfs(sum, start, 0);
    
    return cnt;
}