function solution(begin, target, words) {
    const n = words.length;

    let visited = Array.from({ length: n }, () => false);


    let queue = [];

    function findSameNum(word1, word2) { // 단어의 한 글자만 다른지 체크하는 함수
        let n = word1.length;
        let cnt = 0;
        for (let i = 0; i < n; i++) {
            if (word1[i] !== word2[i]) cnt++;
        }

        if (cnt === 1) {
            return true;
        } else {
            return false;
        }
    }

    if (!words.includes(target)) return 0;

    queue.push([begin, 0]); // 시작단어 및 현재 단계 정보를 푸쉬

    while (queue.length) {
        const [word, step] = queue.shift();

        if (word === target) {
            return step;
        }

        for (let elem of words) {
            const idx = words.findIndex((v) => v === elem);
            if (findSameNum(word, elem) && !visited[idx]) {
                visited[idx] = true;
                queue.push([elem, step + 1]);
            }

        }



    }
    return 0;
}