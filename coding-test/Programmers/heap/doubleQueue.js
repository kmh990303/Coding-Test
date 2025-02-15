// 문제 설명
// 이중 우선순위 큐는 다음 연산을 할 수 있는 자료구조를 말합니다.

// 명령어	수신 탑(높이)
// I 숫자	큐에 주어진 숫자를 삽입합니다.
// D 1	큐에서 최댓값을 삭제합니다.
// D -1	큐에서 최솟값을 삭제합니다.
// 이중 우선순위 큐가 할 연산 operations가 매개변수로 주어질 때, 모든 연산을 처리한 후 큐가 비어있으면 [0,0] 비어있지 않으면 [최댓값, 최솟값]을 return 하도록 solution 함수를 구현해주세요.

// 제한사항
// operations는 길이가 1 이상 1,000,000 이하인 문자열 배열입니다.
// operations의 원소는 큐가 수행할 연산을 나타냅니다.
// 원소는 “명령어 데이터” 형식으로 주어집니다.- 최댓값/최솟값을 삭제하는 연산에서 최댓값/최솟값이 둘 이상인 경우, 하나만 삭제합니다.
// 빈 큐에 데이터를 삭제하라는 연산이 주어질 경우, 해당 연산은 무시합니다.

// function solution(operations) {
//     let queue = [];

//     for (let i = 0; i < operations.length; i++) {
//         const[mode, num] = operations[i].split(' ');
//         let n = Number(num); //실제 숫자로 바꿔서 저장

//         if (queue.length > 0) {
//             if (mode === 'D') {
//                 if (n === 1) {
//                     let maxN = Math.max(...queue);
//                     let maxIdx = queue.findIndex((val) => val === maxN);
//                     queue.splice(maxIdx, 1);
//                 } else {
//                     let minN = Math.min(...queue);
//                     let minIdx = queue.findIndex((val) => val === minN);
//                     queue.splice(minIdx, 1);
//                 }
//             }
//         }
//         if (mode === 'I') {
//             queue.push(n);
//         }
//     }

//     if (queue.length === 0) {
//         return [0, 0];
//     } else {
//         return [Math.max(...queue), Math.min(...queue)];
//     }
// }


// 복습  => 힙은 push를 하던 pop을 하던 주어진 규칙에 따라 다시 정렬시켜야 하는 구조
function solution(operations) {
    const queue = [];

    function addToHeap(value) {
        queue.push(value);
        queue.sort((a, b) => b - a); // 내림 차순 정렬
    }

    operations.forEach((operation) => {
        const [command, value] = operation.split(' ');

        if (command === 'I') {
            addToHeap(+value);
        } else {
            if (queue.length > 0) {
                if (value === '1') {
                    queue.shift();
                } else {
                    queue.pop();
                }
            }
        }
    })


    if (queue.length > 0) {
        return [queue[0], queue[queue.length - 1]];
    } else {
        return [0, 0];
    }
}

// 문자열을 split 하면 모두 문자열 자료형임