// Math.max 메서드 자체가 O(n) 이 소요됨
// 원형 큐는 인덱스로 구현하기보단 shift()와 push()를 이용하는게 간편함
// some 메서드는 배열을 순회하며, 특정 조건을 만족하는 요소를 찾았을 때, true를 반환 // 없으면 false 반환
// 기존에 큐를 이용하면 초기값 혹은 조건을 만족하는 애들을 넣어놓고, 빼는 형식이었으나, 이와는 다르게 애초에 모든 요소를 큐에 다 집어 넣고 시작함
// 하나씩 빼내어 기준 값으로 삼고, 그것보다 높은 우선순위가 있으면 다시 큐에 집어넣는 방식

function solution(priorities, location) {
    let answer = 0;
    let queue = priorities.map((value, index) => ({ value, index }));

    while (queue.length > 0) {
        const current = queue.shift();
        if (queue.some((item) => item.value > current.value)) {
            queue.push(current);
        } else {
            answer++;
            if (current.index === location) return answer;
        }
    }

}
