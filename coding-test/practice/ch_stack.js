function solution(s) {
    var answer = true;

    let arr = []

    for (elem of s) {
        if (elem === ")") {
            arr.push(elem)
            if (arr.length >= 2) {
                if (arr[arr.length - 1] === ')' && arr[arr.length - 2] === '(') {
                    arr.pop()
                    arr.pop()
                }
            }
        } else if (elem === '(') {
            arr.push(elem)
        }
    }

    if (arr.length > 0) {
        answer = false;
    }

    return answer;
}