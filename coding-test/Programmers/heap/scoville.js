// 문제 설명
// 매운 것을 좋아하는 Leo는 모든 음식의 스코빌 지수를 K 이상으로 만들고 싶습니다. 모든 음식의 스코빌 지수를 K 이상으로 만들기 위해 Leo는 스코빌 지수가 가장 낮은 두 개의 음식을 아래와 같이 특별한 방법으로 섞어 새로운 음식을 만듭니다.

// 섞은 음식의 스코빌 지수 = 가장 맵지 않은 음식의 스코빌 지수 + (두 번째로 맵지 않은 음식의 스코빌 지수 * 2)
// Leo는 모든 음식의 스코빌 지수가 K 이상이 될 때까지 반복하여 섞습니다.
// Leo가 가진 음식의 스코빌 지수를 담은 배열 scoville과 원하는 스코빌 지수 K가 주어질 때, 모든 음식의 스코빌 지수를 K 이상으로 만들기 위해 섞어야 하는 최소 횟수를 return 하도록 solution 함수를 작성해주세요.

// 제한 사항
// scoville의 길이는 2 이상 1,000,000 이하입니다.
// K는 0 이상 1,000,000,000 이하입니다.
// scoville의 원소는 각각 0 이상 1,000,000 이하입니다.
// 모든 음식의 스코빌 지수를 K 이상으로 만들 수 없는 경우에는 -1을 return 합니다.

function solution(scoville, K) {
    let cnt = 0;
    const minHeap = new MinHeap(scoville);

    while (minHeap.peek() < K) {
        if (minHeap.size() < 2) return -1;

        const first = minHeap.pop();
        const second = minHeap.pop();
        const newScoville = first + (second * 2);

        minHeap.push(newScoville);
        cnt += 1;
    }

    return cnt;
}

class MinHeap {
    constructor(arr) {
        this.heap = [];
        arr.forEach((val) => this.push(val));
    }
    push(val) {
        this.heap.push(val);
        this.bubbleUp();
    }
    bubbleUp() {
        let index = this.heap.length - 1;
        const last = this.heap[index];

        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.heap[parentIndex];

            if (last >= parent) break;

            this.heap[index] = parent;
            index = parentIndex;
        }

        this.heap[index] = last;
    }
    pop() {
        const min = this.heap[0];
        const last = this.heap.pop();

        if (this.heap.length > 0) {
            this.heap[0] = last;
            this.sinkDown(0);
        }

        return min;
    }
    sinkDown(index) {
        const length = this.heap.length;
        const element = this.heap[index];

        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIndex < length) {
                leftChild = this.heap[leftChildIndex];
                if (leftChild < element) swap = leftChildIndex;
            }

            if (rightChildIndex < length) {
                rightChild = this.heap[rightChildIndex];
                if (rightChild < (swap === null ? elem : leftChild)) {
                    swap = rightChildIndex;
                }
            }

            if (swap === null) {
                break;
            }

            this.heap[index] = this.heap[swap];
            index = swap;
        }

        this.heap[index] = element;
    }
    peek() {
        return this.heap[0];
    }
    size() {
        return this.heap.length;
    }
}