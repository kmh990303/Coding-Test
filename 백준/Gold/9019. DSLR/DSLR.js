const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    const n = Number(input[0]);

    function doCommand(ch, num) {
        if (ch === 'D') {
            return (num * 2) % 10000;
        } else if (ch === 'S') {
            return num === 0 ? 9999 : num - 1;
        } else if (ch === 'L') {
            return ((num % 1000) * 10) + Math.floor(num / 1000);
        } else { // 'R'
            return (Math.floor(num % 10) * 1000) + Math.floor(num / 10);
        }
    }

    function checkTransform(A, B) {
        const queue = [[A, '']];
        const visited = Array(10000).fill(false); // 방문 여부를 숫자 배열로 관리
        visited[A] = true;

        while (queue.length > 0) {
            const [elem, commandCombination] = queue.shift();

            for (const command of ['D', 'S', 'L', 'R']) {
                const nextNum = doCommand(command, elem);

                if (nextNum === B) {
                    return commandCombination + command;
                }

                if (!visited[nextNum]) {
                    visited[nextNum] = true;
                    queue.push([nextNum, commandCombination + command]);
                }
            }
        }
    }

    const results = [];
    for (let i = 1; i <= n; i++) {
        const [a, b] = input[i].split(' ').map(Number); // 숫자로 변환
        const result = checkTransform(a, b);
        results.push(result);
    }
    console.log(results.join('\n'));
});
