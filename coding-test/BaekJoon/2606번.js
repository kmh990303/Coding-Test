class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
}

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let input = [];

rl.on('line', (line) => {
    input.push(line);
})

rl.on('close', () => {
    const N = +input[0]; //정점 수
    const M = +input[1]; // 간선 수

    const edges = input.slice(2).map((line) => line.split(' ').map(Number));

    const graph = new Graph();

    for (let i = 0; i < M; i++) {
        const [v1, v2] = edges[i];
        graph.addVertex(v1);
        graph.addVertex(v2);
        graph.addEdge(v1, v2);
    }

    function bfs(start) {
        let queue = [start];
        let visited = Array(N + 1).fill(false);
        visited[start] = true;

        let cnt = 0;

        while (queue.length > 0) {
            const elem = queue.shift();
            if (!graph.adjacencyList[elem]) continue;
            for (let i = 0; i < graph.adjacencyList[elem].length; i++) {
                const adjacent = graph.adjacencyList[elem][i];
                if (!visited[adjacent]) {
                    queue.push(adjacent);
                    visited[adjacent] = true;
                    cnt++;
                }
            }
        }

        return cnt;
    }

    let answer = bfs(1);
    console.log(answer);
})