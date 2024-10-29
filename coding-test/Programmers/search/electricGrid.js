// 문제 설명
// n개의 송전탑이 전선을 통해 하나의 트리 형태로 연결되어 있습니다. 당신은 이 전선들 중 하나를 끊어서 현재의 전력망 네트워크를 2개로 분할하려고 합니다. 이때, 두 전력망이 갖게 되는 송전탑의 개수를 최대한 비슷하게 맞추고자 합니다.

// 송전탑의 개수 n, 그리고 전선 정보 wires가 매개변수로 주어집니다. 전선들 중 하나를 끊어서 송전탑 개수가 가능한 비슷하도록 두 전력망으로 나누었을 때, 두 전력망이 가지고 있는 송전탑 개수의 차이(절대값)를 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// n은 2 이상 100 이하인 자연수입니다.
// wires는 길이가 n-1인 정수형 2차원 배열입니다.
// wires의 각 원소는 [v1, v2] 2개의 자연수로 이루어져 있으며, 이는 전력망의 v1번 송전탑과 v2번 송전탑이 전선으로 연결되어 있다는 것을 의미합니다.
// 1 ≤ v1 < v2 ≤ n 입니다.
// 전력망 네트워크가 하나의 트리 형태가 아닌 경우는 입력으로 주어지지 않습니다.


function solution(n, wires) {
    var answer = Infinity;

    const graph = new Graph();

    wires.sort((a, b) => a[0] - b[0]);

    for (let i = 0; i < wires.length; i++) {
        const [v1, v2] = wires[i];
        graph.addVertex(v1);
        graph.addVertex(v2);
        graph.addEdge(v1, v2);
    } //그래프 초기화


    function bfs(start, visited) {

        let queue = [start];
        visited[start] = true;
        let count = 0;

        while (queue.length > 0) {
            const vertex = queue.shift();
            count++;
            for (let adjacent of graph.adjacencyList[vertex]) {
                if (!visited[adjacent]) {
                    visited[adjacent] = true;
                    queue.push(adjacent);
                }
            }
        }
        return count;
    }

    for (let [v1, v2] of wires) {
        graph.removeEdge(v1, v2);

        const partition1 = bfs(v1, Array(n + 1).fill(false));
        const partition2 = n - partition1;

        const diff = Math.abs(partition1 - partition2);
        answer = Math.min(answer, diff);

        graph.addEdge(v1, v2);
    }

    return answer;
}

class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1].includes(vertex2)) {
            this.adjacencyList[vertex1].push(vertex2);
        }
        if (!this.adjacencyList[vertex2].includes(vertex1)) {
            this.adjacencyList[vertex2].push(vertex1)
        }
    }
    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((val) => val !== vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((val) => val !== vertex1);
    }
    removeVertex(vertex) {
        while (this.adjacencyList[vertex].length > 0) {
            const removed = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, removed);
        }
        delete this.adjacencyList[vertex];
    }
}


// 복습
function solution(n, wires) {
    // 전선 배열 순회하며 해당 간선을 잘랐을 때, 각 정점을 BFS 시켜 정점의 개수 차를 구해 저장
    const graph = new Graph();
    const result = [];


    wires.sort((a, b) => a[0] - b[0]); // 전선 정렬

    wires.forEach(([v1, v2]) => {
        graph.addVertex(v1);
        graph.addVertex(v2);
        graph.addEdge(v1, v2);
    }) // 그래프 초기화



    function bfs(start) {
        const queue = [start];
        let count = 0;
        const visited = new Array(n + 1).fill(false);

        visited[start] = true;

        while (queue.length > 0) {
            const elem = queue.shift();
            count++;

            for (let i = 0; i < graph.adjacencyList[elem].length; i++) {
                const adjVertex = graph.adjacencyList[elem][i];
                if (!visited[adjVertex]) {
                    visited[adjVertex] = true;
                    queue.push(adjVertex);
                }
            }
        }

        return count;
    }

    wires.forEach(([v1, v2]) => {
        graph.removeEdge(v1, v2);
        const cnt1 = bfs(v1);
        const cnt2 = bfs(v2);
        result.push(Math.abs(cnt1 - cnt2));
        graph.addEdge(v1, v2);
    })

    return Math.min(...result);
}

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
    removeEdge(v1, v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter((val) => val !== v2);
        this.adjacencyList[v2] = this.adjacencyList[v2].filter((val) => val !== v1);
    }
}