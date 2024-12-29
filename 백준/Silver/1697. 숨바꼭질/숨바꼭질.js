const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

function transform(num, type) {
    if (type === 0) return num - 1;
    if (type === 1) return num + 1;
    if (type === 2) return num * 2;
}


rl.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    const [n, k] = input[0].split(' ').map(Number);

    function bfs(start, target) {
        const queue = [[start, 0]];
        const visited = Array(100100).fill(false);
        visited[start] = true;

        while (queue.length > 0) {
            const [cur, curCount] = queue.shift();
            if (cur === target) {
                console.log(curCount);
                return;
            }

            for (let next of [cur - 1, cur + 1, cur * 2]) {
                if (next <= 100000 && next >= 0 && !visited[next]) {
                    visited[next] = true;
                    queue.push([next, curCount + 1]);
                }
            }
        }
    }

    bfs(n, k);
})