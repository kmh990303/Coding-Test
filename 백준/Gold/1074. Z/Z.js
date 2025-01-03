const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    const [n, r, c] = input[0].split(' ').map(Number);

    function z_order(n, r, c) {
        let result = 0;

        while (n > 0) {
            const size = 2 ** (n - 1);
            const area = size * size;

            if (r < size && c < size) {
                // 1사분면: result 변화 없음
            } else if (r < size && c >= size) {
                // 2사분면
                result += area;
                c -= size;
            } else if (r >= size && c < size) {
                // 3사분면
                result += 2 * area;
                r -= size;
            } else {
                // 4사분면
                result += 3 * area;
                r -= size;
                c -= size;
            }

            n -= 1; // n 차원을 줄임
        }

        return result;
    }

    console.log(z_order(n, r, c));
});
