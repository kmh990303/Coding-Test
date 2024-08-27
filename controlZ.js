// 문제 설명
// 숫자와 "Z"가 공백으로 구분되어 담긴 문자열이 주어집니다. 문자열에 있는 숫자를 차례대로 더하려고 합니다. 이 때 "Z"가 나오면 바로 전에 더했던 숫자를 뺀다는 뜻입니다. 숫자와 "Z"로 이루어진 문자열 s가 주어질 때, 머쓱이가 구한 값을 return 하도록 solution 함수를 완성해보세요.

function solution(s) {
    let answer = 0;
    let arr = [];
    let e;

    let splittedArr = s.split(' ');

    for (let elem of splittedArr) {
        if (elem === ' ') {
            continue;
        }
        if (elem === 'Z') {
            e = arr.pop();
            answer -= e;
            continue;
        }

        answer += +(elem);
        arr.push(elem);
    }

    return answer;
} // '+' 를 변수 앞에 쓰면 정수로 변환됨

//다른 풀이
// function solution(s) {
//     const stack = [];

//     s.split(' ').forEach((target) => {
//         if (target === 'Z') {
//             stack.pop();
//         } else {
//             stack.push(+target);
//         }
//     })

//     return stack.length ? stack.reduce((prev, cur) => prev + cur) : 0;
// }