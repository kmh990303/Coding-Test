// 문제 설명
// n명이 입국심사를 위해 줄을 서서 기다리고 있습니다. 각 입국심사대에 있는 심사관마다 심사하는데 걸리는 시간은 다릅니다.

// 처음에 모든 심사대는 비어있습니다. 한 심사대에서는 동시에 한 명만 심사를 할 수 있습니다. 가장 앞에 서 있는 사람은 비어 있는 심사대로 가서 심사를 받을 수 있습니다. 하지만 더 빨리 끝나는 심사대가 있으면 기다렸다가 그곳으로 가서 심사를 받을 수도 있습니다.

// 모든 사람이 심사를 받는데 걸리는 시간을 최소로 하고 싶습니다.

// 입국심사를 기다리는 사람 수 n, 각 심사관이 한 명을 심사하는데 걸리는 시간이 담긴 배열 times가 매개변수로 주어질 때, 모든 사람이 심사를 받는데 걸리는 시간의 최솟값을 return 하도록 solution 함수를 작성해주세요.

// 제한사항
// 입국심사를 기다리는 사람은 1명 이상 1,000,000,000명 이하입니다.
// 각 심사관이 한 명을 심사하는데 걸리는 시간은 1분 이상 1,000,000,000분 이하입니다.
// 심사관은 1명 이상 100,000명 이하입니다.

function solution(n, times) {
    let left = 1;
    let right = Math.max(...times) * n;

    let answer = right;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2); //중간 시간 구하기
        let proceedPeople = 0;

        for (let time of times) {
            proceedPeople += Math.floor(mid / time);
            if (proceedPeople >= n) {
                break;
            }
        }

        if (proceedPeople >= n) {
            answer = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return answer;
}


// function solution (n, times) {
//     let answer = 0;
//     let left = 1;
//     let right = Math.max(...times) * n; // 시간의 범위로 탐색
    
//     while (left <= right) {
//         let mid = Math.floor ((left + right) / 2);
//         let proceedP = 0;
        
//         for (let time of times) {
//             proceedP += Math.floor(mid / time);
//             if (proceedP >= n) break;
//         }
        
//         if (proceedP >= n) {
//             answer = mid;
//             right = mid - 1;
//         } else {
//             left = mid + 1;
//         }
//     }
    
//     return answer;
// } 복습

function solution (n, times) {
    let answer = 0;
    
    let left = 0;
    let right = Math.max(...times) * n;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let proceedP = 0;
        
        for (let time of times) {
            proceedP += Math.floor(mid / time);
            if (proceedP >= n) break;
        }
        
        if (proceedP >= n) {
            answer = mid;
            right = mid - 1;
        }
        
        if (proceedP < n) {
            left = mid + 1;
        }
    }
    
    return answer;
}