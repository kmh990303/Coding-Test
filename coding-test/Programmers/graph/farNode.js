// 문제 설명
// n개의 노드가 있는 그래프가 있습니다. 각 노드는 1부터 n까지 번호가 적혀있습니다. 1번 노드에서 가장 멀리 떨어진 노드의 갯수를 구하려고 합니다. 가장 멀리 떨어진 노드란 최단경로로 이동했을 때 간선의 개수가 가장 많은 노드들을 의미합니다.

// 노드의 개수 n, 간선에 대한 정보가 담긴 2차원 배열 vertex가 매개변수로 주어질 때, 1번 노드로부터 가장 멀리 떨어진 노드가 몇 개인지를 return 하도록 solution 함수를 작성해주세요.

// 제한사항
// 노드의 개수 n은 2 이상 20,000 이하입니다.
// 간선은 양방향이며 총 1개 이상 50,000개 이하의 간선이 있습니다.
// vertex 배열 각 행 [a, b]는 a번 노드와 b번 노드 사이에 간선이 있다는 의미입니다.

function solution(n, vertex) { //BFS는 큐로 구현하는 것이 효율적
    let visited = Array.from({ length: n + 1 }, () => false); // 방문여부 저장
    let dist = Array.from({ length: n + 1 }, () => 0); // 정점 1로부터 거리 저장

    let graph = new Graph();


    vertex.forEach(([vertex1, vertex2]) => {
        graph.addVertex(vertex1);
        graph.addVertex(vertex2);
        graph.addEdge(vertex1, vertex2);
    })

    function BFS(start) {
        let queue = [start];
        visited[start] = true;

        while (queue.length > 0) {
            let node = queue.shift();
            graph.adjacencyList[node].forEach((neighbor) => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    dist[neighbor] = dist[node] + 1;
                    queue.push(neighbor);
                }
            })
        }
    }

    BFS(1);

    let maxDist = Math.max(...dist);

    return dist.filter((val) => val === maxDist).length;
}

class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(v1, v2) {
        if (!this.adjacencyList[v1].includes(v2)) {
            this.adjacencyList[v1].push(v2);
        }
        if (!this.adjacencyList[v2].includes(v1)) {
            this.adjacencyList[v2].push(v1);
        }
    }
    removeEdge(v1, v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter((val) => val !== v2);
        this.adjacencyList[v2] = this.adjacencyList[v2].filter((val) => val !== v1);
    }
    removeVertex(vertex) {
        while (this.adjacencyList[vertex].length > 0) {
            let adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }
    listSort() {
        for (let key in this.adjacencyList) {
            this.adjacencyList[key].sort((a, b) => a - b);
        }
    }
}



// function solution (n, vertex) { 복습 dist 배열을 만들어 거리 값을 저장하도록 함 // 인접노드는 부모 노드의 거리값 + 1
//     const graph = new Graph();
//     let visited = Array(n + 1).fill(false);
//     let dist = Array(n + 1).fill(0);

    
//     vertex.forEach(([v1, v2]) => {
//         graph.addVertex(v1);
//         graph.addVertex(v2);
//         graph.addEdge(v1, v2);
//     }) //그래프 초기화
    
    
//     function bfs (start) {
//         let queue = [start];
//         visited[start] = true;
        
        
//         while (queue.length > 0) {
//             const elem = queue.shift();
            
//             graph.adjacencyList[elem].forEach((neighbor) => {
//                 if (!visited[neighbor]) {
//                     visited[neighbor] = true;
//                     dist[neighbor] = dist[elem] + 1;
//                     queue.push(neighbor);
//                 }
//             })
//         }
//     }
    
//     bfs(1);
    
//     const maxD = Math.max(...dist);
    
//     return dist.filter((val) => val === maxD).length;
// }

// class Graph {
//     constructor() {
//         this.adjacencyList = {};
//     }
//     addVertex(vertex) {
//         if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
//     }
//     addEdge(v1, v2) {
//         this.adjacencyList[v1].push(v2);
//         this.adjacencyList[v2].push(v1);
//     }
// }