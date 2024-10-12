// 문제 설명
// 전화번호부에 적힌 전화번호 중, 한 번호가 다른 번호의 접두어인 경우가 있는지 확인하려 합니다.
// 전화번호가 다음과 같을 경우, 구조대 전화번호는 영석이의 전화번호의 접두사입니다.

// 구조대 : 119
// 박준영 : 97 674 223
// 지영석 : 11 9552 4421
// 전화번호부에 적힌 전화번호를 담은 배열 phone_book 이 solution 함수의 매개변수로 주어질 때, 어떤 번호가 다른 번호의 접두어인 경우가 있으면 false를 그렇지 않으면 true를 return 하도록 solution 함수를 작성해주세요.

function solution(phone_book) {
    var answer = true;

    phone_book.sort();  //비슷한 애들끼리 비교해야 하므로 사전 순 정렬

    for (let i = 0; i < phone_book.length - 1; i++) {
        if (phone_book[i + 1].startsWith(phone_book[i])) {
            return false
        }
    }

    return answer;
} // startsWith 메서드는 접두사를 찾는데 최적
// 접두사는 단어의 앞부분을 이루는 특정 단어 혹은 문자열의 처음 몇 글자를 뜻하는 부분
//includes는 앞부분 뿐만 아니라 뒤에서도 찾을 수 있기에 맞지 않음


// 다른 풀이
function solution(phone_book) {
    let phoneMap = new Map(); //해시맵과 유사한 맵을 생성하는 함수

    for (let phone of phone_book) {
        phoneMap.set(phone, true); // 번호를 키로, 불린값을 값으로 설정함
    }

    // 각 전화번호의 접두사가 해시맵에 있는지 확인
    for (let phone of phone_book) {
        for (let i = 1; i < phone.length; i++) {
            let prefix = phone.slice(0, i);
            if (phoneMap.has(prefix)) {
                return false;
            }
        }
    }

    return true;
}

// Map 객체
// set(키, 값) 저장
// has(키) 특정 키 보유 여부 반환
// slice(start, end) => start부터 end-1까지 인덱스 요소들을 배열로 반환