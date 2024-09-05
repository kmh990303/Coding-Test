// 문제 설명
// 운영체제의 역할 중 하나는 컴퓨터 시스템의 자원을 효율적으로 관리하는 것입니다. 이 문제에서는 운영체제가 다음 규칙에 따라 프로세스를 관리할 경우 특정 프로세스가 몇 번째로 실행되는지 알아내면 됩니다.

// 1. 실행 대기 큐(Queue)에서 대기중인 프로세스 하나를 꺼냅니다.
// 2. 큐에 대기중인 프로세스 중 우선순위가 더 높은 프로세스가 있다면 방금 꺼낸 프로세스를 다시 큐에 넣습니다.
// 3. 만약 그런 프로세스가 없다면 방금 꺼낸 프로세스를 실행합니다.
//   3.1 한 번 실행한 프로세스는 다시 큐에 넣지 않고 그대로 종료됩니다.
// 예를 들어 프로세스 4개 [A, B, C, D]가 순서대로 실행 대기 큐에 들어있고, 우선순위가 [2, 1, 3, 2]라면 [C, D, A, B] 순으로 실행하게 됩니다.

// 현재 실행 대기 큐(Queue)에 있는 프로세스의 중요도가 순서대로 담긴 배열 priorities와, 몇 번째로 실행되는지 알고싶은 프로세스의 위치를 알려주는 location이 매개변수로 주어질 때, 해당 프로세스가 몇 번째로 실행되는지 return 하도록 solution 함수를 작성해주세요.




// function solution(priorities, location) {
//     var answer = 0;
//     let idx = 0;
//     let turn = 0;
//     let turns = [];

//     let sortedP = priorities.sort((a, b) => a - b);

//     for (let i = 0; i < priorities.length; i++) {
//         turns.push(0);
//     }

//     let elem = sortedP.pop(); //가장 큰 우선 순위
//     let elemIdx = priorities.indexOf(elem); // 해당 요소의 인덱스 알아내기
//     idx = elemIdx;
//     turn += 1;
//     turns[elemIdx] = turn;


//     while (sortedP.length > 0) {
//         let elem = sortedP.pop(); //가장 큰 우선순위 추출
//         idx = (idx + 1) % priorities.length;
//         turn += 1;
//         while (priorities[idx] !== elem) {
//             idx = (idx + 1) % priorities.length;
//         }
//         turn[idx] = turn;
//     }



//     return answer;
// }

function solution(priorities, location) {
    let answer = 0;
    let queue = priorities.map((value, index) => ({ value, index }));

    while (queue.length > 0) {
        let current = queue.shift(); // 큐에서 첫 번째 프로세스 꺼냄
        if (queue.some(item => item.value > current.value)) {
            queue.push(current); // 우선순위가 더 높은 프로세스가 있으면 큐의 맨 뒤로 보냄
        } else {
            answer++; // 프로세스를 실행함
            if (current.index === location) {
                return answer; // 목표 프로세스가 실행되면 반환
            }
        }
    }

    return answer;
}

// map 메서드로 value, index를 담은 객체 배열 생성 테크닉
// 배열.some 메서드로 배열의 모든 요소에 대해 조건 참 여부 확인 가능
// 큐는 선입선출 개념 적용, 빼내어 다시 맨 뒤에 넣는 구조
