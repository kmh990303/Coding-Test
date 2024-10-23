function solution(progresses, speeds) {
    const answer = [];
    let cnt = 1;

    const days = progresses.map((prog, i) => Math.ceil((100 - prog) / speeds[i]));

    let standardDay = days[0];

    for (let i = 1; i < days.length; i++) {
        if (days[i] > standardDay) {
            answer.push(cnt);
            cnt = 1;
            standardDay = days[i];
        } else {
            cnt++;
        }
    }

    if (cnt !== 0) {
        answer.push(cnt);
    }

    return answer;
} // 보다 간단한 방법은 없을까??

function solution(progresses, speeds) {
    const answer = [];
    let cnt = 1;

    const days = progresses.map((prog, i) => Math.ceil((100 - prog) / speeds[i]));

    let standardDay = days[0];

    for (let i = 1; i < days.length; i++) {
        if (days[i] > standardDay) {
            answer.push(cnt);
            cnt = 1;
            standardDay = days[i];
        } else {
            cnt++;
        }
    }

    if (cnt !== 0) {
        answer.push(cnt);
    }

    return answer;
}  // 날 수를 기준으로 비교하면 더 쉽게 비교 가능함 // Math.ceil은 올림