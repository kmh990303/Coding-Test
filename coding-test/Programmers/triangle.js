// 문제 설명
// 선분 세 개로 삼각형을 만들기 위해서는 다음과 같은 조건을 만족해야 합니다.

// 가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다.
// 삼각형의 두 변의 길이가 담긴 배열 sides이 매개변수로 주어집니다. 나머지 한 변이 될 수 있는 정수의 개수를 return하도록 solution 함수를 완성해주세요.

// 제한사항
// sides의 원소는 자연수입니다.
// sides의 길이는 2입니다.
// 1 ≤ sides의 원소 ≤ 1,000

function solution(sides) {
    var answer = 0;
    
    let start;
    let end;
    let max_sides;
    let min_sides;
    
    //sides에 최대값이 있는 경우
    max_sides = Math.max(...sides);
    min_sides = Math.min(...sides);
    start = max_sides - min_sides;
    
    // 주어지지 않은 변이 최대가 되는 경우
    end = max_sides + min_sides;
    
    for (let i = start + 1; i < end; i++) {
        answer += 1;
    }
    
    return answer;
}