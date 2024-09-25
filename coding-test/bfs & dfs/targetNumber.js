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