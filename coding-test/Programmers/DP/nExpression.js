function solution(N, number) { // N을 최대 8번 사용해서 number를 만드는 문제
    let answer = 0;

    if (N === number) return 1;

    const dp = Array.from({ length: 9 }, () => new Set()); // 각각의 배열의 인덱스에 집합을 만들어 중복을 제거하도록 함

    for (let i = 1; i <= 8; i++) {
        dp[i].add(Number(Array(i).fill(N).join('')));
    } // N을 반복하여 만든 숫자들을 각각 사용한 횟수를 의미하는 인덱스에 대응되도록 삽입시킴

    for (let i = 1; i <= 8; i++) { // N을 총 i번 사용해서 만들 수 있는 연산 결과 값을 각 i에 저장
        for (let j = 1; j < i; j++) {
            for (const num1 of dp[j]) {
                for (const num2 of dp[i - j]) {
                    dp[i].add(num1 + num2);
                    dp[i].add(num1 - num2);
                    dp[i].add(num1 * num2);
                    if (num2 !== 0) dp[i].add(num1 / num2);
                }
            }
        }
        if (dp[i].has(number)) return i;
    }

    return -1;
}


// 복습
function solution(N, number) {
    if (N === number) return 1;

    const dp = Array.from({ length: 9 }, () => new Set());

    for (let i = 1; i <= 8; i++) {
        dp[i].add(+String(N).repeat(i));
    }


    for (let i = 1; i <= 8; i++) {
        for (let j = 1; j < i; j++) {
            for (const num1 of dp[j]) {
                for (const num2 of dp[i - j]) {
                    dp[i].add(num1 + num2);
                    dp[i].add(num1 - num2);
                    dp[i].add(num1 * num2);
                    if (num2 !== 0) dp[i].add(num1 / num2);
                }
            }
        }
        if (dp[i].has(number)) return i;
    }

    return -1;
}