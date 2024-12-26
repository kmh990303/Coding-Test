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
    const nList = input[1].split(' ').map(Number);
    nList.sort((a, b) => a - b);

    const m = Number(input[2]);
    const mList = input[3].split(' ').map(Number);

    function countOccurrences(numList, target) {
        let left = 0;
        let right = numList.length;
        let first = -1;
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (numList[mid] < target) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        first = left;

        left = 0;
        right = numList.length;
        let last = -1;
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (numList[mid] <= target) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        last = left;

        if (first === last) {
            return 0;
        }
        return last - first; 
    }

    const result = [];
    for (let i = 0; i < m; i++) {
        const value = countOccurrences(nList, mList[i]);
        result.push(value);
    }

    console.log(result.join(' '));
});
