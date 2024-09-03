//작은 원판들은 출발지에서 목적지로 향할 때, 경유지가 있어야 함

function solution(n) {
    var answer = [];

    function hanoi(n, from, to, by) {
        if (n === 1) {
            answer.push([from, to]);
            return;
        }
        hanoi(n - 1, from, by, to); //n-1개의 작은 원반들 경유지로 이동
        answer.push([from, to]); //가장 큰 원반 이동;
        hanoi(n - 1, by, to, from); //n-1개의 작은 원반들 목적지로 이동
    }

    hanoi(n, 1, 3, 2);//1이 시작점, 3이 종착점, 2가 경유점

    return answer;
};
//꼭 숫자의 대소 비교를 이용해야 하는 건 아니다! -> 원판의 이동에 초점을 둘 것