function solution(prices) {
    const answer = [];

    for (let i = 0; i < prices.length; i++) {
        const queue = [];
        const standard = prices[i];
        for (let j = i + 1; j < prices.length; j++) {
            if (standard <= prices[j]) {
                queue.push(prices[j]);
            } else {
                queue.push(0); // 가격이 떨어지면 머릿수 채우기
                break;
            };
        }
        answer.push(queue.length);
    }

    return answer;
}

// queue 굳이 안 쓰고, cnt 정도로 구현해도 괜찮았을 듯