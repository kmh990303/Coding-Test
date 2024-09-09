// 문제 설명
// 과제를 받은 루는 다음과 같은 순서대로 과제를 하려고 계획을 세웠습니다.

// 과제는 시작하기로 한 시각이 되면 시작합니다.
// 새로운 과제를 시작할 시각이 되었을 때, 기존에 진행 중이던 과제가 있다면 진행 중이던 과제를 멈추고 새로운 과제를 시작합니다.
// 진행중이던 과제를 끝냈을 때, 잠시 멈춘 과제가 있다면, 멈춰둔 과제를 이어서 진행합니다.
// 만약, 과제를 끝낸 시각에 새로 시작해야 되는 과제와 잠시 멈춰둔 과제가 모두 있다면, 새로 시작해야 하는 과제부터 진행합니다.
// 멈춰둔 과제가 여러 개일 경우, 가장 최근에 멈춘 과제부터 시작합니다.
// 과제 계획을 담은 이차원 문자열 배열 plans가 매개변수로 주어질 때, 과제를 끝낸 순서대로 이름을 배열에 담아 return 하는 solution 함수를 완성해주세요.

// 제한사항
// 3 ≤ plans의 길이 ≤ 1,000
// plans의 원소는 [name, start, playtime]의 구조로 이루어져 있습니다.
// name : 과제의 이름을 의미합니다.
// 2 ≤ name의 길이 ≤ 10
// name은 알파벳 소문자로만 이루어져 있습니다.
// name이 중복되는 원소는 없습니다.
// start : 과제의 시작 시각을 나타냅니다.
// "hh:mm"의 형태로 "00:00" ~ "23:59" 사이의 시간값만 들어가 있습니다.
// 모든 과제의 시작 시각은 달라서 겹칠 일이 없습니다.
// 과제는 "00:00" ... "23:59" 순으로 시작하면 됩니다. 즉, 시와 분의 값이 작을수록 더 빨리 시작한 과제입니다.
// playtime : 과제를 마치는데 걸리는 시간을 의미하며, 단위는 분입니다.
// 1 ≤ playtime ≤ 100
// playtime은 0으로 시작하지 않습니다.
// 배열은 시간순으로 정렬되어 있지 않을 수 있습니다.
// 진행중이던 과제가 끝나는 시각과 새로운 과제를 시작해야하는 시각이 같은 경우 진행중이던 과제는 끝난 것으로 판단합니다.

function solution(plans) {
    var answer = [];
    let hash = {};
    let stack = [];

    function convertTime(str) {
        let [h, m] = str.split(':').map((val) => Number(val));
        return h * 60 + m;
    }

    plans.forEach((elem) => {
        elem[1] = convertTime(elem[1])
        elem[2] = Number(elem[2])
        hash[elem[1]] = [elem[2], elem[0]]
    }); // 시간 비교를 위해 각각의 시간을 정수형으로 바꿔놓거나 시간의 경우 분으로 환산하여 비교 가능하게 만듦

    plans.sort((a, b) => a[1] - b[1]); // 시작 시간 빠른 것부터 앞에 오도록 정렬

    let startTime = plans[0][1]; // 시작 시간은 가장 빠른 시간 설정

    let finishedTask = 0;

    while (finishedTask !== plans.length) { //과제가 다 끝날 때까지 돌림
        if (stack.length) {
            stack[stack.length - 1][0]--; //남은시간을 1분 줄임
            if (stack[stack.length - 1][0] === 0) {
                answer.push(stack[stack.length - 1][1]);
                stack.pop();
                finishedTask++;
            } //남은 시간 0의 경우 
        }
        if (hash[startTime]) stack.push(hash[startTime]); //과제별로 시작 시간이 되면 스택에 푸쉬
        startTime++;
    }


    return answer;
}

// 객체의 키 - 값 쌍으로 값 저장
// forEach는 새로운 배열 반환x
// 최근에 멈춘 과제부터 먼저 끝내야 한다.
// 시간 비교는 결국 정수형으로 환산하여 단위를 맞춰야 함