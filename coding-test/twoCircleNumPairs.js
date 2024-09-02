// 문제 설명
// x축과 y축으로 이루어진 2차원 직교 좌표계에 중심이 원점인 서로 다른 크기의 원이 두 개 주어집니다. 반지름을 나타내는 두 정수 r1, r2가 매개변수로 주어질 때, 두 원 사이의 공간에 x좌표와 y좌표가 모두 정수인 점의 개수를 return하도록 solution 함수를 완성해주세요.
// ※ 각 원 위의 점도 포함하여 셉니다.

// function solution(r1, r2) {
//     var answer = 0;
    
//     for (let i = -r2; i <= r2; i++) { //x좌표
//         for (let j = -r2; j <= r2; j++) { //y좌표
//             let leng = Math.sqrt((i ** 2) + (j ** 2));
//             if (leng >= r1 && leng <= r2) {
//                 answer += 1;
//             }
//         }
//     }
    
//     return answer;
// } // 초기 작성 -> r2가 커질 경우 시간이 초과되는 케이스 존재

//다른 풀이
function solution(r1, r2) {
    var answer = 0;
    
    //1사분면만을 가지고 생각
    for (let i = 1; i <= r2; i++) {
        let maxY = Math.floor(Math.sqrt((r2 ** 2) - (i ** 2))) //최대 y 값 구하기
        let minY = i >= r1 ? 0 : Math.ceil(Math.sqrt((r1 ** 2) - (i ** 2)))
        
    
        answer += maxY - minY + 1;
    }
    
    // 축에 위치하는 점들 찾기
    
  
    
    return answer * 4;
} //0부터 반복문을 시작하면 중복 처리가 힘들어지므로 x가 1일 때부터 계산해서 곱하기 4하면 중복 발생하지 않음