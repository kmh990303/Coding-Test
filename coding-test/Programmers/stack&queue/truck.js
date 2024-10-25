// 문제 설명
// 트럭 여러 대가 강을 가로지르는 일차선 다리를 정해진 순으로 건너려 합니다. 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 알아내야 합니다. 다리에는 트럭이 최대 bridge_length대 올라갈 수 있으며, 다리는 weight 이하까지의 무게를 견딜 수 있습니다. 단, 다리에 완전히 오르지 않은 트럭의 무게는 무시합니다.

// 예를 들어, 트럭 2대가 올라갈 수 있고 무게를 10kg까지 견디는 다리가 있습니다. 무게가 [7, 4, 5, 6]kg인 트럭이 순서대로 최단 시간 안에 다리를 건너려면 다음과 같이 건너야 합니다.

// 경과 시간	다리를 지난 트럭	다리를 건너는 트럭	대기 트럭
// 0	[]	[]	[7,4,5,6]
// 1~2	[]	[7]	[4,5,6]
// 3	[7]	[4]	[5,6]
// 4	[7]	[4,5]	[6]
// 5	[7,4]	[5]	[6]
// 6~7	[7,4,5]	[6]	[]
// 8	[7,4,5,6]	[]	[]
// 따라서, 모든 트럭이 다리를 지나려면 최소 8초가 걸립니다.

// solution 함수의 매개변수로 다리에 올라갈 수 있는 트럭 수 bridge_length, 다리가 견딜 수 있는 무게 weight, 트럭 별 무게 truck_weights가 주어집니다. 이때 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 return 하도록 solution 함수를 완성하세요.

// 제한 조건
// bridge_length는 1 이상 10,000 이하입니다.
// weight는 1 이상 10,000 이하입니다.
// truck_weights의 길이는 1 이상 10,000 이하입니다.
// 모든 트럭의 무게는 1 이상 weight 이하입니다.

function solution(bridge_length, weight, truck_weights) {
    const queue = []; // 현재 다리를 건너고 있는 트럭
    let time = 0; // 총 시간
    let currentWeight = 0; // 현재 다리 위의 트럭 무게

    // 트럭 인덱스
    let index = 0;

    while (index < truck_weights.length) {
        time++; // 매 초마다 시간 증가

        // 다리를 건너고 있는 트럭의 상태 업데이트
        if (queue.length === bridge_length) {
            currentWeight -= queue.shift(); // 다리를 다 건넌 트럭 제거
        }

        // 다음 트럭을 추가할 수 있는지 확인
        if (currentWeight + truck_weights[index] <= weight) {
            queue.push(truck_weights[index]); // 트럭 추가
            currentWeight += truck_weights[index]; // 현재 무게 업데이트
            index++; // 다음 트럭으로 이동
        } else {
            queue.push(0); // 대기 상태를 의미하는 0 추가 (다리 길이 유지)
        }
    }

    // 마지막 트럭이 다리를 건너는 시간 추가
    time += bridge_length; // 마지막 트럭이 다리를 건너는 데 필요한 시간

    return time;
}


// 복습
function solution(bridge_length, weight, truck_weights) {
    let time = 0;
    let totalWeight = 0;
    const queue = Array(bridge_length).fill(0);
    let index = 0;
    const n = truck_weights.length;

    while (index < n || totalWeight > 0) {
        time++;

        const popped = queue.shift();
        if (popped !== 0) {
            totalWeight -= popped;
        }

        if (index < n && totalWeight + truck_weights[index] <= weight) {
            queue.push(truck_weights[index]);
            totalWeight += truck_weights[index];
            index++;
        } else {
            queue.push(0);
        }
    }

    return time;
}

// 큐의 길이를 다리 길이만큼 만들어 놓았기에 조건에 따로 다리 길이에 관한 조건을 작성할 필요가 없음
// 다리에서 트럭이 계속 다니는동안 현재 다리 기준으로 측정되는 무게는 다리 위에 있는 트럭 무게의 합이다.
// 트럭이 다리에 타고, 내리는 동안 현재 다리의 무게를 계산해야 함
// 무게 조건에 해당되지 않으면 0을 push함