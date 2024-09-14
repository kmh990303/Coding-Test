class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjacencyList) this.adjacencyList[vertex] = [];
    }
    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
    removeEdge(v1, v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(
            (val) => val !== v2
        );
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(
            (val) => val !== v1
        );
    }
    removeVertex(vertex) {
        while (this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex]; //키 값 쌍을 자리를 완전히 삭제
    }
    depthFirstRecursive(start) {
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;

        (function dfs(vertex) {
            if (!vertex) return null;
            visited[vertex] = true; //방문 처리
            result.push(vertex); //결과에 추가
            adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    return dfs(neighbor);
                }
            })
        })(start);
    }
    depthFirstIterative(start) {
        const visited = {};
        const result = [];
        const stack = [start];
        let currentVertex;

        visited[start] = true;
        while (stack.length) {
            currentVertex = stack.pop();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            })
        }
        return result;
    }
    breadthFirst(start) {
        const queue = [start];
        const result = [];
        const visited = {};
        let currentVertex;

        visited[start] = true;
        while (queue.length) {
            currentVertex = queue.shift();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            })
        }
        return result;
    }
}

