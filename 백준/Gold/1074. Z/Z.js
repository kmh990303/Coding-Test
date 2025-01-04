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
            let size = 2 ** (n - 1);
            let area = size * size;

            if (r < size && c < size) {}
            else if (r < size && c >= size) {
                result += area;
                c -= size;
            } else if (r >= size && c < size) {
                result += 2 * area;
                r -= size;
            } else {
                result += 3 * area;
                r -= size;
                c -= size;
            }
            n -= 1;
        }

        return result;
    }

    console.log(z_order(n, r, c));
})