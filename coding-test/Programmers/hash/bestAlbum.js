// 문제 설명
// 스트리밍 사이트에서 장르 별로 가장 많이 재생된 노래를 두 개씩 모아 베스트 앨범을 출시하려 합니다. 노래는 고유 번호로 구분하며, 노래를 수록하는 기준은 다음과 같습니다.

// 속한 노래가 많이 재생된 장르를 먼저 수록합니다.
// 장르 내에서 많이 재생된 노래를 먼저 수록합니다.
// 장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록합니다.
// 노래의 장르를 나타내는 문자열 배열 genres와 노래별 재생 횟수를 나타내는 정수 배열 plays가 주어질 때, 베스트 앨범에 들어갈 노래의 고유 번호를 순서대로 return 하도록 solution 함수를 완성하세요.

// 제한사항
// genres[i]는 고유번호가 i인 노래의 장르입니다.
// plays[i]는 고유번호가 i인 노래가 재생된 횟수입니다.
// genres와 plays의 길이는 같으며, 이는 1 이상 10,000 이하입니다.
// 장르 종류는 100개 미만입니다.
// 장르에 속한 곡이 하나라면, 하나의 곡만 선택합니다.
// 모든 장르는 재생된 횟수가 다릅니다.


function solution(genres, plays) {
    var answer = [];

    let check = {};

    for (let i = 0; i < genres.length; i++) {
        if (check[genres[i]]) {
            check[genres[i]].push([genres[i], plays[i], i]);
        } else {
            check[genres[i]] = [[genres[i], plays[i], i]];
        }
    }

    for (let key in check) {
        check[key].sort((a, b) => b[1] - a[1]);
    }

    let sortedGenres = Object.keys(check).sort((a, b) => {
        const totalPlaysA = check[a].reduce((prev, cur) => prev + cur[1], 0);
        const totalPlaysB = check[b].reduce((prev, cur) => prev + cur[1], 0);
        return totalPlaysB - totalPlaysA;
    }) // 키 값들의 배열을 추출하여 각 키의 플레이 횟수 기준으로 내림차순 정렬

    sortedGenres.forEach((genre) => {
        let songs = check[genre].slice(0, 2);
        songs.forEach(song => answer.push(song[2]));
    })

    return answer;
}


function solution (genres, plays) { // 복습
    const hash_item = {}; // 장르별 음악 번호를 저장하는 용도
    const hash_sum = {}; //장르별 총 횟수를 저장하는 용도
    let arr = [];
    let answer = [];
    
    for (let i = 0; i < genres.length; i++) {
        const genre = genres[i];
        const play = plays[i];
        
        if (!hash_item[genre]) hash_item[genre] = [];
        if (!hash_sum[genre]) hash_sum[genre] = 0;
        hash_item[genre].push([play, i]); //재생 횟수와 고유 번호를 저장
        hash_sum[genre] += play;
    }
    
    for (let key in hash_item) {
        hash_item[key].sort((a, b) => b[0] - a[0]); //각 그룹 별로 재생횟수가 많은게 앞으로 옴
    }
    
    for (let key in hash_sum) {
        arr.push([key, hash_sum[key]]); //키 값과 대응되는 총 재생 횟수를 배열에 넣음
    }
    
    arr.sort((a, b) => b[1] - a[1]); //총 재생횟수를 토대로 내림차순 정렬
    
    for (let [key, sum] of arr) {
        if (hash_item[key].length > 1) {
            const [p1, p2] = hash_item[key].slice(0, 2);
            answer.push(p1[1], p2[1]);
        } else {
            answer.push(hash_item[key][0][1]);
        }
    }
    
    return answer;
}

// Object.keys(객체명) 하면 객체의 키 값을 모은 배열 반환 / reduce로 총합 구하는 것이 훨씬 편리