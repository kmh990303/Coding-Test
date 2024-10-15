// K 번째 수

function solution(array, commands) {
    const result = [];

    commands.forEach(([start, end, idx]) => {
        const slicedArr = array.slice(start - 1, end);
        slicedArr.sort((a, b) => a - b);
        result.push(slicedArr[idx - 1]);
    })

    return result;
}