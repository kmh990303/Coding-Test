// 문제 설명
// n명의 권투선수가 권투 대회에 참여했고 각각 1번부터 n번까지 번호를 받았습니다. 권투 경기는 1대1 방식으로 진행이 되고, 만약 A 선수가 B 선수보다 실력이 좋다면 A 선수는 B 선수를 항상 이깁니다. 심판은 주어진 경기 결과를 가지고 선수들의 순위를 매기려 합니다. 하지만 몇몇 경기 결과를 분실하여 정확하게 순위를 매길 수 없습니다.

// 선수의 수 n, 경기 결과를 담은 2차원 배열 results가 매개변수로 주어질 때 정확하게 순위를 매길 수 있는 선수의 수를 return 하도록 solution 함수를 작성해주세요.

// 제한사항
// 선수의 수는 1명 이상 100명 이하입니다.
// 경기 결과는 1개 이상 4,500개 이하입니다.
// results 배열 각 행 [A, B]는 A 선수가 B 선수를 이겼다는 의미입니다.
// 모든 경기 결과에는 모순이 없습니다.

function solution(n, results) {
    const graph = new Graph();
    let answer = 0;

    for (let [winner, loser] of results) {
        graph.addVertex(winner);
        graph.addVertex(loser);
        graph.addEdge(winner, loser);
    }// 그래프 초기화

    for (let i = 1; i <= n; i++) {
        const winCount = bfs(i, graph, n, true);
        const loseCount = bfs(i, graph, n, false);

        if (winCount + loseCount === n - 1) {
            answer++;
        }
    }

    return answer;
}

function bfs(start, graph, n, isWin) {
    const visited = new Set();
    const queue = [start];
    visited.add(start);

    while (queue.length > 0) {
        const player = queue.shift();
        const neighbors = isWin ? graph.adjacencyList[player] || [] : graph.getLosers(player, n);

        for (let neighbor of neighbors) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }
    return visited.size - 1;
}

class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(winner, Loser) {
        this.adjacencyList[winner].push(Loser); // 각 정점에 대하여 몇 번 선수에게 졌는지 인접리스트에 저장
    }
    getLosers(player, n) {
        const losers = [];

        for (let i = 1; i <= n; i++) {
            if (this.adjacencyList[i] && this.adjacencyList[i].includes(player)) {
                losers.push(i);
            }
        }

        return losers;
    }
}


// 복습
function solution(n, results) {
    let answer = 0;
    const graph = new Graph();

    results.forEach(([winVertex, loseVertex]) => {
        graph.addVertex(winVertex);
        graph.addVertex(loseVertex);
        graph.addEdge(winVertex, loseVertex);
    });

    for (let i = 1; i <= n; i++) {
        if (graph.isMakeRank(i, n)) answer++;
    }

    return answer;
}

class Graph {
    constructor() {
        this.adjacencyWinList = {}; // 각 정점이 이긴 번호를 저장
        this.adjacencyLoseList = {}; // 각 정점이 진 번호를 저장
    }
    addVertex(v) {
        if (!this.adjacencyWinList[v]) this.adjacencyWinList[v] = [];
        if (!this.adjacencyLoseList[v]) this.adjacencyLoseList[v] = [];
    }
    addEdge(v1, v2) {
        this.adjacencyWinList[v1].push(v2);
        this.adjacencyLoseList[v2].push(v1);
    }
    isMakeRank(v, n) {
        const winLength = this.bfs(v, this.adjacencyWinList);
        const loseLength = this.bfs(v, this.adjacencyLoseList);

        return n - 1 === winLength + loseLength;
    }
    bfs(start, adjacencyList) {
        const queue = [start];
        const visited = new Set();

        visited.add(start);

        while (queue.length > 0) {
            const player = queue.shift();

            for (let opponent of adjacencyList[player] || []) {
                if (!visited.has(opponent)) {
                    visited.add(opponent);
                    queue.push(opponent);
                }
            }
        }

        return visited.size - 1;
    }
}
