const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.on('line', (line) => {
    const [a, b] = line.split(' ').map(Number);

    function checkIsPrime(n) {
        if (n <= 1) {
            return false;
        }
        if (n === 2) return true;

        for (let i = 2; i * i <= n; i++) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    }

    const primes = [];

    for (let k = a; k <= b; k++) {
        if (checkIsPrime(k)) {
            primes.push(k);
        }
    }

    console.log(primes.join('\n'));

    rl.close();
})