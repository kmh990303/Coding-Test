const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.on('line', (line) => {
    const N = Number(line);

    if (N < 2) {
        console.log(0);
        rl.close();
        return;
    }

    const isPrime = Array(N + 1).fill(true);
    isPrime[0] = isPrime[1] = false; // 미리 N까지 순회하여 소수이면 true, 아니면 false를 넣어 놓음

    for (let i = 2; i * i <= N; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j <= N; j += i) {
                isPrime[j] = false;
            }
        }
    }

    const primes = [];
    for (let i = 2; i <= N; i++) {
        if (isPrime[i]) primes.push(i);
    }

    let start = 0, end = 0, sum = 0, count = 0;

    while (end <= primes.length) {
        if (sum < N) {
            if (end < primes.length) sum += primes[end];
            end++;
        } else if (sum > N) {
            sum -= primes[start];
            start++;
        } else {
            count++;
            if (end < primes.length) sum += primes[end];
            end++;
        }
    }


    console.log(count);

    rl.close();
})