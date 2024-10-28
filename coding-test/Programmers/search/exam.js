function solution(answers) {
    const p1 = [1, 2, 3, 4, 5];
    const p2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];


    function check(answers, arr) {
        let count = 0;

        for (let i = 0; i < answers.length; i++) {
            if (answers[i] === arr[i % arr.length]) count++;
        }

        return count;
    }

    const p1Count = check(answers, p1);
    const p2Count = check(answers, p2);
    const p3Count = check(answers, p3);


    const maxV = Math.max(p1Count, p2Count, p3Count);


    const arr = [p1Count, p2Count, p3Count];

    const answer = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === maxV) answer.push(i + 1);
    }

    return answer;
} // answers 의 길이가 더 길 때를 대비해 나머지 연산자 적용하는 것이 중요했음