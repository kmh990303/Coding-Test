// function solution(sequence, k) {
//     var answer = [];
//     let pair = []

//     let start;
//     let end;
//     let cnt = 0; //쌍 별로 요소의 개수를 세기 위함

//     for (let i = 1; i <= sequence.length; i++) { //1개부터 k개까지 이루어진 쌍에서 합이 k인 쌍을 찾음
//         cnt = 0;
//         pair = [];

//         for (let j = 0; j < sequence.length; j++) {
//             if (cnt === i) {
//                 let sum = pair.reduce((prev, cur) => prev + cur, 0);
//                 if (sum === k) { // 합이 k랑 같은 경우
//                     start = sequence.indexOf(pair[0]);
//                     end = sequence.indexOf(pair[pair.length - 1])
//                     answer = [start, end];
//                     return answer;
//                 } else { // 합이 k랑 다른 경우
//                     cnt = 0; //초기화
//                     pair = [sequence[j - 1]];
//                 }
//             }
//             pair.push(sequence[j]);
//             cnt++;
//         }

//         if (cnt === i) { //마지막 요소에 대해 처리가 안 되는 경우 수행
//             let sum = pair.reduce((prev, cur) => prev + cur, 0);
//             if (sum === k) { // 합이 k랑 같은 경우
//                 start = sequence.indexOf(pair[0]);
//                 end = sequence.indexOf(pair[pair.length - 1])
//                 answer = [start, end];
//                 return answer;
//             }

//         }
//         return answer;
//     }
// } 초기 풀이 -> 시간복잡도가 꽤 오래 걸려 입력값의 크기가 커지면 런타임이 오래 걸리는 경우 발생

function solution(sequence, k) {
    let start = 0;
    let end = 0;
    let sum = sequence[0];
    let minLength = Infinity;
    let answer = [-1, -1];

    while (end < sequence.length) {
        if (sum === k) {
            if (end - start < minLength) {
                minLength = end - start;
                answer = [start, end];
            }
            sum -= sequence[start];
            start += 1;
        } else if (sum < k) {
            end += 1;
            if (end < sequence.length) {
                sum += sequence[end];
            }
        } else {
            sum -= sequence[start];
            start += 1;
        }
    }

    return answer;
} //앞에서부터 최소값이라 생각하고 슬라이딩 윈도우 기법을 활용해 start,end 인덱스를 통해 합을 구하는 범위를 조정하며, 최소길이의 k 합을 만족하는 수열을 찾음

