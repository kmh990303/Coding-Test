function binarySearch(arr, n) {
    let answer = -1;
    let left = 0;
    let right = arr.length - 1;
    let middle;

    while (left <= right) {
        middle = Math.floor((left + right) / 2)

        if (arr[middle] === n) {
            answer = middle;
            return answer;
        } else if (arr[middle] > n) {
            right = middle - 1;
        } else if (arr[middle] < n) {
            left = middle + 1;
        }
    }
    return answer

}