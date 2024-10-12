// 문제 설명
// 정수로 이루어진 배열 numbers가 있습니다. 배열 의 각 원소들에 대해 자신보다 뒤에 있는 숫자 중에서 자신보다 크면서 가장 가까이 있는 수를 뒷 큰수라고 합니다.
// 정수 배열 numbers가 매개변수로 주어질 때, 모든 원소에 대한 뒷 큰수들을 차례로 담은 배열을 return 하도록 solution 함수를 완성해주세요. 단, 뒷 큰수가 존재하지 않는 원소는 -1을 담습니다.

// function solution(numbers) {
//     var answer = [];

//     let idx = 0;
//     let flag = 0;

//     while (idx !== numbers.length) {
//         flag = 0;
//         for (let i = idx + 1; i < numbers.length; i++) {
//             if (numbers[idx] < numbers[i]) {
//                 answer.push(numbers[i]);
//                 flag = 1; //찾은 경우에 대한 표시
//                 break;
//             }
//         }
//         if (flag === 0) {
//             answer.push(-1);
//         }
//         idx += 1;
//     }

//     return answer;
// } -> 수가 매우 커졌을 때의 케이스에서만 시간 초과 발생

function solution(numbers) {
    let answer = new Array(numbers.length).fill(-1);
    let stack = [];

    for (let i = 0; i < numbers.length; i++) {
        while (stack.length !== 0 && numbers[stack[stack.length - 1]] < numbers[i]) {
            let index = stack.pop();
            answer[index] = numbers[i];
        }
        stack.push(i);
    }

    return answer;
} // 하나 하나 비교하게 만드는 반복문보다 스택을 활용하면 시간복잡도를 줄일 수 있음