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
    const aList = input[1].split(' ').map(Number);

    const m = Number(input[2]);
    const mList = input[3].split(' ').map(Number);

    aList.sort((a, b) => a - b); // 오름차순 정렬

    function BinarySearch(target, list, n) {
        let mid = Math.floor(n / 2); // n의 개수가 10만이기에 이중 for문의 경우 오래 걸림
        let left = 0;
        let right = n - 1;

        while (left <= right) {
            if (list[mid] < target) {
                left = mid + 1;
            } else if (list[mid] > target) {
                right = mid - 1;
            } else {
                return true;
            }
            if (left >= n || right < 0) return false;
            mid = Math.floor((left + right) / 2);
        }

        return false;
    }

    const result = [];

    for (let elem of mList) {
        if (BinarySearch(elem, aList, n)) result.push(1);
        else result.push(0);
    }

    console.log(result.join('\n'));
})