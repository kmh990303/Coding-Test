function solution (maps) {
    const n = maps.length;
    const m = maps[0].length;
    
    const direction = [
        [-1, 0], [1, 0], [0, -1], [0, 1]
    ];
    
    const queue = [];
    let head = 0;
    let tail = 0;
    
    const visited = Array.from({length : n}, () => Array(m).fill(false));
    visited[0][0] = true;
    
    queue[tail++] = [0, 0, 1];
    
    while (head < tail) {
        const [x, y, dist] = queue[head++];
        if (x === n - 1 && y === m - 1) return dist;
        
        for (let [dx, dy] of direction) {
            const nx = x + dx;
            const ny = y + dy;
            
            if (nx >= 0 && ny >= 0 && nx < n && ny < m && maps[nx][ny] === 1 && !visited[nx][ny]) {
                visited[nx][ny] = true;
                queue[tail++] = [nx, ny, dist + 1];
            }
        }
    }
    
    return -1;
}