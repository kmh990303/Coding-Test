// 문제 설명
// 코니는 매일 다른 옷을 조합하여 입는것을 좋아합니다.

// 예를 들어 코니가 가진 옷이 아래와 같고, 오늘 코니가 동그란 안경, 긴 코트, 파란색 티셔츠를 입었다면 다음날은 청바지를 추가로 입거나 동그란 안경 대신 검정 선글라스를 착용하거나 해야합니다.

// 종류	이름
// 얼굴	동그란 안경, 검정 선글라스
// 상의	파란색 티셔츠
// 하의	청바지
// 겉옷	긴 코트
// 코니는 각 종류별로 최대 1가지 의상만 착용할 수 있습니다. 예를 들어 위 예시의 경우 동그란 안경과 검정 선글라스를 동시에 착용할 수는 없습니다.
// 착용한 의상의 일부가 겹치더라도, 다른 의상이 겹치지 않거나, 혹은 의상을 추가로 더 착용한 경우에는 서로 다른 방법으로 옷을 착용한 것으로 계산합니다.
// 코니는 하루에 최소 한 개의 의상은 입습니다.
// 코니가 가진 의상들이 담긴 2차원 배열 clothes가 주어질 때 서로 다른 옷의 조합의 수를 return 하도록 solution 함수를 작성해주세요.

// 제한사항
// clothes의 각 행은 [의상의 이름, 의상의 종류]로 이루어져 있습니다.
// 코니가 가진 의상의 수는 1개 이상 30개 이하입니다.
// 같은 이름을 가진 의상은 존재하지 않습니다.
// clothes의 모든 원소는 문자열로 이루어져 있습니다.
// 모든 문자열의 길이는 1 이상 20 이하인 자연수이고 알파벳 소문자 또는 '_' 로만 이루어져 있습니다.

function solution(clothes) {
    var answer = 0;
    let check = {}
    let cnt = 0;

    for (let i = 0; i < clothes.length; i++) {
        if (!check[clothes[i][1]]) {
            check[clothes[i][1]] = [clothes[i][0]];
        } else {
            check[clothes[i][1]].push(clothes[i][0]);
        }
    }

    for (let key in check) {
        cnt++;
    }

    if (cnt > 1) {
        answer = 1;
        for (let key in check) {
            answer *= (check[key].length + 1)
        }
        answer -= 1;
    } else {
        for (let key in check) {
            answer = check[key].length;
        }
    }

    return answer;
} // 확률과 통계의 경우의 수 문제 같은 느낌
// 키 값이 하나라면 최소 하나의 의상을 입어야 하므로 키 값에 매칭되는 값들의 개수가 answer
// 키 값이 여러 개라면 각 장신구 종류마다 경우의수 + 1 한 값을 모두 곱한 후 하나라도 쓰지 않은 경우 1가지를 전체 경우의 수에서 빼면 됨

function solution(clothes) {
    let answer = 1;
    const obj = {};

    for (let arr of clothes) {
        obj[arr[1]] = (obj[arr[1]] || 0) + 1;
    }

    for (let key in obj) {
        answer *= (obj[key] + 1)
    }

    return answer - 1;
}


// 복습

function solution(clothes) {
    const hash = {};
    let answer = 1;

    clothes.forEach(([name, category]) => {
        if (!hash[category]) hash[category] = [];
        hash[category].push(name);
    })

    console.log(hash);

    for (let key in hash) {
        answer *= hash[key].length + 1;
    }

    return answer - 1;
}