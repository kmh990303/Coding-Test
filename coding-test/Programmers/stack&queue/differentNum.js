function solution(arr) {
    const queue = [-1];

    arr.forEach((val) => {
        if (queue[queue.length - 1] !== val) queue.push(val);
    })
    queue.shift();
    return queue;
}