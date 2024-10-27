// 문제 설명
// 하드디스크는 한 번에 하나의 작업만 수행할 수 있습니다. 디스크 컨트롤러를 구현하는 방법은 여러 가지가 있습니다. 가장 일반적인 방법은 요청이 들어온 순서대로 처리하는 것입니다.

// 예를들어

// - 0ms 시점에 3ms가 소요되는 A작업 요청
// - 1ms 시점에 9ms가 소요되는 B작업 요청
// - 2ms 시점에 6ms가 소요되는 C작업 요청
// 와 같은 요청이 들어왔습니다. 이를 그림으로 표현하면 아래와 같습니다.
// Screen Shot 2018-09-13 at 6.34.58 PM.png

// 한 번에 하나의 요청만을 수행할 수 있기 때문에 각각의 작업을 요청받은 순서대로 처리하면 다음과 같이 처리 됩니다.
// Screen Shot 2018-09-13 at 6.38.52 PM.png

// - A: 3ms 시점에 작업 완료 (요청에서 종료까지 : 3ms)
// - B: 1ms부터 대기하다가, 3ms 시점에 작업을 시작해서 12ms 시점에 작업 완료(요청에서 종료까지 : 11ms)
// - C: 2ms부터 대기하다가, 12ms 시점에 작업을 시작해서 18ms 시점에 작업 완료(요청에서 종료까지 : 16ms)
// 이 때 각 작업의 요청부터 종료까지 걸린 시간의 평균은 10ms(= (3 + 11 + 16) / 3)가 됩니다.

// 하지만 A → C → B 순서대로 처리하면
// Screen Shot 2018-09-13 at 6.41.42 PM.png

// - A: 3ms 시점에 작업 완료(요청에서 종료까지 : 3ms)
// - C: 2ms부터 대기하다가, 3ms 시점에 작업을 시작해서 9ms 시점에 작업 완료(요청에서 종료까지 : 7ms)
// - B: 1ms부터 대기하다가, 9ms 시점에 작업을 시작해서 18ms 시점에 작업 완료(요청에서 종료까지 : 17ms)
// 이렇게 A → C → B의 순서로 처리하면 각 작업의 요청부터 종료까지 걸린 시간의 평균은 9ms(= (3 + 7 + 17) / 3)가 됩니다.

// 각 작업에 대해 [작업이 요청되는 시점, 작업의 소요시간]을 담은 2차원 배열 jobs가 매개변수로 주어질 때, 작업의 요청부터 종료까지 걸린 시간의 평균을 가장 줄이는 방법으로 처리하면 평균이 얼마가 되는지 return 하도록 solution 함수를 작성해주세요. (단, 소수점 이하의 수는 버립니다)

// 제한 사항
// jobs의 길이는 1 이상 500 이하입니다.
// jobs의 각 행은 하나의 작업에 대한 [작업이 요청되는 시점, 작업의 소요시간] 입니다.
// 각 작업에 대해 작업이 요청되는 시간은 0 이상 1,000 이하입니다.
// 각 작업에 대해 작업의 소요시간은 1 이상 1,000 이하입니다.
// 하드디스크가 작업을 수행하고 있지 않을 때에는 먼저 요청이 들어온 작업부터 처리합니다.

function solution(jobs) {
    jobs.sort((a, b) => a[0] - b[0]);

    let heap = [];
    let currentTime = 0;
    let totalWaitTime = 0;
    let index = 0;
    let count = jobs.length;

    const addToHeap = (job) => {
        const [requestTime, jobTime] = job;
        heap.push(job);
        heap.sort((a, b) => a[1] - b[1]);
    }

    while (index < count || heap.length > 0) {
        while (index < count && jobs[index][0] <= currentTime) {
            addToHeap(jobs[index]);
            index++;
        }
        if (heap.length > 0) {
            const [requestTime, jobTime] = heap.shift();
            currentTime += jobTime;
            totalWaitTime += currentTime - requestTime; //안 걸쳐 있었던 시간을 뺌
        } else {
            currentTime = jobs[index][0];
        }
    }

    return Math.floor((totalWaitTime / count))
}


// 복습

function solution(jobs) { //작업을 힙에 넣을 때마다, 정렬이 필요하므로 힙 사용
    jobs.sort((a, b) => a[0] - b[0]);

    const heap = [];
    let time = 0;
    let i = 0;
    let totalTime = 0;

    while (i < jobs.length || heap.length > 0) {
        while (i < jobs.length && jobs[i][0] <= time) {
            heap.push(jobs[i++]);
            heap.sort((a, b) => a[1] - b[1]);
        }

        if (heap.length > 0) {
            const [requestT, jobT] = heap.shift();
            time += jobT;
            totalTime += time - requestT;
        } else {
            time = jobs[i][0];
        }
    }

    return Math.floor(totalTime / jobs.length);
}

// 주어진 시간 내에 요청된 작업들을 힙에 넣고, 작업이 빨리 끝나는 순으로 정렬
// 작업을 모두 힙에 담아야 인덱스가 범위를 초과함
// 작업을 모두 담지 않았거나 힙에 아직 작업이 남아있으면 반복문 계속 수행
// 힙은 비어있으나 작업을 모두 담지 않았다면 현재 인덱스가 가리키는 작업의 요청시간으로 스킵함