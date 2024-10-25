function solution(arr, divisor) {

    arr = arr.filter((val) => val % divisor === 0);

    if (arr.length === 0) {
        arr.push(-1);
    } else {
        arr.sort((a, b) => a - b);
    }

    return arr;
}