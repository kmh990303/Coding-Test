const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const input = [];

rl.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    const [n, m, r] = input[0].split(' ').map(Number);
    const items = input[1].split(' ').map(Number); // items는 정점 - 1 로 인덱스 접근해야 함
    const graph = Array.from({ length: n + 1 }, () => []);

    for (let i = 2; i < 2 + r; i++) {
        const [start, end, weight] = input[i].split(' ').map(Number);
        graph[start].push([end, weight]);
        graph[end].push([start, weight]);
    }

    function dijkstra(start) {
        const distances = Array(n + 1).fill(Infinity);
        distances[start] = 0;

        const pq = [[0, start]];
        while (pq.length) {
            pq.sort((a, b) => a[0] - b[0]);
            const [currentDist, currentNode] = pq.shift();

            if (currentDist > distances[currentNode]) continue;

            for (const [nextNode, weight] of graph[currentNode]) {
                const newDist = currentDist + weight;
                if (newDist <= m && newDist < distances[nextNode]) {
                    distances[nextNode] = newDist;
                    pq.push([newDist, nextNode]);
                }
            }
        }

        return distances;
    }

    let maxItems = 0;

    for (let i = 1; i <= n; i++) {
        const distances = dijkstra(i);
        let totalItems = 0;

        for (let j = 1; j <= n; j++) {
            if (distances[j] <= m) {
                totalItems += items[j - 1];
            }
        }
        maxItems = Math.max(maxItems, totalItems);
    }

    console.log(maxItems);
})