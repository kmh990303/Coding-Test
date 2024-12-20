// 문제 설명
// 수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.

// 마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

// 제한사항
// 마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
// completion의 길이는 participant의 길이보다 1 작습니다.
// 참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
// 참가자 중에는 동명이인이 있을 수 있습니다.

function solution(participant, completion) {
    var answer = '';

    let check = {};

    participant.forEach((val) => check[val] ? check[val] += 1 : check[val] = 1);

    completion.forEach((val) => {
        if (check[val]) check[val] -= 1
    });

    for (let key in check) {
        if (check[key] !== 0) {
            answer = key;
            break;
        }
    }

    return answer;
} // 나의 풀이 - 중복되는 이름을 고려해야 했기에 횟수를 객체의 갑에 넣어 놓고, 해당 키가 존재하면 뺴는 방식으로 해서
// 값이 0보다 크면 존재하지 않는다는 의미로 코드를 작성함

function solution(participant, completion) {
    participant.sort();
    completion.sort();

    while (participant.length) {
        let popped = participant.pop();
        if (popped !== completion.pop()) return popped;
    }
} // 다른 풀이


function solution(participant, completion) { // 복습
    let hash = {};

    participant.forEach((person) => {
        if (!hash[person]) {
            hash[person] = 1;
        } else {
            hash[person] += 1;
        }
    })

    completion.forEach((person) => {
        hash[person] -= 1;
    })

    for (let key in hash) {
        if (hash[key] > 0) {
            return key;
        }
    }
}