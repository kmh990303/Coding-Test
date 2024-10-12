// 문제 설명
// 양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다. 예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다. 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.

function solution(x) {
    var answer = true;

    let digit_sum = 0;

    [...String(x)].forEach((v) => digit_sum += +v);

    if (x % digit_sum !== 0) {
        answer = false;
    }

    return answer;
}

// 다른 풀이 -> 배열의 구조 분해 할당 이용
// function solution(array, commands) {
//     return commands.map(command => {
//         const [sPosition, ePosition, position] = command;
//         const newArray = array
//             .filter((value, fIndex) => fIndex >= sPosition - 1 && fIndex <= ePosition - 1)
//             .sort((a, b) => a - b)
        
//         return newArray[position - 1]
//     })
// }