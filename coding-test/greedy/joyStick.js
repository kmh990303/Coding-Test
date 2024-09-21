// 문제 설명
// 조이스틱으로 알파벳 이름을 완성하세요. 맨 처음엔 A로만 이루어져 있습니다.
// ex) 완성해야 하는 이름이 세 글자면 AAA, 네 글자면 AAAA

// 조이스틱을 각 방향으로 움직이면 아래와 같습니다.

// ▲ - 다음 알파벳
// ▼ - 이전 알파벳 (A에서 아래쪽으로 이동하면 Z로)
// ◀ - 커서를 왼쪽으로 이동 (첫 번째 위치에서 왼쪽으로 이동하면 마지막 문자에 커서)
// ▶ - 커서를 오른쪽으로 이동 (마지막 위치에서 오른쪽으로 이동하면 첫 번째 문자에 커서)
// 예를 들어 아래의 방법으로 "JAZ"를 만들 수 있습니다.

// - 첫 번째 위치에서 조이스틱을 위로 9번 조작하여 J를 완성합니다.
// - 조이스틱을 왼쪽으로 1번 조작하여 커서를 마지막 문자 위치로 이동시킵니다.
// - 마지막 위치에서 조이스틱을 아래로 1번 조작하여 Z를 완성합니다.
// 따라서 11번 이동시켜 "JAZ"를 만들 수 있고, 이때가 최소 이동입니다.
// 만들고자 하는 이름 name이 매개변수로 주어질 때, 이름에 대해 조이스틱 조작 횟수의 최솟값을 return 하도록 solution 함수를 만드세요.

function solution(name) {
    let answer = 0;
    let length = name.length;
    
    // 각 문자의 상하 조작 횟수 계산
    function nearCount(ch) {
        const aCharCode = 'A'.charCodeAt(0);
        const zCharCode = 'Z'.charCodeAt(0);
        const charCode = ch.charCodeAt(0);
        
        return Math.min(charCode - aCharCode, zCharCode - charCode + 1);
    }
    
    // 알파벳을 맞추는 조작 횟수 더하기
    for (let i = 0; i < length; i++) {
        answer += nearCount(name[i]);
    }
    
    // 커서 이동 최적화를 위한 변수
    let minMove = length - 1; // 기본적으로 오른쪽으로만 쭉 가는 경우
    
    // 커서 이동 최적화 계산
    for (let i = 0; i < length; i++) {
        let next = i + 1;
        
        // 연속된 'A' 스킵
        while (next < length && name[next] === 'A') {
            next++;
        }
        
        // 오른쪽으로만 이동하는 경우와 돌아가는 경우 비교
        let moveRightOnly = i; // 현재 커서까지 오른쪽으로 이동한 거리
        let moveBackAndForth = length - next; // 나머지 문자열을 돌아서 처리할 거리
        let totalMove = moveRightOnly + moveBackAndForth + Math.min(i, moveBackAndForth);
        
        minMove = Math.min(minMove, totalMove);
    }
    
    // 총 조작 횟수는 알파벳 변경 횟수 + 커서 이동 횟수
    answer += minMove;
    
    return answer;
}
