function solution(bridge_length, weight, truck_weights) {
    const passed = [];
    const len = truck_weights.length;
    let index = 0;
    let queue = [];
    let result = 0;

    while (passed.length !== len) {//트럭이 다 지날 때까지 반복 수행
        let l = 0; //길이 
        let w = 0; //무게

        if (queue.length === 0) { //다리를 건너는 트럭 큐에 삽입
            while (l <= bridge_length && w <= weight) {
                l += 1;
                w += truck_weights[index];
                queue.push(truck_weights[index++])

            }//다리의 조건에 맞게끔 큐에 삽입  
            //조건에 초과된 경우
            w -= queue.pop();
            index--;
            l--; //큐에 들어간 트럭 개수
        }


        while (queue.length > 0) { // 다리 지나는 트럭에 대한 로직
            const truck = queue.shift();
            passed.push(truck);
        }
        result += l + 1;
    }

    return result;
}

// 다리에 길이 조건과 무게 조건 걸어야 함
// 완전히 오르지 않으면 트럭 무게 무시
// 모든 트럭이 다 지나는 최단 시간 구하기
// 다리 길이 1당 1초 걸림