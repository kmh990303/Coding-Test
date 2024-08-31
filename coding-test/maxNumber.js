// 문제 설명
// 0 또는 양의 정수가 주어졌을 때, 정수를 이어 붙여 만들 수 있는 가장 큰 수를 알아내 주세요.

// 예를 들어, 주어진 정수가 [6, 10, 2]라면 [6102, 6210, 1062, 1026, 2610, 2106]를 만들 수 있고, 이중 가장 큰 수는 6210입니다.

// 0 또는 양의 정수가 담긴 배열 numbers가 매개변수로 주어질 때, 순서를 재배치하여 만들 수 있는 가장 큰 수를 문자열로 바꾸어 return 하도록 solution 함수를 작성해주세요.

// 제한 사항
// numbers의 길이는 1 이상 100,000 이하입니다.
// numbers의 원소는 0 이상 1,000 이하입니다.
// 정답이 너무 클 수 있으니 문자열로 바꾸어 return 합니다.

function solution(numbers) {
    var answer = '';

    let stringArr = numbers.map((val) => String(val));

    stringArr.sort((a, b) => (b + a) - (a + b));

    if (stringArr[0] === '0') {
        return '0';
    }



    answer = stringArr.join('');

    return answer;
}

//sort의 비교식으로 음수가 나오면 a가 b보다 앞에 오고, 양수가 나오면 b가 a보다 앞에 나온다.
// 3과 30의 비교에서 헤맸는데, 결국 앞뒤로 연결을 달리하고 비교하는 방식을 통해 문제를 해결함