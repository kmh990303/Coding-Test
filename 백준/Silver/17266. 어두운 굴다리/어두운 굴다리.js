const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const input = [];

rl.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    const n = Number(input[0]);
    const m = Number(input[1]);
    const locations = input[2].split(' ').map(Number);

    let left = 1;
    let right = n;
    let answer = n;

    function canCover(height) {
        let currentEnd = 0;

        for (const location of locations) {
            if (location - height > currentEnd) {
                return false;
            }
            currentEnd = location + height;
        }

        return currentEnd >= n;
    }

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (canCover(mid)) {
            answer = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    console.log(answer);
})