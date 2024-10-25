// 주어진 배열에 대하여 앞 뒤로 n개씩 더한다고 할 때, 더한 값 중 최대값을 구하기

function maxSubArraySum(arr, n) {
    let tmpSum = 0;
    let maxSum = 0;

    if (n > arr.length) return null;

    for (let i = 0; i < n; i++) {
        maxSum += arr[i];
    }

    tmpSum = maxSum;

    for (let i = n; i < arr.length; i++) {
        tmpSum = tmpSum - arr[i - num] + arr[i];
        // if (tmpSum > maxSum) {
        //     maxSum = tmpSum;
        // }
        maxSum = Math.max(tmpSum, maxSum);
    }

    return maxSum;
}