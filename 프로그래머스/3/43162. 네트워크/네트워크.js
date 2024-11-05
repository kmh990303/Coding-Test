function solution (n, computers) {
    const graph = new Graph();
    let networkCnt = 0;
    
    for (let i = 0; i < computers.length; i++) {
        for (let j = 0; j < computers.length; j++) {
            if (computers[i][j] === 1) {
                graph.addVertex(i + 1);
                graph.addVertex(j + 1);
                if (i !== j) {
                    graph.addEdge(i + 1, j + 1);
                }
            }
        }
    }
    
    function bfs (start, visited) {
        let cnt = 0;
        const queue = [start];
        visited.add(start);
        
        while (queue.length > 0) {
            const elem = queue.shift();
            graph.adjacencyList[elem].forEach((vertex) => {
                if (!visited.has(vertex)) {
                    visited.add(vertex)
                    queue.push(vertex)
                }
            })
        }
    }
    
    const visited = new Set();
    
    for (let i = 1; i <= n; i++) { //모든 정점 기준으로 순회하되 방문한 적 있으면 스킵
        if (visited.size === n) break;
        if (!visited.has(i)) {
            bfs(i, visited);
            networkCnt++;
        }
    }
    
    return networkCnt;
}

class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = new Set();
    }
    addEdge(v1, v2) {
        this.adjacencyList[v1].add(v2);
        this.adjacencyList[v2].add(v1);
    }
}