const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.on('line', (line) => {
    const [A, B] = line.split(' ').map(Number);

    function bfs(start, target) {
        const queue = [[start, 1]];

        while (queue.length > 0) {
            const [cur, steps] = queue.shift();

            if (cur === target) return steps;

            if (cur > target) continue;

            queue.push([cur * 2, steps + 1]);
            queue.push([Number(String(cur) + '1'), steps + 1]);
        }

        return -1;
    }

    console.log(bfs(A, B));

    rl.close();
})