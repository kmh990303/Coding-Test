const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(v1, v2) {
        this.addVertex(v1);
        this.addVertex(v2);

        if (!this.adjacencyList[v1].includes(v2)) this.adjacencyList[v1].push(v2);
        if (!this.adjacencyList[v2].includes(v1)) this.adjacencyList[v2].push(v1);
    }
}

const input = [];

rl.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    const graph = new Graph();

    const [n, m] = input[0].split(' ').map(Number);

    for (let i = 1; i <= m; i++) {
        const [v1, v2] = input[i].split(' ').map(Number);
        graph.addEdge(v1, v2);
    }

    function bfs(start, visited) {
        const queue = [start];
        visited[start] = true;

        while (queue.length > 0) {
            const elem = queue.shift();

            for (let adjacent of graph.adjacencyList[elem] || []) {
                if (!visited[adjacent]) {
                    visited[adjacent] = true;
                    queue.push(adjacent);
                }
            }
        }
    }

    const visited = Array(n + 1).fill(false);
    let count = 0;

    for (let i = 1; i <= n; i++) {
        if (!visited[i]) {
            bfs(i, visited);
            count++;
        }
    }

    console.log(count);
});
