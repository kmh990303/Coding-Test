class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(v1, v2) {
        if (!this.adjacencyList[v1].includes(v2)) this.adjacencyList[v1].push(v2);
        if (!this.adjacencyList[v2].includes(v1)) this.adjacencyList[v2].push(v1);
    }
}

const graph = new Graph();
let visited = [];


function DFS(start, visited) {
    visited[start] = true;
    process.stdout.write(start + ' ');

    for (let i = 0; i < graph.adjacencyList[start].length; i++) {
        const adjacentVertex = graph.adjacencyList[start][i];
        if (!visited[adjacentVertex]) {
            DFS(adjacentVertex, visited);
        }
    }
}

function BFS(start, visited) {
    let queue = [start];
    visited[start] = true;

    while (queue.length > 0) {
        const elem = queue.shift();
        process.stdout.write(elem + ' ');

        for (let i = 0; i < graph.adjacencyList[elem].length; i++) {
            const adjacentVertex = graph.adjacencyList[elem][i];
            if (!visited[adjacentVertex]) {
                visited[adjacentVertex] = true;
                queue.push(adjacentVertex);
            }
        }
    }
}



//공백이 포함된 문자 여러 줄 입력 받기
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on('line', (line) => {
    input.push(line.split(' ').map(el => parseInt(el)));
})

rl.on('close', () => {
    const N = input[0][0]; //정점 개수
    const M = input[0][1]; //간선 개수
    const V = input[0][2]; // 탐색 시작 정점 번호

    for (let i = 1; i <= M; i++) {
        const [v1, v2] = input[i];
        graph.addVertex(v1);
        graph.addVertex(v2);
        graph.addEdge(v1, v2);
    }

    for (let key in graph.adjacencyList) {
        graph.adjacencyList[key].sort((a, b) => a - b);
    }

    visited = Array(N + 1).fill(false);

    DFS(V, visited);

    console.log(); //줄 바꿈

    visited = Array(N + 1).fill(false);

    BFS(V, visited);

    console.log(); //줄 바꿈

    process.exit();
})

