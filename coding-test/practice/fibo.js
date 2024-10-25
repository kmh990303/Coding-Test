//피보나치 수열을 재귀가 아닌 방식으로 작성하기

function solution(n) {
    var answer = 0;

    let fibonacci = [0, 1];

    for (let i = 2; i <= n; i++) {
        fibonacci.push(0);
    }

    for (let i = 2; i <= n; i++) {
        fibonacci[i] = (fibonacci[i - 1] + fibonacci[i - 2]) % 1234567;
    }

    answer = fibonacci[n];

    return answer;
}

// 메모이제이션 기법 활용하여 배열에 집어넣기