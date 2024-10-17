// 문제 설명
// 점심시간에 도둑이 들어, 일부 학생이 체육복을 도난당했습니다. 다행히 여벌 체육복이 있는 학생이 이들에게 체육복을 빌려주려 합니다. 학생들의 번호는 체격 순으로 매겨져 있어, 바로 앞번호의 학생이나 바로 뒷번호의 학생에게만 체육복을 빌려줄 수 있습니다. 예를 들어, 4번 학생은 3번 학생이나 5번 학생에게만 체육복을 빌려줄 수 있습니다. 체육복이 없으면 수업을 들을 수 없기 때문에 체육복을 적절히 빌려 최대한 많은 학생이 체육수업을 들어야 합니다.

// 전체 학생의 수 n, 체육복을 도난당한 학생들의 번호가 담긴 배열 lost, 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve가 매개변수로 주어질 때, 체육수업을 들을 수 있는 학생의 최댓값을 return 하도록 solution 함수를 작성해주세요.

// 제한사항
// 전체 학생의 수는 2명 이상 30명 이하입니다.
// 체육복을 도난당한 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.
// 여벌의 체육복을 가져온 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.
// 여벌 체육복이 있는 학생만 다른 학생에게 체육복을 빌려줄 수 있습니다.
// 여벌 체육복을 가져온 학생이 체육복을 도난당했을 수 있습니다. 이때 이 학생은 체육복을 하나만 도난당했다고 가정하며, 남은 체육복이 하나이기에 다른 학생에게는 체육복을 빌려줄 수 없습니다.


function solution(n, lost, reserve) {
    let answer = n - lost.length;  // 일단 도난당한 학생 수만큼 제외한 전체 학생 수

    // reserve 배열을 복사
    let queue = reserve.slice();

    // 여벌 체육복을 가진 학생이 도난당한 경우를 처리하고, lost와 reserve에서 제거
    lost = lost.filter((val) => {
        if (queue.includes(val)) {
            queue = queue.filter((q) => q !== val);  // reserve에서 해당 학생 제거
            answer++;  // 체육복을 입을 수 있으므로 정답에 포함
            return false;  // 해당 학생은 lost 배열에서 제외
        }
        return true;  // 여벌이 없는 도난당한 학생만 남김
    });

    // lost와 queue를 정렬하여 빌릴 수 있는 학생을 앞뒤로 쉽게 탐색 가능하게 설정
    lost.sort((a, b) => a - b);
    queue.sort((a, b) => a - b);

    // 체육복을 빌려줄 수 있는 학생을 찾아 처리
    lost.forEach((val) => {
        let index = queue.findIndex((v) => Math.abs(val - v) === 1);  // 앞뒤 학생 확인
        if (index !== -1) {
            answer++;  // 체육복을 빌릴 수 있으면 정답에 포함
            queue.splice(index, 1);  // 빌려준 학생은 queue에서 제거
        }
    });

    return answer;
}

function solution(n, lost, reserve) {
    let answer = n - lost.length;

    let queue = reserve.slice();

    lost = lost.filter((val) => {
        if (queue.includes(val)) {
            queue = queue.filter((v) => v !== val);
            answer++;
            return false;
        } else {
            return true;
        }
    }) //자기 자신이 도난 당하고 여벌이 있는 경우 처리

    lost.sort((a, b) => a - b);
    queue.sort((a, b) => a - b); //비교를 쉽게 하기 위해 정렬

    lost.forEach((val) => {
        const Idx = queue.findIndex((v) => Math.abs(val - v) === 1);
        if (Idx !== -1) {
            answer++;
            queue.splice(Idx, 1);
        }
    })

    return answer;
}