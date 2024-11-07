function solution (tickets) {
    const routes = [];
    const countryCnt = tickets.length + 1;
    
    tickets.sort();
    
    
    function dfs(path, visited) {
        if (path.length === countryCnt) {
            routes.push([...path]);
            return;
        }
        
        for (let i = 0; i < tickets.length; i++) {
            const [from, to] = tickets[i];
            
            if (from === path[path.length - 1] && !visited[i]) {
                visited[i] = true;
                path.push(to);
                dfs(path, visited);
                
                path.pop();
                visited[i] = false;
            }
        }
    }
    
    dfs(["ICN"], Array(tickets.length).fill(false));
    
    return routes[0];
}