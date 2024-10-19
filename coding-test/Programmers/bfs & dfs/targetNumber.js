function solution(numbers, target) {
    let leng = numbers.length;

    let totalCnt = 0; //전체 결과 개수

    function dfs(sum, index) {
        if (index === leng) {
            if (sum === target) {
                totalCnt++;
            }
            return;
        }

        dfs(sum - numbers[index], index + 1);
        dfs(sum + numbers[index], index + 1);
    }

    dfs(0, 0);

    return totalCnt;
}


// 복습
function solution(numbers, target) {
    let answer = 0;
    const n = numbers.length;

    const visited = Array(n).fill(false);
    let idx = 0;
    let sum = 0;

    function dfs(idx, sum, visited) {
        if (!visited.includes(false) || idx >= n) {
            if (sum === target) answer++;
            visited[idx - 1] = false;
            return;
        } //false를 포함하지 않으면 종료
        visited[idx] = true;
        dfs(idx + 1, sum + numbers[idx], visited);
        dfs(idx + 1, sum - numbers[idx], visited);
    }
    dfs(0, 0, visited);

    return answer;
}